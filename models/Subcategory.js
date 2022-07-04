const {Schema, model} = require('mongoose');

const subcategorySchema = new Schema({
    name: {
        type: String,
        required: "Subcategory name required"
    }
});