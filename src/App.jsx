import { useState } from "react";
import "./index.css";
import LanyardCard from "./components/LanyardCard";
import LanyardSize from "./components/LanyardSizeSelector";
import LanyardColor from "./components/LanyardColor";
import LanyardHooks from "./components/LanyardHooks";
import LanyardText from "./components/LanyardText";
import { cards } from "./assets";
import { hooksList } from "./components/LanyardHooks";
import LanyardFinishing from "./components/LanyardFinishing";
import { finishingList } from "./components/LanyardFinishing";
import LanyardBreakaway from "./components/LanyardBreakaway";
import { breakawayList } from "./components/LanyardBreakaway";
import LanyardLogo from "./components/LanyardLogo";

function App() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [lanyardSize, setLanyardSize] = useState("1");
  const [lanyardColor, setLanyardColor] = useState("#c6c8cd");
  const [selectedHook, setSelectedHook] = useState(hooksList[2]);
  const [lanyardText, setLanyardText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [fontSize, setFontSize] = useState(14);
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [selectedFinishing, setSelectedFinishing] = useState(finishingList[0]);
  const [selectedBreakaway, setSelectedBreakaway] = useState(breakawayList[0]);
  const [spaceBetweenText, setSpaceBetweenText] = useState(16);
  const [spaceBetweenTextImage, setSpaceBetweenTextImage] = useState(16);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(50);
  const [logoPosition, setLogoPosition] = useState(0);
  const [logoRepeat, setLogoRepeat] = useState(1);
  const [logoSpacing, setLogoSpacing] = useState(60);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 h-full">

{/* LEFT — PREVIEW */}
<div className="md:col-span-7 h-screen overflow-y-auto flex items-start justify-center bg-gray-50 p-8 pt-12">
  <div style={{ transform: "scale(1.3)", transformOrigin: "top center" }}>
    <LanyardCard
  selectedCard={selectedCard}
  lanyardSize={lanyardSize}
  lanyardColor={lanyardColor}
  selectedHook={selectedHook}
  lanyardText={lanyardText}
  fontFamily={fontFamily}
  fontSize={fontSize}
  textColor={textColor}
  selectedFinishing={selectedFinishing}
  selectedBreakaway={selectedBreakaway}
  spaceBetweenText={spaceBetweenText}
  spaceBetweenTextImage={spaceBetweenTextImage}
  
selectedLogo={selectedLogo}
logoSize={logoSize}
logoPosition={logoPosition}
logoRepeat={logoRepeat}
logoSpacing={logoSpacing}
  />

  </div>
</div>

        {/* RIGHT — OPTIONS */}
<div className="md:col-span-5 h-screen overflow-y-auto bg-white shadow-xl">
  <div className="space-y-8 p-8" style={{ transform: "scale(1.0)", transformOrigin: "top" }}>
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
                lanyardText={lanyardText} setLanyardText={setLanyardText}
                fontFamily={fontFamily} setFontFamily={setFontFamily}
                fontSize={fontSize} setFontSize={setFontSize}
                textColor={textColor} setTextColor={setTextColor}
                spaceBetweenText={spaceBetweenText} setSpaceBetweenText={setSpaceBetweenText}
                spaceBetweenTextImage={spaceBetweenTextImage} setSpaceBetweenTextImage={setSpaceBetweenTextImage}
            />

           {/* Cards */}
<div>
  <h2 className="text-3xl font-bold mb-3">CARD</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
      <p className="text-xs sm:text-sm font-medium break-words leading-tight">{card.title}</p>
    </div>
  ))}
</div>

  {/* <div className="grid grid-cols-4 gap-3">
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
  </div> */}
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

           <LanyardLogo
  selectedLogo={selectedLogo}
  setSelectedLogo={setSelectedLogo}
  logoSize={logoSize}
  setLogoSize={setLogoSize}
  logoPosition={logoPosition}
  setLogoPosition={setLogoPosition}
  logoRepeat={logoRepeat}
  setLogoRepeat={setLogoRepeat}
  logoSpacing={logoSpacing}
  setLogoSpacing={setLogoSpacing}
/>

            {/* Hooks */}
            <LanyardHooks
              selectedHook={selectedHook}
              setSelectedHook={setSelectedHook}
            />

            {/* Finishing Option */}
            <LanyardFinishing
              selectedFinishing={selectedFinishing}
              setSelectedFinishing={setSelectedFinishing}
            />

            {/* Breakaway */}
          <LanyardBreakaway
              selectedBreakaway={selectedBreakaway}
              setSelectedBreakaway={setSelectedBreakaway}
          />



          </div>
        </div>

      </div>
    </div>
  );
}

export default App;