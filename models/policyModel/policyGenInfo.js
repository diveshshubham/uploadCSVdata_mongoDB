// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const policyGeneralInfoSchema = new Schema({
    'policyNumber': {
        type: String,
        required: true
    },
    'policyStartDate': {
        type: Date,
        required: true
    },
    'policyEndDate': {
        type: Date,
        required: true
    },
    'policyCatId': {
        type: Schema.ObjectId,
        ref: 'policyCatModel',
        required: true
    },
    'companyId': {
        type: Schema.ObjectId,
        ref: 'policyCarrierModel',
        required: true
    },
    'userId': {
        type: Schema.ObjectId,
        ref: 'userModel',
        required: true
    },
    'updatedAt': {
        type: Date,
        default: Date.now
    },
    'createdAt': {
        type: Date,
        default: Date.now
    },
});

const policyGeneralInfoModel = db.mongoose.model('policyGeneralInfoModel', policyGeneralInfoSchema, 'policyInfo');
module.exports = policyGeneralInfoModel;