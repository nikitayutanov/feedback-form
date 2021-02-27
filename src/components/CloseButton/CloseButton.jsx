import './CloseButton.css';

function CloseButton(props) {
  const { onClick } = props;

  return (
    <button type="button" className="close-button" onClick={onClick}></button>
  );
}

export default CloseButton;
