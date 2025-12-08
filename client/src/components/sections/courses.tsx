import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            Courses Offered
          </h2>
          <p className="text-xl text-college-gray max-w-3xl mx-auto">
            Accredited and practical training programs designed to equip learners with
            real skills for the health, community, business, and technology sectors.
          </p>
        </div>

        {/* SCHOOL OF SOCIAL SCIENCES */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-college-dark">
              School of Social Sciences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 font-semibold text-college-dark">Course Name</th>
                    <th className="p-3 font-semibold text-college-dark">Exam Body</th>
                    <th className="p-3 font-semibold text-college-dark">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-college-gray">

                  {/* Diploma & Certificate */}
                  <tr>
                    <td className="p-3">Diploma in Counselling Psychology</td>
                    <td className="p-3">KNEC / CDACC</td>
                    <td className="p-3">2 Years</td>
                  </tr>

                  <tr>
                    <td className="p-3">Certificate in Counselling Psychology</td>
                    <td className="p-3">KNEC / CDACC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                  <tr>
                    <td className="p-3">Higher Diploma in Counselling Psychology</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                  <tr>
                    <td className="p-3">Diploma in Social Work & Community Development</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">2 Years</td>
                  </tr>

                  <tr>
                    <td className="p-3">Certificate in Social Work & Community Development</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                  <tr>
                    <td className="p-3">Certificate in Community Health</td>
                    <td className="p-3">CDACC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                  {/* Short Courses */}
                  <tr>
                    <td className="p-3">HIV Testing Services (HTS / VCT)</td>
                    <td className="p-3">NASCOP</td>
                    <td className="p-3">3 Weeks</td>
                  </tr>

                  <tr>
                    <td className="p-3">Adherence Counselling</td>
                    <td className="p-3">NASCOP</td>
                    <td className="p-3">1 Week</td>
                  </tr>

                  <tr>
                    <td className="p-3">Kenya Sign Language (KSL)</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">3 Months</td>
                  </tr>

                  <tr>
                    <td className="p-3">Basic Computer Packages (For Social Sciences)</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">1 Month</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>


        {/* SCHOOL OF APPLIED SCIENCES */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-college-dark">
              School of Applied Sciences (Short Courses)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 font-semibold text-college-dark">Course Name</th>
                    <th className="p-3 font-semibold text-college-dark">Exam Body</th>
                    <th className="p-3 font-semibold text-college-dark">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-college-gray">

                  <tr>
                    <td className="p-3">First Aid</td>
                    <td className="p-3">NITA / Internal</td>
                    <td className="p-3">4 Days</td>
                  </tr>

                  <tr>
                    <td className="p-3">Fire Safety</td>
                    <td className="p-3">NITA / Internal</td>
                    <td className="p-3">4 Days</td>
                  </tr>

                  <tr>
                    <td className="p-3">Disaster Management</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">1 Week</td>
                  </tr>

                  <tr>
                    <td className="p-3">Basic Nutrition</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">1 Week</td>
                  </tr>

                  <tr>
                    <td className="p-3">Communicable Disease Control</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">1 Week</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>


        {/* SCHOOL OF BUSINESS */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-college-dark">
              School of Business
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 font-semibold text-college-dark">Course Name</th>
                    <th className="p-3 font-semibold text-college-dark">Exam Body</th>
                    <th className="p-3 font-semibold text-college-dark">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-college-gray">

                  <tr>
                    <td className="p-3">Diploma in Business Management</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">2 Years</td>
                  </tr>

                  <tr>
                    <td className="p-3">Certificate in Business Management</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                  <tr>
                    <td className="p-3">Diploma in Human Resource Management</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">2 Years</td>
                  </tr>

                  <tr>
                    <td className="p-3">Certificate in HR Management</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                  <tr>
                    <td className="p-3">Diploma in Project Management</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">2 Years</td>
                  </tr>

                  <tr>
                    <td className="p-3">Certificate in Project Management</td>
                    <td className="p-3">KNEC</td>
                    <td className="p-3">1 Year</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>



        {/* SCHOOL OF COMPUTING */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-college-dark">
              School of Computing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 font-semibold text-college-dark">Course Name</th>
                    <th className="p-3 font-semibold text-college-dark">Exam Body</th>
                    <th className="p-3 font-semibold text-college-dark">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-college-gray">

                  <tr>
                    <td className="p-3">Computer Packages</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">1 Month</td>
                  </tr>

                  <tr>
                    <td className="p-3">ICDL</td>
                    <td className="p-3">ICDL Africa</td>
                    <td className="p-3">3 Months</td>
                  </tr>

                  <tr>
                    <td className="p-3">Graphic Design</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">3 Months</td>
                  </tr>

                  <tr>
                    <td className="p-3">Data Analysis / Data Management</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">3 Months</td>
                  </tr>

                  <tr>
                    <td className="p-3">Introduction to Programming</td>
                    <td className="p-3">Internal</td>
                    <td className="p-3">3 Months</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
