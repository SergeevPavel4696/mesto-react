import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import {useEffect, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import {api} from "../utils/API.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
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

    function handleResponse(response, buttonText, buttonTextInProcess, setButtonText) {
        const tempButtonText = buttonText;
        setButtonText(buttonTextInProcess);
        response
            .catch((err) => {
                console.log(err);
                setButtonText("Произошла ошибка");
                setTimeout(() => {}, 3000);
            })
            .finally(() => {
                setTimeout(() => {
                    setButtonText(tempButtonText);
                }, 300);
            });
    }

    function handleUpdateUser(userInfo, buttonText, buttonTextInProcess, setButtonText) {
        handleResponse(api.updateUserInfo(userInfo)
            .then(res => {
                    setCurrentUser(res);
                    closeAllPopups();
                }
            ), buttonText, buttonTextInProcess, setButtonText);
    }

    function handleUpdateAvatar(avatar, buttonText, buttonTextInProcess, setButtonText) {
        handleResponse(api.updateUserAvatar(avatar)
            .then(res => {
                    setCurrentUser(res);
                    closeAllPopups();
                }
            ), buttonText, buttonTextInProcess, setButtonText);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.toggleLike(card._id, isLiked)
            .then(newCard => {
                setCards(state => state.map(c => c._id === card._id ? newCard : c));
            })
            .catch(err => {
                console.log(err);
            });

    }

    function handleCardDelete(id) {
        api.deleteCard(id)
            .then(
                setCards(state => state.filter(c => c._id !== id))
            )
            .catch(err => {
                console.log(err);
            });
    }

    function handleAddPlace(card, buttonText, buttonTextInProcess, setButtonText) {
        handleResponse(api.addCard(card)
            .then(newCard => {
                    setCards([newCard, ...cards]);
                    closeAllPopups();
                }
            ), buttonText, buttonTextInProcess, setButtonText);
    }

    useEffect(() => {
        Promise.all([api.initializeProfile(), api.initialCards()])
            .then(([info, cards]) => {
                setCurrentUser(info);
                setCards(cards);
            })
            .catch(err => {
                console.log(err);
            });
    }, [setCurrentUser])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header/>
            <Main
                onEditAvatarClick={handleEditAvatarClick}
                onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
            <Footer/>
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
            />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
            />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlace}
            />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </CurrentUserContext.Provider>
    );
}

export default App;
