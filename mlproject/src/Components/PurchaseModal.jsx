import React from 'react';
import Modal from 'react-modal';


const PurchaseModal = ({ isOpen, selectedGame, closeModal, onPurchase }) => {
  const modalStyle = {
    content: {
      width: '900px',
      height: '330px',
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
      <div className='font-bold py-10 px-10'>
      <h2 className="text-red-600 text-4xl">Purchase Confirmation</h2>

     
          
<h1 className="text-white text-2xl my-7">Are you sure you want to purchase <a className="text-red-600">{selectedGame}</a> ?</h1>

      <div className='text-right my-20'>
        <button className = "mx-7 text-green-700 text-xl" onClick={() => onPurchase(selectedGame)}>Confirm Purchase</button>
        <button className = "mx-7 text-red-700 text-xl"  onClick={closeModal}>Cancel</button>
      </div>
      </div>
    </Modal>
  );
};

export default PurchaseModal;
