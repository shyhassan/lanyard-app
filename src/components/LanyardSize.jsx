function LanyardSize({ lanyardSize, setLanyardSize }) {
  const sizes = ["1", "7/8", "3/4", "5/8", "1/2"];

  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2">Lanyard Size</h3>
      <div className="flex gap-2">
        {sizes.map((size) => (
  <button
    key={size}
    onClick={() => setLanyardSize(size)}
    className={`px-3 py-1 rounded border transition ${
      lanyardSize === size
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
    }`}
  >
    {size}"
  </button>
))}
      </div>
    </div>
  );
}

export default LanyardSize;