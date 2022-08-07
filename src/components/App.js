import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import {useState} from "react";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

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

    return (
        <>
            <Header/>
            <Main
                onEditAvatarClick={handleEditAvatarClick}
                onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm
                popupType={"avatar"}
                height={"one"}
                popupTitle={"Обновить аватар"}
                buttonType={"submit"}
                disabled={true}
                formButtonText={"Сохранить"}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <label className="form__field-label">
                    <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку"
                           className="form__field form__field_input_link" required/>
                    <span className="form__field-error avatar-error" id="avatar-link-error"/>
                </label>
            </PopupWithForm>
            <PopupWithForm
                popupType={"profile"}
                height={"two"}
                popupTitle={"Редактировать профиль"}
                buttonType={"submit"}
                isabled={true}
                formButtonText={"Сохранить"}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <label className="form__field-label">
                    <input type="text" name="name" id="name" placeholder="Имя" minLength="2" maxLength="40"
                           className="form__field form__field_input_name" required/>
                    <span className="form__field-error name-error" id="name-error"/>
                </label>
                <label className="form__field-label">
                    <input type="text" name="about" id="about" placeholder="О себе" minLength="2" maxLength="200"
                           className="form__field form__field_input_about" required/>
                    <span className="form__field-error about-error" id="about-error"/>
                </label>
            </PopupWithForm>
            <PopupWithForm
                popupType={"add"}
                height={"two"}
                popupTitle={"Новое место"}
                buttonType={"submit"}
                disabled={true}
                formButtonText={"Создать"}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <label className="form__field-label">
                    <input type="text" name="name" id="card-name" placeholder="Название" minLength="2" maxLength="30"
                           className="form__field form__field_input_card-name" required/>
                    <span className="form__field-error card-name-error" id="card-name-error"/>
                </label>
                <label className="form__field-label">
                    <input type="url" name="link" id="card-link" placeholder="Ссылка на картинку"
                           className="form__field form__field_input_link" required/>
                    <span className="form__field-error card-link-error" id="card-link-error"/>
                </label>
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </>
    );
}

export default App;
