function LanyardCard({ selectedCard, lanyardSize, lanyardColor }) {
  if (!selectedCard) return null;

const sizeConfig = {
  "1": { cardWidth: 450, strapHeight: 270, strapWidth: 70 },
  "7/8": { cardWidth: 400, strapHeight: 240, strapWidth: 60 },
  "3/4": { cardWidth: 350, strapHeight: 210, strapWidth: 50 },
  "5/8": { cardWidth: 300, strapHeight: 180, strapWidth: 40 },
  "1/2": { cardWidth: 260, strapHeight: 150, strapWidth: 30 },
};

const currentSize = sizeConfig[lanyardSize] || sizeConfig["3/4"];

  return (
  <div className="relative inline-block">
    {/* Lanyard strap */}
    <div
      className="mx-auto mb-2 rounded"
      style={{
        width: `${currentSize.strapWidth}px`,
        height: `${currentSize.strapHeight}px`,
        backgroundColor: lanyardColor,
      }}
    />

    {/* Card */}
    <img
      src={selectedCard.src}
      alt={selectedCard.title}
      className="block rounded-lg shadow-lg"
      style={{ width: `${currentSize.cardWidth}px` }}
    />
  </div>
);
}

export default LanyardCard;

// {
//   return (
//     <div className="relative flex flex-col items-center mt-6">

//       {/* Lanyard String */}
//       <div className="w-1 h-12 bg-gray-700 rounded mb-2"></div>

//       {/* Card */}
//       <div className="relative inline-block">

//         {/* Card image */}
//         {/* <img
//   src={selectedCard.src}
//   alt={selectedCard.title}
//   className="block rounded-xl shadow-lg"
//   style={{ width: `${selectedCard.width}px`, height: `${selectedCard.height}px` }}
// /> */}
//         <img
//           src={selectedCard.src} 
//           alt={selectedCard.title}
//           className="w-full rounded-lg shadow-lg"
//            style={{ width: '400px', height: '' }} 
//     />


//         {/* Overlay with name and role */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <div className="w-20 h-20 mb-3 rounded-full bg-white flex items-center justify-center text-gray-700 font-bold shadow">
//             {name ? name.charAt(0).toUpperCase() : "?"}
//           </div>

//           <h2 className="text-lg font-bold text-black drop-shadow">
//             {name || "Your Name"}
//           </h2>
//           <p className="text-sm text-black drop-shadow">
//             {role}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }














// function LanyardCard({ name, role, selectedCard }) {
//   return (
//     <div className="relative flex flex-col items-center mt-6">
      
//       {/* Lanyard String */}
//       <div className="w-1 h-12 bg-gray-700 rounded mb-2"></div>

//       <div className="relative w-72">
//         {/* Card Image */}
//         <img
//           src={selectedCard.src}
//           alt={selectedCard.title}
//           className="w-full rounded-lg shadow-lg"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <div className="w-20 h-20 mb-3 rounded-full bg-white flex items-center justify-center text-gray-700 font-bold shadow">
//             {name ? name.charAt(0).toUpperCase() : "?"}
//           </div>

//           <h2 className="text-lg font-bold text-black drop-shadow">
//             {name || "Your Name"}
//           </h2>
//           <p className="text-sm text-black drop-shadow">
//             {role}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LanyardCard;










// function LanyardCard({ name, role }) {
//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Lanyard String */}
//       <div className="w-1 h-12 bg-gray-700 rounded mb-2"></div>

//       {/* Badge Card */}
//       <div
//         className={`border-4 p-6 rounded-lg w-72 text-center shadow-lg ${
//           role === 'Admin'
//             ? 'border-red-500 bg-red-50'
//             : role === 'Member'
//             ? 'border-green-500 bg-green-50'
//             : 'border-yellow-500 bg-yellow-50'
//         }`}
//       >
//         {/* Profile Placeholder */}
//         <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
//           {name ? name.charAt(0).toUpperCase() : "?"}
//         </div>

//         <h2 className="text-2xl font-bold mb-2">{name}</h2>
//         <p className="text-lg">{role}</p>
//       </div>
//     </div>
//   );
// }

// export default LanyardCard;