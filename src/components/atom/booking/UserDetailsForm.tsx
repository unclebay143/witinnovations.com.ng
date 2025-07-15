"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Mail,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserDetailsFormProps {
  selectedDate: number;
  selectedTime: string;
  currentMonth: number;
  currentYear: number;
  monthNames: string[];
  onSubmit: (data: { name: string; email: string; message: string }) => void;
  onBack: () => void;
}

const UserDetailsForm = ({
  selectedDate,
  selectedTime,
  currentMonth,
  currentYear,
  monthNames,
  onSubmit,
  onBack,
}: UserDetailsFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError(null);
    if (submitSuccess) setSubmitSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      console.log("Submitting booking form...");
      const emailResponse = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: selectedDate,
          time: selectedTime,
          month: monthNames[currentMonth],
          year: currentYear,
        }),
      });

      const emailResult = await emailResponse.json();

      if (!emailResult.success) {
        throw new Error(
          emailResult.error || "Failed to send booking confirmation emails"
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      onSubmit(formData);
    } catch (error) {
      console.error("Error submitting booking:", error);

      let errorMessage =
        "Failed to send booking confirmation. Please try again.";

      if (error instanceof Error) {
        if (error.message.includes("Invalid email")) {
          errorMessage = "Please enter a valid email address.";
        } else if (error.message.includes("domain verification")) {
          errorMessage =
            "Booking received! We'll send you a confirmation email manually within a few minutes.";
          setSubmitSuccess(errorMessage);
          setTimeout(() => onSubmit(formData), 2000);
          return;
        } else {
          errorMessage = `Failed to send booking confirmation: ${error.message}`;
        }
      }

      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
          <CardTitle className="text-white text-xl">
            Enter Your Details
          </CardTitle>
          {/* Booking Summary */}
          <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <h4 className="text-white font-medium mb-3">Booking Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>
                  {monthNames[currentMonth]} {selectedDate}, {currentYear}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>{selectedTime} (Lagos Time)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-4 h-4 flex items-center justify-center">
                  🎥
                </span>
                <span>Google Meet</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}
            {submitSuccess && (
              <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                <div className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400">
                  ✓
                </div>
                <span>{submitSuccess}</span>
              </div>
            )}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="flex items-center gap-2 text-gray-300"
              >
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#024FF0]"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="flex items-center gap-2 text-gray-300"
              >
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#024FF0]"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="flex items-center gap-2 text-gray-300"
              >
                <MessageSquare className="w-4 h-4" />
                What would you like to discuss? (Optional)
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us what you'd like to talk about..."
                rows={4}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[#024FF0] resize-none"
              />
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-[#024FF0] hover:bg-[#0285f0] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Scheduling Meeting...
                  </div>
                ) : (
                  "Schedule Meeting"
                )}
              </Button>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-3">
              <p className="text-xs text-blue-200 text-center">
                <AlertCircle className="w-3 h-3 inline mr-1" />
                You&apos;ll receive a confirmation email with the Google Meet
                link within a few minutes of booking.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserDetailsForm;
