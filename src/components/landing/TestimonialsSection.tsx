import React from "react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface TestimonialProps {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: {
  testimonials?: TestimonialProps[];
}) => {
  return (
    <section className="w-full py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Patienten sagen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Echte Geschichten von echten Menschen, die die Vorteile von
            BioCardin erlebt haben
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <TrustBadge icon="🏆" text="Über 10.000 zufriedene Patienten" />
          <TrustBadge icon="🔬" text="Klinisch getestet & zugelassen" />
          <TrustBadge icon="⭐" text="Durchschnittliche Bewertung 4.9/5" />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <Card className="h-full  bg-gradient-to-b from-blue-50 to-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-blue-100">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="relative">
          <Quote className="h-8 w-8 text-blue-100 absolute -top-4 -left-2 opacity-50" />
          <p className="text-gray-700 relative z-10">
            {testimonial.testimonial}
          </p>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-gray-500 italic">
        Verifizierter BioCardin-Benutzer
      </CardFooter>
    </Card>
  );
};

const TrustBadge = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
};

const defaultTestimonials: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    rating: 5,
    testimonial:
      "Nach drei Monaten der Einnahme von BioCardin hat sich mein Blutdruck stabilisiert und ich fühle mich den ganzen Tag über energiegeladener. Mein Arzt ist beeindruckt von meinem Fortschritt!",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Kanada",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    rating: 5,
    testimonial:
      "Ich war anfangs skeptisch, aber BioCardin hat einen spürbaren Unterschied in meiner Herzgesundheit gemacht. Bei meiner letzten Untersuchung zeigten sich signifikante Verbesserungen meiner Cholesterinwerte.",
  },
  {
    name: "Emma Rodriguez",
    location: "Miami, USA",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    rating: 4,
    testimonial:
      "BioCardin ist zu einem wesentlichen Bestandteil meiner täglichen Routine geworden. Ich habe weniger Herzklopfen und eine bessere allgemeine Ausdauer beim Sport bemerkt.",
  },
  {
    name: "David Wilson",
    location: "London, UK",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    rating: 5,
    testimonial:
      "Nach meinem Herzproblem im letzten Jahr empfahl mir mein Kardiologe BioCardin. Sechs Monate später zeigen meine Herzfunktionstests bemerkenswerte Verbesserungen.",
  },
  {
    name: "Priya Patel",
    location: "Sydney, Australien",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    rating: 5,
    testimonial:
      "Als jemand mit einer familiären Vorgeschichte von Herzkrankheiten bin ich dankbar für BioCardin. Es gibt mir ein beruhigendes Gefühl und meine regelmäßigen Untersuchungen bestätigen, dass es wirkt.",
  },
];

export default TestimonialsSection;
