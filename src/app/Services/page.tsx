"use client";

import { BeforeAfterSlider } from "@/components/BeforeAndAfter";
import Contactdiv from "@/components/ContactDiv";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Page = () => {
  const services = [
    {
      title: "Background Change",
      description: "Professional background replacement",
      beforeImage: "/background-change-before.jpg",
      afterImage: "/background-change-after.jpg",
    },
    {
      title: "Model/Product Retouching",
      description: "Enhance products and models naturally",
      beforeImage: "/retouching-before.jpg",
      afterImage: "/retouching-after.jpg",
    },
    {
      title: "Ghost  Editing",
      description: "Invisible mannequin effects for apparel",
      beforeImage: "/ghost-before.jpg",
      afterImage: "/ghost-after.jpg",
    },
    {
      title: " Color Correction",
      description: "Accurate color representation",
      beforeImage: "/color-correction-before.jpg",
      afterImage: "/color-correction-after.jpg",
    },
    {
      title: "Shadow Creation",
      description: "Realistic shadows for products",
      beforeImage: "/shadow-creation-before.jpg",
      afterImage: "/shadow-creation-after.jpg",
    },
    {
      title: "Background Cleaning",
      description: "Flawless product backgrounds",
      beforeImage: "/cleaning-before.jpg",
      afterImage: "/cleaning-after.jpg",
    },
    {
      title: "Product Dusting",
      description: "Remove dust and scratches",
      beforeImage: "/dusting-before.jpg",
      afterImage: "/dusting-after.jpg",
    },
    {
      title: "Graphics & Web Design",
      description: "Custom design solutions",
      beforeImage: "/graphics-before.jpg",
      afterImage: "/graphics-after.jpg",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="relative h-[80vh]">
        <div className="absolute inset-0 overflow-hidden m-4 md:m-6 rounded-lg">
          <Image
            src="/halte.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col pt-10">
          <Navbar />
          <div className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-extrabold text-center">
              Professional <span className="text-orange-500">Services</span>
            </h1>
            <div className="w-32 h-1 bg-orange-500 rounded-full transition-all duration-300 hover:w-24"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <BeforeAfterSlider
                  beforeUrl={service.beforeImage}
                  afterUrl={service.afterImage}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contactdiv />
      <div className="pt-12"></div>
      <Footer />
    </div>
  );
};

export default Page;
