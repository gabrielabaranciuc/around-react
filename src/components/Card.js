import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn =  currentUser && (props.card.owner._id === currentUser._id);
    const cardDeleteButtonClassName = `card__delete-button ${isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"}`;
  
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = `card__like-button ${isLiked ? "card__like-button_active" : ""}`;
    const likesNumber = props.card.likes.length;

    function handleCardClick() {
        props.onCardClick(props.card);	        
      }
    
      function handleLikeClick(e) {
          e.stopPropagation();
          e.preventDefault();
          props.onCardLike(props.card);
      }
    
      function handleCardDelete(e) {
          e.stopPropagation();
          e.preventDefault();
          props.onCardDelete(props.card);
      }

    return (
        <>
            <li key={props.card._id} className="card">
                <button className={cardDeleteButtonClassName} aria-label="delete-card" type="button" onClick={handleCardDelete}></button>
                <div className="card__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleCardClick}></div>
                <div className="card__text">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like-container">
                        <button className={cardLikeButtonClassName} aria-label="like-card" type="button" onClick={handleLikeClick}></button>
                        <p className="card__like-counter">{likesNumber}</p>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Card;