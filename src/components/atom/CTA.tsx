import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-[90%] md:max-w-4xl mx-auto z-20 border border-white/20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252525] mb-4">
          Ready to Transform Your Ideas?
        </h2>
        <p className="opacity-700 mb-6 max-w-2xl mx-auto">
          Let&apos;s collaborate to build innovative digital solutions that
          drive your business forward with cutting-edge AI and web technologies.
        </p>
        <Link href="/contact">
          <Button className="bg-[#024FF0] hover:bg-[#0240d4] hover:scale-105 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us Now!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
