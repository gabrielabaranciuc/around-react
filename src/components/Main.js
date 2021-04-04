import React from "react";
import api from "../utils/Api.js";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userName, userDescription, userAvatar]);

    React.useEffect(() => {
        api
            .getInitialCards()
            .then((data) => {
                setCards((cards) => [...cards, ...data]);
            })

            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__image-container">
                        <img className="profile__avatar" src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }} alt="profile avatar" />
                        <button className="profile__button profile__button_edit-avatar profile__button_hoverable"
                            aria-label="edit-avatar" type="button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__text">
                            <h1 className="profile__name">{userName}</h1>
                            <p className="profile__title">{userDescription}</p>
                        </div>
                        <button className="button profile__edit-button" aria-label="edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                </div>
                <button className="button profile__add-button" aria-label="add" type="button" onClick={props.onAddPlace}></button>
            </section>

            {/* edit profile */}
            <PopupWithForm name="edit-profile" title="Edit profile" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose}>
                <input id="nameInput" type="text" name="name" placeholder="Name"
                    className="form__input form__input_type_name" minLength="2" maxLength="40"
                    required />
                <span id="nameInput-error" className="form__input-error"></span>
                <input id="titleInput" type="text" name="job" placeholder="About me"
                    className="form__input form__input_type_title" minLength="2" maxLength="200" required />
                <span id="titleInput-error" className="form__input-error"></span>
                <button className="form__submit-button" type="submit" data-text="Save" value="Save">Save</button>
            </PopupWithForm>

            {/* add new cards */}
            <PopupWithForm name="add-card" title="New place" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}>
                <input id="name-input" type="text" name="title" placeholder="Title"
                    className="form__input form__input_type_card-title" minLength="1" maxLength="30" required />
                <span id="name-input-error" className="form__input-error"></span>
                <input id="link-input" type="url" name="link" placeholder="Image link"
                    className="form__input form__input_type_url" required />
                <span id="link-input-error" className="form__input-error"></span>
                <button className="form__submit-button form__submit-button_inactive" type="submit"
                    data-text="Create" value="Create">Create</button>
            </PopupWithForm>

            {/* modal open image */}
            <ImagePopup
                onClose={props.onClose}
                card={props.selectedCard}
            />

            {/* modal delete card */}
            <PopupWithForm name="delete-card" title="Are you sure?" isOpen={false} onClose={props.onClose}>
                <button className="form__submit-button" type="submit" data-text="Yes" >Yes</button>
            </PopupWithForm>

            {/* modal change avatar */}
            <PopupWithForm name="change-avatar" title="Change profile picture" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}>
                <input id="avatar-input" type="url" name="imageLink" placeholder="Profile image link"
                    className="form__input form__input_type_url" required />
                <span id="avatar-input-error" className="form__input-error"></span>
                <button className="form__submit-button form__submit-button_inactive" type="submit" value="Save"
                    data-text="Save">Save</button>
            </PopupWithForm>
            
            {/* Template initial cards */}
            <section className="cards">
                <ul className="cards__list">

                    {cards.map((card) => (
                        <Card key={card._id}
                            card={card}
                            onCardClick={props.onCardClick} />
                    ))}

                </ul>
            </section>
        </>
    );
}

export default Main;