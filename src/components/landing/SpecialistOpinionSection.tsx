import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { QuoteIcon } from "lucide-react";

interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  credentials: string;
  quote: string;
  imageUrl: string;
}

interface SpecialistOpinionSectionProps {
  doctors?: DoctorProfile[];
  title?: string;
  subtitle?: string;
}

const SpecialistOpinionSection = ({
  doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      title: "Kardiologin",
      credentials: "MD, FACC, über 15 Jahre Erfahrung",
      quote:
        "BioCardin stellt einen bedeutenden Fortschritt im Management der Herzgesundheit dar. Ich habe bemerkenswerte Verbesserungen der kardiovaskulären Werte meiner Patienten nach nur wenigen Monaten der Behandlung gesehen.",
      imageUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Kardiovaskulärer Forscher",
      credentials: "PhD, Forschungsdirektor am Herzinstitut",
      quote:
        "Die klinischen Daten, die BioCardin unterstützen, sind beeindruckend. Unsere unabhängigen Studien bestätigen seine Wirksamkeit bei der Reduzierung wichtiger Risikofaktoren für Herzkrankheiten.",
      imageUrl:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
    },
    {
      id: "3",
      name: "Dr. Elizabeth Patel",
      title: "Spezialistin für präventive Kardiologie",
      credentials: "MD, MPH, Board Certified",
      quote:
        "Ich empfehle BioCardin als Teil eines umfassenden Herzgesundheitsplans. Es ist eines der wenigen Nahrungsergänzungsmittel mit solider wissenschaftlicher Grundlage und messbaren Ergebnissen.",
      imageUrl:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    },
  ],
  title = "Expertenmeinungen",
  subtitle = "Führende Kardiologen und Forscher empfehlen BioCardin",
}: SpecialistOpinionSectionProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="h-full border-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-0">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-900">
                      {doctor.name}
                    </CardTitle>
                    <p className="text-blue-700 font-medium">{doctor.title}</p>
                    <p className="text-sm text-gray-500">
                      {doctor.credentials}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="relative">
                  <QuoteIcon className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 opacity-50" />
                  <blockquote className="pl-6 italic text-gray-700">
                    {doctor.quote}
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 rounded-full">
            <span className="text-blue-800 font-medium">
              Basierend auf klinischen Studien mit über 1000 Patienten
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistOpinionSection;
