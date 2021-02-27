import { useState } from 'react';
import Button from './components/Button/Button';
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
      {isModal && <Form closeModal={closeModal} />}
    </div>
  );
}

export default App;
