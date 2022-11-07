// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const policyCategorySchema = new Schema({
    'categoryName': {
        type: String
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

const policyCatModel = db.mongoose.model('policyCatModel', policyCategorySchema, 'policyCategory');
module.exports = policyCatModel;