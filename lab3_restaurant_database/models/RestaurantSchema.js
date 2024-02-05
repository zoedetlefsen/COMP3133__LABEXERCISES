const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        lowercase: true,
         enum: [
            "american", "italian", "french", "chinese", "japanese", "indian", 
            "thai", "mexican", "spanish", "mediterranean", "korean", "vietnamese", 
            "greek", "german", "turkish", "caribbean", "african", "russian", 
            "brazilian", "bakery", "delicatessen", "vegetarian", "vegan", "other"],
    required: true
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
