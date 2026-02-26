import { lanyardSizes } from "../config/LanyardSizes";
import { useEffect, useRef, useState } from "react";

function LanyardCard({ selectedCard, lanyardSize, lanyardColor }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  const currentSize = lanyardSizes[lanyardSize] || lanyardSizes["3/4"];

  // calculate scale based on container width
  useEffect(() => {
    function handleResize() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      // assume design width is 400px, adjust scale proportionally
      setScale(containerWidth / 400);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center w-full h-full">

      {/* STRAPS */}
      <div
        className="relative flex justify-center w-full"
        style={{ height: `${currentSize.strapHeight * scale}px` }}
      >
        {/* LEFT STRAP */}
        <div
          className="absolute rounded shadow-md transition-all duration-300"
          style={{
            width: `${currentSize.strapWidth * scale}px`,
            height: `${currentSize.strapHeight * scale}px`,
            backgroundColor: lanyardColor,
            top: 0,
            left: "50%",
            transform: `translateX(${currentSize.left.translateX}) rotate(${currentSize.left.rotate}deg)`,
            transformOrigin: currentSize.left.origin,
          }}
        />

        {/* RIGHT STRAP */}
        <div
          className="absolute rounded shadow-md transition-all duration-300"
          style={{
            width: `${currentSize.strapWidth * scale}px`,
            height: `${currentSize.strapHeight * scale}px`,
            backgroundColor: lanyardColor,
            top: 0,
            left: "50%",
            transform: `translateX(${currentSize.right.translateX}) rotate(${currentSize.right.rotate}deg)`,
            transformOrigin: currentSize.right.origin,
          }}
        />

        {/* CONNECTOR */}
        <div
          className="absolute rounded shadow transition-all duration-300"
          style={{
            width: `${currentSize.strapWidth * scale}px`,
            height: `${currentSize.connectorHeight * scale}px`,
            backgroundColor: lanyardColor,
            bottom: -10 * scale,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* CARD */}
      <img
        src={selectedCard.src}
        alt={selectedCard.title}
        className="rounded-lg shadow-xl transition-all duration-300"
        style={{
          width: `${currentSize.cardWidth * scale}px`,
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default LanyardCard;