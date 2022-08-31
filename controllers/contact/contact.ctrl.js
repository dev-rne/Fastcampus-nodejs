const models = require('../../models');

exports.get_userlist = (req, res) => {
    models.Contact.findAll().then((users) => {
        res.render('contact/userlist.html', {users})
    })
}

exports.get_userlist_write = (req, res) => {
    res.render('contact/write.html')
}

exports.post_userlist_write = (req, res) => {
    models.Contact.create({
        user: req.body.user,
        number: req.body.number,
        gender: req.body.gender
    }).then(() => {
        res.redirect('/contact/userlist')
    })
}

exports.get_userlist_detail = (req, res) => {
   models.Contact.findByPk(req.params.id).then((user) => {
    res.render('contact/detail.html', {user})
   })
}

exports.get_userlist_edit = (req, res) => {
  models.Contact.findByPk(req.params.id).then((user) => {
    res.render('contact/write.html', {user})
  })
}

exports.post_userlist_edit = (req, res) => {
    models.Contact.update({
        user: req.body.user,
        number: req.body.number,
        gender: req.body.gender
    },{where: {id: req.params.id}}).then(() => {
        res.redirect('/contact/userlist/detail/' + req.params.id)
    })
}

exports.get_userlist_delete = (req, res) => {
    models.Contact.destroy({
        where:{
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/contact/userlist')
    })
}