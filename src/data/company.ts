import { productCategories } from "@/data/products";

// Verified company facts. Everything here comes from the existing site copy or the
// company's certificate of registration (src/assets/shrey-certificate-1024x1024.png).
export const company = {
  name: "Shreya Coppers",
  established: 1974,
  phone: { display: "+91 93242 77851", href: "tel:+919324277851" },
  email: { display: "shreyacoppers@gmail.com", href: "mailto:shreyacoppers@gmail.com" },
  address: {
    lines: ["A-2/283/1/PH-II, GIDC Umbergaon", "Distt. Valsad, Gujarat-396171", "INDIA"],
    short: "GIDC Umbergaon, Valsad, Gujarat",
    mapQuery: "GIDC Umbergaon, Valsad, Gujarat 396171, India",
  },
  summary:
    "Established in 1974, Shreya Coppers is one of the leading manufacturers, exporters, and suppliers of industrial products like Pipes, Tubes, Capillary pipes & Tubes, Flanges, Pipe fittings of metals like Copper, Copper Alloy, Titanium, and Brass.",
  certification: {
    standard: "ISO 9001:2015",
    title: "Certificate of Registration",
    issuer: "URS Certification",
    scope:
      "Manufacture of Copper and Copper Alloys, Brass, Cupro-Nickel Pipes, Tubes, Rods, Section and Profiles",
  },
} as const;

export const yearsInBusiness = new Date().getFullYear() - company.established;

export const productCount = productCategories.reduce((n, c) => n + c.products.length, 0);

// Standards referenced in the published product specifications.
export const referencedStandards = Array.from(
  new Set(
    productCategories.flatMap((c) =>
      c.products.flatMap((p) =>
        (p.specifications ?? [])
          .filter((s) => s.label === "Standard")
          .flatMap((s) => s.value.split(",").map((v) => v.trim())),
      ),
    ),
  ),
);
