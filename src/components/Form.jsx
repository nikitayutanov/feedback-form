import './Form.css';
import { useState } from 'react';
import FormElement from './FormElement/FormElement';
import Input from './Input/Input';
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

  const handleChange = ({ target: { id, value } }) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <form className="form">
      <FormElement
        element={Input}
        onChange={handleChange}
        value={values.name}
        id="name"
        label="Имя"
        placeholder="Иван"
      />
      <FormElement
        element={Input}
        onChange={handleChange}
        value={values.lastname}
        id="lastname"
        label="Фамилия"
        placeholder="Иванов"
      />
      <FormElement
        element={Input}
        onChange={handleChange}
        value={values.email}
        type="email"
        id="email"
        label="Email"
        placeholder="ivanov@gmail.com"
      />
      <FormElement
        element={Select}
        onChange={handleChange}
        value={values.type}
        id="type"
        label="Тип сообщения"
      />
      <FormElement
        element={Textarea}
        onChange={handleChange}
        value={values.message}
        id="message"
        label="Сообщение"
        placeholder="Мое сообщение"
      />
      <FormElement
        element={Input}
        type="file"
        className="form__attachment-button"
        id="file"
        label="Прикрепить изображение"
      />
      <Button type="submit" className="form__submit-button" value="Отправить" />
      <CloseButton />
    </form>
  );
}

export default Form;
