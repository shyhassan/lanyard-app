import { useState } from 'react';
import './index.css';
import LanyardCard from './components/LanyardCard';
import LanyardSize from './components/LanyardSizeSelector';
import LanyardColor from './components/LanyardColor';
import { cards } from './assets';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [lanyardSize, setLanyardSize] = useState('3/4');
  const [lanyardColor, setLanyardColor] = useState('#6B7280'); // default gray

  return (
    <div className="h-screen w-full bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

        {/* LEFT SIDE — PREVIEW */}
        <div className="flex justify-center items-start bg-white p-6 rounded-xl shadow-lg w-full h-full">
          {selectedCard ? (
            <LanyardCard
              selectedCard={selectedCard}
              lanyardSize={lanyardSize}
              lanyardColor={lanyardColor}
            />
          ) : (
            <div className="text-gray-400 text-center w-full h-full flex items-center justify-center">
              Select a card to preview
            </div>
          )}
        </div>

        {/* RIGHT SIDE — CONTROLS */}
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-6 w-full h-full flex flex-col">
          <LanyardSize
            lanyardSize={lanyardSize}
            setLanyardSize={setLanyardSize}
          />
          <LanyardColor
            lanyardColor={lanyardColor}
            setLanyardColor={setLanyardColor}
          />

          <h2 className="text-lg font-bold mb-2">Choose a card</h2>

          {/* Cards List - fill remaining space and scroll if needed */}
          <div className="grid grid-cols-3 gap-3 overflow-y-auto flex-grow">
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
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;