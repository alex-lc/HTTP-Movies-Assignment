import React, { useState } from 'react';

// components
import EditMovie from '../components/EditMovie';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  const [edit, setEdit] = useState(false);

  const toggleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  }

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <button onClick={toggleEdit}>Edit Movie</button>
      {edit && <EditMovie movie={props.movie} />}
    </div>
  );
};

export default MovieCard;
