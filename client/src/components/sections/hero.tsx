export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center py-20 bg-white"
    >
      {/* School Logo */}
      <img
        src="/logo.png"
        alt="Leadership JOYCEP Training College Logo"
        className="w-40 h-40 object-contain mb-6"
      />

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-college-dark leading-tight max-w-3xl">
        Leadership JOYCEP Training College
      </h1>

      <p className="mt-4 text-base md:text-lg text-college-gray max-w-2xl">
        Transforming lives through accredited, compassionate, and practical training in
        Counselling, Social Sciences, Business, Applied Sciences, and Computing.
      </p>

      {/* Accreditation badges */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-1 rounded-full bg-green-50 text-xs md:text-sm font-semibold text-college-green border border-college-green">
          TVET Accredited – Ministry of Education
        </span>
        <span className="px-4 py-1 rounded-full bg-green-50 text-xs md:text-sm font-semibold text-college-green border border-college-green">
          NASCOP Accredited – Ministry of Health
        </span>
        <span className="px-4 py-1 rounded-full bg-green-50 text-xs md:text-sm font-semibold text-college-green border border-college-green">
          NITA Accredited Training
        </span>
      </div>

      {/* Mission & Vision Box */}
      <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl text-left">
        <h3 className="text-xl font-bold text-college-dark mb-2 text-center">Our Vision</h3>
        <p className="text-college-gray text-sm mb-4 text-center">
          To be a leading institution in developing compassionate, skilled, and
          transformative professionals who promote mental wellness, community empowerment,
          and holistic human development.
        </p>

        <h3 className="text-xl font-bold text-college-dark mb-2 text-center">Our Mission</h3>
        <p className="text-college-gray text-sm text-center">
          To provide quality, practical, and value-based training, adding joy to people’s
          lives, and empowering learners to serve with competence, integrity, and empathy.
        </p>
      </div>

      {/* Call to Action */}
      <button
        onClick={() =>
          document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-10 px-8 py-3 bg-college-green text-white text-lg rounded-md shadow hover:bg-green-600 transition"
      >
        Register for Monthly Intake
      </button>
    </section>
  );
}
