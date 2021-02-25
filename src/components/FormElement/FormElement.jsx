import './FormElement.css';

function FormElement(props) {
  const {
    element: Element,
    className = '',
    id,
    label,
    error,
    ...attrs
  } = props;

  const getClassName = () => {
    const defaultClass = 'form__element';
    const errorClass = error && ' form__element--error';
    const additionalClass = className && ` ${className}`;

    return `${defaultClass}${errorClass}${additionalClass}`;
  };

  return (
    <div className="form__element-wrapper">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <Element className={getClassName()} id={id} {...attrs} />
      {error && <p className="form__error">{error}</p>}
    </div>
  );
}

export default FormElement;
