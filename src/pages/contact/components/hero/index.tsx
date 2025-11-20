import pavers from "../../../../assets/images/pavers.jpeg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Hero({ title = "Contact Us" }) {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pavers})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16">
        
        {/* PAGE TITLE */}
        <h1 className="text-white text-[60px] font-bold drop-shadow-lg">
          {title}
        </h1>

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 mt-3 text-white/80 text-sm">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-white/60" />

          <span className="text-white font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
}
