import {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

export default function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);
    let like = card.likes.some(user => user._id === currentUser._id) && "card__like_active";

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card._id);
    }

    return (
        <article className="card">
            <img src={card.link} alt={card.name} className="card__image" onClick={() => {
                onCardClick(card)
            }}/>
            {currentUser._id === card.owner._id &&
                <button className="card__trash" onClick={handleDeleteClick} type="button"/>}
            <h2 className="card__title">{card.name}</h2>
            <button onClick={handleLikeClick} type="button"
                    className={`card__like ${card.likes.length && "card__like_with-number"} ${like}`}/>
            <span className="card__like-number">
                {card.likes.length ? card.likes.length : ""}
            </span>
        </article>
    );
}
