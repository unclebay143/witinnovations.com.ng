import CalendlyBooking from "@/components/atom/booking/CalendlyBooking";
// import BookingCalendar from "@/components/atom/BookingCalendar";
import { FAQ } from "@/components/atom/FAQ";
import { ContactForm } from "@/components/molecules/contact/ContactForm";
import { ContactHero } from "@/components/molecules/contact/ContactHero";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <ContactHero />
      <ContactForm />
      {/* <BookingCalendar /> */}
      <CalendlyBooking />
      <FAQ />
    </main>
  );
}
