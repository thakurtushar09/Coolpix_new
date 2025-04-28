import { Eye, Target, HeartHandshake,  ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Contactdiv from "@/components/ContactDiv";
import Footer from "@/components/Footer";

interface CommitmentCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const CommitmentCard = ({ icon: Icon, title, description }: CommitmentCardProps) => {
  return (
    <div className="flex flex-col p-8 bg-white border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group hover:border-orange-500/20">
      <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-lg bg-orange-500/10 text-orange-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  );
};

const commitments = [
  {
    icon: Eye,
    title: "Our Vision",
    description: "To redefine visual excellence by pushing creative boundaries while maintaining authenticity in every pixel we touch."
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "Deliver exceptional editing services that empower businesses and creators to showcase their best selves to the world."
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    description: "Quality, integrity, and innovation guide every project. We believe in building trust through consistent excellence."
  }
];

export default function About() {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero Image Container */}
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

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col pt-10">
          <Navbar />
          <div className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-extrabold text-center">
              About <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-white text-lg md:text-xl text-center max-w-2xl mb-6">
              Our story, vision, and commitment to excellence
            </p>
            <div className="w-32 h-1 bg-orange-500 rounded-full transition-all duration-300 hover:w-24"></div>
          </div>
        </div>
      </div>

      {/* Commitments Section */}
      <div className="relative z-20 -mt-16 md:-mt-24 px-4">
        <div className="w-[90%] mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-orange-500">Commitments</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <CommitmentCard key={index} {...commitment} />
            ))}
          </div>
        </div>
      </div>

    
      <div className="w-full px-4 mt-10">
        <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl py-10 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400 px-4">
            Our Services
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full px-4">
            {/* Service Cards */}
            <div className="w-full max-w-2xl lg:max-w-none lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full h-[300px] sm:h-[400px] bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-amber-400 transition-all duration-300 group overflow-hidden">
                <h1 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  Background Change
                </h1>
                <div className="relative h-[200px] sm:h-[280px] rounded-lg overflow-hidden">
                  <Image
                    src={"/background-change.jpg"}
                    alt="background-change"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">
                      Seamlessly replace backgrounds for professional product shots
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[300px] sm:h-[400px] bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-amber-400 transition-all duration-300 group overflow-hidden">
                <h1 className="text-white text-xl sm:text-2xl font-bold mb-4">Retouching</h1>
                <div className="relative h-[200px] sm:h-[280px] rounded-lg overflow-hidden">
                  <Image
                    src={"/Retouching.png"}
                    alt="retouching"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">
                      Flawless skin and product retouching for perfect images
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* See All Button */}
            <div className="w-full max-w-md lg:w-1/3 h-full">
              <Link href={"/Services"}>
                <button className="w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex flex-col items-center justify-center gap-4 p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer">
                  <span className="text-white text-xl sm:text-2xl font-bold text-center">
                    Explore All Services
                  </span>
                  <ArrowBigRight size={40} className="text-white animate-pulse" />
                  <span className="text-white/80 text-sm text-center">
                    10+ professional editing services
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contactdiv />

      {/* Footer */}
      <div className="pt-12"></div>
      <Footer />
    </div>
  );
}