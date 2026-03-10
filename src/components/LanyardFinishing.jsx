export const finishingList = [
  { title: "Sewn", src: "" },
  { title: "Black Bead", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/BLACK+BEAD.png" },
  { title: "Slider", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/SLIDER.png" },
  { title: "Silver Bead", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/SILVER+BEAD.png" },
  { title: "Crimped (Small)", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+(SMALL).png" },
  { title: "Crimped (Large)", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+(LARGE).png" },
  { title: "Crimped BLK (Large)", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+BLK+(LARGE).png" },
  { title: "Crimped BLK (Small)", src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+BLK+(SMALL).png" },
];

function LanyardFinishing({ selectedFinishing, setSelectedFinishing }) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">FINISHING OPTION</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {finishingList.map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedFinishing(option)}
            className={`cursor-pointer border rounded-lg p-3 transition text-center ${
              selectedFinishing?.title === option.title
                ? "border-blue-500 ring-2 ring-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center justify-center h-12 mb-2">
              {option.src ? (
                <img
                  src={option.src}
                  alt={option.title}
                  className="max-h-full object-contain"
                />
              ) : (
                <div className="w-10 h-10 rounded border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                  <span className="text-xs text-gray-400">—</span>
                </div>
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium break-words leading-tight text-gray-700">
              {option.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanyardFinishing;