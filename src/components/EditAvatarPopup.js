import PopupWithForm from "./PopupWithForm.js";
import {useState} from "react";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const [avatar, setAvatar] = useState("");

    function handleChangeAvatar(evt) {
        setAvatar(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({avatar});
    }

    return (
        <PopupWithForm
            popupType={"avatar"}
            height={"one"}
            popupTitle={"Обновить аватар"}
            buttonType={"submit"}
            isabled={true}
            formButtonText={"Сохранить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="form__field-label">
                <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" value={avatar}
                       onChange={handleChangeAvatar} className="form__field form__field_input_link" required/>
                <span id="avatar-link-error" className="form__field-error avatar-error"/>
            </label>
        </PopupWithForm>
    )
}
