import brassProducts from "@/assets/categories/brass-products.jpg";
import copperProducts from "@/assets/categories/copper-products.jpg";
import copperAlloys from "@/assets/categories/copper-alloys.jpg";
import bronzeRod from "@/assets/categories/bronze-rod.jpg";
import titaniumTubes from "@/assets/categories/titanium-tubes.jpg";
import inconelTubes from "@/assets/categories/inconel-tubes.jpg";
import lightningArrester from "@/assets/categories/lightning-arrester.jpg";
import cathodeAnodeHanger from "@/assets/categories/cathode-anode-hanger.jpg";
import ssTubes from "@/assets/categories/ss-tubes.jpg";

// Product images
import brassTubesImage from "@/assets/products/brass_tubes04.png";
import brassSquareTubeImage from "@/assets/products/square-brass-tube03.png";
import brassFittingsImage from "@/assets/products/brass-fittings.jpg";
import navalBrassPlatesImage from "@/assets/products/naval-brass-plates.jpg";
import navalBrassTubeImage from "@/assets/products/brass-Navel-tube02.png";
import brass6337TubeImage from "@/assets/products/63-37-brass-tube.png";
import brass7030TubeImage from "@/assets/products/aluminum-Bass-Tube3-1.png";
import redBrassImage from "@/assets/products/red_brass.png";
import admiraltyBrassImage from "@/assets/products/Admiralty Brass Tubes.png";
import aluminumBrassImage from "@/assets/products/Brass-Aluminum-Tube.png";
import brassHexTubeImage from "@/assets/products/brass-hex-tube-with-inside-round.png";
import brassFlutedTubeImage from "@/assets/products/Brass_Fluted-Brass-tube_image2.png";
import brassRectangularTubeImage from "@/assets/products/Reactangle-Brass-Tube3.png";
import brassTwistedTubeImage from "@/assets/products/twisted_brass_01.png";
import brassOvalTubeImage from "@/assets/products/oval-Brass-tube03-1.png";
import brassOctagonalTubeImage from "@/assets/products/ocyagonal_brass_tubes-1.png";
import brassCapillaryTubeImage from "@/assets/products/Brass_capilery_tube.png";
import brassRadiatorTubeImage from "@/assets/products/brass_radiator.png";
import brassRodsImage from "@/assets/products/Brass-Rods2.png";
import brassSheetsImage from "@/assets/products/Brass-Sheet-01.png";
import brassFittingsNewImage from "@/assets/products/brass_fiirings_01.png";
import brassWireMeshImage from "@/assets/products/BRASS-MESH3.png";
import brassFurnitureImage from "@/assets/products/brass_furniuter3.png";
import copperTubesImage from "@/assets/products/copper-Tubes3.png";
import copperSquareTubesImage from "@/assets/products/square-copper-tubes3.png";
import copperOvalTubesImage from "@/assets/products/oval-Copper-tubes.png";
import copperRectangularTubesImage from "@/assets/products/Copper-RECTANGLE-WITH-ROUND-HOLE.png";
import copperRodsSectionsImage from "@/assets/products/copper-flat4.png";
import copperCapillaryTubesImage from "@/assets/products/COPPER-CAPILARY-TUBES-1.png";
import copperFittingsNewImage from "@/assets/products/copper-fitting2.png";
import copperMeshImage from "@/assets/products/COPPER-MESH3.png";
import copperLugsImage from "@/assets/products/copper_lug.png";
import copperRopesImage from "@/assets/products/Copper-Ropes-image_04-1.png";
import copperNickelTubesImage from "@/assets/products/copper_nickel-tubes.png";
import copperNickelStripsImage from "@/assets/products/COPPER-NICKEL-STRIP.png";
import copperChromiumZirconiumImage from "@/assets/products/Beryllium_copper_rod_product3-2.png";
import finnedTubesImage from "@/assets/products/Finned-tubes-1.png";
import copperNickelFittingsNewImage from "@/assets/products/COPPER-NICKEL-FITTINGS3.png";
import copperNickelBrakeTubingImage from "@/assets/products/copper_nickel-breaking_tube_imahe4.png";
import siliconBronzeRodsImage from "@/assets/products/silicon_brass.png";
import aluminiumBronzeRodsImage from "@/assets/products/aluminium-bronze2.png";
import phosphorusBronzeRodsImage from "@/assets/products/Bromse-rod3-1.png";
import lightningArresterImage from "@/assets/products/copper-earth-rod.png";
import cathodeAnodeHangerImage from "@/assets/products/cathod_3.png";
import titaniumTubesImage from "@/assets/products/TITANIUM-TUBES5.png";
import inconelTubesImage from "@/assets/products/inconel.png";
import ssWeldedTubesImage from "@/assets/products/ss (1).png";
import copperFittingsImage from "@/assets/products/copper-fittings.jpg";
import copperNickelFittingsImage from "@/assets/products/copper-nickel-fittings.jpg";

export interface ProductItem {
  name: string;
  slug: string;
  description?: string;
  features?: string[];
  applications?: string[];
  specifications?: { label: string; value: string }[];
  image?: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  image: string;
  slug: string;
  shortDesc: string;
  products: ProductItem[];
  features: string[];
  applications: string[];
}

export const productCategories: ProductCategory[] = [
  {
    title: "Brass Products",
    slug: "brass-products",
    shortDesc: "Comprehensive range of brass tubes, rods, sheets, fittings and more",
    description: "We are a leading manufacturer and supplier of high-quality brass products. Our brass tubes, rods, sheets, and fittings are manufactured using cutting-edge technologies and international quality standards.",
    image: brassProducts,
    features: ["High corrosion resistance", "Excellent machinability", "Good thermal conductivity", "Attractive golden finish"],
    applications: ["Plumbing systems", "Electrical components", "Marine hardware", "Automotive parts"],
    products: [
      { name: "Brass Tubes", slug: "brass-tubes", image: brassTubesImage, description: "We are one of the prominent Brass tube manufacturers. Owing to our expertise in this field, we are engaged in manufacturing and exporting of Brass Tube. Our excellently equipped production unit enables us to guarantee quality and efficiency in compliance with the predefined international standards. Our high-performance and a robust collection of brass tubes are designed to meet the different requirements of our customers and can be produced according to the specifications they want.\n\nTo meet the evolving needs of our esteemed customer, we are engaged in providing an optimum quality range of Brass Tubes. The main characteristics of our brass tubes are its Strength, Hardness, ductility, good corrosion resistance, machinability, formability, and conductivity.\n\nBeing well known for its finest corrosion-resistant finish, these brass tubes also have a high resistance to wear as well as a low coefficient of friction against steel.\n\nBrass Tubes is an alloy of copper with zinc as a central alloying part means brass tubing is formed through a combination of copper and this alloy. The tubing is available in a variety and choice of shapes, sizes, thicknesses, and finishes. We manufacture brass profile tubes in a variety of shapes and sizes to meet our customer's demands.\n\nWe have well maintained and dependable facilities and they are capable of producing various special tube shapes such as elliptical, D-shaped, octagonal shape, hexagonal and fluted tubes, and also any custom/specific shape for special requirements, etc. and for the size of brass tubing, one can select a specific diameter to meet the needed requirements. One can also order customized tubing to get the accurate and exact required dimensions.\n\nIt is generally used for railings in stairways and also food rails. Likewise, it is used in musical instruments like the trumpet, the tuba, and the saxophone. It is most widely utilized in Architectural fittings and fixtures and as well as have many industrial uses.\n\nBeing a client-centric organization, our sole aim is to achieve maximum customer satisfaction. To ensure this, we make sure that the tubes offered by us are developed in compliance with the specifications provided by the clients.\n\nIn addition to this, the products offered to the clients are manufactured as per the predefined industrial standards.", features: ["High corrosion resistance", "Excellent machinability", "Good thermal conductivity", "Available in custom shapes and sizes", "Low coefficient of friction"], applications: ["Decorative Furniture", "General Engineering Purposes", "Tube, Pipe & Fittings", "Brass Tubes for Agriculture Equipment", "Electrical Engineering", "Fancy and dental goods", "Machine construction", "Automobile engineering"], specifications: [{ label: "Material", value: "CuZn30, CuZn37, CuZn36Pb3" }, { label: "Standard", value: "IS 291, BS 2871, ASTM B135" }, { label: "Outer Diameter", value: "3mm to 350mm" }, { label: "Wall Thickness", value: "0.3mm to 10mm" }, { label: "Length", value: "Up to 12 meters" }] },
      { name: "63/37 Brass Tubes", slug: "63-37-brass-tubes", image: brass6337TubeImage, description: "63/37 Brass Tubes are manufactured using 63% copper and 37% zinc composition. These tubes offer excellent formability and are widely used in general engineering applications.", features: ["63% Copper, 37% Zinc composition", "Good formability", "Excellent corrosion resistance", "High strength"], applications: ["Heat exchangers", "Condensers", "Architectural trim", "Musical instruments"] },
      { name: "70/30 Brass Tubes / Pipes", slug: "70-30-brass-tubes", image: brass7030TubeImage, description: "70/30 Brass Tubes are manufactured using 70% copper and 30% zinc. These tubes provide superior corrosion resistance and are ideal for marine and industrial applications.", features: ["70% Copper, 30% Zinc composition", "Superior corrosion resistance", "Good cold workability", "Excellent for forming"], applications: ["Marine applications", "Ammunition components", "Radiator cores", "Lamp fittings"] },
      { name: "Red Brass Tubes (85/15)", slug: "red-brass-tubes", image: redBrassImage, description: "Red Brass Tubes with 85% copper and 15% zinc composition offer excellent corrosion resistance and are widely used in plumbing and industrial applications.", features: ["85% Copper, 15% Zinc", "Excellent corrosion resistance", "Good machinability", "Attractive reddish color"], applications: ["Plumbing", "Fire protection", "Industrial piping", "Heat exchangers"] },
      { name: "Admiralty Brass Tubes", slug: "admiralty-brass-tubes", image: admiraltyBrassImage, description: "Admiralty Brass Tubes contain approximately 70% copper, 29% zinc, and 1% tin. The addition of tin provides enhanced resistance to dezincification, making them ideal for marine and condenser applications.", features: ["70% Cu, 29% Zn, 1% Sn", "Dezincification resistant", "Excellent for seawater", "High thermal conductivity"], applications: ["Ship condensers", "Power plant condensers", "Heat exchangers", "Desalination plants"] },
      { name: "Aluminum Brass Tubes", slug: "aluminium-brass-tubes", image: aluminumBrassImage, description: "Aluminum Brass Tubes contain approximately 76% copper, 22% zinc, and 2% aluminum. They provide exceptional resistance to impingement corrosion and erosion.", features: ["76% Cu, 22% Zn, 2% Al", "Impingement corrosion resistant", "High erosion resistance", "Suitable for high-velocity seawater"], applications: ["Seawater condensers", "Heat exchangers", "Desalination", "Marine engineering"] },
      { name: "Brass Square Tubes", slug: "brass-square-tubes", image: brassSquareTubeImage, description: "Brass Square Tubes are precision manufactured for architectural, decorative, and engineering applications. Available in various sizes with tight dimensional tolerances.", features: ["Precise dimensions", "Smooth surface finish", "Available in various sizes", "Custom lengths available"], applications: ["Architectural applications", "Decorative work", "Furniture fittings", "Engineering components"] },
      { name: "Brass Hexagonal Tubes", slug: "brass-hexagonal-tubes", image: brassHexTubeImage, description: "Brass Hexagonal Tubes are manufactured to precise specifications for specialized industrial and decorative applications.", features: ["Hexagonal cross-section", "Precise tolerances", "Smooth finish", "Custom sizes"], applications: ["Decorative fixtures", "Mechanical components", "Architectural hardware", "Specialty engineering"] },
      { name: "Brass Fluted Tubes", slug: "brass-fluted-tubes", image: brassFlutedTubeImage, description: "Brass Fluted Tubes feature a unique corrugated surface that enhances heat transfer efficiency and provides an attractive decorative finish.", features: ["Enhanced heat transfer", "Decorative finish", "Increased surface area", "Custom flute patterns"], applications: ["Heat exchangers", "Decorative railings", "Architectural elements", "Furniture"] },
      { name: "Rectangular Brass Tubes", slug: "rectangular-brass-tubes", image: brassRectangularTubeImage, description: "Rectangular Brass Tubes are manufactured for structural and decorative applications requiring a flat profile.", features: ["Flat profile design", "Precise dimensions", "Multiple alloy grades", "Custom sizes available"], applications: ["Construction", "Furniture frames", "Architectural trim", "Industrial framing"] },
      { name: "Twisted / Corrugated Brass Tubes", slug: "twisted-corrugated-brass-tubes", image: brassTwistedTubeImage, description: "Twisted and Corrugated Brass Tubes offer enhanced aesthetics and improved heat transfer characteristics for specialized applications.", features: ["Unique twisted design", "Enhanced heat transfer", "Decorative appeal", "Multiple twist patterns"], applications: ["Decorative fixtures", "Heat exchangers", "Architectural railings", "Specialty applications"] },
      { name: "Brass Oval and Elliptical Tubes", slug: "brass-oval-elliptical-tubes", image: brassOvalTubeImage, description: "Brass Oval and Elliptical Tubes are manufactured for applications requiring streamlined profiles with reduced drag.", features: ["Streamlined profile", "Reduced drag coefficient", "Custom sizes", "Multiple alloy options"], applications: ["Heat exchangers", "Architectural design", "Furniture", "Specialty engineering"] },
      { name: "Brass Octagonal Tubes", slug: "brass-octagonal-tubes", image: brassOctagonalTubeImage, description: "Brass Octagonal Tubes provide a unique cross-sectional profile for decorative and precision engineering applications.", features: ["Octagonal cross-section", "Precise manufacturing", "Decorative finish", "Custom dimensions"], applications: ["Decorative elements", "Precision engineering", "Architectural hardware", "Specialty components"] },
      { name: "Brass Capillary Tubes", slug: "brass-capillary-tubes", image: brassCapillaryTubeImage, description: "Brass Capillary Tubes are precision small-diameter tubes used in instrumentation, refrigeration, and medical equipment.", features: ["Small diameter precision", "Tight tolerances", "Smooth bore", "Consistent wall thickness"], applications: ["Instrumentation", "Refrigeration", "Medical equipment", "Pressure gauges"] },
      { name: "Brass Radiator Tubes", slug: "brass-radiator-tubes", image: brassRadiatorTubeImage, description: "Brass Radiator Tubes are specifically designed for automotive and industrial radiator applications with excellent heat dissipation.", features: ["Excellent heat transfer", "Corrosion resistant", "Precise dimensions", "Consistent quality"], applications: ["Automotive radiators", "Industrial cooling", "HVAC systems", "Heat recovery"] },
      { name: "Brass Rods", slug: "brass-rods", image: brassRodsImage, description: "Brass Rods are manufactured in various grades and sizes for machining, forging, and fabrication applications.", features: ["Multiple grades available", "Excellent machinability", "Good surface finish", "Custom sizes"], applications: ["Machined components", "Fasteners", "Electrical connectors", "Valve stems"] },
      { name: "Brass Sheets", slug: "brass-sheets", image: brassSheetsImage, description: "Brass Sheets are available in various thicknesses and grades for stamping, forming, and decorative applications.", features: ["Various thicknesses", "Smooth surface", "Good formability", "Multiple grades"], applications: ["Stamping", "Engraving", "Decorative panels", "Electrical components"] },
      { name: "Naval Brass Plates", slug: "naval-brass-plates", image: navalBrassTubeImage, description: "Naval Brass Plates contain copper, zinc, and tin, providing excellent resistance to seawater corrosion for marine applications.", features: ["Seawater resistant", "High strength", "Good machinability", "Dezincification resistant"], applications: ["Marine hardware", "Propeller shafts", "Valve components", "Pump parts"] },
      { name: "Brass Fittings", slug: "brass-fittings", image: brassFittingsNewImage, description: "Brass Fittings include elbows, tees, couplings, and adapters manufactured to precise standards for plumbing and industrial piping systems.", features: ["Precise threading", "Leak-proof joints", "Multiple configurations", "Standard and custom sizes"], applications: ["Plumbing systems", "Gas distribution", "Industrial piping", "HVAC systems"] },
      { name: "Brass Wire Mesh", slug: "brass-wire-mesh", image: brassWireMeshImage, description: "Brass Wire Mesh is woven from high-quality brass wire for filtration, screening, and decorative applications.", features: ["Various mesh sizes", "Corrosion resistant", "Durable construction", "Custom dimensions"], applications: ["Filtration", "Screening", "Decorative panels", "Industrial sieving"] },
      { name: "Brass Furniture Components", slug: "brass-furniture-components", image: brassFurnitureImage, description: "Brass Furniture Components include knobs, handles, hinges, and decorative elements for premium furniture manufacturing.", features: ["Attractive finish", "Durable construction", "Custom designs", "Various finishes available"], applications: ["Premium furniture", "Cabinetry", "Interior design", "Architectural hardware"] },
    ],
  },
  {
    title: "Copper Products",
    slug: "copper-products",
    shortDesc: "Copper tubes, rods, fittings, mesh, lugs, and ropes",
    description: "Shreya Coppers offers a comprehensive range of copper products including tubes, rods, fittings, and specialized components manufactured to the highest quality standards.",
    image: copperProducts,
    features: ["Superior electrical conductivity", "Excellent heat transfer", "Antimicrobial properties", "100% recyclable"],
    applications: ["HVAC systems", "Electrical wiring", "Heat exchangers", "Water supply systems"],
    products: [
      { name: "Copper Tubes", slug: "copper-tubes", image: copperTubesImage, description: "We manufacture high-quality copper tubes for various industrial applications including HVAC, plumbing, and refrigeration. Our copper tubes are produced using premium grade copper with excellent dimensional accuracy.", features: ["99.9% pure copper", "Excellent thermal conductivity", "Antimicrobial properties", "Available in various tempers"], applications: ["HVAC systems", "Refrigeration", "Plumbing", "Medical gas systems"], specifications: [{ label: "Material", value: "C12200, C10200, C12000" }, { label: "Standard", value: "ASTM B75, BS 2871, IS 191" }, { label: "Outer Diameter", value: "6mm to 300mm" }, { label: "Wall Thickness", value: "0.5mm to 8mm" }, { label: "Length", value: "Up to 12 meters" }] },
      { name: "Copper Square Tubes", slug: "copper-square-tubes", image: copperSquareTubesImage, description: "Copper Square Tubes are precision manufactured for architectural and engineering applications.", features: ["Square cross-section", "Precise dimensions", "Good conductivity", "Custom sizes"], applications: ["Architectural design", "Bus bar applications", "Decorative work", "Engineering"] },
      { name: "Copper Oval Tubes", slug: "copper-oval-tubes", image: copperOvalTubesImage, description: "Copper Oval Tubes offer a streamlined profile for heat exchangers and decorative applications.", features: ["Oval profile", "Enhanced aesthetics", "Good heat transfer", "Custom dimensions"], applications: ["Heat exchangers", "Decorative fixtures", "Architectural elements", "Refrigeration"] },
      { name: "Copper Rectangular Tubes", slug: "copper-rectangular-tubes", image: copperRectangularTubesImage, description: "Copper Rectangular Tubes are manufactured for structural and electrical busbar applications.", features: ["Rectangular profile", "High conductivity", "Precise dimensions", "Multiple sizes"], applications: ["Bus bars", "Electrical switchgear", "Construction", "Fabrication"] },
      { name: "Copper Rods / Sections / Flats / Strips", slug: "copper-rods-sections", image: copperRodsSectionsImage, description: "We supply copper rods, sections, flats, and strips in various grades and dimensions for electrical and engineering applications.", features: ["Multiple profiles available", "High conductivity", "Good machinability", "Custom sizes"], applications: ["Electrical components", "Grounding systems", "Machined parts", "Bus bars"] },
      { name: "Copper Capillary Tubes", slug: "copper-capillary-tubes", image: copperCapillaryTubesImage, description: "Copper Capillary Tubes are precision small-diameter tubes for refrigeration and instrumentation.", features: ["Small diameter precision", "Consistent bore", "Tight tolerances", "Clean interior"], applications: ["Refrigeration", "Air conditioning", "Instrumentation", "Medical equipment"] },
      { name: "Copper Fittings", slug: "copper-fittings", image: copperFittingsNewImage, description: "Copper Fittings include elbows, tees, reducers, and couplings for plumbing and HVAC installations.", features: ["Solder and press-fit types", "Multiple configurations", "Standard sizes", "Premium quality"], applications: ["Plumbing", "HVAC installation", "Fire protection", "Gas distribution"] },
      { name: "Copper Mesh", slug: "copper-mesh", image: copperMeshImage, description: "Copper Mesh is woven from high-purity copper wire for EMI shielding, filtration, and decorative applications.", features: ["EMI shielding capable", "Various mesh sizes", "High purity copper", "Antimicrobial"], applications: ["EMI/RFI shielding", "Filtration", "Pest control", "Decorative panels"] },
      { name: "Copper Lugs", slug: "copper-lugs", image: copperLugsImage, description: "Copper Lugs are manufactured for secure electrical terminations in power distribution and grounding systems.", features: ["High conductivity", "Crimped or soldered", "Various sizes", "Tinned options"], applications: ["Power distribution", "Cable termination", "Grounding systems", "Switchgear"] },
      { name: "Copper Ropes", slug: "copper-ropes", image: copperRopesImage, description: "Copper Ropes are flexible stranded conductors used for grounding, bonding, and flexible electrical connections.", features: ["Highly flexible", "Multiple strand configurations", "High conductivity", "Custom lengths"], applications: ["Grounding systems", "Flexible connections", "Lightning protection", "Bonding straps"] },
    ],
  },
  {
    title: "Copper Alloys",
    slug: "copper-alloys",
    shortDesc: "Copper nickel tubes, strips, fittings, and zirconium alloys",
    description: "We manufacture and supply premium copper alloy products including copper nickel tubes, strips, fittings, and copper chromium zirconium alloys for specialized industrial applications.",
    image: copperAlloys,
    features: ["Excellent seawater resistance", "High strength at elevated temperatures", "Good fatigue resistance", "Low biofouling"],
    applications: ["Marine engineering", "Desalination plants", "Power generation", "Offshore platforms"],
    products: [
      { name: "Copper Nickel Tubes", slug: "copper-nickel-tubes", image: copperNickelTubesImage, description: "Copper Nickel Tubes (90/10 and 70/30) are manufactured for superior seawater corrosion resistance in marine and offshore applications.", features: ["90/10 and 70/30 grades", "Excellent seawater resistance", "Anti-biofouling", "High strength"], applications: ["Ship building", "Desalination", "Offshore oil platforms", "Power plant condensers"], specifications: [{ label: "Material", value: "C70600 (90/10), C71500 (70/30)" }, { label: "Standard", value: "ASTM B111, BS 2871" }, { label: "Outer Diameter", value: "6mm to 100mm" }, { label: "Wall Thickness", value: "0.5mm to 5mm" }, { label: "Length", value: "Up to 12 meters" }] },
      { name: "Copper Nickel Strips", slug: "copper-nickel-strips", image: copperNickelStripsImage, description: "Copper Nickel Strips are available in various widths and thicknesses for electrical and marine applications.", features: ["Multiple grades", "Precise thickness", "Good formability", "Corrosion resistant"], applications: ["Electrical resistance", "Marine hardware", "Coinage", "Heat exchangers"] },
      { name: "Copper Chromium Zirconium", slug: "copper-chromium-zirconium", image: copperChromiumZirconiumImage, description: "Copper Chromium Zirconium (CuCrZr) alloy offers high strength and conductivity for demanding electrical and welding applications.", features: ["High strength", "Good conductivity", "Heat treatable", "Wear resistant"], applications: ["Resistance welding electrodes", "Circuit breakers", "Commutators", "Mold inserts"] },
      { name: "Finned Tubes", slug: "finned-tubes", image: finnedTubesImage, description: "Finned Tubes provide enhanced heat transfer surfaces for condensers, heat exchangers, and HVAC systems.", features: ["Enhanced heat transfer", "Multiple fin types", "Integral and welded fins", "Custom specifications"], applications: ["Heat exchangers", "Condensers", "Air coolers", "HVAC systems"] },
      { name: "Copper Nickel Fittings", slug: "copper-nickel-fittings", image: copperNickelFittingsNewImage, description: "Copper Nickel Fittings include elbows, tees, reducers, and flanges for marine and industrial piping systems.", features: ["90/10 and 70/30 grades", "Butt weld and socket weld", "Multiple configurations", "Marine grade"], applications: ["Ship piping", "Desalination plants", "Offshore platforms", "Chemical processing"] },
      { name: "Copper Nickel Automotive Brake Tubing", slug: "copper-nickel-brake-tubing", image: copperNickelBrakeTubingImage, description: "Copper Nickel Automotive Brake Tubing provides superior corrosion resistance for automotive brake line applications.", features: ["DOT/SAE approved", "Corrosion resistant", "Easy to bend", "No flaring required"], applications: ["Automotive brake lines", "Fuel lines", "Hydraulic systems", "Transmission lines"] },
    ],
  },
  {
    title: "Bronze Rod",
    slug: "bronze-rod",
    shortDesc: "Silicon, aluminium, and phosphorus bronze rods",
    description: "Shreya Coppers is a leading bronze rod manufacturer. Our bronze rods are made using finest grades of bronze with cutting-edge technologies, perfectly manufactured in adherence to international quality standards.",
    image: bronzeRod,
    features: ["High wear resistance", "Excellent corrosion resistance", "Good machinability", "High load bearing capacity"],
    applications: ["Aerospace industry", "Automotive industry", "Instrument development", "Heavy engineering"],
    products: [
      { name: "Silicon Bronze Rods", slug: "silicon-bronze-rods", image: siliconBronzeRodsImage, description: "Silicon Bronze Rods offer excellent corrosion resistance and high strength for marine and architectural applications.", features: ["High strength", "Excellent corrosion resistance", "Good weldability", "Attractive finish"], applications: ["Marine hardware", "Fasteners", "Pump components", "Architectural elements"] },
      { name: "Aluminium Bronze Rods", slug: "aluminium-bronze-rods", image: aluminiumBronzeRodsImage, description: "Aluminium Bronze Rods provide exceptional strength, wear resistance, and corrosion resistance for heavy-duty applications.", features: ["Very high strength", "Excellent wear resistance", "Non-sparking", "Seawater resistant"], applications: ["Bearings", "Bushings", "Gears", "Marine propellers"] },
      { name: "Phosphorus Bronze Rods", slug: "phosphorus-bronze-rods", image: phosphorusBronzeRodsImage, description: "Phosphorus Bronze Rods offer excellent spring properties, fatigue resistance, and corrosion resistance for precision applications.", features: ["Excellent spring properties", "High fatigue resistance", "Good corrosion resistance", "Fine grain structure"], applications: ["Springs", "Electrical connectors", "Bearings", "Fasteners"] },
    ],
  },
  {
    title: "Lightning Arrester",
    slug: "lightning-arrester",
    shortDesc: "Copper earthing rods for lightning protection systems",
    description: "We are a leading lightning arrester manufacturer. Our lightning arresters are precision engineered by highly skilled technicians with extraordinary features that guarantee full protection from lightning damage.",
    image: lightningArrester,
    features: ["High performance", "Long service life", "Reliable protection", "For high voltage applications"],
    applications: ["Commercial buildings", "Electrical power systems", "Telecommunications", "Industrial facilities"],
    products: [
      { name: "Lightning Arrester", slug: "lightning-arrester-product", image: lightningArresterImage, description: "Our Lightning Arresters are precision engineered copper earthing rods designed to provide complete protection against lightning strikes. Manufactured using high-conductivity copper with advanced engineering.", features: ["High conductivity copper", "Corrosion resistant coating", "Easy installation", "Long service life"], applications: ["Buildings", "Telecom towers", "Power substations", "Industrial plants"] },
    ],
  },
  {
    title: "Cathode and Anode Hanger",
    slug: "cathode-anode-hanger",
    shortDesc: "Hanger bars for electroplating and electrowinning",
    description: "We are a leading cathode hanger manufacturer. We provide the standard certified range of cathode and anode hangers manufactured by our team of skilled experts using quality raw material and modern technology.",
    image: cathodeAnodeHanger,
    features: ["High conductivity", "Corrosion resistant", "Custom designs", "Long durability"],
    applications: ["Plating industry", "Electrolysis", "Hydrometallurgy", "Oil and chemical industry"],
    products: [
      { name: "Cathode and Anode Hanger", slug: "cathode-anode-hanger-product", image: cathodeAnodeHangerImage, description: "Our Cathode and Anode Hangers are manufactured using premium grade copper and stainless steel for electroplating, electrowinning, and electrolysis applications. Available in copper hanger bars, SS clad copper bars, and titanium bars.", features: ["High conductivity copper", "SS clad options", "Titanium variants", "Custom specifications"], applications: ["Electroplating", "Electrowinning", "Electrolysis", "Hydrometallurgy"] },
    ],
  },
  {
    title: "Titanium Tubes",
    slug: "titanium-tubes",
    shortDesc: "High-strength titanium tubes for demanding applications",
    description: "We are a leading titanium tube manufacturer and supplier. Titanium has found applications in many industries because of its strength, unique density, and corrosion resistance.",
    image: titaniumTubes,
    features: ["Highest strength-to-weight ratio", "Exceptional corrosion resistance", "Biocompatible", "High temperature resistance"],
    applications: ["Aircraft hydraulic systems", "Medical implants", "Chemical processing", "Nuclear power plants"],
    products: [
      { name: "Titanium Tubes", slug: "titanium-tubes-product", image: titaniumTubesImage, description: "We manufacture high-quality Titanium Seamless and Welded Tubes for aerospace, chemical, and medical applications. Our titanium tubes meet the most stringent international quality standards.", features: ["Grade 1, 2, 5, 7 available", "Seamless and welded", "Exceptional corrosion resistance", "Lightweight and strong"], applications: ["Aerospace", "Chemical processing", "Medical implants", "Marine engineering"], specifications: [{ label: "Material", value: "Grade 1, 2, 5, 7, 9, 12" }, { label: "Standard", value: "ASTM B338, ASTM B861" }, { label: "Outer Diameter", value: "6mm to 114mm" }, { label: "Wall Thickness", value: "0.5mm to 5mm" }, { label: "Length", value: "Up to 12 meters" }] },
    ],
  },
  {
    title: "Inconel Seamless Tubes",
    slug: "inconel-tubes",
    shortDesc: "Inconel seamless tubes for high-temperature environments",
    description: "We are a leading Inconel seamless tubes manufacturer. Inconel tubes are extensively used in high temperature working industries across the world for their superior corrosion and heat resistance.",
    image: inconelTubes,
    features: ["Extreme temperature resistance", "Oxidation resistant", "Stress-corrosion cracking resistant", "High creep-rupture strength"],
    applications: ["Aerospace engines", "Chemical processing", "Nuclear reactors", "Pollution control equipment"],
    products: [
      { name: "Inconel Seamless Tubes", slug: "inconel-seamless-tubes-product", image: inconelTubesImage, description: "Our Inconel Seamless Tubes are manufactured from premium nickel-chromium alloys for extreme high-temperature and corrosion-resistant applications. Available in Inconel 600, 601, 625, and 725 grades.", features: ["Inconel 600, 601, 625, 725", "Extreme temperature resistance", "Oxidation resistant", "Stress-corrosion resistant"], applications: ["Jet engines", "Nuclear reactors", "Chemical processing", "Heat treatment equipment"], specifications: [{ label: "Material", value: "Inconel 600, 601, 625, 725" }, { label: "Standard", value: "ASTM B163, ASTM B167" }, { label: "Outer Diameter", value: "6mm to 114mm" }, { label: "Wall Thickness", value: "0.5mm to 10mm" }, { label: "Length", value: "Up to 12 meters" }] },
    ],
  },
  {
    title: "SS Welded / Seamless Tubes",
    slug: "ss-tubes",
    shortDesc: "Stainless steel welded and seamless tubes for industrial use",
    description: "We manufacture and supply premium quality Stainless Steel Welded and Seamless Tubes for a wide range of industrial applications. Our SS tubes are produced using advanced manufacturing processes with strict quality control.",
    image: ssTubes,
    features: ["High corrosion resistance", "Excellent strength", "Temperature resistant", "Multiple grades available"],
    applications: ["Chemical processing", "Food & beverage", "Pharmaceutical", "Oil & gas"],
    products: [
      { name: "SS Welded Tubes", slug: "ss-welded-tubes", image: ssWeldedTubesImage, description: "Stainless Steel Welded Tubes are manufactured using high-quality stainless steel strips welded with precision for various industrial applications. Available in 304, 316, 316L, and other grades.", features: ["304, 316, 316L grades", "Precision welded", "Smooth finish", "Competitive pricing"], applications: ["Food processing", "Chemical industry", "Architectural", "Automotive exhaust"], specifications: [{ label: "Material", value: "SS 304, 316, 316L, 321, 347" }, { label: "Standard", value: "ASTM A249, ASTM A269, ASTM A270" }, { label: "Outer Diameter", value: "6mm to 152mm" }, { label: "Wall Thickness", value: "0.5mm to 5mm" }, { label: "Length", value: "Up to 12 meters" }] },
      { name: "SS Seamless Tubes", slug: "ss-seamless-tubes", image: ssWeldedTubesImage, description: "Stainless Steel Seamless Tubes are manufactured without any weld seam for applications demanding high pressure and temperature resistance. Available in multiple grades.", features: ["No weld seam", "High pressure rating", "Superior strength", "Multiple grades"], applications: ["High pressure systems", "Boiler tubes", "Heat exchangers", "Chemical reactors"], specifications: [{ label: "Material", value: "SS 304, 316, 316L, 310, 321" }, { label: "Standard", value: "ASTM A213, ASTM A269, ASTM A312" }, { label: "Outer Diameter", value: "6mm to 219mm" }, { label: "Wall Thickness", value: "0.5mm to 20mm" }, { label: "Length", value: "Up to 12 meters" }] },
    ],
  },
];

export const categoryMap: Record<string, ProductCategory> = {};
productCategories.forEach((cat) => {
  categoryMap[cat.slug] = cat;
});

export const findProduct = (categorySlug: string, productSlug: string): { category: ProductCategory; product: ProductItem } | null => {
  const category = categoryMap[categorySlug];
  if (!category) return null;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return null;
  return { category, product };
};
