function LanyardCard({ name, role, selectedCard }) {
  return (
    <div className="relative flex flex-col items-center mt-6">

      {/* Lanyard String */}
      <div className="w-1 h-12 bg-gray-700 rounded mb-2"></div>

      {/* Card */}
      <div className="relative w-72">

        {/* Card image */}
        {/* <img
  src={selectedCard.src}
  alt={selectedCard.title}
  className="block rounded-xl shadow-lg"
  style={{ width: `${selectedCard.width}px`, height: `${selectedCard.height}px` }}
/> */}
        <img
          src={selectedCard.src} 
          alt={selectedCard.title}
          className="w-full rounded-lg shadow-lg"
           style={{ width: '460px', height: '' }} // Adjust to the actual PNG dimensions
    />


        {/* Overlay with name and role */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 mb-3 rounded-full bg-white flex items-center justify-center text-gray-700 font-bold shadow">
            {name ? name.charAt(0).toUpperCase() : "?"}
          </div>

          <h2 className="text-lg font-bold text-black drop-shadow">
            {name || "Your Name"}
          </h2>
          <p className="text-sm text-black drop-shadow">
            {role}
          </p>
        </div>

      </div>
    </div>
  );
}

export default LanyardCard;



















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