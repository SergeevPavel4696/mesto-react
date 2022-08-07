function PopupWithForm({popupType, height, popupTitle, children, buttonType, disabled, formButtonText, isOpen, onClose}) {
    return (
        <div className={`popup popup_${popupType} ${isOpen && "popup_opened"}`}>
            <div className={`popup__content popup__content_height_${height}-fields`}>
                <form className="form" name={`form-${popupType}`} id={`form-${popupType}`}>
                    <h3 className="form__title">
                        {popupTitle}
                    </h3>
                    {children}
                    <button type={buttonType} form={`form-${popupType}`} className='form__save' disabled={disabled}>
                        {formButtonText}
                    </button>
                </form>
                <button type="button" className="popup__close" onClick={onClose}/>
            </div>
        </div>
    );
}

export default PopupWithForm;
