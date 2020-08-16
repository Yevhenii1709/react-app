import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <form className="buttom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secodary"
                onClick = {()=> onAdd('Hello')}>
            Добавить</button>
        </form>
    )
}

export default PostAddForm;