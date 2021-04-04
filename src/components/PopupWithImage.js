import React from 'react';

function PopupWithImage(props) {
    return (
        <>
            <div className={"modal modal_type_image" + (props.card ? " modal_opened" : "")}>
                <figure className="modal__container modal__open-image">
                    <button className="modal__reset-button" type="reset" aria-label="Close button" onClick={props.onClose}></button>
                    <img className="modal__image" src={props.card ? props.card.link : "#"} alt={props.card ? props.card.name : ""} />
                    <figcaption className="modal__image-caption">{props.card ? props.card.name : ""}</figcaption>
                </figure>
            </div>
        </>
    );
}

export default PopupWithImage;