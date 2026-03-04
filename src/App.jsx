import { useState } from "react";
import "./index.css";
import LanyardCard from "./components/LanyardCard";
import LanyardSize from "./components/LanyardSizeSelector";
import LanyardColor from "./components/LanyardColor";
import LanyardHooks from "./components/LanyardHooks";
import { cards } from "./assets";
// import xbucDetachable from "./assets/hooks/xbuc_detachable.png";
import { hooksList } from "./components/LanyardHooks";


function App() {
  
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [lanyardSize, setLanyardSize] = useState("1");
  const [lanyardColor, setLanyardColor] = useState("#6B7280");
  const [selectedHook, setSelectedHook] = useState(hooksList[2]);



//   const [selectedHook, setSelectedHook] = useState({
//   name: "XBUC Detachable",
//   src: xbucDetachable,
// });


  // const [selectedCard, setSelectedCard] = useState(null);
  // const [selectedHook, setSelectedHook] = useState(null);

  return (
    <div className="h-screen w-full overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-12 h-full">

    {/* LEFT — PREVIEW */}
    <div className="md:col-span-7 sticky top-0 h-screen flex items-center justify-center bg-gray-50 p-8">
      <LanyardCard
        selectedCard={selectedCard}
        lanyardSize={lanyardSize}
        lanyardColor={lanyardColor}
        selectedHook={selectedHook}
      />
    </div>

    {/* RIGHT — OPTIONS */}
    <div className="md:col-span-5 h-screen overflow-y-auto bg-white p-8 shadow-xl">
      
      <div className="space-y-8">
        <h1 className="text-3xl font-extrabold tracking-tight">CUSTOMIZE YOUR LANYARD</h1>
        <LanyardSize
          lanyardSize={lanyardSize}
          setLanyardSize={setLanyardSize}
        />

        <LanyardColor
          lanyardColor={lanyardColor}
          setLanyardColor={setLanyardColor}
        />

        {/* Cards */}
        <div>
          <h2 className="text-lg font-bold mb-3">CARDS</h2>
          <div className="grid grid-cols-3 gap-4">
            {cards.map((card, i) => (
              <div
                key={i}
                onClick={() => setSelectedCard(card)}
                className={`cursor-pointer border rounded p-2 transition text-center ${
                  selectedCard?.title === card.title
                    ? "border-blue-500 ring-2 ring-blue-400"
                    : "border-gray-300 hover:border-blue-300"
                }`}
              >
                <img src={card.src} alt={card.title} className="w-full mb-1" />
                <p className="text-xs">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hooks */}
        <LanyardHooks
          selectedHook={selectedHook}
          setSelectedHook={setSelectedHook}
        />
      </div>

    </div>

  </div>
</div>
    
  );
}

export default App;





// return (
// <div className="h-screen w-full flex overflow-hidden">

//       <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">

//         {/* LEFT SIDE — PREVIEW */}
//         <div className="flex items-center justify-center h-full p-6">
//           <div className="w-full h-full flex items-center justify-center">
//             {selectedCard ? (
//               <LanyardCard
//                 selectedCard={selectedCard}
//                 lanyardSize={lanyardSize}
//                 lanyardColor={lanyardColor}
//                 selectedHook={selectedHook}
//               />
//             ) : (
//               <div className="text-gray-400 text-center">
//                 Select a card to preview
//               </div>
//             )}
//           </div>
//         </div>

//         {/* RIGHT SIDE — CONTROLS */}
// {/* <div className="h-full bg-white p-6 shadow-xl flex flex-col gap-6 overflow-y-auto "> */}
// <div className="h-full bg-white p-8 shadow-xl flex flex-col gap-6 overflow-y-auto m-4 rounded-lg">
//   {/* SIZE + COLOR (no scroll) */}
//   <div className="space-y-6">
//     <LanyardSize
//       lanyardSize={lanyardSize}
//       setLanyardSize={setLanyardSize}
//     />

//     <LanyardColor
//       lanyardColor={lanyardColor}
//       setLanyardColor={setLanyardColor}
//     />
//   </div>

//   {/* CARDS SECTION (SCROLLABLE) */}
//   <div className="flex flex-col flex-1 min-h-0">
//     <h2 className="text-lg font-bold mb-2">Choose a card</h2>
//     <div className="grid grid-cols-3 gap-3 overflow-y-auto pr-2 flex-1">
//       {cards.map((card, i) => (
//         <div
//           key={i}
//           onClick={() => setSelectedCard(card)}
//           className={`cursor-pointer border rounded p-2 transition text-center ${
//             selectedCard?.title === card.title
//               ? "border-blue-500 ring-2 ring-blue-400"
//               : "border-gray-300 hover:border-blue-300"
//           }`}
//         >
//           <img
//             src={card.src}
//             alt={card.title}
//             className="w-full mb-1"
//           />
//           <p
//             className={`text-xs ${
//               selectedCard?.title === card.title
//                 ? "font-bold text-blue-600"
//                 : "font-medium text-gray-700"
//             }`}
//           >
//             {card.title}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* HOOKS SECTION (SCROLLABLE) */}
//   <div className="flex flex-col flex-1 min-h-0">
//     <LanyardHooks
//       selectedHook={selectedHook}
//       setSelectedHook={setSelectedHook}
//     />
//   </div>

// </div>

//       </div>
//     </div>

// );