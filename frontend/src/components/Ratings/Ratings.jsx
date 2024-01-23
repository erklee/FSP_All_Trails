import "./Ratings.css";
import { useState } from "react";

// const Ratings = ({ initialRating }) => {
//   const [rating, setRating] = useState(initialRating);

//   const handleStarClick = (newRating) => {
//     setRating(newRating);
//   };

//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           className={i < rating ? "star filled" : "star"}
//           onClick={() => handleStarClick(i + 1)}
//         >
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };

//   return <div className="star-root">{renderStars()}</div>;
// };

// export default Ratings;


const Ratings = ({ initialRating = 0 }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(initialRating);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleStarMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleStarMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className='star-root'>
      <div className="rate">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={i < (hoveredRating || selectedRating) ? 'filled' : ''}
            onClick={() => handleStarClick(i + 1)}
            onMouseEnter={() => handleStarMouseEnter(i + 1)}
            onMouseLeave={handleStarMouseLeave}
          >
            ★
          </i>
        ))}
      </div>
    </div>
  );
};

export default Ratings;