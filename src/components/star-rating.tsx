import React from "react";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const blocks = [1, 2, 3, 4, 5];
  return (
    <span>
      {blocks.map((item, index) => (
        <span
          className={`fa fa-star ${
            rating >= item ? "text-success" : "text-muted"
          }`}
        ></span>
      ))}
    </span>
  );
};

export default StarRating;
