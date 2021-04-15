import React from 'react';

function PopupWithForm(props) {
    const isOpenClass = props.isOpen ? "modal_opened" : "";
    const submitInactiveClass = props.isSubmitActive ? "" : "form__submit-button_inactive";

    return (
        <>
            <section className={`modal modal_type_${props.name} ${isOpenClass}`}>
                <div className={`modal__container modal__${props.name}`}>
                    <h3 className="modal__header">{props.title}</h3>
                    <form className="form" action="#" noValidate onSubmit={props.onSubmit}>
                        {props.children}
                        <button className={`form__submit-button ${submitInactiveClass}`} type="submit">
                            {props.submitText}
                        </button>
                    </form>
                    <button className="modal__reset-button" type="reset" onClick={props.onClose}></button>
                </div>
            </section>
        </>
    );
}

export default PopupWithForm;