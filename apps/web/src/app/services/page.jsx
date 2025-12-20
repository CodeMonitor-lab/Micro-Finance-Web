import React from "react";
import Link from "next/link";
import {
  Banknote,
  Briefcase,
  Users,
  HeartHandshake,
  Tractor,
  AlertCircle,
} from "lucide-react";

import services from '../../data/services.json'; // <-- import JSON directly

const iconMap = {
  "personal-loan": Banknote,
  "business-loan": Briefcase,
  "group-loan": Users,
  "women-loan": HeartHandshake,
  "agriculture-loan": Tractor,
  "emergency-loan": AlertCircle
};

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
          Our Financial Services
        </span>
        <h1 className="text-4xl font-bold text-gray-900">
          Apply for Microfinance Services
        </h1>
        <p className="mt-4 text-gray-600">
          Trusted, transparent, and customer-focused loan solutions designed
          to support your financial growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.slug];
          return (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <Icon size={22} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 flex-grow">
                {service.desc}
              </p>

              {/* CTA */}
              <Link
                href={`/apply/${service.slug}`}
                className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Apply Now →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
