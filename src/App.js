import { useState } from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Form from './components/Form';

function App() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="container">
      <Button onClick={openModal} value="Связаться с нами" />
      {isModal && (
        <Modal closeModal={closeModal}>
          <Form />
        </Modal>
      )}
    </div>
  );
}

export default App;
