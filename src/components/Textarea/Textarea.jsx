function Textarea(props) {
  const { className, id, ...attrs } = props;

  return (
    <textarea
      rows="2"
      className={`${className} form__message-field`}
      id={id}
      {...attrs}
    ></textarea>
  );
}

export default Textarea;
