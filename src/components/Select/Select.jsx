const options = [
  { text: 'Предложение', value: 'suggestion' },
  { text: 'Отзыв', value: 'feedback' },
  { text: 'Вопрос', value: 'question' },
  { text: 'Жалоба', value: 'complaint' },
  { text: 'Другое', value: 'other' },
];

function Select(props) {
  const { id } = props;

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
    <select
      className="form__element form__type-selector"
      id={id}
      defaultValue=""
    >
      {getPlaceholder()}
      {getOptions()}
    </select>
  );
}

export default Select;
