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
          <h2 className="text-center text-3xl font-bold">Registration Form</h2>

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
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                    </FormControl>

                    {/* Popper mode prevents overlap */}
                    <SelectContent position="popper" className="z-50">
                      <SelectItem value="HIV (VCT) Counselling and Testing">
                        HIV (VCT) Counselling and Testing
                      </SelectItem>
                      <SelectItem value="Adherence Counselling Certificate">
                        Adherence Counselling Certificate
                      </SelectItem>
                      <SelectItem value="Diploma in Counselling">
                        Diploma in Counselling
                      </SelectItem>
                      <SelectItem value="Certificate in Counselling">
                        Certificate in Counselling
                      </SelectItem>
                      <SelectItem value="Primary Guidance">Primary Guidance</SelectItem>
                      <SelectItem value="Kenya Sign Language">Kenya Sign Language</SelectItem>
                      <SelectItem value="ECDE">ECDE</SelectItem>
                      <SelectItem value="Computer Packages">
                        Computer Packages
                      </SelectItem>
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

          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
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
