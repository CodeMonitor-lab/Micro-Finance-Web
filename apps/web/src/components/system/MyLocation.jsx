import React from "react";

const MyLocation = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Our Location
        </h2>
        <p className="mt-2 text-gray-600">
          Visit our office or reach us easily
        </p>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=Your+Office+Address+Here&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address Info */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          📍 Your Company Name, Street Name, City, State, PIN
        </p>
        <p className="text-sm text-gray-700 mt-1">
          📞 +91 XXXXXXXXXX | ✉️ support@yourdomain.com
        </p>
      </div>

    </section>
  );
};

export default MyLocation;
