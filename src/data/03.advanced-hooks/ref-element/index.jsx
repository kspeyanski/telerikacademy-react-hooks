import React from 'react';

const RefElement = () => {
    const form = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you want to submit")) {
            form.current.submit();
        }
    }

    return (
        <form ref={form} onSubmit={handleSubmit} method="GET" action="/03.advanced-hooks/ref/element">
            <fieldset>
                <legend>Form</legend>
                <input placeholder="name" />
                <input placeholder="email" type="email" />
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}

export default RefElement;