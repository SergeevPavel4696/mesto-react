function PopupWithForm({popupType, height, popupTitle, children, buttonType, disabled,
                           formButtonText, isOpen, onClose, onSubmit}) {
    return (
        <div className={`popup popup_${popupType} ${isOpen && "popup_opened"}`}>
            <div className={`popup__content popup__content_height_${height}-fields`}>
                <form className="form"
                      name={`form-${popupType}`}
                      id={`form-${popupType}`}
                      onSubmit={onSubmit}
                >
                    <h3 className="form__title">
                        {popupTitle}
                    </h3>
                    {children}
                    <button className={`form__save ${disabled && "form__save_active"}`}
                            type={buttonType}
                            form={`form-${popupType}`}
                            disabled={!disabled}
                    >
                        {formButtonText}
                    </button>
                </form>
                <button className="popup__close"
                        type="button"
                        onClick={onClose}
                />
            </div>
        </div>
    );
}

export default PopupWithForm;
