import CalendlyBooking from "@/components/atom/booking/CalendlyBooking";
// import BookingCalendar from "@/components/atom/BookingCalendar";
import Testimonials from "@/components/atom/Testimonials";
import Hero from "@/components/molecules/homepage/Hero";
import Intro from "@/components/molecules/homepage/Intro";
import ServicesSnapshot from "@/components/molecules/homepage/ServicesSnapshot";
import WhyChooseUs from "@/components/molecules/homepage/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ServicesSnapshot />
      <Intro />
      <WhyChooseUs />
      {/* <BookingCalendar /> */}
      <CalendlyBooking />
      <Testimonials />
    </div>
  );
}
