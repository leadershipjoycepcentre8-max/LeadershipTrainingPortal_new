import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  const whyChooseUs = [
    "Our centre supports both hearing and hard-of-hearing learners (KSL inclusive environment).",
    "Comprehensive training across diverse human service fields.",
    "Qualified instructors with backgrounds in Psychology, Social Work, Health Sciences, and Education.",
    "Hands-on learning: fieldwork, internships, practicum, community engagement, and skills development.",
    "Student-centered learning with individualized academic support.",
    "Career-focused programs aligned with current industry needs.",
    "Strong learner support network and mentorship.",
    "Accredited and recognized nationally, ensuring high training standards.",
    "Flexible learning options (full-time, part-time, weekend).",
    "Pathway to higher learning and professional growth.",
    "NASCOP Accredited Training Centre.",
    "KNEC Registered Centre for Diploma & Certificate programs.",
    "CDACC Approved institution.",
    "High employability rate among our graduates.",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            About Us
          </h2>
          <p className="text-xl text-college-gray max-w-3xl mx-auto">
            Leadership JOYCEP Training College – A center of excellence in developing
            compassionate, skilled, and transformative professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Vision / Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-college-dark mb-4">Our Vision</h3>
            <p className="text-college-gray mb-8">
              To be a leading institution in developing compassionate, skilled, and
              transformative professionals who promote mental wellness, community empowerment,
              and holistic human development.
            </p>

            <h3 className="text-2xl font-semibold text-college-dark mb-4">Our Mission</h3>
            <p className="text-college-gray mb-8">
              To provide quality, practical, and value-based training, adding joy to people’s
              lives, and empowering learners to serve with competence, integrity, and empathy.
            </p>
          </div>

          {/* Why Choose Us */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-college-dark">
                Why Choose Us?
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-college-green h-5 w-5 mt-1 mr-3" />
                    <p className="text-college-gray text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
