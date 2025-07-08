"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Globe, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserDetailsForm from "./UserDetailsForm";

interface BookingData {
  date: number;
  time: string;
  duration: string;
  name: string;
  email: string;
  message: string;
}

const CalendlyBooking = () => {
  const [currentStep, setCurrentStep] = useState<
    "calendar" | "form" | "success"
  >("calendar");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("30m");
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear, setCurrentYear] = useState(2025);
  const [bookingData, setBookingData] = useState<BookingData>({
    date: 0,
    time: "",
    duration: "",
    name: "",
    email: "",
    message: "",
  });

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const durations = ["15m", "30m", "1h"];
  const availableTimes12h = ["1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
  const availableTimes24h = ["13:00", "14:00", "15:00", "16:00", "17:00"];

  const generateCalendar = (month: number, year: number) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      const unavailableDays = [0];
      const isAvailable = !unavailableDays.includes(day);
      days.push({ day, isAvailable });
    }
    return days;
  };

  const calendarDays = generateCalendar(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateSelect = (day: number, isAvailable: boolean) => {
    if (isAvailable) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => setSelectedTime(time);

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setBookingData((prev) => ({
        ...prev,
        date: selectedDate,
        time: selectedTime,
        duration: selectedDuration,
      }));
      setCurrentStep("form");
    }
  };

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    setBookingData((prev) => ({ ...prev, ...formData }));
    setCurrentStep("success");
  };

  const handleBackToCalendar = () => setCurrentStep("calendar");

  const handleBookAnother = () => {
    setCurrentStep("calendar");
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingData({
      date: 0,
      time: "",
      duration: "",
      name: "",
      email: "",
      message: "",
    });
  };

  const getSelectedDayName = () => {
    if (!selectedDate) return "";
    const date = new Date(currentYear, currentMonth, selectedDate);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <section className="w-full bg-gray-800 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-gray-800 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/3 bg-gray-800 p-4 lg:p-6 flex flex-col items-center text-center">
          <div className="mb-6">
            <h2 className="text-white text-lg lg:text-xl font-semibold mb-3">
              It is just an idea until you talk to us.
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Prefer to talk directly? Schedule a free consultation call with
              our team to discuss your project requirements.
            </p>
            <p className="text-2xl text-[#024FF0] font-bold">
              Let&apos;s Talk!
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-3 py-1 rounded text-sm border cursor-pointer transition-colors ${
                    selectedDuration === duration
                      ? "bg-[#024FF0] text-white border-[#024FF0]"
                      : "text-gray-300 border-gray-600 hover:border-gray-500"
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 text-gray-300 text-sm flex items-center gap-2">
            <Video className="w-4 h-4" />
            <span>Google Meet</span>
          </div>

          <div className="mt-auto text-gray-400 text-sm flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>Africa/Lagos</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-0">
          <AnimatePresence mode="wait">
            {currentStep === "calendar" && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col lg:flex-row h-full"
              >
                {/* Calendar Section */}
                <div className="flex-1 p-4 lg:p-8 bg-[#252525]">
                  <div className="flex items-center justify-between mb-6 lg:mb-8">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 hover:bg-gray-800 rounded transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <h3 className="text-white text-lg lg:text-xl font-medium">
                      {monthNames[currentMonth]} {currentYear}
                    </h3>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 hover:bg-gray-800 rounded transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 lg:gap-2 mb-4">
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="text-center text-gray-400  text-xs lg:text-sm font-medium py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 lg:gap-2 ">
                    {calendarDays.map((dayData, index) => {
                      if (!dayData) {
                        return <div key={index} className="h-10 lg:h-12" />;
                      }
                      const { day, isAvailable } = dayData;
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          onClick={() => handleDateSelect(day, isAvailable)}
                          disabled={!isAvailable}
                          className={`h-10 cursor-pointer  lg:h-12 rounded-lg text-sm font-medium transition-colors ${
                            isSelected
                              ? "bg-white text-gray-900"
                              : isAvailable
                              ? "text-white hover:bg-gray-700"
                              : "text-gray-600 cursor-not-allowed"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="w-full lg:w-80 p-4 lg:p-8 bg-gray-850 border-t lg:border-t-0 lg:border-l border-gray-700">
                  <AnimatePresence>
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                      >
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-white text-lg font-medium">
                            {getSelectedDayName().slice(0, 3)} {selectedDate}
                          </h4>
                          <div className="flex bg-gray-700 rounded p-1">
                            <button
                              onClick={() => setTimeFormat("12h")}
                              className={`px-2 py-1 text-xs rounded transition-colors ${
                                timeFormat === "12h"
                                  ? "bg-gray-600 text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              12h
                            </button>
                            <button
                              onClick={() => setTimeFormat("24h")}
                              className={`px-2 py-1 text-xs rounded transition-colors ${
                                timeFormat === "24h"
                                  ? "bg-gray-600 text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              24h
                            </button>
                          </div>
                        </div>

                        <div className="space-y-3 max-h-60 lg:max-h-none overflow-y-auto">
                          {(timeFormat === "12h"
                            ? availableTimes12h
                            : availableTimes24h
                          ).map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`w-full cursor-pointer  p-3 rounded-lg border text-left transition-colors ${
                                selectedTime === time
                                  ? "bg-[#024FF0] text-white border-[#024FF0]"
                                  : "text-white border-gray-600 hover:border-gray-500 hover:bg-gray-700"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        {selectedTime && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 lg:mt-8"
                          >
                            <Button
                              onClick={handleContinue}
                              className="w-full bg-[#024FF0] hover:bg-[#0285f0] text-white"
                            >
                              Continue
                            </Button>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {currentStep === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex items-center justify-center h-full p-4 lg:p-8 bg-[#252525]"
              >
                <UserDetailsForm
                  selectedDate={selectedDate!}
                  selectedTime={selectedTime!}
                  selectedDuration={selectedDuration}
                  onSubmit={handleFormSubmit}
                  onBack={handleBackToCalendar}
                />
              </motion.div>
            )}

            {currentStep === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center justify-center h-full p-4 lg:p-8 bg-[#252525]"
              >
                <div className="text-center max-w-md">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Your meeting has been scheduled for {getSelectedDayName()},{" "}
                    {monthNames[currentMonth]} {bookingData.date}, {currentYear}
                  </p>
                  <p className="text-gray-300 mb-6">
                    at {bookingData.time} ({bookingData.duration})
                  </p>
                  <p className="text-gray-400 text-sm mb-8">
                    We&apos;ll send you a confirmation email with the Google
                    Meet link shortly.
                  </p>
                  <Button
                    onClick={handleBookAnother}
                    className="bg-[#024FF0] hover:bg-[#0285f0] text-white"
                  >
                    Book Another Meeting
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CalendlyBooking;
