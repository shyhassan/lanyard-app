import { lanyardSizes } from "../config/LanyardSizes";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor, selectedHook, lanyardText, fontFamily, fontSize, textColor }) {
  if (!selectedCard) return null;

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["1"];
  const hookHeight = selectedHook?.hookHeight || 64;
  const dynamicCardTop = currentSize.cardTop + (hookHeight - 64);
  const hookDisplayWidth = selectedHook?.displayWidth || currentSize.hookWidth;
  const hookDisplayTop = selectedHook?.displayTop || (currentSize.hookTop + (currentSize.verticalOffset || 0));

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
            background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
          }}
        />

        {/* LEFT STRAP + TEXT */}
        <div
          className="absolute overflow-hidden flex items-center justify-center"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
            top: `${currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0)}px`,
            left: "50%",
            transform: `translateX(${currentSize.left.translateX}) rotate(${currentSize.left.rotate}deg)`,
            transformOrigin: currentSize.left.origin,
            zIndex: 1,
          }}
        >
          {lanyardText && (
            <span
              style={{
                fontFamily,
                fontSize: `${fontSize}px`,
                color: textColor,
                whiteSpace: "nowrap",
                transform: "rotate(90deg)",
                display: "inline-block",
                letterSpacing: "0.15em",
                userSelect: "none",
              }}
            >
              {lanyardText}
            </span>
          )}
        </div>

        {/* RIGHT STRAP + TEXT */}
        <div
          className="absolute overflow-hidden flex items-center justify-center"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
            top: `${currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0)}px`,
            left: "50%",
            transform: `translateX(${currentSize.right.translateX}) rotate(${currentSize.right.rotate}deg)`,
            transformOrigin: currentSize.right.origin,
            zIndex: 1,
          }}
        >
          {lanyardText && (
            <span
              style={{
                fontFamily,
                fontSize: `${fontSize}px`,
                color: textColor,
                whiteSpace: "nowrap",
                transform: "rotate(-90deg)",
                display: "inline-block",
                letterSpacing: "0.15em",
                userSelect: "none",
              }}
            >
              {lanyardText}
            </span>
          )}
        </div>

        {/* HOOK */}
        {selectedHook && (
          <img
            src={selectedHook.src}
            alt={selectedHook.name}
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              width: `${hookDisplayWidth}px`,
              top: `${hookDisplayTop}px`,
              zIndex: 2,
              filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.35))",
            }}
          />
        )}
      </div>

      {/* CARD */}
      <img
        src={selectedCard.src}
        alt={selectedCard.title}
        className="relative"
        style={{
          width: `${currentSize.cardWidth}px`,
          top: `${dynamicCardTop}px`,
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default LanyardCard;