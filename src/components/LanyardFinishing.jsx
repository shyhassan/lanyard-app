export const finishingList = [
  { title: "Sewn", src: "" },
  { 
    title: "Black Bead", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/BLACK+BEAD.png",
    displayWidth: { "1": 2.2, "7/8":2.2,"3/4":2.2,"5/8": 2.3, "1/2": 2.4 },
    displayHeight: { "1": 40, "7/8":39, "3/4":37, "5/8":35, "1/2":30 },
    displayTop: { "1": 33, "7/8": 47, "3/4":35, "5/8":36, "1/2":33 },
  },
  { 
    title: "Slider", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/SLIDER.png",
    displayWidth: { "1": 2, "7/8":1.9,"3/4":2.0,"5/8":2.0,"1/2":2.1},
    displayHeight: { "1": 40, "7/8":35, "3/4":25, "5/8":25, "1/2":25 },
    displayTop: { "1": 35, "7/8": 50, "3/4":40, "5/8":42, "1/2":33 },
  },
  { 
    title: "Silver Bead", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/SILVER+BEAD.png",
    displayWidth: { "1": 2.2, "7/8":2.2,"3/4":2.2,"5/8":2.3,"1/2": 2.4,},
    displayHeight: { "1": 40, "7/8":39, "3/4": 37,"5/8":35, "1/2":30 },
    displayTop: { "1": 35, "7/8": 50, "3/4":35, "5/8":36, "1/2":33 },
  },
  { 
    title: "Crimped (Small)", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+(SMALL).png",
    displayWidth: { "1": 3.5, "7/8":3.3,"3/4":3.0,"5/8":3.4,"1/2": 3.1},
    displayHeight: { "1": 60, "7/8":55, "3/4":50, "5/8":49, "1/2":45 },
    displayTop: { "1": 22, "7/8":35, "3/4":29, "5/8":28, "1/2":25 },
  },
  { 
    title: "Crimped (Large)", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+(LARGE).png",
    displayWidth: { "1": 2.5, "7/8":2.4,"3/4":2.2,"5/8":2.5,"1/2":2.3},
    displayHeight: { "1": 60, "7/8":55, "3/4":50, "5/8":45, "1/2":40 },
    displayTop: { "1": 20, "7/8":40, "3/4":28, "5/8":30, "1/2":28 },
  },
  { 
    title: "Crimped BLK (Large)", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+BLK+(LARGE).png",
    displayWidth: { "1": 2.5, "7/8":2.3, "3/4":2.2,"5/8":2.4,"1/2":2.3},
    displayHeight: { "1": 60, "7/8":55, "3/4":50, "5/8":48, "1/2": 45},
    displayTop: { "1": 20, "7/8":38, "3/4":28, "5/8":29, "1/2":25 },
  },
  { 
    title: "Crimped BLK (Small)", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/custom-lanyard/CRIMPED+BLK+(SMALL).png",
    displayWidth: { "1": 3.1, "7/8":2.9, "3/4":2.9,"5/8":3.3,"1/2":3.2},
    displayHeight: { "1": 60, "7/8":58, "3/4":58, "5/8":50, "1/2":45 },
    displayTop: { "1": 25, "7/8":40, "3/4":25, "5/8":30, "1/2":25 },
  },
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