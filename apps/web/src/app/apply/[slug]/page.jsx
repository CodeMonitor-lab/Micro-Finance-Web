import React from "react";
import { notFound } from "next/navigation";
import services from "../../../data/services.json";
import ApplyForm from "./ApplyForm";

const Page = async ({ params }) => {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-3">

        {/* LEFT: Loan Summary */}
        <aside className="bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-900">Loan Summary</h2>

          <div className="mt-4 space-y-3 text-sm">
            <p><span className="font-medium">Loan Type:</span> {service.title}</p>
            <p><span className="font-medium">Purpose:</span> {service.desc}</p>
            <p><span className="font-medium">Processing:</span> 24–48 hours</p>
            <p><span className="font-medium">Repayment:</span> Flexible EMI</p>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            🔒 Secure & encrypted application
          </p>
        </aside>

        {/* RIGHT: Step Form */}
        <ApplyForm service={service} />
      </div>
    </section>
  );
};

export default Page;
