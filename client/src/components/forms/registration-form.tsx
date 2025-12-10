"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
  course: z.string().nonempty("Please select a course"),
  message: z.string().optional(),
});

// UPDATED COURSES FROM PDF
const courses = [
  { label: "HIV (VCT) Counselling and Testing – Short Course", value: "vct-counselling-testing" },
  { label: "Adherence Counselling Certificate", value: "adherence-counselling" },
  { label: "Diploma in Counselling", value: "diploma-counselling" },
  { label: "Certificate in Counselling", value: "certificate-counselling" },
  { label: "Primary Guidance", value: "primary-guidance" },
  { label: "Kenya Sign Language", value: "kenya-sign-language" },
  { label: "ECDE", value: "ecde" },
  { label: "Computer Packages", value: "computer-packages" },
];

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/students`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit registration");
      }

      alert("Registration submitted successfully!");
      form.reset();
    } catch (error) {
      alert("Error submitting registration.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Student Registration Form</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* FULL NAME */}
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

          {/* EMAIL */}
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

          {/* PHONE */}
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

          {/* COURSE SELECT — FIXED */}
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course of Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="z-50 relative">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                  </FormControl>

                  {/* FIXED DROPDOWN OVERLAP */}
                  <SelectContent className="z-50" position="popper">
                    {courses.map((course) => (
                      <SelectItem key={course.value} value={course.value}>
                        {course.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* MESSAGE */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write additional notes here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUBMIT */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Registration"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
