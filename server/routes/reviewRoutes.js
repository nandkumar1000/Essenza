
const express = require('express');
const router = express.Router();
const { getReviewsByProduct, addReview } = require('../controllers/reviewController');

router.get('/:productId', getReviewsByProduct);
router.post('/', addReview);

module.exports = router;