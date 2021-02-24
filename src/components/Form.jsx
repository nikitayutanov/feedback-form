import './Form.css';
import { useState } from 'react';
import FormElement from './FormElement/FormElement';
import TextInput from './TextInput/TextInput';
import FileInput from './FileInput/FileInput';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import Button from './Button/Button';
import CloseButton from './CloseButton/CloseButton';

function Form() {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    type: '',
    message: '',
    file: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    type: '',
    message: '',
    file: '',
  });

  const { name, lastname, email, type, message, file } = values;

  const setValue = (element, value) => {
    setValues((prevValues) => ({ ...prevValues, [element]: value }));
  };

  const setError = (element, error) => {
    setErrors((prevErrors) => ({ ...prevErrors, [element]: error }));
  };

  const clearError = (element) => {
    setError(element, '');
  };

  const handleChange = ({ target: { id, value } }) => {
    const error = errors[id];

    if (error) {
      clearError(id);
    }

    setValue(id, value);
  };

  const handleFileChange = ({ target: { id, files } }) => {
    const [file] = files;
    const error = errors[id];

    if (error) {
      clearError(id);
    }

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
      setError('name', required);
    } else {
      clearError('name');
    }

    if (!email) {
      setError('email', required);
    } else if (!isEmailValid()) {
      setError('email', invalidEmail);
    } else {
      clearError('email');
    }

    if (!type) {
      setError('type', required);
    } else {
      clearError('type');
    }

    if (!message) {
      setError('message', required);
    } else if (message.length <= 10) {
      setError('message', tooShort);
    } else {
      clearError('message');
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
        setError('file', wrongExtension);
      } else if (sizeMb >= 2) {
        setError('file', largeSize);
      } else {
        clearError('file');
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

  return (
    <form className="form" onSubmit={submitForm} noValidate>
      <FormElement
        element={TextInput}
        onChange={handleChange}
        value={name}
        error={errors.name}
        id="name"
        label="Имя"
        placeholder="Иван"
      />
      <FormElement
        element={TextInput}
        onChange={handleChange}
        value={lastname}
        error={errors.lastname}
        id="lastname"
        label="Фамилия"
        placeholder="Иванов"
      />
      <FormElement
        element={TextInput}
        onChange={handleChange}
        value={email}
        error={errors.email}
        type="email"
        id="email"
        label="Email"
        placeholder="ivanov@gmail.com"
      />
      <FormElement
        element={Select}
        onChange={handleChange}
        value={type}
        error={errors.type}
        id="type"
        label="Тип сообщения"
      />
      <FormElement
        element={Textarea}
        onChange={handleChange}
        value={message}
        error={errors.message}
        id="message"
        label="Сообщение"
        placeholder="Мое сообщение"
      />
      <FormElement
        element={FileInput}
        onChange={handleFileChange}
        error={errors.file}
        id="file"
        label="Прикрепить изображение"
        accept=".jpg, .jpeg, .png"
      />
      <Button type="submit" className="form__submit-button" value="Отправить" />
      <CloseButton />
    </form>
  );
}

export default Form;
