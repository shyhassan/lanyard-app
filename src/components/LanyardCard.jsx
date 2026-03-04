import { lanyardSizes } from "../config/LanyardSizes";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor, selectedHook }) {
  if (!selectedCard) return null;

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["3/4"];

  // Hook width (proportional to strap)
  const hookWidth = selectedHook ? currentSize.strapWidth * 4 : 0;

  return (
   <div
  className="relative flex flex-col items-center"
  style={{ transform: `scale(${currentSize.scale || 1})`, transformOrigin: "top center" }}
>
  {/* STRAPS CONTAINER */}
  <div
    className="relative flex justify-center items-start w-full"
    style={{ height: `${(currentSize.strapHeight + currentSize.connectorHeight + (selectedHook ? currentSize.hookWidth : 0)) * (currentSize.scale || 1)}px` }}
  >
    {/* CONNECTOR */}
    <div
      className="absolute"
      style={{
        width: `${currentSize.strapWidth}px`,
        height: `${currentSize.connectorHeight}px`,
        top: `${currentSize.connectorTop + (currentSize.verticalOffset || 0)}px`,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3,
        backgroundColor: lanyardColor,
      }}
    />
    
    {/* LEFT & RIGHT STRAPS */}
    <div
      className="absolute"
      style={{
        width: `${currentSize.strapWidth}px`,
        height: `${currentSize.strapHeight}px`,
        backgroundColor: lanyardColor,
        top: `${currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0)}px`,
        left: "50%",
        transform: `translateX(${currentSize.left.translateX}) rotate(${currentSize.left.rotate}deg)`,
        transformOrigin: currentSize.left.origin,
        zIndex: 1,
      }}
    />
    <div
      className="absolute"
      style={{
        width: `${currentSize.strapWidth}px`,
        height: `${currentSize.strapHeight}px`,
        backgroundColor: lanyardColor,
        top: `${currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0)}px`,
        left: "50%",
        transform: `translateX(${currentSize.right.translateX}) rotate(${currentSize.right.rotate}deg)`,
        transformOrigin: currentSize.right.origin,
        zIndex: 1,
      }}
    />

    {/* HOOK */}
    {selectedHook && (
      <img
        src={selectedHook.src}
        alt={selectedHook.name}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: `${currentSize.hookWidth}px`,
          top: `${currentSize.hookTop + (currentSize.verticalOffset || 0)}px`,
          zIndex: 2,
        }}
      />
    )}
  </div>

  {/* CARD */}
  <img
    src={selectedCard.src}
    alt={selectedCard.title}
    className="relative mt-2"
    style={{
      width: `${currentSize.cardWidth}px`,
      top: `${currentSize.cardTop + (currentSize.verticalOffset || 0)}px`,
      zIndex: 1,
    }}
  />
</div>
  );
}

export default LanyardCard;