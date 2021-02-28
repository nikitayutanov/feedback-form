import './Modal.css';
import CloseButton from '../CloseButton/CloseButton';

function Modal(props) {
  const { children, closeModal } = props;

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal__window">
        {children}
        <CloseButton onClick={closeModal} />
      </div>
    </div>
  );
}

export default Modal;
