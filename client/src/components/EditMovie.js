import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    label {
        display: block;
    }

    input {
        display: block;
    }
`;

function EditMovie(props) {

    const [movie, setMovie] = useState(props.movie);

    return (
        <Form>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={movie.title}
            />

            <label htmlFor="director">Director:</label>
            <input
                type="text"
                id="director"
                name="director"
                value={movie.director}
            />

            <label htmlFor="metascore">Metascore:</label>
            <input
                type="text"
                id="metascore"
                name="metascore"
                value={movie.metascore}
            />
        </Form>
    )
}

export default EditMovie;