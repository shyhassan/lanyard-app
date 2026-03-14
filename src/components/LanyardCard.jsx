import { lanyardSizes } from "../config/LanyardSizes";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor, selectedHook, lanyardText, fontFamily, fontSize, textColor, selectedFinishing, selectedBreakaway, spaceBetweenText, spaceBetweenTextImage, selectedLogo, logoSize, logoPosition, logoRepeat, logoSpacing }) {
  if (!selectedCard) return null;

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["1"];
  const hookHeight = selectedHook?.hookHeight || 64;

  const hasSvgFinishing = selectedFinishing?.src ? true : false;

  const dynamicCardTop = hasSvgFinishing && selectedHook?.svgCardTop?.[lanyardSize]
    ? selectedHook.svgCardTop[lanyardSize]
    : currentSize.cardTop + (hookHeight - 64);

  const hookDisplayWidth = hasSvgFinishing
    ? (selectedHook?.svgDisplayWidth?.[lanyardSize] ?? selectedHook?.displayWidth ?? currentSize.hookWidth)
    : (selectedHook?.displayWidth ?? currentSize.hookWidth);

  const hookDisplayTop = hasSvgFinishing
    ? (selectedHook?.svgDisplayTop?.[lanyardSize] !== undefined
        ? selectedHook.svgDisplayTop[lanyardSize]
        : currentSize.hookTop + (currentSize.verticalOffset || 0))
    : (selectedHook?.displayTop?.[lanyardSize] !== undefined
        ? selectedHook.displayTop[lanyardSize]
        : selectedHook?.displayTop !== undefined
        ? selectedHook.displayTop
        : currentSize.hookTop + (currentSize.verticalOffset || 0));

  const hookDisplayLeft = hasSvgFinishing
    ? (selectedHook?.svgDisplayLeft?.[lanyardSize] ?? 0)
    : 0;

  const neckStrapTop = currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0) + (currentSize.neckStrapOffset || 0);
  const connectorTop = currentSize.connectorTop + (currentSize.verticalOffset || 0);
  const leftStrapTop = currentSize.connectorHeight + (currentSize.strapTopOffset || 0) + (currentSize.verticalOffset || 0);

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
        style={{ height: `${(currentSize.strapHeight + currentSize.connectorHeight + (selectedHook ? hookDisplayWidth : 0)) * (currentSize.scale || 1)}px` }}
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
            <div
              style={{
                position: "absolute",
                width: `${currentSize.strapWidth * (currentSize.connectorStemWidth || 0.3)}px`,
                height: `${currentSize.connectorStemHeight || 40}px`,
                top: `${connectorTop + (currentSize.connectorSvgOffset ?? 0) + (currentSize.connectorStemTop || 50)}px`,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: lanyardColor,
                background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
                zIndex: 6,
                borderRadius: "2px 2px 40% 40%",
              }}
            />
            <img
              src={selectedFinishing.src}
              alt={selectedFinishing.title}
              style={{
                position: "absolute",
                width: `${currentSize.strapWidth * (
                  typeof selectedFinishing.displayWidth === "object"
                    ? (selectedFinishing.displayWidth?.[lanyardSize] ?? 1.5)
                    : (selectedFinishing.displayWidth || 1.5)
                )}px`,
                height: selectedFinishing.displayHeight
                  ? `${typeof selectedFinishing.displayHeight === "object"
                      ? (selectedFinishing.displayHeight?.[lanyardSize] ?? "auto")
                      : selectedFinishing.displayHeight}px`
                  : "auto",
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

        {/* LEFT STRAP + TEXT + LOGO */}
        <div
          className="absolute overflow-hidden flex items-center justify-center"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
            top: `${leftStrapTop}px`,
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
          {selectedLogo && Array.from({ length: logoRepeat }).map((_, i) => (
            <img
              key={`left-logo-${i}`}
              src={selectedLogo.src}
              alt={selectedLogo.name}
              style={{
                position: "absolute",
                width: `${logoSize}px`,
                transform: "rotate(90deg)",
                top: `50%`,
                marginTop: `${logoPosition + i * (logoSize + logoSpacing) - (logoRepeat * (logoSize + logoSpacing)) / 2}px`,
                objectFit: "contain",
                userSelect: "none",
              }}
            />
          ))}
        </div>

        {/* RIGHT STRAP + TEXT + LOGO */}
        <div
          className="absolute overflow-hidden flex items-center justify-center"
          style={{
            width: `${currentSize.strapWidth}px`,
            height: `${currentSize.strapHeight}px`,
            background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%), ${lanyardColor}`,
            top: `${leftStrapTop}px`,
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
          {selectedLogo && Array.from({ length: logoRepeat }).map((_, i) => (
            <img
              key={`right-logo-${i}`}
              src={selectedLogo.src}
              alt={selectedLogo.name}
              style={{
                position: "absolute",
                width: `${logoSize}px`,
                transform: "rotate(-90deg)",
                top: `50%`,
                marginTop: `${logoPosition + i * (logoSize + logoSpacing) - (logoRepeat * (logoSize + logoSpacing)) / 2}px`,
                objectFit: "contain",
                userSelect: "none",
              }}
            />
          ))}
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
              left: `calc(50% + ${hookDisplayLeft}px)`,
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