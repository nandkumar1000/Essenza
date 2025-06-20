
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  username: String,
  comment: String,
  rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);