import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarLinkRef = React.useRef("");
  const [errorMessage, setErrorMessage] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarLinkRef.current.value
    });
  }

  function validateLink(e) {
    if (!e.target.validity.valid) {
      setErrorMessage(e.target.validationMessage);
    } else {
      setErrorMessage(null);
    }
  }

  const showError = errorMessage ? "form__input-error_visible" : "";
  const isSubmitActive = !showError;


  return (
    <PopupWithForm
      name="change-avatar"
      title="Change profile picture"
      isSubmitActive={isSubmitActive}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      submitText={props.submitText}
    >
      <input
        type="url"
        className="form__input form__input_type_url"
        id="avatar-input"
        name="avatarLink"
        placeholder="Profile image link"
        minLength="2"
        onInput={validateLink}
        ref={avatarLinkRef}
        required
      />
      <span id="avatar-input-error" className={`form__input-error ${showError}`}>{errorMessage}</span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;