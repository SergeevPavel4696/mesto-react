function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_image ${card.name && "popup_opened"}`}>
            <div className="popup__content popup__content_image">
                <img className="popup__image"
                     src={card.link}
                     alt={card.name}
                />
                <button className="popup__close"
                        type="button"
                        onClick={onClose}
                />
            </div>
            <p className="popup__image-title">{card.name}</p>
        </div>
    )
}

export default ImagePopup;
