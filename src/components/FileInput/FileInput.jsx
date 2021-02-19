function FileInput(props) {
  const { id, refProp, ...attrs } = props;

  return (
    <input
      type="file"
      className="form__element form__attachment-button"
      id={id}
      ref={refProp}
      {...attrs}
    />
  );
}

export default FileInput;
