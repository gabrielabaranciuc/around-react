import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState("");
    const [titleErrorMessage, setTitleErrorMessage] = React.useState(null);

    const [link, setLink] = React.useState("");
    const [linkErrorMessage, setLinkErrorMessage] = React.useState(null);


    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function validateTitle(e) {
        if (!e.target.validity.valid) {
            setTitleErrorMessage(e.target.validationMessage);
        } else {
            setTitleErrorMessage(null);
        }
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function validateLink(e) {
        if (!e.target.validity.valid) {
            setLinkErrorMessage(e.target.validationMessage);
        } else {
            setLinkErrorMessage(null);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({ title, link });
        setLink("");
        setTitle("");
    }

    const showTitleError = titleErrorMessage ? "form__input-error_visible" : "";
    const showLinkError = linkErrorMessage ? "form__input-error_visible" : "";
    const isSubmitActive = !showTitleError && !showLinkError;

    return (
        <PopupWithForm name="add-card" title="New place" isOpen={props.isOpen} isSubmitActive={isSubmitActive}
            onClose={props.onClose} onSubmit={handleSubmit} submitText={props.submitText}>
            <input id="name-input" type="text" name="title" placeholder="Title"
                className="form__input form__input_type_card-title" minLength="1" maxLength="30"
                value={title} onChange={handleTitleChange} onInput={validateTitle} required />
            <span id="name-input-error" className={`form__input-error ${showTitleError}`}>{titleErrorMessage}</span>
            <input id="link-input" type="url" name="link"
                className="form__input form__input_type_url" placeholder="Image Link" value={link}
                onChange={handleLinkChange} onInput={validateLink} required />
            <span id="link-input-error" className={`form__input-error ${showLinkError}`}>{linkErrorMessage}</span>
        </PopupWithForm>
    );
}
export default AddPlacePopup;