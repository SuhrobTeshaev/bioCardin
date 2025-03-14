"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

interface LeadCaptureFormProps {
  className?: string;
  onSubmit?: (data: FormData) => void;
}

type FormData = {
  country: string;
  name: string;
  phoneNumber: string;
};

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "es", label: "Spain" },
  { value: "it", label: "Italy" },
];

const LeadCaptureForm = ({
  className,
  onSubmit,
}: LeadCaptureFormProps = {}) => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const form = useForm<FormData>({
    defaultValues: {
      country: "",
      name: "",
      phoneNumber: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    try {
      // Simulate form submission
      console.log("Form submitted:", data);

      // Call the onSubmit prop if provided
      if (onSubmit) {
        onSubmit(data);
      }

      setFormStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        form.reset();
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md w-full max-w-md",
        className,
      )}
    >
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        Request Information
      </h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below to learn more about BioCardin and how it can
        help with your heart health.
      </p>

      {formStatus === "success" && (
        <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Thank you! We'll contact you shortly.</span>
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>
            There was an error submitting your request. Please try again.
          </span>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormDescription className="text-xs text-gray-500">
                  We'll never share your phone number with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            disabled={formStatus === "success"}
          >
            Get Information
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadCaptureForm;
