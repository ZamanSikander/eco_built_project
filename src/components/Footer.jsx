import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Text */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2023 Eco Built connect. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <Link
              to="/PrivacyPolicy"
              className="text-sm hover:text-gray-900 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/TermsOfServices"
              className="text-sm hover:text-gray-900 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
