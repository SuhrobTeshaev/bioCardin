"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { Button } from "../ui/button";
import LeadCaptureForm from "./LeadCaptureForm";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  benefits?: Array<{
    icon: string;
    text: string;
  }>;
  productImageSrc?: string;
}

const HeroSection = ({
  className,
  title = "BioCardin: Advanced Heart Health Support",
  subtitle = "Clinically proven to support cardiovascular function and promote heart health with our proprietary formula.",
  benefits = [
    { icon: "heart", text: "Supports healthy heart function" },
    { icon: "shield", text: "Clinically tested ingredients" },
    { icon: "clock", text: "Results in as little as 4 weeks" },
  ],
  productImageSrc = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
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
    <section
      className={cn(
        "w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white",
        className,
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-900">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-md">{subtitle}</p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    {renderIcon(benefit.icon)}
                  </div>
                  <span className="text-gray-700">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                size="lg"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                size="lg"
              >
                View Research
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10" />
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={productImageSrc}
                  alt="BioCardin Heart Health Product"
                  width={500}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            <LeadCaptureForm className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
