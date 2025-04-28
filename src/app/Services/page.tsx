'use client';
import BeforeAfterSlider from "@/components/BeforeAndAfter";
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
      beforeImage: "/bg-change-before.png",
      afterImage: "/contact-form-image.jpg"
    },
    {
      title: "Model/Product Retouching",
      description: "Enhance products and models naturally",
      beforeImage: "/retouching-before.jpg",
      afterImage: "/retouching-after.jpg"
    },
    {
      title: "Ghost  Editing",
      description: "Invisible mannequin effects for apparel",
      beforeImage: "/ghost-before.jpg",
      afterImage: "/ghost-after.jpg"
    },
    {
      title: "Garment Color Correction",
      description: "Accurate color representation",
      beforeImage: "/halte.jpg",
      afterImage: "/contact-form-image.jpg"
    },
    {
      title: "Shadow Creation",
      description: "Realistic shadows for products",
      beforeImage: "/halte.jpg",
      afterImage: "/contact-form-image.jpg"
    },
    {
      title: "Background Cleaning",
      description: "Flawless product backgrounds",
      beforeImage: "/halte.jpg",
      afterImage: "/contact-form-image.jpg"
    },
    {
      title: "Product Dusting",
      description: "Remove dust and scratches",
      beforeImage: "/halte.jpg",
      afterImage: "/contact-form-image.jpg"
    },
    {
      title: "Graphics & Web Design",
      description: "Custom design solutions",
      beforeImage: "/halte.jpg",
      afterImage: "/contact-form-image.jpg"
    }
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
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

      {/* Services Grid Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <BeforeAfterSlider
                  beforeImage={service.beforeImage}
                  afterImage={service.afterImage}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact and Footer */}
      <Contactdiv />
      <div className="pt-12"></div>
      <Footer />
    </div>
  );
};

export default Page;
