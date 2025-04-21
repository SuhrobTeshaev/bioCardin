"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, AlertCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

// Оставляем только Германию в списке стран
const countries = [{ value: "de", label: "Deutschland" }];

const LeadCaptureForm = ({
  className,
  onSubmit,
}: LeadCaptureFormProps = {}) => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const form = useForm<FormData>({
    defaultValues: {
      country: "de", // Устанавливаем Германию по умолчанию
      name: "",
      phoneNumber: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    try {
      const formData = {
        fio: data.name,
        phone: data.phoneNumber,
        country: data.country,
      };

      console.log("Отправляемые данные:", formData);

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Ответ сервера:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Ошибка при отправке");
      }

      setFormStatus("success");
      setTimeout(() => {
        form.reset();
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setFormStatus("error");
    }
  };

  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md w-full max-w-md",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        Informationen anfordern
      </h2>
      <p className="text-gray-600 mb-6">
        Füllen Sie das untenstehende Formular aus, um mehr über BioCardin und
        seine Vorteile für Ihre Herzgesundheit zu erfahren.
      </p>

      {formStatus === "success" && (
        <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.</span>
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>
            Es gab einen Fehler bei der Übermittlung Ihrer Anfrage. Bitte
            versuchen Sie es erneut.
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
                <FormLabel className="text-gray-700">Land</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue="de"
                  // disabled // Делаем селект неактивным, чтобы нельзя было изменить выбор
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue defaultValue="de">Deutschland</SelectValue>
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
                <FormLabel className="text-gray-700">
                  Vollständiger Name
                </FormLabel>
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
                <FormLabel className="text-gray-700">Telefonnummer</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    {/* Статичный код страны */}
                    <span className="absolute left-3 text-gray-600 select-none">
                      +49
                    </span>
                    {/* Поле ввода с отступом для кода страны */}
                    <input
                      type="tel"
                      className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1234567890"
                      value={field.value}
                      onChange={(e) => {
                        // Разрешаем только цифры
                        const value = e.target.value.replace(/[^\d]/g, "");
                        field.onChange(value);
                      }}
                      maxLength={10} // Ограничиваем длину номера
                    />
                  </div>
                </FormControl>
                <FormDescription className="text-xs text-gray-500">
                  Wir werden Ihre Telefonnummer niemals an Dritte weitergeben.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors animate-[heartbeat_1.7s_ease-in-out_infinite]"
            disabled={formStatus === "success"}
          >
            Informationen erhalten
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadCaptureForm;
