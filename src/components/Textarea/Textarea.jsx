function Textarea(props) {
  const { id, ...attrs } = props;

  return (
    <textarea
      rows="2"
      className="form__element form__message-field"
      id={id}
      {...attrs}
    ></textarea>
  );
}

export default Textarea;
