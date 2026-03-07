function LanyardSizeSelector({ lanyardSize, setLanyardSize }) {
  const sizes = ["1", "7/8", "3/4", "5/8", "1/2"];

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">WIDTHS</h2>


      <div className="grid grid-cols-5 gap-3">
  {sizes.map((size) => (
    <div
      key={size}
      onClick={() => setLanyardSize(size)}
      className={`aspect-square w-full flex items-center justify-center rounded-lg cursor-pointer border-2 transition-all duration-200 ${
        lanyardSize === size
          ? "border-blue-500 bg-blue-50 scale-105"
          : "border-gray-300 hover:scale-105"
      }`}
    >
      <span className="font-semibold text-xl">{size}"</span>
    </div>
  ))}
</div>

      {/* <div className="grid grid-cols-5 gap-4"> */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => setLanyardSize(size)}
            className={`w-14 h-14 flex items-center justify-center rounded-lg cursor-pointer border-2 transition-all duration-200 ${
              lanyardSize === size
                ? "border-blue-500 bg-blue-50 scale-105"
                : "border-gray-300 hover:scale-105"
            }`}
          >
            <span className="font-semibold text-sm">{size}"</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default LanyardSizeSelector;