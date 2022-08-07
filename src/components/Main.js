import pencil from "../images/pencil.svg";
import Card from "./Card.js";
import {useEffect, useState} from "react";
import {api} from "../utils/API.js";

function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick}) {
    const [userInfo, setUserInfo] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.initializeProfile()
            .then(setUserInfo)
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        api.initialCards()
            .then(setCards)
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img src={userInfo.avatar} alt="Аватар" className="profile__avatar-image"/>
                    <img src={pencil} alt="Карандаш" className="profile__avatar-edit" onClick={onEditAvatarClick}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">{userInfo.name}</h1>
                    <button className="profile__info-button" type="button" onClick={onEditProfileClick}/>
                    <p className="profile__info-about-myself">{userInfo.about}</p>
                </div>
                <button className="profile__add" type="button" onClick={onAddPlaceClick}/>
            </section>
            <section className="cards">
                {
                    cards.map(card => (
                        <Card card={card} myId={userInfo._id} key={card._id} onCardClick={onCardClick}/>
                    ))
                }
            </section>
        </main>
    );
}

export default Main;
