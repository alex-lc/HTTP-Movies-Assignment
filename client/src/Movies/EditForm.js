import React from 'react';
import { useParams } from 'react-router-dom';

function EditForm(props) {

    const { id } = useParams();

    return (
        <>
            <p>hello from edit form</p>
        </>
    )
}

export default EditForm;