import React from 'react';

function PopupWithImage(props) {
    return (
        <>
            <div className="modal modal_type_image">
                <figure className="modal__container modal__open-image">
                    <button className="modal__reset-button" type="reset" aria-label="Close button" onClick={props.onClose}></button>
                    <img className="modal__image" src="#" alt="card" />
                    <figcaption className="modal__image-caption"></figcaption>
                </figure>
            </div>
        </>
    );
}

export default PopupWithImage;