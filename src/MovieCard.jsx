import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      <div className="year">{Year}</div>
      <div className="image-container">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>
      <div className="info">
        <span className="type">{Type}</span>
        <h3 className="movie-title">{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
