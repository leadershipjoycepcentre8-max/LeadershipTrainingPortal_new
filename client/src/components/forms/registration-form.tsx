"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  // SCHOOL OF SOCIAL SCIENCES
  { label: "Diploma in Counselling Psychology", value: "diploma-cp" },
  { label: "Certificate in Counselling Psychology", value: "certificate-cp" },
  { label: "Higher Diploma in Counselling Psychology", value: "higher-diploma-cp" },
  { label: "Diploma in Social Work & Community Development", value: "diploma-swd" },
  { label: "Certificate in Social Work & Community Development", value: "certificate-swd" },
  { label: "Certificate in Community Health", value: "community-health" },
  { label: "HIV Testing Services (HTS / VCT)", value: "hts-vct" },
  { label: "Adherence Counselling", value: "adherence-counselling" },
  { label: "Kenya Sign Language (KSL)", value: "ksl" },
  { label: "Basic Computer Packages (Social Sciences)", value: "basic-packages-ss" },

  // SCHOOL OF APPLIED SCIENCES
  { label: "First Aid", value: "first-aid" },
  { label: "Fire Safety", value: "fire-safety" },
  { label: "Disaster Management", value: "disaster-management" },
  { label: "Basic Nutrition", value: "nutrition" },
  { label: "Communicable Disease Control", value: "cdc" },

  // SCHOOL OF BUSINESS
  { label: "Diploma in Business Management", value: "diploma-bm" },
  { label: "Certificate in Business Management", value: "certificate-bm" },
  { label: "Diploma in Human Resource Management", value: "diploma-hrm" },
  { label: "Certificate in HR Management", value: "certificate-hrm" },
  { label: "Diploma in Project Management", value: "diploma-pm" },
  { label: "Certificate in Project Management", value: "certificate-pm" },

  // SCHOOL OF COMPUTING
  { label: "Computer Packages", value: "computer-packages" },
  { label: "ICDL", value: "icdl" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "Data Analysis / Data Management", value: "data-analysis" },
  { label: "Introduction to Programming", value: "programming-intro" },
];

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  course: z.string().min(1),
  additionalInfo: z.string().optional(),
});

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      course: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Registration submitted:", values);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 rounded-lg shadow-sm border"
        >
          <h2 className="text-center text-3xl font-bold text-green-700">
            Registration Form
          </h2>

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* PHONE + COURSE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-white border border-green-700 rounded-md">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent
                      position="popper"
                      className="z-[9999] bg-[#CCF5E1] border border-green-700 shadow-xl rounded-md"
                    >
                      {courses.map((c) => (
                        <SelectItem key={c.value} value={c.label}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ADDITIONAL INFO */}
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any additional information or questions"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Submit Registration
          </Button>

          {submitted && (
            <p className="text-center text-green-600 font-medium">
              Registration submitted successfully!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
