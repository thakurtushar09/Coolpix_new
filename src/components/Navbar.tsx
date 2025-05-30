'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="p-2">
        <div className="w-[90%] mx-auto p-4 md:p-10 flex items-center justify-between border border-gray-300 rounded-lg bg-transparent">
          <div className="text-zinc-800">
            <Link href={'/'}>
              <Image 
                src={"/logo.png"} 
                alt="logo-image" 
                height={300} 
                width={300} 
                className="h-10 w-auto md:h-12" 
              />
            </Link>
          </div>
       
          <div className="items-center gap-5 justify-evenly hidden md:flex">
            <Link href={"/"}>
              <h1 className="text-white font-medium text-lg hover:text-orange-500 transition-colors">Home</h1>
            </Link>
            <Link href={'/Services'}>
              <h1 className="text-white font-medium text-lg hover:text-orange-500 transition-colors">Services</h1>
            </Link>
            <Link href={'/About'}>
              <h1 className="text-white font-medium text-lg hover:text-orange-500 transition-colors">About</h1>
            </Link>
            <Link href={'/Contact'}>
              <h1 className="text-white font-medium text-lg hover:text-orange-500 transition-colors">Contact</h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-white transition-transform duration-300" />
            ) : (
              <Menu size={28} className="text-white transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-screen w-72 bg-white z-40 transform transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden shadow-2xl border-l border-gray-300 rounded-l-lg overflow-y-auto`}>
          <div className="pt-4 px-6">
            <div className="flex items-center justify-between mb-8">
              <Image 
                src={"/logo.png"} 
                alt="logo-image" 
                height={300} 
                width={300} 
                className="h-10 w-auto" 
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {[
                { href: "/", label: "Home" },
                { href: "/Services", label: "Services" },
                { href: "/About", label: "About" },
                { href: "/Contact", label: "Contact" }
              ].map((item, index) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group"
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <h1 className="text-black font-medium text-xl hover:text-orange-500 transition-colors">
                      {item.label}
                    </h1>
                    <span className="ml-auto text-gray-500 group-hover:text-black transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="h-px bg-gray-300 mt-2 w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-300 bg-white">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Coolpix
            </div>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;