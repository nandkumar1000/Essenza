
const Review = require('../models/Review');

exports.getReviewsByProduct = async (req, res, next) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

exports.addReview = async (req, res, next) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};