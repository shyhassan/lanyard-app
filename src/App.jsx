import { useState } from 'react';
import './index.css';
import LanyardCard from './components/LanyardCard';
import LanyardSize from './components/LanyardSize';
import LanyardColor from './components/LanyardColor';
import { cards } from './assets';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [lanyardSize, setLanyardSize] = useState('3/4');
  const [lanyardColor, setLanyardColor] = useState('#6B7280'); // default gray

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE — PREVIEW */}
        <div className="flex justify-center bg-white p-6 rounded-xl shadow-lg">
          {selectedCard ? (
            <LanyardCard
              selectedCard={selectedCard}
              lanyardSize={lanyardSize}
              lanyardColor={lanyardColor}
            />
          ) : (
            <div className="text-gray-400 text-center">
              Select a card to preview
            </div>
          )}
        </div>

        {/* RIGHT SIDE — CONTROLS */}
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
          <LanyardSize lanyardSize={lanyardSize} setLanyardSize={setLanyardSize} />
          <LanyardColor lanyardColor={lanyardColor} setLanyardColor={setLanyardColor} />

          <h2 className="text-lg font-bold mb-2">Choose a card</h2>
          <div className="grid grid-cols-3 gap-3 max-h-[500px] overflow-y-auto">
            {cards.map((card, i) => {
              if (!card.src) return null;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedCard(card)}
                  className={`cursor-pointer border rounded p-2 transition text-center ${
                    selectedCard?.title === card.title
                      ? "border-blue-500 ring-2 ring-blue-400"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full rounded mb-1"
                  />
                  <p className={`text-xs ${
                    selectedCard?.title === card.title
                      ? "font-bold text-blue-600"
                      : "font-medium text-gray-700"
                  }`}>
                    {card.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
















// import { useState } from 'react';
// import './index.css';
// import LanyardCard from './components/LanyardCard';
// import { cards } from './assets';



// function App() {
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('Member');
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

//     {/* LEFT SIDE — PREVIEW */}
//     <div className="flex justify-center bg-white p-6 rounded-xl shadow-lg">
//       {selectedCard && (
//         <LanyardCard
//           name={name}
//           role={role}
//           selectedCard={selectedCard}
//           profilePic={profilePic}
//         />
//       )}
//     </div>

//     {/* RIGHT SIDE — CONTROLS */}
//     <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">

//       {/* Name Input */}
//       <input
//         type="text"
//         placeholder="Enter your name"
//         className="w-full border p-3 rounded"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       {/* Role Select */}
//       <select
//         className="w-full border p-3 rounded"
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//       >
//         <option>Admin</option>
//         <option>Member</option>
//         <option>Guest</option>
//       </select>

//       {/* Card Selection */}
//       <div className="grid grid-cols-3 gap-3">
//         {cards.map((card, i) => (
//           <div
//             key={i}
//             onClick={() => setSelectedCard(card)}
//             className={`cursor-pointer border rounded p-2 transition ${
//               selectedCard?.title === card.title
//                 ? "border-blue-500 ring-2 ring-blue-400"
//                 : "border-gray-300"
//             }`}
//           >
//             <img src={card.src} alt={card.title} />
//           </div>
//         ))}
//       </div>

//     </div>
//   </div>
// </div>
//   );


  
// }

// export default App;





// {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

//       {/* Input Form */}
//       <div className="flex flex-col gap-4 w-full max-w-sm mb-8">
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="border p-2 rounded shadow"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <select
//           className="border p-2 rounded shadow"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option>Admin</option>
//           <option>Member</option>
//           <option>Guest</option>
//         </select>

//         <button
//           className="bg-blue-500 text-white p-2 rounded"
//           onClick={() => setSubmitted(true)}
//         >
//           Generate Lanyard
//         </button>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mb-6">
//   {cards.map((card, i) => (
//     <div
//       key={i}
//       onClick={() => setSelectedCard(card)}
//       className={`cursor-pointer border p-2 rounded transition-all duration-200 ${
//         selectedCard?.title === card.title
//           ? "border-blue-500 ring-2 ring-blue-400 scale-105"
//           : "border-gray-300 hover:border-blue-300"
//       }`}
//     >
//       <img src={card.src} alt={card.title} />
//       <p className="text-xs text-center mt-1">{card.title}</p>
//     </div>
//   ))}
// </div>

//     {selectedCard && (
//   <LanyardCard
//     name={name}
//     role={role}
//     selectedCard={selectedCard} // pass the selected card object
//   />
// )}



//     </div> */}