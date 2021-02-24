const options = [
  { text: 'Предложение', value: 'suggestion' },
  { text: 'Отзыв', value: 'feedback' },
  { text: 'Вопрос', value: 'question' },
  { text: 'Жалоба', value: 'complaint' },
  { text: 'Другое', value: 'other' },
];

function Select(props) {
  const { className, id, ...attrs } = props;

  const getPlaceholder = () => {
    return <option value="" hidden disabled></option>;
  };

  const getOptions = () => {
    return options.map((option, index) => {
      const { text, value } = option;

      return (
        <option key={index} value={value}>
          {text}
        </option>
      );
    });
  };

  return (
    <select className={`${className} form__type-selector`} id={id} {...attrs}>
      {getPlaceholder()}
      {getOptions()}
    </select>
  );
}

export default Select;
