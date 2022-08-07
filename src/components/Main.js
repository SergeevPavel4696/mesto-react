import pencil from "../images/pencil.svg";
import Card from "./Card.js";

function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick, user, cards}) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img src={user["avatar"]} alt="Аватар" className="profile__avatar-image"/>
                    <img src={pencil} alt="Карандаш" className="profile__avatar-edit" onClick={onEditAvatarClick}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">{user["name"]}</h1>
                    <button className="profile__info-button" type="button" onClick={onEditProfileClick}/>
                    <p className="profile__info-about-myself">{user["about"]}</p>
                </div>
                <button className="profile__add" type="button" onClick={onAddPlaceClick}/>
            </section>
            <section className="cards">
                {
                    cards.map(card => (
                        <Card card={card} myId={user["_id"]} key={card["_id"]} onCardClick={onCardClick}/>
                    ))
                }
            </section>
        </main>
    );
}

export default Main;
