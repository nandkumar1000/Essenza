import { useState } from 'react';

export default function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.trim()) return;
    onSubmit(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Write your review..."
        rows={4}
      />
      <button type="submit" className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Submit Review
      </button>
    </form>
  );
}
