const { Router } = require('express');
const router = Router();
const ctrl = require('./contact.ctrl');

router.get('/userlist', ctrl.get_userlist);

router.get('/userlist/write', ctrl.get_userlist_write);

router.post('/userlist/write', ctrl.post_userlist_write);

router.get('/userlist/detail/:id', ctrl.get_userlist_detail);

router.get('/userlist/edit/:id', ctrl.get_userlist_edit );

router.post('/userlist/edit/:id', ctrl.post_userlist_edit);

router.get('/userlist/delete/:id', ctrl.get_userlist_delete)

module.exports = router;