import React from "react";
import { MyLocation } from "@/components/system";

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600">
          Have questions? We’re here to help you.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Office Address
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              📍 Your Company Name<br />
              Street Name, City, State, PIN
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Contact Details
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              📞 +91 XXXXXXXXXX<br />
              ✉️ support@yourdomain.com
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">
              Working Hours
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Monday – Friday: 9:30 AM – 6:00 PM
            </p>
          </div>
        </div>

      </div>

<div>
<MyLocation />
</div>
    </section>
  );
};

export default Page;
