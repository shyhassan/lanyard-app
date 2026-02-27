import { lanyardSizes } from "../config/LanyardSizes";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor, selectedHook }) {
  if (!selectedCard) return null;

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["3/4"];

  // Hook size
  const hookWidth = selectedHook ? currentSize.strapWidth * 2 : 0;

  return (
    <div className="relative flex flex-col items-center">

      {/* STRAPS CONTAINER */}
      <div
        className="relative flex justify-center items-start w-full"
        style={{ height: `${currentSize.strapHeight}px` }}
      >
        {/* LEFT STRAP */}
        <div
          className="absolute rounded-full shadow-lg"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            background: `linear-gradient(to bottom, ${lanyardColor}, #00000022)`,
            top: 0,
            left: "50%",
            transform: `translateX(${currentSize.left.translateX}) rotate(${currentSize.left.rotate}deg)`,
            transformOrigin: currentSize.left.origin,
            zIndex: 1,
          }}
        />

        {/* RIGHT STRAP */}
        <div
          className="absolute rounded-full shadow-lg"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            background: `linear-gradient(to bottom, ${lanyardColor}, #00000022)`,
            top: 0,
            left: "50%",
            transform: `translateX(${currentSize.right.translateX}) rotate(${currentSize.right.rotate}deg)`,
            transformOrigin: currentSize.right.origin,
            zIndex: 1,
          }}
        />

        {/* METAL CONNECTOR */}
        <div
          className="absolute rounded-full bg-gray-400 shadow-md"
          style={{
            width: `${currentSize.strapWidth * 1.5}px`,
            height: `${currentSize.connectorHeight}px`,
            bottom: selectedHook ? `${hookWidth / 2}px` : "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />

        {/* HOOK */}
        {selectedHook && (
          <img
            src={selectedHook.src}
            alt={selectedHook.name}
            className="absolute z-3"
            style={{
              width: `${hookWidth}px`,
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </div>

      {/* CARD */}
      <img
        src={selectedCard.src}
        alt={selectedCard.title}
        className="relative rounded-lg shadow-xl"
        style={{
          width: `${currentSize.cardWidth}px`,
          zIndex: 4,
          marginTop: selectedHook ? `${hookWidth}px` : "0px",
        }}
      />
    </div>
  );
}

export default LanyardCard;