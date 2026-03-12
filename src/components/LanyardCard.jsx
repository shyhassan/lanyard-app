import { lanyardSizes } from "../config/LanyardSizes";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor, selectedHook, lanyardText, fontFamily, fontSize, textColor, selectedFinishing, selectedBreakaway, spaceBetweenText, spaceBetweenTextImage }) {
  if (!selectedCard) return null;

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["1"];
  const hookHeight = selectedHook?.hookHeight || 64;
  const dynamicCardTop = currentSize.cardTop + (hookHeight - 64);
  const hookDisplayWidth = selectedHook?.displayWidth || currentSize.hookWidth;
  const hookDisplayTop =
    selectedHook?.displayTop?.[lanyardSize] !== undefined
      ? selectedHook.displayTop[lanyardSize]
      : selectedHook?.displayTop !== undefined
      ? selectedHook.displayTop
      : currentSize.hookTop + (currentSize.verticalOffset || 0);

  const neckStrapTop = currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0) + (currentSize.neckStrapOffset || 0);
  const connectorTop = currentSize.connectorTop + (currentSize.verticalOffset || 0);

  const svgBackground = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='51 -87.5 102 150'>
      <path fill='${lanyardColor}' d='M153-87.5l-22,45v60l22,45H51l22-45v-60l-22-45H153z'/>
    </svg>`
  )}`;

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

        {/* NECK STRAP */}
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden flex items-center justify-center"
          style={{
            width: `${currentSize.strapWidth * (currentSize.neckStrapWidth || 5.5)}px`,
            height: `${currentSize.strapWidth}px`,
            top: `${neckStrapTop}px`,
            backgroundColor: lanyardColor,
            background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.15) 100%), ${lanyardColor}`,
            zIndex: 0,
          }}
        >
          {lanyardText && (
            <span
              style={{
                fontFamily,
                fontSize: `${fontSize}px`,
                color: textColor,
                whiteSpace: "nowrap",
                display: "inline-block",
                letterSpacing: `${spaceBetweenText}px`,
                userSelect: "none",
              }}
            >
              {lanyardText}
            </span>
          )}
        </div>

        {/* BREAKAWAY */}
        {selectedBreakaway && selectedBreakaway.title !== "No Breakaway" && (
          <img
            src={selectedBreakaway.src}
            alt={selectedBreakaway.title}
            style={{
              position: "absolute",
              width: `${currentSize.strapWidth * (selectedBreakaway.displayWidth || 2.5)}px`,
              top: `${neckStrapTop + (selectedBreakaway.displayTop?.[lanyardSize] ?? 0)}px`,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 5,
            }}
          />
        )}

        {/* CONNECTOR / FINISHING */}
        {selectedFinishing?.src ? (
          <>
            {/* SVG background */}
            <img
              src={svgBackground}
              alt="connector background"
              style={{
                position: "absolute",
                width: `${currentSize.strapWidth * (currentSize.connectorSvgWidth || 2)}px`,
                top: `${connectorTop + (currentSize.connectorSvgOffset ?? 0)}px`,
                left: "50%",
                transform: `translateX(-50%) scale(${currentSize.connectorSvgScale || 1})`,
                transformOrigin: "center top",
                zIndex: 3,
              }}
            />
            {/* Finishing image */}
            <img
  src={selectedFinishing.src}
  alt={selectedFinishing.title}
  style={{
    position: "absolute",
    width: `${currentSize.strapWidth * (selectedFinishing.displayWidth || 1.5)}px`,
    height: selectedFinishing.displayHeight ? `${selectedFinishing.displayHeight}px` : "auto",
    top: `${connectorTop + (selectedFinishing.displayTop?.[lanyardSize] ?? 0)}px`,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 4,
    filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.2))",
  }}
/>
          </>
        ) : (
          <div
            className="absolute"
            style={{
              width: `${currentSize.strapWidth}px`,
              height: `${currentSize.connectorHeight}px`,
              top: `${connectorTop}px`,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              backgroundColor: lanyardColor,
              background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
            }}
          />
        )}

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
            clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)",
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
                letterSpacing: `${spaceBetweenText}px`,
                marginTop: `${spaceBetweenTextImage}px`,
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
            clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%)",
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
                letterSpacing: `${spaceBetweenText}px`,
                marginTop: `${spaceBetweenTextImage}px`,
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
            style={{
              position: "absolute",
              width: `${hookDisplayWidth}px`,
              top: `${hookDisplayTop}px`,
              left: "50%",
              transform: "translateX(-50%)",
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