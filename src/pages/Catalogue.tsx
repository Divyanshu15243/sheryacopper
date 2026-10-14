import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import { useToast } from "@/hooks/use-toast";
import { usePageMeta } from "@/hooks/use-page-meta";
import { productCategories } from "@/data/products";

const CATALOGUE_URL = "https://www.shreyacoppers.com/wp-content/uploads/2020/08/COPPER-NICKEL-FITTING-SV.pdf";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  company: z.string().trim().min(1, "Company name is required").max(200),
});

const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", autoComplete: "email" },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", autoComplete: "tel" },
  { name: "company", label: "Company Name", type: "text", placeholder: "Your company name", autoComplete: "organization" },
] as const;

const emptyForm = { name: "", email: "", phone: "", company: "" };

export default function Catalogue() {
  usePageMeta("Download Catalogue", "Get the Shreya Coppers product catalogue — copper, brass, copper alloy, bronze, titanium, inconel and SS products.");

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] && !fieldErrors[err.path[0] as string]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      const first = Object.keys(fieldErrors)[0];
      if (first) document.getElementById(`catalogue-${first}`)?.focus();
      return;
    }
    setSubmitted(true);
    toast({ title: "Catalogue Request Submitted", description: "You will receive the catalogue on your email shortly." });
    // Trigger PDF download
    window.open(CATALOGUE_URL, "_blank");
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Product Literature"
        title="Download Catalogue"
        subtitle="Get our complete product catalogue delivered to your inbox"
      />

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* What's inside */}
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">What's Covered</p>
            <h2 className="h-section text-balance">Our complete range of copper and alloy products</h2>
            <p className="lede mt-4">
              Fill in the form to receive our complete product catalogue. Browse the categories below online at any time.
            </p>
            <ol className="mt-10 border-t border-line">
              {productCategories.map((c, i) => (
                <li key={c.slug}>
                  <Link
                    to={`/products/${c.slug}`}
                    className="group flex items-baseline gap-4 border-b border-line py-4 transition-colors hover:text-copper-dark"
                  >
                    <span className="font-mono text-[11px] text-steel">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-heading text-[16px] font-semibold">{c.title}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel">
                      {c.products.length} {c.products.length === 1 ? "product" : "products"}
                    </span>
                    <ArrowRight className="h-4 w-4 self-center text-steel transition-colors group-hover:text-copper-dark" aria-hidden />
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="corner-marks border border-line bg-paper p-6 sm:p-10 lg:sticky lg:top-[calc(var(--header-h)+32px)]">
              {submitted ? (
                <div className="py-10 text-center" role="status">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-copper-dark" aria-hidden />
                  <h2 className="mt-6 text-2xl font-bold">Thank You!</h2>
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                    Your catalogue request has been submitted successfully. You will receive it on your email shortly.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a href={CATALOGUE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                      <Download className="h-4 w-4" aria-hidden /> Open Catalogue PDF
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(emptyForm);
                      }}
                      className="btn btn-outline"
                    >
                      Download Another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-4 border-b border-line pb-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-copper">
                      <FileText className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold">Product Catalogue</h2>
                      <p className="mt-1 text-[14px] text-muted-foreground">
                        Fill in the form to receive our complete product catalogue
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    {fields.map((field) => (
                      <div key={field.name}>
                        <label htmlFor={`catalogue-${field.name}`} className="field-label">
                          {field.label} <span className="text-copper-dark">*</span>
                        </label>
                        <input
                          id={`catalogue-${field.name}`}
                          type={field.type}
                          name={field.name}
                          autoComplete={field.autoComplete}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="field"
                          aria-invalid={!!errors[field.name]}
                          aria-describedby={errors[field.name] ? `catalogue-${field.name}-error` : undefined}
                        />
                        {errors[field.name] && (
                          <p id={`catalogue-${field.name}-error`} className="field-error">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}

                    <button type="submit" className="btn btn-primary w-full">
                      <Download className="h-4 w-4" aria-hidden /> Download Catalogue
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
