import { Phone, Mail } from "lucide-react";

export default function HelpSection() {
  return (
    <div className="w-[90%] bg-gray-100 rounded-xl p-6 md:flex items-start justify-between gap-6 mx-auto">
     
      <div className="md:w-1/2">
        <p className="text-sm text-orange-500 font-medium">Sales and Support</p>
        <h2 className="text-2xl font-bold mt-1 mb-2 text-gray-900">
          Do you need help?
        </h2>
        <div className="w-12 h-1 bg-orange-500 mb-4"></div>
        <p className="text-sm text-gray-700 mb-6">
          Our customer representative helps you to understand what we offer for your business goals.
        </p>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2">
          Reach us <span className="text-sm">⚫</span>
        </button>
      </div>

    
      <div className="bg-white p-6 rounded-xl shadow-md md:w-1/2 space-y-6">
        <div className="flex items-start gap-4">
          <Phone className="text-orange-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-sm text-gray-600">+91 8076168701</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Mail className="text-orange-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-sm text-gray-600">Coolpiximageservices@gmail.com</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}