"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { Button } from "../ui/button";
import LeadCaptureForm from "./LeadCaptureForm";
import ProductDetails from "./ProductDetails"; // Импортируем новый компонент
import { cn } from "@/lib/utils";
import backImg from "/src/images/back.jpg";
import productImageSrc from "/src/images/bioCardin.png";

interface HeroSectionProps {
  className?: string;
  title?: React.ReactNode;
  subtitle?: string;
  benefits?: Array<{
    icon: string;
    text: string;
  }>;
  productImageSrc?: string;
}

const HeroSection = ({
  className,
  title = (
    <>
      <span className="text-blue-500">Bio</span>
      <span className="text-red-500">Cardin</span>: Fortschrittliche
      Unterstützung für die Herzgesundheit
    </>
  ),
  subtitle = "Klinisch erwiesen, die kardiovaskuläre Funktion zu unterstützen und die Herzgesundheit mit unserer proprietären Formel zu fördern.",
  benefits = [
    { icon: "heart", text: "Unterstützt eine gesunde Herzfunktion" },
    { icon: "shield", text: "Klinisch getestete Inhaltsstoffe" },
    { icon: "clock", text: "Ergebnisse in nur 4 Wochen" },
  ],
}: HeroSectionProps = {}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <Heart className="h-5 w-5 text-red-500" />;
      case "shield":
        return <Shield className="h-5 w-5 text-blue-500" />;
      case "clock":
        return <Clock className="h-5 w-5 text-green-500" />;
      default:
        return <Heart className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <>
      <div className="relative w-full" id="hero-section">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={backImg}
            fill
            alt="Background Image"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-50 z-10" />
        </div>
        <section className={cn("relative w-full py-12 md:py-24 ", className)}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  {title}
                </h1>
                <p className="text-lg text-gray-300 max-w-md">{subtitle}</p>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        {renderIcon(benefit.icon)}
                      </div>
                      <span className="text-gray-300">{benefit.text}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    size="lg"
                  >
                    Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    size="lg"
                  >
                    Forschung ansehen
                  </Button>
                </div> */}
              </div>

              <div className="flex flex-col items-center space-y-8">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full -z-10" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10" />
                </div>

                <LeadCaptureForm className="w-full max-w-md" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProductDetails /> {/* Добавляем новый компонент */}
    </>
  );
};

export default HeroSection;
