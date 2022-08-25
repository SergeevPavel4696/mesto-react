import PopupWithForm from "./PopupWithForm.js";
import {useState} from "react";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace({name, link});
    }

    return (
        <PopupWithForm
            popupType={"add"}
            height={"two"}
            popupTitle={"Новое место"}
            buttonType={"submit"}
            isabled={true}
            formButtonText={"Создать"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="form__field-label">
                <input type="text" name="name" id="card-name" placeholder="Название" minLength="2"
                       maxLength="30" value={name} onChange={handleChangeName}
                       className="form__field form__field_input_card-name" required/>
                <span id="card-name-error" className="form__field-error card-name-error"/>
            </label>
            <label className="form__field-label">
                <input type="url" name="link" id="card-link" placeholder="Ссылка на картинку"
                       value={link} onChange={handleChangeLink}
                       className="form__field form__field_input_link" required/>
                <span id="card-link-error" className="form__field-error card-link-error"/>
            </label>
        </PopupWithForm>
    )
}
