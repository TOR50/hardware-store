const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  warranty: { type: Number, required: true },
  origin: { type: String, required: true },
  fav: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);