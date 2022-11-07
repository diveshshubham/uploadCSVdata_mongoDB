// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const policyCarrierSchema = new Schema({
    'companyName': {
        type: String
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

const policyCarrierModel = db.mongoose.model('policyCarrierModel', policyCarrierSchema, 'policyCarrier');
module.exports = policyCarrierModel;