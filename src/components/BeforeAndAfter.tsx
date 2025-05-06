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

  const handleMove = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(event.clientX, event.currentTarget);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(event.touches[0].clientX, event.currentTarget);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="w-full max-w-[700px] mx-auto">
      <div
        className="relative w-full aspect-[70/45] overflow-hidden select-none touch-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Image 
          alt="Before image" 
          fill 
          draggable={false} 
          priority 
          src={beforeUrl} 
          className="object-cover"
        />
        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[70/45] overflow-hidden select-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image 
            alt="After image" 
            fill 
            draggable={false} 
            priority 
            src={afterUrl} 
            className="object-cover"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 touch-none"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="bg-white absolute rounded-full h-8 w-8 -left-3.5 top-[calc(50%-16px)] flex items-center justify-center touch-none">
            <div className="h-3 w-3 rounded-full bg-gray-400" />
          </div>
        </div>
        {Math.round(sliderPosition) > 0 && (
          <div className="absolute top-3 left-3 z-20 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded">
            Before
          </div>
        )}
        {Math.round(sliderPosition) < 100 && (
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