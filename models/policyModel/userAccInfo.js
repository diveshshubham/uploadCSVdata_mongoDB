// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const userAccSchema = new Schema({
    'userAccountName': {
        type: String,
        required:true
    },
    'userId':{
        type: Schema.ObjectId,
        ref: 'userModel',
        required: true
    },
    'createdAt': {
        type: Date,
        default: Date.now
    },
    'updatedAt': {
        type: Date,
        default: Date.now
    },
});

const userAccountModel = db.mongoose.model('userAccountModel', userAccSchema, 'userAccount');
module.exports = userAccountModel;