import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__image-container">
                        <img className="profile__avatar" src="#" alt="profile avatar" />
                        <button className="profile__button profile__button_edit-avatar profile__button_hoverable"
                            aria-label="edit-avatar" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__text">
                            <h1 className="profile__name">Gabriela</h1>
                            <p className="profile__title">Student</p>
                        </div>
                        <button className="button profile__edit-button" aria-label="edit" type="button"></button>
                    </div>
                </div>
                <button className="button profile__add-button" aria-label="add" type="button"></button>
            </section>
            <section className="cards">
                <ul className="cards__list">{/* template cards */}</ul>
            </section>
            {/* edit profile */}
            <div id="modal-edit" className="modal modal_type_edit-profile">
                <div className="modal__container">
                    <h3 className="modal__header">Edit profile</h3>
                    <form action="#" method="post" name="editForm" className="form" noValidate>
                        <input id="nameInput" type="text" name="name" placeholder="Name"
                            className="form__input form__input_type_name" value="Jacques Cousteau" minLength="2" maxLength="40"
                            required />
                        <span id="nameInput-error" className="form__input-error"></span>
                        <input id="titleInput" type="text" name="job" placeholder="About me"
                            className="form__input form__input_type_title" value="Explorer" minLength="2" maxLength="200" required />
                        <span id="titleInput-error" className="form__input-error"></span>
                        <button className="form__submit-button" type="submit" data-text="Save">Save</button>
                    </form>
                    <button className="modal__reset-button" type="reset" aria-label="Close button"></button>
                </div>
            </div>
            {/* add new cards */}
            <div id="modal-add" className="modal modal_type_add-card">
                <div className="modal__container">
                    <h3 className="modal__header">New place</h3>
                    <form action="#" method="post" name="addForm" className="form" noValidate>
                        <input id="name-input" type="text" name="title" placeholder="Title"
                            className="form__input form__input_type_card-title" minLength="1" maxLength="30" required />
                        <span id="name-input-error" className="form__input-error"></span>
                        <input id="link-input" type="url" name="link" placeholder="Image link"
                            className="form__input form__input_type_url" required />
                        <span id="link-input-error" className="form__input-error"></span>
                        <button className="form__submit-button form__submit-button_inactive" type="submit"
                            data-text="Create">Create</button>
                    </form>
                    <button className="modal__reset-button" type="reset" aria-label="Close button"></button>
                </div>
            </div>
            {/* modal open image */}
            <div id="modal-image" className="modal modal_type_image">
                <figure className="modal__container modal__open-image">
                    <button className="modal__reset-button" type="reset" aria-label="Close button"></button>
                    <img className="modal__image" src="#" alt="card" />
                    <figcaption className="modal__image-caption"></figcaption>
                </figure>
            </div>
            {/* modal delete card */}
            <div className="modal modal_type_delete-card">
                <div className="modal__container modal__delete-card">
                    <form className="form" action="#" name="delete-card" noValidate>
                        <h2 className="form__title">Are you sure?</h2>
                        <button className="form__submit-button" type="submit" data-text="Yes">Yes</button>
                    </form>
                    <button className="modal__reset-button" type="reset" aria-label="Close button"></button>
                </div>
            </div>
            {/* modal change avatar */}
            <div id="modal-avatar" className="modal modal_type_change-avatar">
                <div className="modal__container modal__change-avatar">
                    <h3 className="modal__header">Change profile picture</h3>
                    <form action="#" method="PATCH" name="editAvatarForm" className="form" noValidate>
                        <input id="avatar-input" type="url" name="imageLink" placeholder="Profile image link"
                            className="form__input form__input_type_url" value="" required />
                        <span id="avatar-input-error" className="form__input-error"></span>
                        <button className="form__submit-button form__submit-button_inactive" type="submit" value="Save"
                            data-text="Save">Save</button>
                    </form>
                    <button className="modal__reset-button" type="reset" aria-label="Close button"></button>
                </div>
            </div>
            {/* template cards */}
            <template className="card-template">
                <li className="card">
                    <button className="card__delete-button" aria-label="delete-card" type="button"></button>
                    <div className="card__image"></div>
                    <div className="card__text">
                        <h2 className="card__title">Card Title</h2>
                        <div className="card__like-container">
                            <button className="card__like-button" aria-label="like-card" type="button"></button>
                            <p className="card__like-counter"></p>
                        </div>
                    </div>
                </li>
            </template>
        </main>
    );
}

export default Main;