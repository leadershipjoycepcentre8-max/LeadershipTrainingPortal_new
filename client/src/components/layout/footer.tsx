import { GraduationCap } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#00ff5e] text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="text-college-green h-8 w-8 mr-3" />
              <span className="text-xl font-bold">Leadership JOYCEP</span>
            </div>
            <p className="text-gray-300">
              TVET-accredited, NASCOP-accredited, and NITA-recognized institution offering
              high-quality training in health, community development, business, and computing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-college-green">Home</button></li>
              <li><button onClick={() => scrollToSection("courses")} className="text-gray-300 hover:text-college-green">Courses</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-college-green">Services</button></li>
              <li><button onClick={() => scrollToSection("admissions")} className="text-gray-300 hover:text-college-green">Admissions</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">0727 708 240</li>
              <li className="text-gray-300">0732 522 089</li>
              <li className="text-gray-300">leadershipjoycepcentre8@gmail.com</li>
              <li className="text-gray-300">
                2nd & 4th Floor, Kawa Centre, Adjacent to Kingdom Bank, Opp. Co-operative Bank,
                Kitengela.
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <span className="text-2xl text-gray-300 hover:text-college-green cursor-pointer">📘</span>
              <span className="text-2xl text-gray-300 hover:text-college-green cursor-pointer">🐦</span>
              <span className="text-2xl text-gray-300 hover:text-college-green cursor-pointer">📸</span>
              <span className="text-2xl text-gray-300 hover:text-college-green cursor-pointer">📱</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            Leadership JOYCEP Training College – Transforming lives through quality training.
            TVET • NASCOP • NITA Accredited.
          </p>
        </div>

      </div>
    </footer>
  );
}
