// import React, { useState } from "react";
// import { data } from "../Data/data.jsx";
// import PurchaseModal from "./PurchaseModal.jsx";
// //import Alert from '@mui/material/Alert';
// //import Stack from '@mui/material/Stack';

// const Games = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedGame, setSelectedGame] = useState(null);
//   //const [alertMessage, setAlertMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [visibleGames, setVisibleGames] = useState(20);
//   const [purchasedItem] = useState(null);

//   // const handlePurchase = (gameName) => {
//   //   setAlertMessage(`Purchase of ${gameName} successful!`);

//   //   setTimeout(() => {
//   //     setAlertMessage('');
//   //   }, 5000);
//   // };

//   const handlePurchase = (gameName) => {
//     setSelectedGame(gameName);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handlePurchaseConfirmation = (gameName) => {
//     console.log(`Confirmed purchase of ${gameName}`);
//     closeModal();
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setVisibleGames(20);
//   };

//   const handleLoadMore = () => {
//     setVisibleGames((prevVisibleGames) => prevVisibleGames + 20);
//   };

//   const filteredGames = data
//     .filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .slice(0, visibleGames);

//   return (
//     <div>
      // {/* <Stack sx={{ width: '30%', position: 'fixed', top: 5, left: '50%', transform: 'translateX(-50%)'}} spacing={2}>
      //   {alertMessage && (
      //     <Alert severity="success" onClose={() => setAlertMessage('')}>
      //       {alertMessage}
      //     </Alert>
      //   )}
      // </Stack> */}

//       <h1 className="text-red-600 text-2xl font-bold text-center mt-8">
//         Top Rated Games
//       </h1>

//       <div className="mt-5 px-10 flex justify-end">
//         <input
//           type="text"
//           placeholder="Search for a game..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-80 p-2 border border-gray-300 bg-transparent rounded text-white"
//         />
//       </div>

//       <div className="grid grid-cols-4 gap-4 mt-5 px-10">
//       {filteredGames.map((item, index) => (
//         <div key={index} className="hover:scale-105 duration-300">
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-full h-[250px] object-cover rounded-t-lg rounded-b-lg"
//           />
//           <div className="p-4">
//             <p className="text-white font-bold text-center">{item.name}</p>
//             <div className="flex justify-center mt-2">
//               <button
//                 onClick={() => handlePurchase(item.name)}
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {purchasedItem && (
//         <div className="text-green-500 my-4">
//           Purchased item: {purchasedItem}
//         </div>
//       )}
//     </div>

//       {filteredGames.length < data.length && (
//         <div className="flex justify-end mt-5 mr-10">
//           <button
//             onClick={handleLoadMore}
//             className="text-white font-bold py-2 px-4 rounded"
//           >
//             Load more...
//           </button>
//         </div>
//       )}

//       <PurchaseModal
//         isOpen={isModalOpen}
//         selectedGame={selectedGame}
//         closeModal={closeModal}
//         onPurchase={handlePurchaseConfirmation}
//       />
//     </div>
//   );
// };

// export default Games;

import React, { useState } from "react";
import { data } from "../Data/data.jsx";
import PurchaseModal from "./PurchaseModal.jsx";
//import Alert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';

const Games = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  //const [alertMessage, setAlertMessage] = useState('');
  const [visibleGames, setVisibleGames] = useState(20);
  const [purchasedItem, setPurchasedItem] = useState(null);
  
// const handlePurchase = (gameName) => {
//   setAlertMessage(`Purchase of ${gameName} successful!`);

//   setTimeout(() => {
//     setAlertMessage('');
//   }, 5000);
// };

  const handlePurchase = (gameName) => {
    setSelectedGame(gameName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseConfirmation = (gameName) => {
    console.log(`Confirmed purchase of ${gameName}`);
    setPurchasedItem(gameName);
    closeModal();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setVisibleGames(20);
  };

  const handleLoadMore = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + 20);
  };

  const filteredGames = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleGames);

  return (
    <div>
      {/* <Stack sx={{ width: '30%', position: 'fixed', top: 5, left: '50%', transform: 'translateX(-50%)'}} spacing={2}>
         {alertMessage && (
           <Alert severity="success" onClose={() => setAlertMessage('')}>
             {alertMessage}
           </Alert>
         )}
       </Stack> */}

      {purchasedItem && (
        <div>
          <h1 className="text-red-600 text-2xl font-bold text-center mt-8">
            Recommendation based on your purchase
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-5 px-10">
            <div className="hover:scale-105 duration-300">
              {data
                .filter((item) => item.name === purchasedItem)
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-[250px] object-cover rounded-t-lg rounded-b-lg text-white relative"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-t-lg rounded-b-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center"></div>
                    <span className="text-lg flex justify-center">
                      {purchasedItem}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <h1 className="text-red-600 text-2xl font-bold text-center mt-8">
        Top Rated Games
      </h1>

      <div className="mt-5 px-10 flex justify-end">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-80 p-2 border border-gray-300 bg-transparent rounded text-white"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-5 px-10">
        {filteredGames.map((item, index) => (
          <div key={index} className="hover:scale-105 duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[250px] object-cover rounded-t-lg rounded-b-lg"
            />
            <div className="p-4">
              <p className="text-white font-bold text-center">{item.name}</p>
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => handlePurchase(item.name)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGames.length < data.length && (
        <div className="flex justify-end mt-5 mr-10">
          <button
            onClick={handleLoadMore}
            className="text-white font-bold py-2 px-4 rounded"
          >
            Load more...
          </button>
        </div>
      )}

      <PurchaseModal
        isOpen={isModalOpen}
        selectedGame={selectedGame}
        closeModal={closeModal}
        onPurchase={handlePurchaseConfirmation}
      />
    </div>
  );
};

export default Games;
