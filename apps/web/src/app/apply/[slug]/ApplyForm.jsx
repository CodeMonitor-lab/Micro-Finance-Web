"use client";

import { useState } from "react";

const ApplyForm = ({ service }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    amount: "",
    notes: "",
    otp: "",
    documents: {
      aadhaar: null,
      pan: null,
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      documents: {
        ...form.documents,
        [e.target.name]: e.target.files[0],
      },
    });
  };

  /* 🔐 MOCK OTP VERIFY (replace with API later) */
  const verifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setOtpVerified(true);
      setLoading(false);
      setStep(5);
    }, 1200);
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow p-8">

      <h1 className="text-2xl font-bold mb-1">
        Apply for {service.title}
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Step {step} of 6
      </p>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-5">
          <Input label="Full Name" name="name" onChange={handleChange} />
          <Input label="Mobile Number" name="mobile" onChange={handleChange} />
          <Input label="Email (Optional)" name="email" onChange={handleChange} />

          <Primary onClick={() => setStep(2)}>Next →</Primary>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-5">
          <Input label="Required Loan Amount" name="amount" type="number" onChange={handleChange} />
          <Textarea label="Purpose / Notes" name="notes" onChange={handleChange} />

          <NavButtons back={() => setStep(1)} next={() => setStep(3)} />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <Review label="Name" value={form.name} />
          <Review label="Mobile" value={form.mobile} />
          <Review label="Amount" value={form.amount} />
          <Review label="Purpose" value={form.notes || "—"} />

          <NavButtons back={() => setStep(2)} next={() => setStep(4)} nextLabel="Verify Mobile →" />
        </div>
      )}

      {/* STEP 4 🔐 OTP */}
      {step === 4 && (
        <div className="space-y-5">
          <p className="text-sm text-gray-600">
            OTP sent to <b>{form.mobile}</b>
          </p>

          <Input label="Enter OTP" name="otp" onChange={handleChange} />

          <button
            onClick={verifyOtp}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      )}

      {/* STEP 5 📄 DOCUMENT UPLOAD */}
      {step === 5 && otpVerified && (
        <div className="space-y-5">
          <File label="Aadhaar Card" name="aadhaar" onChange={handleFile} />
          <File label="PAN Card" name="pan" onChange={handleFile} />

          <NavButtons back={() => setStep(4)} next={() => setStep(6)} nextLabel="Final Review →" />
        </div>
      )}

      {/* STEP 6 ✅ FINAL SUBMIT */}
      {step === 6 && (
        <div className="space-y-4">
          <Review label="Loan Type" value={service.title} />
          <Review label="Applicant" value={form.name} />
          <Review label="Amount" value={form.amount} />
          <Review label="Documents" value="Uploaded ✔" />

          <button className="w-full bg-green-600 text-white py-3 rounded-md">
            Submit Application ✔
          </button>
        </div>
      )}
    </div>
  );
};

/* UI Components */
const Input = ({ label, name, type = "text", onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input name={name} type={type} onChange={onChange} className="w-full border rounded-md px-4 py-2" required />
  </div>
);

const Textarea = ({ label, name, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea name={name} rows={4} onChange={onChange} className="w-full border rounded-md px-4 py-2" />
  </div>
);

const File = ({ label, name, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input type="file" name={name} onChange={onChange} className="w-full" />
  </div>
);

const Review = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2 text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const Primary = ({ children, onClick }) => (
  <button onClick={onClick} className="w-full bg-blue-600 text-white py-3 rounded-md">
    {children}
  </button>
);

const NavButtons = ({ back, next, nextLabel = "Next →" }) => (
  <div className="flex gap-4">
    <button onClick={back} className="w-full border py-3 rounded-md">← Back</button>
    <button onClick={next} className="w-full bg-blue-600 text-white py-3 rounded-md">
      {nextLabel}
    </button>
  </div>
);

export default ApplyForm;
