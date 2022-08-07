import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import {useEffect, useState} from "react";
import {api} from "../utils/API.js";

function App() {
    const fieldsAvatar = [
        {type: "url", name: "avatar", id: "avatar", placeholder: "Ссылка на картинку"}];
    const fieldsProfile = [
        {type: "text", name: "name", id: "name", placeholder: "Имя", minLength: 2, maxLength: 40},
        {type: "text", name: "about", id: "about", placeholder: "О себе", minLength: 2, maxLength: 200}];
    const fieldsAdd = [
        {type: "text", name: "name", id: "card-name", placeholder: "Название", minLength: 2, maxLength: 30},
        {type: "url", name: "link", id: "card-link", placeholder: "Ссылка на картинку"}];

    function getFields(fields) {
        return (fields)
    }

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [cards, setCards] = useState([]);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

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
        <>
            <Header/>
            <Main
                onEditAvatarClick={handleEditAvatarClick}
                onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick}
                onCardClick={handleCardClick}
                user={userInfo}
                cards={cards}
            />
            <Footer/>
            <PopupWithForm
                popupType={"avatar"}
                height={"one"}
                popupTitle={"Обновить аватар"}
                fields={getFields(fieldsAvatar)}
                buttonType={"submit"}
                disabled={true}
                formButtonText={"Сохранить"}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />
            <PopupWithForm
                popupType={"profile"}
                height={"two"}
                popupTitle={"Редактировать профиль"}
                fields={getFields(fieldsProfile)}
                buttonType={"submit"}
                isabled={true}
                formButtonText={"Сохранить"}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            />
            <PopupWithForm
                popupType={"add"}
                height={"two"}
                popupTitle={"Новое место"}
                fields={getFields(fieldsAdd)}
                buttonType={"submit"}
                disabled={true}
                formButtonText={"Создать"}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </>
    );
}

export default App;
