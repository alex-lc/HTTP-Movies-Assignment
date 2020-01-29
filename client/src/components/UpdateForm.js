import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateForm(props) {

    const { movie } = props;
    const [editedMovie, setEditedMovie] = useState(movie);
    const [editedMovieStars, setEditedMovieStars] = useState(movie.stars);
    const [editing, setEditing] = useState(true);

    const handleChange = (e) => {
        if (e.target.name === 'stars') {
            setEditedMovie({
                ...editedMovie,
                stars: [...e.target.value.split(",")]
            })
        }
        else {
            setEditedMovie({
                ...editedMovie,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, editedMovie)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        setEditing(false);
    }

    return (
        <div>
            {editing &&
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        onChange={handleChange}
                        value={editedMovie.title}
                    />
                    <input
                        type='text'
                        name='director'
                        placeholder='Director'
                        onChange={handleChange}
                        value={editedMovie.director}
                    />
                    <input
                        type='text'
                        name='metascore'
                        placeholder='Metascore'
                        onChange={handleChange}
                        value={editedMovie.metascore}
                    />
                    <input
                        type='text'
                        name='stars'
                        placeholder='Stars'
                        onChange={handleChange}
                        value={editedMovie.stars}
                    />
                    <button>Finish Editing</button>
                </form>
            }
        </div>
    )
}

export default UpdateForm;