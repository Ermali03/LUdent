import { HeroSectionWithOverlay } from "@/components/hero-section-with-overlay";
import { CalendlyWidget } from "@/components/calendly-widget"; // Import the CalendlyWidget

export default function AppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSectionWithOverlay
        title="BOOK YOUR APPOINTMENT"
        imageSrc="/images/image5.jpg"
        height="small"
      >
        <p className="text-teal-100 text-lg">
          Take the first step towards a healthier, more beautiful smile.
        </p>
      </HeroSectionWithOverlay>

      {/* Appointment Form Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-full mx-auto">
            <div className="bg-white rounded-lg  p-6 md:p-8">
              <h2 className="text-2xl text-center font-bold mb-6">
                Request an Appointment
              </h2>
              {/* Replace ContactForm with Calendly Widget */}
              <CalendlyWidget />
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold">What to Expect</h2>
              <div className="space-y-4">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    1. Submit Your Request
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the appointment request form with your contact
                    information, preferred date, and the service you're
                    interested in.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    2. Confirmation Call
                  </h3>
                  <p className="text-muted-foreground">
                    Our team will contact you within 24 hours to confirm your
                    appointment and answer any questions you may have.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">3. Your Visit</h3>
                  <p className="text-muted-foreground">
                    Arrive 15 minutes before your scheduled appointment time.
                    Bring your ID, insurance information (if applicable), and a
                    list of any medications you're currently taking.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold">Appointment Policies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Cancellations:</strong> If you need to cancel or
                  reschedule your appointment, please notify us at least 24
                  hours in advance.
                </p>
                <p>
                  <strong>Late Arrivals:</strong> If you arrive more than 15
                  minutes late, we may need to reschedule your appointment to
                  ensure all patients receive the care and attention they
                  deserve.
                </p>
                <p>
                  <strong>Insurance:</strong> Please bring your insurance
                  information if you plan to use dental insurance for your
                  visit.
                </p>
                <p>
                  <strong>New Patients:</strong> New patients should arrive 20
                  minutes early to complete necessary paperwork, or you can
                  download and complete the forms from our website in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
