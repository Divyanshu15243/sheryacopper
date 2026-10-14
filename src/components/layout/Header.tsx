import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { categoryImage, productCategories } from "@/data/products";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const companyLinks = [
  { name: "About Us", path: "/about", desc: "Our story since 1974" },
  { name: "Infrastructure", path: "/infrastructure", desc: "Facilities & capabilities" },
  { name: "Awards & Certifications", path: "/awards", desc: `${company.certification.standard} certified` },
];

type MenuId = "company" | "products" | null;

const navItemClass = (active: boolean) =>
  cn(
    "relative inline-flex h-[var(--header-h)] items-center gap-1 px-3 font-heading text-[14px] font-semibold transition-colors xl:px-4",
    "after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:origin-left after:bg-copper after:transition-transform xl:after:inset-x-4",
    active ? "text-ink after:scale-x-100" : "text-ink/75 after:scale-x-0 hover:text-ink",
  );

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<MenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [preview, setPreview] = useState(productCategories[0].slug);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number>();

  // Close menus on navigation
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape / outside click for desktop menus
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        navRef.current?.querySelector<HTMLButtonElement>(`[data-menu="${open}"]`)?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Lock scroll behind the mobile drawer
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const hoverOpen = (id: MenuId) => ({
    onMouseEnter: () => {
      window.clearTimeout(closeTimer.current);
      setOpen(id);
    },
    onMouseLeave: () => {
      closeTimer.current = window.setTimeout(() => setOpen(null), 150);
    },
  });

  const companyActive = companyLinks.some((l) => pathname.startsWith(l.path));
  const productsActive = pathname.startsWith("/products");
  const previewCat = productCategories.find((c) => c.slug === preview) ?? productCategories[0];

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink text-white/70 lg:block">
        <div className="container-wide flex h-9 items-center justify-between text-[12.5px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
            <span className="text-copper">{company.certification.standard}</span> Certified
            <span className="mx-3 text-white/25">|</span>
            Est. {company.established}
            <span className="mx-3 hidden text-white/25 lg:inline">|</span>
            <span className="hidden lg:inline">{company.address.short}</span>
          </p>
          <div className="flex items-center gap-6">
            <a href={company.phone.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5 text-copper" aria-hidden /> {company.phone.display}
            </a>
            <a href={company.email.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5 text-copper" aria-hidden /> {company.email.display}
            </a>
          </div>
        </div>
      </div>

      <header ref={navRef} className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="container-wide flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Shreya Coppers home">
            <img src={logo} alt="" width={40} height={44} className="h-11 w-auto" />
            <span className="min-w-0 leading-none">
              <span className="block font-heading text-[19px] font-extrabold tracking-tight text-ink">Shreya Coppers</span>
              <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-steel min-[400px]:block">
                Copper &amp; Alloy Manufacturers
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center">
              <li>
                <NavLink to="/" end className={({ isActive }) => navItemClass(isActive)}>
                  Home
                </NavLink>
              </li>

              <li className="relative" {...hoverOpen("company")}>
                <button
                  type="button"
                  data-menu="company"
                  aria-expanded={open === "company"}
                  aria-controls="menu-company"
                  onClick={() => setOpen(open === "company" ? null : "company")}
                  className={navItemClass(companyActive)}
                >
                  Company
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open === "company" && "rotate-180")} aria-hidden />
                </button>
                <div
                  id="menu-company"
                  hidden={open !== "company"}
                  className="absolute left-0 top-full z-50 w-72 border border-line bg-white p-2 shadow-[0_24px_48px_-24px_hsl(var(--ink)/0.35)]"
                >
                  {companyLinks.map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      className={cn(
                        "block border-l-2 px-4 py-3 transition-colors hover:bg-paper",
                        pathname.startsWith(l.path) ? "border-copper bg-paper" : "border-transparent",
                      )}
                    >
                      <span className="block font-heading text-sm font-bold text-ink">{l.name}</span>
                      <span className="mt-0.5 block text-[13px] text-muted-foreground">{l.desc}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="static" {...hoverOpen("products")}>
                <button
                  type="button"
                  data-menu="products"
                  aria-expanded={open === "products"}
                  aria-controls="menu-products"
                  onClick={() => setOpen(open === "products" ? null : "products")}
                  className={navItemClass(productsActive)}
                >
                  Products
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open === "products" && "rotate-180")} aria-hidden />
                </button>
                <div
                  id="menu-products"
                  hidden={open !== "products"}
                  className="absolute inset-x-0 top-full z-50 border-b border-t border-line bg-white shadow-[0_32px_64px_-32px_hsl(var(--ink)/0.4)]"
                >
                  <div className="container-wide grid grid-cols-12 gap-10 py-8">
                    <div className="col-span-7">
                      <p className="eyebrow mb-5">Product Range</p>
                      <ul className="grid grid-cols-2 gap-x-8">
                        {productCategories.map((c, i) => (
                          <li key={c.slug}>
                            <Link
                              to={`/products/${c.slug}`}
                              onMouseEnter={() => setPreview(c.slug)}
                              onFocus={() => setPreview(c.slug)}
                              className="group flex items-baseline gap-3 border-b border-line py-3 transition-colors hover:border-copper"
                            >
                              <span className="font-mono text-[11px] text-steel">{String(i + 1).padStart(2, "0")}</span>
                              <span className="flex-1 font-heading text-[15px] font-semibold text-ink group-hover:text-copper-dark">
                                {c.title}
                              </span>
                              <span className="font-mono text-[11px] text-steel">{c.products.length}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link to="/products" className="link-arrow mt-6">
                        View all products <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                    <div className="col-span-5 bg-paper p-6">
                      <div className="aspect-square max-h-72 overflow-hidden bg-white">
                        <img src={categoryImage(previewCat)} alt="" className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <p className="mt-5 font-heading text-lg font-bold text-ink">{previewCat.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{previewCat.shortDesc}</p>
                    </div>
                  </div>
                </div>
              </li>

              {[
                { name: "Gallery", path: "/gallery" },
                { name: "Catalogue", path: "/catalogue" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <NavLink to={l.path} className={({ isActive }) => navItemClass(isActive)}>
                    {l.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/contact" className="btn btn-primary hidden min-h-[44px] sm:inline-flex">
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          hidden={!mobileOpen}
          className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-white lg:hidden"
        >
          <MobileMenu pathname={pathname} onNavigate={() => setMobileOpen(false)} />
        </div>
      </header>
    </>
  );
}

function MobileMenu({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const [section, setSection] = useState<MenuId>(pathname.startsWith("/products") ? "products" : null);

  const rowClass = (active: boolean) =>
    cn(
      "flex w-full items-center justify-between border-b border-line py-4 font-heading text-lg font-bold",
      active ? "text-copper-dark" : "text-ink",
    );

  const Group = ({ id, label, children }: { id: Exclude<MenuId, null>; label: string; children: React.ReactNode }) => (
    <div>
      <button
        type="button"
        className={rowClass(false)}
        aria-expanded={section === id}
        onClick={() => setSection(section === id ? null : id)}
      >
        {label}
        <ChevronDown className={cn("h-5 w-5 transition-transform", section === id && "rotate-180")} aria-hidden />
      </button>
      {section === id && <div className="border-b border-line bg-paper py-2">{children}</div>}
    </div>
  );

  const subLink = (to: string, label: string) => (
    <Link
      key={to}
      to={to}
      onClick={onNavigate}
      className={cn(
        "block border-l-2 px-4 py-2.5 text-[15px]",
        pathname === to ? "border-copper font-semibold text-ink" : "border-transparent text-muted-foreground",
      )}
    >
      {label}
    </Link>
  );

  return (
    <nav aria-label="Mobile" className="container-wide flex min-h-full flex-col pb-8 pt-2">
      <Link to="/" onClick={onNavigate} className={rowClass(pathname === "/")}>Home</Link>
      <Group id="company" label="Company">
        {companyLinks.map((l) => subLink(l.path, l.name))}
      </Group>
      <Group id="products" label="Products">
        {subLink("/products", "All Products")}
        {productCategories.map((c) => subLink(`/products/${c.slug}`, c.title))}
      </Group>
      <Link to="/gallery" onClick={onNavigate} className={rowClass(pathname === "/gallery")}>Gallery</Link>
      <Link to="/catalogue" onClick={onNavigate} className={rowClass(pathname === "/catalogue")}>Catalogue</Link>
      <Link to="/contact" onClick={onNavigate} className={rowClass(pathname === "/contact")}>Contact</Link>

      <Link to="/contact" onClick={onNavigate} className="btn btn-primary mt-8 w-full">
        Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>

      <div className="mt-8 space-y-3 text-[15px]">
        <a href={company.phone.href} className="flex items-center gap-3 text-ink">
          <Phone className="h-4 w-4 text-copper-dark" aria-hidden /> {company.phone.display}
        </a>
        <a href={company.email.href} className="flex items-center gap-3 text-ink">
          <Mail className="h-4 w-4 text-copper-dark" aria-hidden /> {company.email.display}
        </a>
      </div>
    </nav>
  );
}
