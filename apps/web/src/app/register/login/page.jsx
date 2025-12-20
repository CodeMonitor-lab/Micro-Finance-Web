import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Login to Your Account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Access your dashboard and manage your loans.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <Link href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>

          <Link href="/register" className="text-blue-600 hover:underline">
            Create Account
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Page;
