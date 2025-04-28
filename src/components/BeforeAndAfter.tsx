import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  description,
}) => {
  const [sliderPosition, setSliderPosition] = useState(0); // start with before image only
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
    setSliderPosition(100); // fully reveal after image on first click
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(e.target.value));
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div
        className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        onClick={!isRevealed ? handleClick : undefined}
      >
        {/* Before image full */}
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* After image clipped by slider */}
        {isRevealed && (
          <div
            className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={afterImage}
              alt="After"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        {/* Drag slider handle */}
        {isRevealed && (
          <>
            <div
              className="absolute top-0 bottom-0 w-1 bg-white z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center -translate-x-1/2">
                <span className="text-gray-700 text-xs font-bold">DRAG</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </>
        )}

        {/* Click prompt (before revealing) */}
        {!isRevealed && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white px-4 py-2 rounded-md shadow-lg text-sm font-medium text-gray-700">
              Click to compare before / after
            </div>
          </div>
        )}

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md">
          Before
        </div>
        {isRevealed && (
          <div
            className="absolute bottom-4 bg-black/50 text-white px-3 py-1 rounded-md"
            style={{ left: `calc(${sliderPosition}% + 1rem)` }}
          >
            After
          </div>
        )}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
