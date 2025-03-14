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
      title: "Cardiologist",
      credentials: "MD, FACC, 15+ years of experience",
      quote:
        "BioCardin represents a significant advancement in heart health management. I've seen remarkable improvements in my patients' cardiovascular metrics after just a few months of treatment.",
      imageUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      title: "Cardiovascular Researcher",
      credentials: "PhD, Research Director at Heart Institute",
      quote:
        "The clinical data supporting BioCardin is impressive. Our independent studies confirm its efficacy in reducing key risk factors associated with heart disease.",
      imageUrl:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
    },
    {
      id: "3",
      name: "Dr. Elizabeth Patel",
      title: "Preventive Cardiology Specialist",
      credentials: "MD, MPH, Board Certified",
      quote:
        "I recommend BioCardin as part of a comprehensive heart health plan. It's one of the few supplements with solid scientific backing and measurable results.",
      imageUrl:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    },
  ],
  title = "Expert Medical Opinions",
  subtitle = "Leading cardiologists and researchers endorse BioCardin",
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
              Based on clinical studies with 1000+ patients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistOpinionSection;
