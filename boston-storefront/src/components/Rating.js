import React from "react";

function Rating({ rating, color = "#FFD700", numOfReviews, totalStars = 5 }) {
  const stars = [];
  for (let countStar = 0; countStar < totalStars; countStar++) {
    stars.push(
      <i
        key={countStar}
        style={{ color }}
        className={
          rating >= countStar + 1
            ? "fas fa-star"
            : rating >= countStar + 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    );
  }

  return (
    <div className="rating">
      <span>{stars}</span>
      {numOfReviews && (
        <span className="rating-text">{numOfReviews} ratings</span>
      )}
    </div>
  );
}

export default Rating;
