import React from "react";
import { Heart, Mail, Phone, MapPin, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Unternehmensinformationen */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <h3 className="text-xl font-bold">
                <span className="text-blue-900">bio</span>
                <span className="text-red-500">Cardin</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Innovative Lösungen für die Herzgesundheit, wissenschaftlich
              fundiert und weltweit von Gesundheitsfachkräften vertrauenswürdig.
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
              {/* <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-700 mr-2" />
                <span className="text-gray-700">
                  123 Medical Plaza, Boston, MA
                </span>
              </div> */}
            </div>
          </div>

          {/* Schnellzugriff */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Schnellzugriff
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Über BioCardin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Ressourcen zur Herzgesundheit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Klinische Studien
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Gesundheitsfachkräfte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Patientenunterstützung
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatorische Informationen */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Regulatorische Informationen
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  FDA-Zulassung
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Sicherheitsinformationen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Verschreibungsinformationen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Medikamentenleitfaden
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Nebenwirkungen melden
                </a>
              </li>
            </ul>
          </div>

          {/* Vertrauensabzeichen */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Vertrauen & Zertifizierungen
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-2 border rounded-md">
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <span className="text-xs text-center text-gray-600">
                  FDA-Zulassung
                </span>
              </div>
              <div className="flex flex-col items-center p-2 border rounded-md">
                <Shield className="h-8 w-8 text-blue-700 mb-2" />
                <span className="text-xs text-center text-gray-600">
                  GMP-Zertifizierung
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
                  HIPAA-konform
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} BioCardin Pharmaceuticals. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Datenschutzrichtlinie
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Nutzungsbedingungen
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Cookie-Richtlinie
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-700">
              Sitemap
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400 text-center">
          <p>
            BioCardin® ist eine eingetragene Marke. Dieses Produkt ist nicht
            dazu bestimmt, Krankheiten zu diagnostizieren, zu behandeln, zu
            heilen oder zu verhindern.
          </p>
          <p className="mt-2">
            Konsultieren Sie immer Ihren Arzt, bevor Sie mit der Einnahme von
            Medikamenten beginnen.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
