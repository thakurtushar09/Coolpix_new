import { Camera, Palette, Laptop } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ActressServices from "@/components/Slidebar";
import Contactdiv from "@/components/ContactDiv";
import Footer from "@/components/Footer";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col p-8 bg-white border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group hover:border-orange-500/20">
      <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-lg bg-orange-500/10 text-orange-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a 
        href="#" 
        className="mt-auto text-orange-500 font-medium hover:underline self-start flex items-center gap-2 group-hover:gap-3 transition-all"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );
};

export default function Home() {
  const servicesData: ServiceCardProps[] = [
    {
      icon: Camera,
      title: "Professional Photo Editing",
      description: "Transform your images with expert editing for flawless, publication-ready results."
    },
    {
      icon: Palette,
      title: "Health & Beauty Retouching",
      description: "Specialized editing that enhances while maintaining natural textures and authenticity."
    },
    {
      icon: Laptop,
      title: "E-commerce Solutions",
      description: "Optimized product images that increase conversions and showcase your items perfectly."
    }
  ];

  return (
    <div className="relative w-full">
      
      <div className="relative h-screen">
       
        <div className="absolute inset-0 overflow-hidden m-4 md:m-6 rounded-lg">
          <Image
            src="/hero-image.jpg"
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
          <div className="flex-grow flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                Premium <span className="text-orange-500">Image</span> Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
                Elevate your <span className="text-orange-500">visuals</span> with our professional editing solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Browse Services
                </button>
                <button className="bg-white hover:bg-white/10 text-orange-500 border border-white px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

 
      <div className="relative z-20 -mt-16 md:-mt-24 px-4">
        <div className="w-[90%] mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What we <span className="text-orange-500">Offer?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      <ActressServices/>

      <Contactdiv/>

      
      

  
      <div className="pt-12"></div>

      <Footer/>
    </div>
  );
}