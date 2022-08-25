import pencil from "../images/pencil.svg";
import Card from "./Card.js";
import {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

export default function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick,
                                 onCardClick, cards, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__avatar-image"
                         src={currentUser.avatar}
                         alt="Аватар"
                    />
                    <img className="profile__avatar-edit"
                         src={pencil}
                         alt="Карандаш"
                         onClick={onEditAvatarClick}
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">
                        {currentUser.name}
                    </h1>
                    <button className="profile__info-button"
                            type="button"
                            onClick={onEditProfileClick}
                    />
                    <p className="profile__info-about-myself">
                        {currentUser.about}
                    </p>
                </div>
                <button className="profile__add"
                        type="button"
                        onClick={onAddPlaceClick}
                />
            </section>
            <section className="cards">
                {
                    cards.map(card => (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        />
                    ))
                }
            </section>
        </main>
    );
}
