import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold">
            Simple & Secure Microfinance Solutions
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Easy loans, fast approval, and flexible repayment options designed
            for individuals, businesses, and communities.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100"
            >
              View & apply Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center">Our Loan Services</h2>
        <p className="text-center text-gray-600 mt-2">
          Choose the right financial support for your needs
        </p>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Personal Loan",
            "Business Loan",
            "Women Empowerment Loan",
            "Agriculture Loan",
            "Group Loan",
            "Emergency Loan",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600">{service}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Affordable loans with simple documentation and flexible EMIs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">How It Works</h2>

          <div className="grid gap-8 mt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                1. Apply Online
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Fill out a simple application form in minutes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                2. Get Approved
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Quick verification and transparent approval process.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                3. Receive Funds
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Funds are transferred securely to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>

        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Fast Approval",
            "Secure Payments",
            "Flexible Repayment",
            "Customer Support",
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow">
              <p className="font-semibold text-blue-600">{item}</p>
              <p className="mt-2 text-sm text-gray-600">
                Designed to make your financial journey smooth and stress-free.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-3">
          Apply today and take the next step towards financial stability.
        </p>

        <Link
          href="/apply"
          className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100"
        >
          Apply for a Loan
        </Link>
      </section>
    </main>
  );
}
