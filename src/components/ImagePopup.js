function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_image ${card.name && "popup_opened"}`}>
            <div className="popup__content popup__content_image">
                <img src={card.link} className="popup__image" alt={card.name}/>
                <button type="button" className="popup__close" onClick={onClose}/>
            </div>
            <p className="popup__image-title">{card.name}</p>
        </div>
    )
}

export default ImagePopup;
