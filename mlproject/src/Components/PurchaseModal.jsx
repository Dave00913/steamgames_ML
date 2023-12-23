import React from 'react';
import Modal from 'react-modal';

const PurchaseModal = ({ isOpen, selectedGame, closeModal, onPurchase }) => {
  const modalStyle = {
    content: {
      width: '1000px',
      height: '600px',
      margin: 'auto',
      backgroundColor: '#141414',
      color: 'white',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Purchase Modal"
      style={modalStyle}
    >
      <h2>Purchase Confirmation</h2>
      <p>Are you sure you want to purchase {selectedGame}?</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={() => onPurchase(selectedGame)}>Purchase</button>
      </div>
    </Modal>
  );
};

export default PurchaseModal;
