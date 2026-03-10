import { useState } from "react";

const fontFamilies = [
  "Arial",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Verdana",
  "Impact",
  "Trebuchet MS",
];

const colorOptions = [
  "Black", "White", "Red", "Blue", "Green", "Yellow",
  "Orange", "Pink", "Purple", "Gold", "Silver",
];

function LanyardText({
  lanyardText, setLanyardText,
  fontFamily, setFontFamily,
  fontSize, setFontSize,
  textColor, setTextColor,
  spaceBetweenText, setSpaceBetweenText,
  spaceBetweenTextImage, setSpaceBetweenTextImage,
}) {
  const [sides, setSides] = useState("1 Side");
  const [activeTab, setActiveTab] = useState("customize");
  const [orderNotes, setOrderNotes] = useState("");
  const [uploadedArtwork, setUploadedArtwork] = useState(null);

  const colorMap = {
    Black: "#000000", White: "#FFFFFF", Red: "#EF4444",
    Blue: "#3B82F6", Green: "#22C55E", Yellow: "#EAB308",
    Orange: "#F97316", Pink: "#EC4899", Purple: "#8B5CF6",
    Gold: "#CA8A04", Silver: "#9CA3AF",
  };

  const handleColorChange = (colorName) => {
    setTextColor(colorMap[colorName]);
  };

  const selectedColorName = Object.entries(colorMap).find(
    ([, val]) => val === textColor
  )?.[0] || "Black";

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">TEXT IMPRINT</h2>

      {/* SIDES SELECTOR */}
      <div className="flex items-center gap-4">
        <label className="text-xl font-bold tracking-widest text-gray-500 uppercase">Sides</label>
        <div className="relative">
          <select
            value={sides}
            onChange={(e) => setSides(e.target.value)}
            className="border border-gray-300 rounded px-4 py-3 text-xl font-medium appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <option>1 Side</option>
            <option>2 Sides</option>
          </select>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</span>
        </div>
      </div>

      {/* TABS */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("customize")}
          className={`px-6 py-3 text-xl font-bold tracking-wide transition border-b-2 ${
            activeTab === "customize"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          CUSTOMIZE TEXT
        </button>
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-6 py-3 text-xl font-bold tracking-wide transition border-b-2 ${
            activeTab === "upload"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          UPLOAD ARTWORK
        </button>
      </div>

      {/* CUSTOMIZE TEXT TAB */}
      {activeTab === "customize" && (
        <div className="space-y-5">

          {/* TEXT + TEXT COLOR */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">Text</label>
              <input
                type="text"
                placeholder="Enter your text..."
                value={lanyardText}
                onChange={(e) => setLanyardText(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-3 text-xl mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">Text Color</label>
              <div className="relative mt-1">
                <select
                  value={selectedColorName}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xl appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                >
                  {colorOptions.map((color) => (
                    <option key={color}>{color}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</span>
              </div>
            </div>
          </div>

          {/* FONT FAMILY + FONT SIZE */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">Font Family</label>
              <div className="relative mt-1">
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-xl appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                >
                  {fontFamilies.map((font) => (
                    <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                Font Size <span className="text-blue-500 text-xl">{fontSize}</span>
              </label>
              <input
                type="range"
                min="8"
                max="72"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
            </div>
          </div>

          {/* SPACE BETWEEN TEXT + SPACE BETWEEN TEXT & IMAGE */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                Space Between Text <span className="text-blue-500 text-xl">{spaceBetweenText}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={spaceBetweenText}
                onChange={(e) => setSpaceBetweenText(Number(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                Space Between Text & Image <span className="text-blue-500 text-xl">{spaceBetweenTextImage}</span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={spaceBetweenTextImage}
                onChange={(e) => setSpaceBetweenTextImage(Number(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
            </div>
          </div>

        </div>
      )}

      {/* UPLOAD ARTWORK TAB */}
      {activeTab === "upload" && (
        <div className="space-y-3">
          <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">Upload your artwork</label>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition"
            onClick={() => document.getElementById("artworkUpload").click()}
          >
            {uploadedArtwork ? (
              <div>
                <img src={uploadedArtwork} alt="Uploaded artwork" className="max-h-32 mx-auto mb-2 rounded" />
                <p className="text-xl text-gray-500">Click to change</p>
              </div>
            ) : (
              <div>
                <p className="text-3xl text-gray-300 mb-2">☁️</p>
                <p className="text-xl font-medium text-gray-500">Click to upload artwork</p>
                <p className="text-lg text-gray-400 mt-1">PNG, JPG, SVG supported</p>
              </div>
            )}
          </div>
          <input
            id="artworkUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => setUploadedArtwork(ev.target.result);
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>
      )}

      {/* ORDER NOTES */}
      <div>
        <label className="text-sm font-bold tracking-widest text-gray-500 uppercase">Order Notes</label>
        <textarea
          placeholder="Add any special instructions..."
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded px-4 py-3 text-xl mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
        />
      </div>

    </div>
  );
}

export default LanyardText;