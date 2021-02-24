import './FormElement.css';

function FormElement(props) {
  const { element: Element, id, label, error, ...attrs } = props;

  return (
    <div className="form__element-wrapper">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <Element
        className={`form__element${error && ' form__element--error'}`}
        id={id}
        {...attrs}
      />
      {error && <p className="form__error">{error}</p>}
    </div>
  );
}

export default FormElement;
