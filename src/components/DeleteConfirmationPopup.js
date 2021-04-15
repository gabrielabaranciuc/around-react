import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function DeleteConfirmationPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onConfirmation(props.confirmedObject);
    }

    return (
        <PopupWithForm name="delete-card" title="Are you sure?" isOpen={props.isOpen} isSubmitActive={true}
            onClose={props.onClose} onSubmit={handleSubmit} submitText={props.submitText} />
    );
}

export default DeleteConfirmationPopup;