import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__image-container">
                        <img className="profile__avatar" src={currentUser.avatar} alt="profile avatar" />
                        <button className="profile__button profile__button_edit-avatar profile__button_hoverable"
                            aria-label="edit-avatar" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__text">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <p className="profile__title">{currentUser.about}</p>
                        </div>
                        <button className="button profile__edit-button" aria-label="edit button" onClick={props.onEditProfile}></button>
                    </div>
                </div>
                <button className="button profile__add-button" aria-label="add button" onClick={props.onAddPlace}></button>
            </section>

            <section className="cards">
                <ul className="cards__list">
                    {props.cards.map((card, index) => (
                        <Card key={index}
                            card={card}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Main;