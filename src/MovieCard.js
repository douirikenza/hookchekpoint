// MovieCard.js
import React from 'react';

const MovieCard = ({ title, description, rating, posterURL }) => {
  return (
    <div className="card">
      <img src={posterURL} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Rating: {rating}</small></p>
      </div>
    </div>
  );
}

export default MovieCard;