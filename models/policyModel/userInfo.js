// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const userSchema = new Schema({
    'userName': {
        type: String,
        required: true
    },
    'DOB': {
        type: Date,
        required: true
    },
    'address': {
        type: String,
        //required: true
    },
    'phoneNo': {
        type: String,
        required: true
    },
    'state': {
        type: String,
        //required: true
    },
    'zipCode': {
        type: String,
       // required: true
    },
    'email': {
        type: String,
        required: true
    },
    'gender': {
        type: String,
        
    },
    'userType': {
        type: String,
        required: true
    },
    'createdAt': {
        type: Date,
    }, 
    'updatedAt': {
        type: Date,
    },
});

const userModel = db.mongoose.model('userModel', userSchema, 'user');
module.exports = userModel;