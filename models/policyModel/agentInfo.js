// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const agentInfoSchema = new Schema({
    'agentName': {
        type: String,
        //required:true
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

const agentInfoModel = db.mongoose.model('agentInfoModel', agentInfoSchema, 'agent');
module.exports = agentInfoModel;