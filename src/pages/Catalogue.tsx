import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Download, CheckCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  company: z.string().trim().min(1, "Company name is required").max(200),
});

export default function Catalogue() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });

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
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast({ title: "Catalogue Request Submitted", description: "You will receive the catalogue on your email shortly." });
    // Trigger PDF download
    window.open("https://www.shreyacoppers.com/wp-content/uploads/2020/08/COPPER-NICKEL-FITTING-SV.pdf", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="Download Catalogue" subtitle="Get our complete product catalogue delivered to your inbox" />

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your catalogue request has been submitted successfully. You will receive it on your email shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "" }); }}
                className="copper-gradient px-6 py-3 rounded font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                Download Another
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-surface rounded-lg p-8 sm:p-10 card-shadow">
                <div className="flex items-center gap-3 mb-8">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="font-heading text-xl font-bold">Product Catalogue</h2>
                    <p className="text-sm text-muted-foreground">Fill in the form to receive our complete product catalogue</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { name: "company", label: "Company Name", type: "text", placeholder: "Your company name" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-heading font-medium mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                      {errors[field.name] && (
                        <p className="text-sm text-destructive mt-1">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full copper-gradient inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:opacity-90 transition-opacity"
                  >
                    <Download className="h-4 w-4" /> Download Catalogue
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
