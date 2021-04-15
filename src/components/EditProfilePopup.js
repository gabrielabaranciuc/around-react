import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [nameErrorMessage, setNameErrorMessage] = React.useState(null);

    const [description, setDescription] = React.useState("");
    const [descriptionErrorMessage, setDescriptionErrorMessage] = React.useState("");

    React.useEffect(() => {
        setName(currentUser && currentUser.name);
        setDescription(currentUser && currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function validateName(e) {
        if (!e.target.validity.valid) {
            setNameErrorMessage(e.target.validationMessage);
        } else {
            setNameErrorMessage(null);
        }
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function validateDescription(e) {
        if (!e.target.validity.valid) {
            setDescriptionErrorMessage(e.target.validationMessage);
        } else {
            setDescriptionErrorMessage(null);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    const showNameError = nameErrorMessage ? "form__input-error_visible" : "";
    const showDescriptionError = descriptionErrorMessage ? "form__input-error_visible" : "";
    const isSubmitActive = !showNameError && !showDescriptionError;

    return (
        <PopupWithForm name="edit-profile" title="Edit profile" isOpen={props.isOpen} 
        onClose={props.onClose} onSubmit={handleSubmit} isSubmitActive={isSubmitActive} submitText={props.submitText}>
            <input id="nameInput" type="text" name="name" placeholder="Name"
                className="form__input form__input_type_name" minLength="2" maxLength="40"
                value={name || ""} onChange={handleNameChange} onInput={validateName} required />
            <span id="nameInput-error" className={`form__input-error ${showNameError}`}>{nameErrorMessage}</span>
            <input id="titleInput" type="text" name="aboutme" placeholder="About me"
                className="form__input form__input_type_title" minLength="2" maxLength="200" value={description || ""}
                onChange={handleDescriptionChange} onInput={validateDescription} required/>
            <span id="titleInput-error" className={`form__input-error ${showDescriptionError}`}>{descriptionErrorMessage}</span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;