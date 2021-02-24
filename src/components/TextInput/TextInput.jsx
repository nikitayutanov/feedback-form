function TextInput(props) {
  const { type = 'text', className, id, ...attrs } = props;

  return <input type={type} className={className} id={id} {...attrs} />;
}

export default TextInput;
