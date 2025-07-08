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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserDetailsFormProps {
  selectedDate: number;
  selectedTime: string;
  selectedDuration: string;
  onSubmit: (data: { name: string; email: string; message: string }) => void;
  onBack: () => void;
}

const UserDetailsForm = ({
  selectedDate,
  selectedTime,
  selectedDuration,
  onSubmit,
  onBack,
}: UserDetailsFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    onSubmit(formData);
    setIsSubmitting(false);
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
                <span>Thursday, July {selectedDate}, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>
                  {selectedTime} ({selectedDuration})
                </span>
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

            <p className="text-xs text-gray-400 text-center">
              By scheduling this meeting, you agree to receive calendar
              invitations and meeting reminders.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserDetailsForm;
