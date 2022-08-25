import PopupWithForm from "./PopupWithForm.js";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setAbout(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({name, about});
    }

    return (
        <PopupWithForm
            popupType={"profile"}
            height={"two"}
            popupTitle={"Редактировать профиль"}
            buttonType={"submit"}
            isabled={true}
            formButtonText={"Сохранить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="form__field-label">
                <input type="text" name="name" id="name" placeholder="Имя" minLength="2" maxLength="40"
                       value={name} onChange={handleChangeName} className="form__field form__field_input_name"
                       required/>
                <span id="name-error" className="form__field-error name-error"/>
            </label>
            <label className="form__field-label">
                <input type="text" name="about" id="about" placeholder="О себе" minLength="2" maxLength="200"
                       value={about} onChange={handleChangeDescription} className="form__field form__field_input_about"
                       required/>
                <span id="about-error" className="form__field-error about-error"/>
            </label>
        </PopupWithForm>
    )
}
