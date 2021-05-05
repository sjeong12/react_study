import './App.css';
import React, { useState } from 'react';
import Modal from './modal/Modal.js';

function App() {
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

  return (
    <React.Fragment>
      <button onClick={ openModal }>모달팝업</button>
      <Modal open={ modalOpen } close={ closeModal } header="모달 헤더">
          리액트 함수형 모달 팝업창입니다.
          쉽게 만들 수 있어요.
          같이 만들어봐요!
      </Modal>
    </React.Fragment>
  );
}

export default App;
