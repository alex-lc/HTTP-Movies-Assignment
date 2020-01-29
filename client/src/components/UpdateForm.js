import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function UpdateForm() {

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/movies/${id}`)
                .then((res) => {
                    console.log(res);
                    setMovie(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [id]);

    const [movie, setMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    const handleChange = (e) => {
        if (e.target.name === 'stars') {
            setMovie({
                ...movie,
                stars: [...e.target.value.split(",")]
            })
        }
        else {
            setMovie({
                ...movie,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        history.push(`/`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    onChange={handleChange}
                    value={movie.title}
                />
                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange={handleChange}
                    value={movie.director}
                />
                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={handleChange}
                    value={movie.metascore}
                />
                <input
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    onChange={handleChange}
                    value={movie.stars}
                />
                <button type="submit">Finish Editing</button>
            </form>
        </div>
    )
}

export default UpdateForm;