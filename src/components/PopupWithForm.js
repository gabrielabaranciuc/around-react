import React from 'react';

function PopupWithForm(props) {
    return (
        <>
            <section className={`modal modal_type_${props.name} ${props.isOpen ? "modal_opened" : ""}`}>
                <div className="modal__container">
                    <h3 className="modal__header">{props.title}</h3>
                    <form className="form" name={`form__${props.name}`} action="#" noValidate>
                        {props.children}
                    </form>
                    <button className="modal__reset-button" type="reset" aria-label="Close button" onClick={props.onClose}></button>
                </div>
            </section>
        </>
    );
}

export default PopupWithForm;