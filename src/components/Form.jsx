import './Form.css';
import FormElement from './FormElement/FormElement';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import Button from './Button/Button';
import CloseButton from './CloseButton/CloseButton';

function Form() {
  return (
    <form className="form">
      <FormElement element={Input} id="name" label="Имя" placeholder="Иван" />
      <FormElement
        element={Input}
        id="lastname"
        label="Фамилия"
        placeholder="Иванов"
      />
      <FormElement
        element={Input}
        type="email"
        id="email"
        label="Email"
        placeholder="ivanov@gmail.com"
      />
      <FormElement element={Select} id="type" label="Тип сообщения" />
      <FormElement
        element={Textarea}
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
