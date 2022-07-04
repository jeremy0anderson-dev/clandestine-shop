const {Schema, model}=require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: "Name required"
    }
});
const Category = model('Category', categorySchema);
module.exports = Category;