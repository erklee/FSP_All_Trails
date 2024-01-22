import './Ratings.css';

const Ratings = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < rating ? 'star filled' : 'star'}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <>
        <span className='star-root'>
        {/* <label for="rating">Rating</label>
            <input type="radio" name="rating" value="1" checked />
            <input type="radio" name="rating" value="2" />
            <input type="radio" name="rating" value="3" />
            <input type="radio" name="rating" value="4" />
            <input type="radio" name="rating" value="5" /> */}

        </span>
        <div className="star-rating">{renderStars()}</div>;
    </>
  )
};

export default Ratings;