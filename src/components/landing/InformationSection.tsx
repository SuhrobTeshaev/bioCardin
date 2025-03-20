import React from "react";
import { cn } from "@/lib/utils";
import { Heart, Thermometer, Pill, Award, ArrowRight } from "lucide-react";

interface InfoSectionProps {
  title?: string;
  description?: string;
  sections?: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    items?: string[];
  }[];
}

const InformationSection = ({
  title = "Verstehen der Herzgesundheit",
  description = "Erfahren Sie mehr über die Symptome, Ursachen, Behandlungsschritte und Ergebnisse von Herzkrankheiten und wie BioCardin Ihre Herzgesundheit verbessern kann.",
  sections = [
    {
      id: "symptoms",
      title: "Symptome",
      description: "Häufige Anzeichen, die auf Herzprobleme hinweisen können:",
      icon: <Thermometer className="h-10 w-10 text-red-500" />,
      items: [
        "Brustschmerzen oder Unbehagen",
        "Atemnot",
        "Müdigkeit und Schwäche",
        "Unregelmäßiger Herzschlag",
        "Schwellungen in Beinen, Knöcheln oder Füßen",
      ],
    },
    {
      id: "causes",
      title: "Ursachen",
      description: "Faktoren, die zu Herzkrankheiten beitragen:",
      icon: <Heart className="h-10 w-10 text-red-500" />,
      items: [
        "Hoher Blutdruck",
        "Hoher Cholesterinspiegel",
        "Rauchen",
        "Diabetes",
        "Familiäre Vorbelastung",
        "Fettleibigkeit",
      ],
    },
    {
      id: "treatment",
      title: "Behandlungsschritte",
      description: "Wie BioCardin die Herzgesundheit verbessert:",
      icon: <Pill className="h-10 w-10 text-red-500" />,
      items: [
        "Tägliche Medikamenteneinnahme",
        "Regelmäßige Überwachung der Herzfunktion",
        "Lebensstiländerungen",
        "Nachsorge beim Arzt",
        "Einhaltung der verschriebenen Dosierung",
      ],
    },
    {
      id: "results",
      title: "Ergebnisse",
      description: "Erwartete Ergebnisse bei richtiger Behandlung:",
      icon: <Award className="h-10 w-10 text-red-500" />,
      items: [
        "Verbesserte Herzfunktion",
        "Reduzierte Symptome",
        "Bessere Lebensqualität",
        "Vermindertes Risiko von Komplikationen",
        "Langfristige Erhaltung der Herzgesundheit",
      ],
    },
  ],
}: InfoSectionProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {section.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-4">{section.description}</p>

              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#hero-section">
            <button className="bg-red-600 heartbeat hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all">
              Erfahren Sie, wie BioCardin Ihnen helfen kann
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
