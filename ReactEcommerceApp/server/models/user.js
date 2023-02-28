const mongoose = require('mongoose');

// ObejectID
const {ObjectId} = mongoose.Schema;

// Create a schema
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            index: true         // primary key
        },
        role: {
            type: String,
            default: 'subscriber'
        },
        cart: {
            type: Array,
            default: []
        },
        address: String,
        //@todo wishlist: [{type: ObjectId, ref: 'Product'}]   // ref: foreign key
    },
    
    {
        timestamps: true    // default created timestamp
    }                        
);

// export user model
module.exports = mongoose.model('User', userSchema);

