"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface BookingData {
  date: number;
  time: string;
  fullName: string;
  email: string;
  projectDescription: string;
}

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectDescription: "",
  });

  const times = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowForm(false);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData: BookingData = {
      date: selectedDate!,
      time: selectedTime!,
      ...formData,
    };

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send booking. Please try again.");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setShowForm(false);
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      projectDescription: "",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-[#024FF0] via-[#024FF0] to-indigo-900">
        <div className="absolute top-20 left-10 animate-float">
          <Calendar className="w-8 h-8 text-blue-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Clock className="w-6 h-6 text-purple-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <User className="w-7 h-7 text-indigo-300 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-32 animate-float-delayed">
          <Mail className="w-6 h-6 text-blue-300 opacity-60" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-white/10 rounded-lg animate-pulse">
          <div className="flex items-center justify-center h-full">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-24 h-3 bg-white/20 rounded animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl px-4">
        <div className="text-white text-center md:text-left space-y-4 max-w-md">
          <h2 className="text-4xl font-bold">
            It is just an idea until you talk to us.
          </h2>
          <p className="text-2xl">Let&apos;s Talk!</p>
        </div>

        {/* Booking Interface */}
        <AnimatePresence mode="wait">
          {!showForm && !isSubmitted && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-blue-800 text-white rounded-2xl shadow-2xl p-8 w-[350px]"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-full">
                  <span className="text-blue-800 font-bold text-2xl">T</span>
                </div>
              </div>

              <h3 className="text-center font-semibold text-lg mb-1">
                Meet our team
              </h3>
              <p className="text-center text-xl font-bold mb-6">July 2025</p>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
                {days.map((day) => (
                  <span key={day} className="font-medium">
                    {day}
                  </span>
                ))}
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      className={`p-2 rounded-full transition ${
                        isSelected
                          ? "bg-white text-[#024FF0] font-bold"
                          : "hover:bg-[#0285f0] "
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Time Selection */}
              <AnimatePresence>
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6"
                  >
                    <div>
                      <h4 className="text-center font-semibold mb-4">
                        Select a Time
                      </h4>
                      <h4 className="text-center font-semibold mb-4">
                        Lagos, Nigeria.
                      </h4>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeClick(time)}
                          className={`px-4 py-2 rounded-full border ${
                            selectedTime === time
                              ? "bg-white text-[#024FF0] font-bold"
                              : "hover:bg-[#0285f0] "
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {showForm && !isSubmitted && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <Card className="w-[400px] bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-[#024FF0]">
                    Complete Your Booking
                  </CardTitle>
                  <p className="text-center text-sm text-[#252525]">
                    July {selectedDate}, 2025 at {selectedTime}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="project"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        About Your Project
                      </Label>
                      <Textarea
                        id="project"
                        required
                        value={formData.projectDescription}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          handleInputChange(
                            "projectDescription",
                            e.target.value
                          )
                        }
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#024FF0] text-white hover:bg-[#0285f0] "
                      >
                        {isSubmitting ? "Submitting..." : "Book Meeting"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {isSubmitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <Card className="w-[400px] bg-white/95 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col items-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <h3 className="text-2xl font-bold text-green-700">
                      Booking Confirmed!
                    </h3>
                    <p className="text-center">
                      Your meeting has been scheduled for July {selectedDate},
                      2025 at {selectedTime}. We&apos;ll send you a confirmation
                      email shortly.
                    </p>
                    <Button
                      onClick={resetBooking}
                      className="mt-4 bg-[#024FF0] hover:bg-[#0285f0] text-white"
                    >
                      Book Another Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default BookingCalendar;
