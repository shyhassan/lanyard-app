function LanyardColor({ lanyardColor, setLanyardColor }) {
  const colors = [
    { name: "Red", hex: "#EF4444" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Green", hex: "#10B981" },
    { name: "Yellow", hex: "#F59E0B" },
    { name: "Gray", hex: "#6B7280" },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2">Lanyard Color</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setLanyardColor(color.hex)}
            className={`w-8 h-8 rounded-full border-2 transition ${
              lanyardColor === color.hex
                ? "border-black"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color.hex }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default LanyardColor;