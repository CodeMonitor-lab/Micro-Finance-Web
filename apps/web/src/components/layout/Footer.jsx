export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">MicroFinance</h3>
          <p className="text-sm mt-2">
            Secure and reliable financial services for everyone.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} MicroFinance</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
