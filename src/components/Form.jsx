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

  const { name, lastname, email, type, message, file } = values;

  const handleChange = ({ target: { id, value } }) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleFileChange = ({ target: { id, files } }) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: files[0],
    }));
  };

  const areFieldsValid = () => {
    return (name || lastname) && email && type && message.length > 10;
  };

  const isAttachmentValid = () => {
    if (file) {
      const { type, size } = file;
      const sizeMb = size / Math.pow(1024, 2);

      const imgStr = 'image/';
      const jpg = `${imgStr}jpeg`;
      const png = `${imgStr}png`;

      return (type === jpg || type === png) && sizeMb < 2;
    }

    return true;
  };

  const isFormValid = () => {
    return areFieldsValid() && isAttachmentValid();
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
        id="name"
        label="Имя"
        placeholder="Иван"
      />
      <FormElement
        element={TextInput}
        onChange={handleChange}
        value={lastname}
        id="lastname"
        label="Фамилия"
        placeholder="Иванов"
      />
      <FormElement
        element={TextInput}
        onChange={handleChange}
        value={email}
        type="email"
        id="email"
        label="Email"
        placeholder="ivanov@gmail.com"
      />
      <FormElement
        element={Select}
        onChange={handleChange}
        value={type}
        id="type"
        label="Тип сообщения"
      />
      <FormElement
        element={Textarea}
        onChange={handleChange}
        value={message}
        id="message"
        label="Сообщение"
        placeholder="Мое сообщение"
      />
      <FormElement
        element={FileInput}
        onChange={handleFileChange}
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
