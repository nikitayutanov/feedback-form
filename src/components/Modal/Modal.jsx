import './Modal.css';
import { createPortal } from 'react-dom';
import CloseButton from '../CloseButton/CloseButton';

function Modal(props) {
  const { children, closeModal } = props;

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
    }
  };

  const component = (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal__window">
        {children}
        <CloseButton onClick={closeModal} />
      </div>
    </div>
  );

  return createPortal(component, document.body);
}

export default Modal;
