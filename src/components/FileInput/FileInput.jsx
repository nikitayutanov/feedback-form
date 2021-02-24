function FileInput(props) {
  const { className, id, ...attrs } = props;

  return (
    <input
      type="file"
      className={`${className} form__attachment-button`}
      id={id}
      {...attrs}
    />
  );
}

export default FileInput;
