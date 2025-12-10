"use client";

import { useState } from "react";
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

const formSchema = z.object({
  fullName: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().nonempty("Please select a subject"),
  message: z.string().min(5, "Message too short"),
});

// SUBJECT OPTIONS
const subjects = [
  { label: "General Inquiry", value: "general" },
  { label: "Admissions", value: "admissions" },
  { label: "Counselling Programs", value: "counselling" },
  { label: "Exam & Certification", value: "exams" },
  { label: "Course Fees", value: "fees" },
  { label: "Other", value: "other" },
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);

      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Contact Us</h2>

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
                  <Input placeholder="Your full name" {...field} />
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
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUBJECT SELECT — FIXED */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="z-50 relative">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>

                  {/* FIXED DROPDOWN OVERLAP */}
                  <SelectContent className="z-50" position="popper">
                    {subjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
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
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUBMIT BUTTON */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
