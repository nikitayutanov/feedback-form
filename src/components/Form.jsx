import './Form.css';
import { useState } from 'react';
import FormElement from './FormElement/FormElement';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import Button from './Button/Button';
import CloseButton from './CloseButton/CloseButton';

const elements = ['name', 'lastname', 'email', 'type', 'message', 'file'];
const [nameId, lastnameId, emailId, typeId, messageId, fileId] = elements;

function Form({ closeModal }) {
  const initState = () => {
    const state = {};

    for (const el of elements) {
      state[el] = '';
    }

    return state;
  };

  const [values, setValues] = useState(initState());
  const [errors, setErrors] = useState(initState());

  const { name, lastname, email, type, message, file } = values;
  const {
    name: nameError,
    lastname: lastnameError,
    email: emailError,
    type: typeError,
    message: messageError,
    file: fileError,
  } = errors;

  const setValue = (element, value) => {
    setValues((prevValues) => ({ ...prevValues, [element]: value }));
  };

  const setError = (element, error) => {
    setErrors((prevErrors) => ({ ...prevErrors, [element]: error }));
  };

  const clearError = (element) => {
    const error = errors[element];

    if (error) {
      setError(element, '');
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    const trimmedValue = value.trim();

    clearError(id);
    setValue(id, trimmedValue);
  };

  const handleMessageChange = ({ target: { id, value } }) => {
    const multipleSpaces = /\s\s+/g;
    const trimmedValue = value.replace(multipleSpaces, ' ');

    clearError(id);
    setValue(id, trimmedValue);
  };

  const handleFileChange = ({ target: { id, files } }) => {
    const [file] = files;

    clearError(id);
    setValue(id, file);
  };

  const isEmailValid = () => {
    const regex = /^[^\s@]+@[^\s@]+$/;
    return regex.test(email);
  };

  const validateFields = () => {
    const required = 'Поле обязательно для заполнения';
    const invalidEmail = 'Введите корректный email';
    const tooShort = 'Сообщение слишком короткое';

    if (!name && !lastname) {
      setError(nameId, required);
    }

    if (!email) {
      setError(emailId, required);
    } else if (!isEmailValid()) {
      setError(emailId, invalidEmail);
    }

    if (!type) {
      setError(typeId, required);
    }

    if (!message) {
      setError(messageId, required);
    } else if (message.length <= 10) {
      setError(messageId, tooShort);
    }

    return (name || lastname) && isEmailValid() && type && message.length > 10;
  };

  const validateFile = () => {
    if (file) {
      const { type, size } = file;
      const sizeMb = size / Math.pow(1024, 2);

      const wrongExtension = 'Неверный формат изображения';
      const largeSize = 'Размер файла слишком большой';
      const imgStr = 'image/';
      const jpg = `${imgStr}jpeg`;
      const png = `${imgStr}png`;

      if (type !== jpg && type !== png) {
        setError(fileId, wrongExtension);
      } else if (sizeMb >= 2) {
        setError(fileId, largeSize);
      }

      return (type === jpg || type === png) && sizeMb < 2;
    }

    return true;
  };

  const isFormValid = () => {
    const areFieldsValid = validateFields();
    const isAttachmentValid = validateFile();

    return areFieldsValid && isAttachmentValid;
  };

  const fileToBase64 = (callback) => {
    const reader = new FileReader();

    reader.onload = ({ target: { result } }) => {
      callback(result);
    };

    reader.readAsDataURL(file);
  };

  const getResult = (base64Img) => {
    const result = { ...values, file: base64Img };
    const jsonResult = JSON.stringify(result);

    console.log(jsonResult);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      file ? fileToBase64(getResult) : getResult();
    }
  };

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <form className="form" onSubmit={submitForm} noValidate>
        <FormElement
          element={Input}
          onChange={handleChange}
          value={name}
          error={nameError}
          id={nameId}
          label="Имя"
          placeholder="Иван"
        />
        <FormElement
          element={Input}
          onChange={handleChange}
          value={lastname}
          error={lastnameError}
          id={lastnameId}
          label="Фамилия"
          placeholder="Иванов"
        />
        <FormElement
          element={Input}
          onChange={handleChange}
          value={email}
          error={emailError}
          id={emailId}
          type="email"
          label="Email"
          placeholder="ivanov@gmail.com"
        />
        <FormElement
          element={Select}
          onChange={handleChange}
          value={type}
          error={typeError}
          id={typeId}
          label="Тип сообщения"
        />
        <FormElement
          element={Textarea}
          onChange={handleMessageChange}
          value={message}
          error={messageError}
          id={messageId}
          label="Сообщение"
          placeholder="Мое сообщение"
        />
        <FormElement
          element={Input}
          onChange={handleFileChange}
          error={fileError}
          id={fileId}
          type="file"
          className="form__attachment-button"
          label="Прикрепить изображение"
          accept=".jpg, .jpeg, .png"
        />
        <Button
          type="submit"
          className="form__submit-button"
          value="Отправить"
        />
        <CloseButton onClick={closeModal} />
      </form>
    </div>
  );
}

export default Form;
