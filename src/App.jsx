import { useState } from "react";
import "./index.css";
import LanyardCard from "./components/LanyardCard";
import LanyardSize from "./components/LanyardSizeSelector";
import LanyardColor from "./components/LanyardColor";
import LanyardHooks from "./components/LanyardHooks";
import LanyardText from "./components/LanyardText";
import { cards } from "./assets";
import { hooksList } from "./components/LanyardHooks";

function App() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [lanyardSize, setLanyardSize] = useState("1");
  const [lanyardColor, setLanyardColor] = useState("#6B7280");
  const [selectedHook, setSelectedHook] = useState(hooksList[2]);
  const [lanyardText, setLanyardText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [fontSize, setFontSize] = useState(14);
  const [textColor, setTextColor] = useState("#FFFFFF");

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
            lanyardText={lanyardText}
            fontFamily={fontFamily}
            fontSize={fontSize}
            textColor={textColor}
          />
        </div>

        {/* RIGHT — OPTIONS */}
        <div className="md:col-span-5 h-screen overflow-y-auto bg-white p-8 shadow-xl text-base">
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight">CUSTOMIZE YOUR LANYARD</h1>

            <LanyardSize
              lanyardSize={lanyardSize}
              setLanyardSize={setLanyardSize}
            />

            <LanyardColor
              lanyardColor={lanyardColor}
              setLanyardColor={setLanyardColor}
            />

            {/* TEXT — after COLOR */}
            <LanyardText
              lanyardText={lanyardText}
              setLanyardText={setLanyardText}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              fontSize={fontSize}
              setFontSize={setFontSize}
              textColor={textColor}
              setTextColor={setTextColor}
            />

           {/* Cards */}
<div>
  <h2 className="text-3xl font-bold mb-3">CARDS</h2>
  <div className="grid grid-cols-4 gap-3">
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
        <p className="text-sm font-medium leading-tight">{card.title}</p>
      </div>
    ))}
  </div>
</div>
            {/* <div>
              <h2 className="text-3xl font-bold mb-3">CARDS</h2>
              <div className="grid grid-cols-4 gap-2">
                {cards.map((card, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedCard(card)}
                    className={`cursor-pointer border rounded p-1 transition text-center ${
                      selectedCard?.title === card.title
                        ? "border-blue-500 ring-2 ring-blue-400"
                        : "border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    <img src={card.src} alt={card.title} className="w-full mb-1" />
                    <p className="text-lg">{card.title}</p>
                  </div>
                ))}
              </div>
            </div> */}

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