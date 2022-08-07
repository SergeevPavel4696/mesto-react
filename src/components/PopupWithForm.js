function PopupWithForm({popupType, height, popupTitle, fields, buttonType, disabled, formButtonText, isOpen, onClose}) {
    return (
        <div className={`popup popup_${popupType} ${isOpen && "popup_opened"}`}>
            <div className={`popup__content popup__content_height_${height}-fields`}>
                <form className="form" name={`form-${popupType}`} id={`form-${popupType}`} noValidate>
                    <h3 className="form__title">
                        {popupTitle}
                    </h3>
                    {
                        fields.map((field, i) => (
                            <label className="form__field-label" key={i}>
                                <input type={field.type} name={field.name} id={field.id} placeholder={field.placeholder}
                                       minLength={field.minLength} maxLength={field.maxLength} required
                                       className={`form__field form__field_input_${field.name}`}/>
                                <span className={`form__field-error ${field.name}-error`} id={`${field.name}-error`}/>
                            </label>
                        ))
                    }
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
