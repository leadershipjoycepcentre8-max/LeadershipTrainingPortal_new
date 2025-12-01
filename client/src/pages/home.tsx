import { useEffect } from "react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Courses from "@/components/sections/courses";
import Services from "@/components/sections/services";
import Admissions from "@/components/sections/admissions";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Home() {

  // SEO Title
  useEffect(() => {
    document.title = "Leadership JOYCEP Training College – Professional Training & Counselling";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <div className="bg-yellow-50 border-l-4 border-college-green py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="text-college-green text-2xl mt-1">📅</div>
                <div>
                  <h3 className="text-lg font-semibold text-college-dark">
                    Special Training Schedule – February 2026
                  </h3>
                  <p className="text-sm md:text-base text-yellow-600 font-semibold">
                    VCT Training: 11th – 24th February 2026 &nbsp;|&nbsp; Adherence Training: 25th – 31st February 2026
                  </p>
                  <p className="text-sm md:text-base text-college-gray mt-1">
                    Computer Packages: <span className="font-semibold">Ksh. 3,500</span> &nbsp;•&nbsp; Examination Body:{" "}
                    <span className="font-semibold">KNEC / CDACC</span>
                  </p>
                </div>
              </div>
              <div className="flex md:justify-end">
                <button
                  onClick={() => 
                    document.getElementById("admissions")
                    ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-college-green text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <Courses />
        <Services />
        <Admissions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
