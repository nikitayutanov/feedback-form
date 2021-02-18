function Input(props) {
  const { type = 'text', className = '', id, ...attrs } = props;

  return (
    <input
      type={type}
      className={`form__element ${className}`}
      id={id}
      {...attrs}
    />
  );
}

export default Input;
