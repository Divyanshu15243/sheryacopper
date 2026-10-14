import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import { company } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

type FormData = z.infer<typeof formSchema>;

const checklist = ["Material / grade", "Dimensions (OD, wall thickness, length)", "Quantity required", "Applicable standard, if any"];

export default function Contact() {
  usePageMeta("Contact Us", "Get in touch with Shreya Coppers for product inquiries, quotes, and support. GIDC Umbergaon, Valsad, Gujarat.");

  const [params] = useSearchParams();
  const product = params.get("product");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: product ? `Quote request: ${product}` : "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        if (key && !fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      const first = Object.keys(fieldErrors)[0];
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    const mailtoLink = `${company.email.href}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  const field = (key: keyof FormData, label: string, opts: { type?: string; required?: boolean; autoComplete?: string } = {}) => (
    <div>
      <label htmlFor={`contact-${key}`} className="field-label">
        {label} {opts.required && <span className="text-copper-dark">*</span>}
      </label>
      <input
        id={`contact-${key}`}
        type={opts.type ?? "text"}
        autoComplete={opts.autoComplete}
        className="field"
        value={formData[key] ?? ""}
        onChange={update(key)}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `contact-${key}-error` : undefined}
      />
      {errors[key] && (
        <p id={`contact-${key}-error`} className="field-error">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sales & Enquiries"
        title="Contact Us"
        subtitle="Get in touch for product inquiries, quotes, and support"
      />

      <section className="section bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <div className="relative isolate h-full overflow-hidden bg-ink p-8 text-white sm:p-10">
              <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
              <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                Contact us for product inquiries, custom specifications, or to request a competitive quote.
              </p>

              <ul className="mt-10 space-y-8">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15">
                    <MapPin className="h-5 w-5 text-copper" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">Gujarat Office</h3>
                    <address className="mt-2 text-[15px] not-italic leading-relaxed text-white">
                      {company.address.lines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15">
                    <Phone className="h-5 w-5 text-copper" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">Phone</h3>
                    <a href={company.phone.href} className="mt-2 block font-heading text-lg font-bold text-white hover:text-copper">
                      {company.phone.display}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15">
                    <Mail className="h-5 w-5 text-copper" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">Email</h3>
                    <a href={company.email.href} className="mt-2 block break-all font-heading text-lg font-bold text-white hover:text-copper">
                      {company.email.display}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-12 border-t border-white/15 pt-8">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-copper">
                  For a faster quote, include
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {checklist.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[14px] text-white/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Send an Enquiry</p>
            <h2 className="h-section">Request a quote or ask a question</h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Fields marked <span className="text-copper-dark">*</span> are required.
            </p>

            {sent && (
              <div role="status" className="mt-8 flex gap-4 border border-copper/40 bg-paper p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper-dark" aria-hidden />
                <p className="text-[14px] leading-relaxed text-ink">
                  Your email app should now open with your enquiry pre-filled — press send to deliver it. If nothing opened,
                  email us directly at{" "}
                  <a href={company.email.href} className="font-semibold text-copper-dark underline underline-offset-2">
                    {company.email.display}
                  </a>
                  .
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {field("name", "Name", { required: true, autoComplete: "name" })}
                {field("email", "Email", { type: "email", required: true, autoComplete: "email" })}
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {field("phone", "Phone", { type: "tel", autoComplete: "tel" })}
                {field("subject", "Subject", { required: true })}
              </div>
              <div>
                <label htmlFor="contact-message" className="field-label">
                  Message <span className="text-copper-dark">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  className="field resize-y"
                  value={formData.message}
                  onChange={update("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <p id="contact-message-error" className="field-error">
                    {errors.message}
                  </p>
                )}
              </div>
              <button type="submit" className="btn btn-primary w-full sm:w-auto sm:px-10">
                <Send className="h-4 w-4" aria-hidden /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-line bg-paper">
        <div className="container-wide py-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Location</p>
              <h2 className="text-2xl font-bold">{company.address.short}</h2>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden border border-line bg-white sm:aspect-[21/8]">
            <iframe
              title={`Map showing ${company.address.short}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale-[0.4]"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
