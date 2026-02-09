export function BookingEmbed({ className }: { className?: string }) {
  return (
    <div id="booking" className={className}>
      <div className="card-premium p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="heading-section mb-4">
            Schedule Your Consultation
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select your preferred date and time. Our team will confirm your appointment shortly.
          </p>
        </div>

        {/* Netlify Form */}
        <form
          name="appointment"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Required hidden input */}
          <input type="hidden" name="form-name" value="appointment" />

          {/* Honeypot */}
          <input type="hidden" name="bot-field" />

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="input-premium"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="input-premium"
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="input-premium"
          />

          <input
            type="date"
            name="preferred_date"
            required
            className="input-premium"
          />

          <input
            type="time"
            name="preferred_time"
            required
            className="input-premium"
          />

          <select
            name="appointment_type"
            className="input-premium md:col-span-2"
            required
          >
            <option value="">Select Appointment Type</option>
            <option>General Consultation</option>
            <option>Implant Consultation</option>
            <option>Denture Consultation</option>
            <option>Smile Rehabilitation</option>
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Additional notes (optional)"
            className="input-premium md:col-span-2"
          />

          <button
            type="submit"
            className="btn-hero md:col-span-2 py-4 text-base"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
