"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "E-commerce Business Owner",
    description:
      "The background removal service saved me countless hours of work! My product photos now look professional and consistent across my entire catalog. The quick turnaround time was impressive.",
    rating: "★★★★★",
  },
  {
    name: "Priya Patel",
    role: "Photography Studio Manager",
    description:
      "Your color correction service transformed our dull product images into vibrant, eye-catching visuals. The attention to detail in maintaining natural tones while enhancing appeal is remarkable.",
    rating: "★★★★☆",
  },
  {
    name: "Amit Joshi",
    role: "Marketing Director",
    description:
      "The graphic design team exceeded our expectations with our campaign materials. They perfectly captured our brand identity while bringing fresh creative ideas to the table.",
    rating: "★★★★★",
  },
  {
    name: "Neha Gupta",
    role: "Fashion Blogger",
    description:
      "I'm amazed by the product dusting service - it made my jewelry photos look magazine-worthy without any harsh editing. The natural yet polished results are exactly what I needed.",
    rating: "★★★★★",
  },
];

const services = [
  {
    title: "Background Change",
    icon: "🌅",
    description: "Professional background replacement services",
  },
  {
    title: "Background Remove",
    icon: "✂️",
    description: "Clean background removal with precision",
  },
  {
    title: "Color Correction",
    icon: "🎨",
    description: "Precise color grading and correction",
  },
  {
    title: "View All",
    icon: "🔍",
    description: "Explore all our editing services",
    link: "/Services",
  },
];

export default function EditingServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
      setIsAnimating(false);
    }, 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-900 text-white rounded-t-xl p-8 relative overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl bg-black/30 rounded-full p-2 hover:bg-black/50 z-10"
          >
            ⬅️
          </button>

          <div className="relative h-64">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : direction === "right"
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="text-center px-10 h-full flex flex-col justify-center">
                  <div className="text-yellow-400 text-xl mb-2">{review.rating}</div>
                  <p className="text-orange-400 font-medium">{review.role}</p>
                  <h2 className="text-xl font-bold mt-1">{review.name}</h2>
                  <p className="mt-3 text-gray-300 text-sm max-w-xl mx-auto">
                    {review.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl bg-black/30 rounded-full p-2 hover:bg-black/50 z-10"
          >
            ➡️
          </button>
        </div>

        <div className="bg-white rounded-b-xl p-8 shadow-lg">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Our <span className="text-orange-500">Services</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) =>
              service.link ? (
                <Link href={service.link} key={service.title}>
                  <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </Link>
              ) : (
                <div
                  key={service.title}
                  className="bg-gray-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}