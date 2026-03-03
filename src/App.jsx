import { useState } from "react";
import "./index.css";
import LanyardCard from "./components/LanyardCard";
import LanyardSize from "./components/LanyardSizeSelector";
import LanyardColor from "./components/LanyardColor";
import LanyardHooks from "./components/LanyardHooks";
import { cards } from "./assets";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [lanyardSize, setLanyardSize] = useState("3/4");
  const [lanyardColor, setLanyardColor] = useState("#6B7280");
  const [selectedHook, setSelectedHook] = useState(null);

  return (
    <div className="h-screen w-full flex overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">

        {/* LEFT SIDE — PREVIEW */}
        <div className="flex items-center justify-center h-full p-6">
          <div className="w-full h-full flex items-center justify-center">
            {selectedCard ? (
              <LanyardCard
                selectedCard={selectedCard}
                lanyardSize={lanyardSize}
                lanyardColor={lanyardColor}
                selectedHook={selectedHook}
              />
            ) : (
              <div className="text-gray-400 text-center">
                Select a card to preview
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE — CONTROLS */}
<div className="h-full bg-white p-6 shadow-xl flex flex-col gap-6 overflow-hidden">

  {/* SIZE + COLOR (no scroll) */}
  <div className="space-y-6">
    <LanyardSize
      lanyardSize={lanyardSize}
      setLanyardSize={setLanyardSize}
    />

    <LanyardColor
      lanyardColor={lanyardColor}
      setLanyardColor={setLanyardColor}
    />
  </div>

  {/* CARDS SECTION (SCROLLABLE) */}
  <div className="flex flex-col flex-1 min-h-0">
    <h2 className="text-lg font-bold mb-2">Choose a card</h2>
    <div className="grid grid-cols-3 gap-3 overflow-y-auto pr-2 flex-1">
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
          <img
            src={card.src}
            alt={card.title}
            className="w-full mb-1"
          />
          <p
            className={`text-xs ${
              selectedCard?.title === card.title
                ? "font-bold text-blue-600"
                : "font-medium text-gray-700"
            }`}
          >
            {card.title}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* HOOKS SECTION (SCROLLABLE) */}
  <div className="flex flex-col flex-1 min-h-0">
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