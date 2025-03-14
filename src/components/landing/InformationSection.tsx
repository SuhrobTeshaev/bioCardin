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
  title = "Understanding Heart Health",
  description = "Learn about the symptoms, causes, treatment steps, and results of heart conditions and how BioCardin can help improve your heart health.",
  sections = [
    {
      id: "symptoms",
      title: "Symptoms",
      description: "Common signs that may indicate heart health issues:",
      icon: <Thermometer className="h-10 w-10 text-red-500" />,
      items: [
        "Chest pain or discomfort",
        "Shortness of breath",
        "Fatigue and weakness",
        "Irregular heartbeat",
        "Swelling in legs, ankles, or feet",
      ],
    },
    {
      id: "causes",
      title: "Causes",
      description: "Factors that contribute to heart conditions:",
      icon: <Heart className="h-10 w-10 text-red-500" />,
      items: [
        "High blood pressure",
        "High cholesterol",
        "Smoking",
        "Diabetes",
        "Family history",
        "Obesity",
      ],
    },
    {
      id: "treatment",
      title: "Treatment Steps",
      description: "How BioCardin helps improve heart health:",
      icon: <Pill className="h-10 w-10 text-red-500" />,
      items: [
        "Daily medication regimen",
        "Regular monitoring of heart function",
        "Lifestyle modifications",
        "Follow-up with healthcare provider",
        "Adherence to prescribed dosage",
      ],
    },
    {
      id: "results",
      title: "Results",
      description: "Expected outcomes with proper treatment:",
      icon: <Award className="h-10 w-10 text-red-500" />,
      items: [
        "Improved heart function",
        "Reduced symptoms",
        "Better quality of life",
        "Decreased risk of complications",
        "Long-term heart health maintenance",
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
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
            Learn How BioCardin Can Help You
          </button>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
