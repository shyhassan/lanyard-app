import { lanyardSizes } from "../config/LanyardSizes";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor, selectedHook }) {
  if (!selectedCard) return null;

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["3/4"];

  // Hook width (proportional to strap)
  const hookWidth = selectedHook ? currentSize.strapWidth * 2 : 0;

  return (
    <div className="relative flex flex-col items-center">

      {/* STRAPS CONTAINER */}
      <div
        className="relative flex justify-center items-start w-full"
        style={{ height: `${currentSize.strapHeight + currentSize.connectorHeight + hookWidth}px` }}
      >

        {/* CONNECTOR (top front of straps) */}
        <div
          className="absolute bg-gray-400"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.connectorHeight}px`,
            top: 240,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3, // in front of straps
          }}
        />

        {/* LEFT STRAP */}
        <div
          className="absolute"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            backgroundColor: lanyardColor,
            top: `${currentSize.connectorHeight}px`, // start below connector
            left: "50%",
            transform: `translateX(${currentSize.left.translateX}) rotate(${currentSize.left.rotate}deg)`,
            transformOrigin: currentSize.left.origin,
            zIndex: 1,
          }}
        />

        {/* RIGHT STRAP */}
        <div
          className="absolute"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            backgroundColor: lanyardColor,
            top: `${currentSize.connectorHeight}px`, // start below connector
            left: "50%",
            transform: `translateX(${currentSize.right.translateX}) rotate(${currentSize.right.rotate}deg)`,
            transformOrigin: currentSize.right.origin,
            zIndex: 1,
          }}
        />

        {/* HOOK (below connector, above card) */}
        {selectedHook && (
          <img
            src={selectedHook.src}
            alt={selectedHook.name}
            className="absolute z-2"
            style={{
              width: `${hookWidth}px`,
              height: "auto",
              top: `${currentSize.connectorHeight}px`, // just below connector
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </div>

      {/* CARD (below hook) */}
      <img
        src={selectedCard.src}
        alt={selectedCard.title}
        className="relative rounded-lg shadow-xl mt-2"
        style={{
          width: `${currentSize.cardWidth}px`,
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default LanyardCard;