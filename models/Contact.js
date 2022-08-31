const moment = require('moment')

module.exports = function(sequelize, DataTypes){
    const Contact = sequelize.define('Contact', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        user:{type: DataTypes.STRING},
        number:{type: DataTypes.INTEGER},
        gender:{type:DataTypes.STRING}
    })

    Contact.prototype.dateFormat = (date) => moment(date).format('YYYY년 MM월 DD일')
    
    return Contact
}