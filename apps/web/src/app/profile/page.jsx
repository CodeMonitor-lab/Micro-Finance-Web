import React from "react";

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="mt-2 text-gray-600">
          Manage your personal details and loan information.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              R
            </div>
            <div>
              <h2 className="font-semibold text-lg">Ram Kumar</h2>
              <p className="text-sm text-gray-500">ram@gmail.com</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <p>
              <span className="font-medium text-gray-700">Mobile:</span>{" "}
              +91 98765 43210
            </p>
            <p>
              <span className="font-medium text-gray-700">Address:</span>{" "}
              Chennai, Tamil Nadu
            </p>
            <p>
              <span className="font-medium text-gray-700">KYC Status:</span>{" "}
              <span className="text-green-600 font-semibold">Verified</span>
            </p>
          </div>

          <button className="mt-6 w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50">
            Edit Profile
          </button>
        </div>

        {/* Loan Summary */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Loan Overview
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Active Loan</p>
              <p className="text-xl font-bold text-blue-600 mt-1">
                Business Loan
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Outstanding Amount</p>
              <p className="text-xl font-bold text-red-600 mt-1">
                ₹45,000
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Monthly EMI</p>
              <p className="text-xl font-bold text-gray-900 mt-1">
                ₹3,200
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Next Due Date</p>
              <p className="text-xl font-bold text-gray-900 mt-1">
                15 Jan 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <p className="text-gray-700">
          Need help with your loan or profile?
        </p>
        <div className="flex gap-3">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Contact Support
          </button>
          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">
            View Applications
          </button>
        </div>
      </div>

    </section>
  );
};

export default Page;
