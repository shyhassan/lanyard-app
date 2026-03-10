export const breakawayList = [
  { 
    title: "No Breakaway", 
    src: "https://cdn.shopify.com/s/files/1/0642/6437/2430/files/no-breakaway_10ca1cdf-8034-446e-8118-f332959f87bb.webp?v=1756220819" 
  },
  { 
    title: "Cylindrical", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/Cylindrical%2BBreakaway+(6)+(6).png", 
    displayWidth: 5.8,
    displayTop: { "1": -43, "7/8": -40, "3/4": -36, "5/8": -33, "1/2": -29 },
  },
  { 
    title: "XBA", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/XBA%2B-%2BBreakaway%2B2+(1)+(2).png", 
    displayWidth: 4.7,
    displayTop: { "1": -30, "7/8": -27, "3/4": -24, "5/8": -22, "1/2": -20 },
  },
  { 
    title: "XBASEW", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/XBASEW+-+Breakaway+Clip+(1).png", 
    displayWidth: 4.5,
    displayTop: { "1": -20, "7/8": -18, "3/4": -16, "5/8": -15, "1/2": -13 },
  },
  { 
    title: "XBASEW White", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/XBASEW+White+-+Breakaway+Clip+(1).png", 
    displayWidth: 4.5,
    displayTop: { "1": -20, "7/8": -18, "3/4": -16, "5/8": -15, "1/2": -13 },
  },
  { 
    title: "XBA2P", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/XBA2P+-+Breakaway+2P+(1).png", 
    displayWidth: 4.4,
    displayTop: { "1": -27, "7/8": -25, "3/4": -22, "5/8": -20, "1/2": -18 },
  },
  { 
    title: "XVEL", 
    src: "https://azxecommercewebsite.s3.us-east-1.amazonaws.com/XVEL+-+Breakaway+(1).png", 
    displayWidth: 4.3,
    displayTop: { "1": -20, "7/8": -18, "3/4": -16, "5/8": -15, "1/2": -13 },
  },
];

function LanyardBreakaway({ selectedBreakaway, setSelectedBreakaway }) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">BREAKAWAY</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {breakawayList.map((breakaway, index) => (
          <div
            key={index}
            onClick={() => setSelectedBreakaway(breakaway)}
            className={`cursor-pointer border rounded-lg p-3 transition text-center ${
              selectedBreakaway?.title === breakaway.title
                ? "border-blue-500 ring-2 ring-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center justify-center h-14 mb-2">
              <img
                src={breakaway.src}
                alt={breakaway.title}
                className="max-h-full object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm font-medium break-words leading-tight text-gray-700">
              {breakaway.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanyardBreakaway;