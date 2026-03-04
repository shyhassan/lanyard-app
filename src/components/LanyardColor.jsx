import { useState } from "react";

function LanyardColor({ lanyardColor, setLanyardColor }) {
  const [showPicker, setShowPicker] = useState(false);

  const presetColors = [
    "#000000",
    "#FFFFFF",
    "#EF4444",
    "#F97316",
    "#EAB308",
    "#22C55E",
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold">COLORS</h2>
<div className="grid grid-cols-5 gap-3">
  {presetColors.map((color, index) => (
    <div
      key={index}
      onClick={() => { setLanyardColor(color); setShowPicker(false); }}
      className={`aspect-square w-full rounded-lg cursor-pointer border-2 transition-all duration-200 ${
        lanyardColor === color
          ? "border-blue-500 scale-105"
          : "border-gray-300 hover:scale-105"
      }`}
      style={{ backgroundColor: color }}
    />
  ))}

  {/* Custom Color Box */}
  <div
    onClick={() => setShowPicker(!showPicker)}
    className="aspect-square w-full rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:scale-105 transition text-xl"
  >
    +
  </div>
</div>





      {/* <div className="grid grid-cols-5 gap-4"> */}
      {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {presetColors.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              setLanyardColor(color);
              setShowPicker(false);
            }}
            className={`w-14 h-14 rounded-lg cursor-pointer border-2 transition-all duration-200 ${
              lanyardColor === color
                ? "border-blue-500 scale-105"
                : "border-gray-300 hover:scale-105"
            }`}
            style={{ backgroundColor: color }}
          />
        ))} */}

        {/* Custom Color Box */}
        {/* <div
          onClick={() => setShowPicker(!showPicker)}
          className="w-14 h-14 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          +
        </div>
      </div> */}

      {showPicker && (
        <div className="mt-3">
          <input
            type="color"
            value={lanyardColor}
            onChange={(e) => setLanyardColor(e.target.value)}
            className="w-20 h-10 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default LanyardColor;