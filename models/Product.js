const {Schema, model} = require('mongoose');


const productSchema = new Schema({
    title: {
        type: String,
        required:"Product title required"
    },
    description: {
        type: String,
        required:"Product description required"
    },
    price: {
        type: Number,
        required: "Product must have a price"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
});
productSchema.pre('save', function(){
    return `$${this.price}`
})
const Product = model("Product", productSchema);
module.exports = Product;