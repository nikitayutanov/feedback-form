import './Form.css';
import { useState, useRef } from 'react';
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
  });

  const { name, lastname, email, type, message } = values;
  const fileRef = useRef(null);

  const handleChange = ({ target: { id, value } }) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <form className="form">
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
        refProp={fileRef}
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
