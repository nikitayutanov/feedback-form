function FileInput(props) {
  const { id, ...attrs } = props;

  return (
    <input
      type="file"
      className="form__element form__attachment-button"
      id={id}
      {...attrs}
    />
  );
}

export default FileInput;
