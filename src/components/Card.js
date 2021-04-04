import React from "react";

function Card(props) {
    return (
        <>
            <li key={props.card._id} className="card">
                <button className="card__delete-button" aria-label="delete-card" type="button"></button>
                <div className="card__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={() => { props.onCardClick(props.card) }}></div>
                <div className="card__text">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__like-button" aria-label="like-card"  type="button"></button>
                        <p className="card__like-counter">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Card;