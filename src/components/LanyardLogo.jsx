export const logoList = [
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
  },
];

function LanyardLogo({ selectedLogo, setSelectedLogo, logoSize, setLogoSize, logoPosition, setLogoPosition, logoRepeat, setLogoRepeat, logoSpacing, setLogoSpacing }) {
  return (
    <div className="space-y-3 mt-4">
      <h2 className="text-3xl font-bold">LOGO</h2>

      {/* LOGO OPTIONS */}
      <div className="grid grid-cols-3 gap-3">
        {logoList.map((logo, index) => (
          <div
            key={index}
            onClick={() => setSelectedLogo(selectedLogo?.name === logo.name ? null : logo)}
            className={`cursor-pointer border rounded-lg p-3 transition text-center ${
              selectedLogo?.name === logo.name
                ? "border-blue-500 ring-2 ring-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center justify-center h-12 mb-2">
              <img src={logo.src} alt={logo.name} className="max-h-full object-contain" />
            </div>
            <p className="text-xs sm:text-sm font-medium">{logo.name}</p>
          </div>
        ))}
      </div>

      {/* CONTROLS — only show when a logo is selected */}
      {selectedLogo && (
        <div className="space-y-4 mt-2">

          {/* SIZE */}
          <div>
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-gray-700">Logo Size</label>
              <input
                type="number"
                min={5}
                max={800}
                value={logoSize}
                onChange={(e) => setLogoSize(Number(e.target.value))}
                className="w-16 text-sm border rounded px-2 py-1 text-center"
              />
            </div>
            <input
              type="range"
              min={5}
              max={300}
              value={logoSize}
              onChange={(e) => setLogoSize(Number(e.target.value))}
              className="w-full mt-1"
            />
          </div>

          {/* POSITION */}
          <div>
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-gray-700">Logo Position</label>
              <input
                type="number"
                min={-500}
                max={500}
                value={logoPosition}
                onChange={(e) => setLogoPosition(Number(e.target.value))}
                className="w-16 text-sm border rounded px-2 py-1 text-center"
              />
            </div>
            <input
              type="range"
              min={-500}
              max={500}
              value={logoPosition}
              onChange={(e) => setLogoPosition(Number(e.target.value))}
              className="w-full mt-1"
            />
          </div>

          {/* REPEAT COUNT */}
          <div>
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-gray-700">Logo Repeat</label>
              <input
                type="number"
                min={1}
                max={10}
                value={logoRepeat}
                onChange={(e) => setLogoRepeat(Number(e.target.value))}
                className="w-16 text-sm border rounded px-2 py-1 text-center"
              />
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={logoRepeat}
              onChange={(e) => setLogoRepeat(Number(e.target.value))}
              className="w-full mt-1"
            />
          </div>

          {/* SPACING BETWEEN LOGOS */}
          <div>
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-gray-700">Logo Spacing</label>
              <input
                type="number"
                min={0}
                max={300}
                value={logoSpacing}
                onChange={(e) => setLogoSpacing(Number(e.target.value))}
                className="w-16 text-sm border rounded px-2 py-1 text-center"
              />
            </div>
            <input
              type="range"
              min={0}
              max={300}
              value={logoSpacing}
              onChange={(e) => setLogoSpacing(Number(e.target.value))}
              className="w-full mt-1"
            />
          </div>

        </div>
      )}
    </div>
  );
}

export default LanyardLogo;