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
  useEffect(() => {
    document.title =
      "Leadership JOYCEP Training College – Accredited Professional Training";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* New Hero Section with Mission & Vision */}
        <Hero />

        {/* Special Training Schedule Banner */}
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
                    HTS / VCT Training: 
                    <span className="font-bold"> 2nd – 20th February 2026</span> &nbsp;|&nbsp;
                    Adherence Training: 
                    <span className="font-bold"> 23rd – 27th February 2026</span>
                  </p>
                  <p className="text-sm md:text-base text-college-gray mt-1">
                    Computer Packages: <span className="font-semibold">Ksh. 3,500</span>
                    &nbsp;•&nbsp; Exam Body: <span className="font-semibold">KNEC / CDACC</span>
                  </p>
                  <p className="text-xs md:text-sm text-college-gray mt-1">
                    TVET, NASCOP & NITA accredited institution.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-college-green text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Training Advert */}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-college-dark text-center mb-2">
              HTS / VCT & Adherence Training – February 2026 Advert
            </h3>
            <p className="text-center text-college-gray max-w-2xl mx-auto mb-6 text-sm md:text-base">
              Accredited by TVET, NASCOP, and NITA. View our official training advertisement below.
            </p>

            <div className="flex justify-center">
              <img
                src="/LEADERSHIP JOYCEP TRAINING COLLEGE.jpg"
                alt="Training Advert"
                className="w-full max-w-4xl rounded-xl shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </section>

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
