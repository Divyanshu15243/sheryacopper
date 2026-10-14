import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  const location = useLocation();
  usePageMeta("Page Not Found");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
        <div className="container-wide py-24 md:py-32">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-copper">Error 404</p>
          <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Page not found</h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="btn btn-primary">
              Return to Home <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/products" className="btn btn-outline-light">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
