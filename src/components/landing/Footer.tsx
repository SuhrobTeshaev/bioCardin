import React from "react";
import { Heart, Mail, Phone, MapPin, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <h3 className="text-xl font-bold text-blue-900">BioCardin</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Innovative heart health solutions backed by science and trusted by
              healthcare professionals worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-700 mr-2" />
                <span className="text-gray-700">+1 (800) 555-HEART</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-700 mr-2" />
                <span className="text-gray-700">contact@biocardin.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-700 mr-2" />
                <span className="text-gray-700">
                  123 Medical Plaza, Boston, MA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  About BioCardin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Heart Health Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Clinical Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Healthcare Professionals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Patient Support
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory Information */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Regulatory Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  FDA Approval
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Safety Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Prescribing Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Medication Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Report Side Effects
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Trust & Certifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-2 border rounded-md">
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <span className="text-xs text-center text-gray-600">
                  FDA Approved
                </span>
              </div>
              <div className="flex flex-col items-center p-2 border rounded-md">
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <span className="text-xs text-center text-gray-600">
                  GMP Certified
                </span>
              </div>
              <div className="flex flex-col items-center p-2 border rounded-md">
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <span className="text-xs text-center text-gray-600">
                  ISO 13485
                </span>
              </div>
              <div className="flex flex-col items-center p-2 border rounded-md">
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <span className="text-xs text-center text-gray-600">
                  HIPAA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} BioCardin Pharmaceuticals. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Cookie Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Sitemap
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400 text-center">
          <p>
            BioCardin® is a registered trademark. This product is not intended
            to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-2">
            Always consult with your healthcare provider before starting any
            medication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
