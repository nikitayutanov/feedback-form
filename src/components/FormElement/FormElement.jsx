import './FormElement.css';

function FormElement(props) {
  const { element: Element, id, label, ...attrs } = props;

  return (
    <div className="form__element-wrapper">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <Element id={id} {...attrs} />
    </div>
  );
}

export default FormElement;
