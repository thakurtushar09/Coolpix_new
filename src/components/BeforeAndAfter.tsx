"use client";

import Image from "next/image";
import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  title: string;
  description: string;
}

export const BeforeAfterSlider = ({
  beforeUrl,
  afterUrl,
  title,
  description,
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showLabels, setShowLabels] = useState(true);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
    setShowLabels(false);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    setShowLabels(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setShowLabels(true), 300); 
  };

  return (
    <div className="w-full max-w-[700px] mx-auto">
      <div
        className="relative w-full aspect-[70/45] overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} 
      >

        <Image alt="Before image" fill draggable={false} priority src={beforeUrl} />
        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[70/45] overflow-hidden select-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image alt="After image" fill draggable={false} priority src={afterUrl} />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>


        {showLabels && (
          <div className="absolute top-3 left-3 z-20 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded">
            Before
          </div>
        )}

        {showLabels && (
          <div className="absolute top-3 right-3 z-20 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded">
            After
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
};