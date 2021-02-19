function TextInput(props) {
  const { type = 'text', id, ...attrs } = props;

  return <input type={type} className="form__element" id={id} {...attrs} />;
}

export default TextInput;
