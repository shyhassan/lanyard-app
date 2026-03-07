import { useState } from "react";

const fontFamilies = [
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Times New Roman", value: "Times New Roman, serif" },
  { label: "Courier New", value: "Courier New, monospace" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Verdana", value: "Verdana, sans-serif" },
  { label: "Impact", value: "Impact, sans-serif" },
  { label: "Trebuchet MS", value: "Trebuchet MS, sans-serif" },
];

function LanyardText({ lanyardText, setLanyardText, fontFamily, setFontFamily, fontSize, setFontSize, textColor, setTextColor }) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">TEXT</h2>

      {/* Text Input */}
      <div>
        <label className="text-2xl text-gray-500 font-medium">Your Text</label>
        <input
          type="text"
          placeholder="e.g. YOUR COMPANY NAME"
          value={lanyardText}
          onChange={(e) => setLanyardText(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
        />
      </div>

      {/* Font Family */}
      <div>
        <label className="text-2xl text-gray-500 font-medium">Fonts</label>
        <div className="grid grid-cols-2 gap-2 mt-1">
          {fontFamilies.map((font) => (
            <div
              key={font.value}
              onClick={() => setFontFamily(font.value)}
              className={`cursor-pointer border rounded p-2 transition text-center text-3xl ${
                fontFamily === font.value
                  ? "border-blue-500 ring-2 ring-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
              style={{ fontFamily: font.value }}
            >
              {font.label}
            </div>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div>
        <label className="text-2xl text-gray-500 font-medium">Font Size — {fontSize}px</label>
        <input
          type="range"
          min="8"
          max="32"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full mt-1 accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>8px</span>
          <span>32px</span>
        </div>
      </div>

      {/* Text Color */}
      <div>
        <label className="text-2xl text-gray-500 font-medium">Text Color</label>
        <div className="flex items-center gap-3 mt-1">
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-10 h-10 cursor-pointer rounded border border-gray-300"
          />
          <span className="text-xl text-gray-600">{textColor}</span>
        </div>
      </div>
    </div>
  );
}

export default LanyardText;