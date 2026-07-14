import carbonBlack from '../assets/products/carbon-black.jpg'
import tallowOil from '../assets/products/tallow-oil.jpg'
import pyrolysisOil from '../assets/products/pyrolysis-oil.jpg'
import usedCookingOil from '../assets/products/used-cooking-oil.jpg'
import burntSteelWire from '../assets/products/burnt-steel-wire.jpg'
import unburntSteelWire from '../assets/products/unburnt-steel-wire.jpg'
import heroImg from '../assets/products/hero.png'
import g1 from '../assets/gallery/g1.jpg'
import g2 from '../assets/gallery/g2.jpg'
import g3 from '../assets/gallery/g3.jpg'
import g4 from '../assets/gallery/g4.jpg'
import g5 from '../assets/gallery/g5.jpg'
import g6 from '../assets/gallery/g6.jpg'
import vision from '../assets/gallery/vision.jpg'
import aboutImg from '../assets/about-1.png'

// newly added product images (cleaning chemicals + EPR + waste-management)
import dishwash from '../assets/products/Dishwash.png'
import toiletCleaner from '../assets/products/toilet cleaner.png'
import bathroomCleaner from '../assets/products/bathroom cleaner.png'
import dishwashLiquid from '../assets/products/dishwashliquid.png'
import multipurposeDegreaser from '../assets/products/multipurspose degreaser.png'
import plasticWasteEPR from '../assets/products/Plastic Waste EPR.png'
import batteryWasteEPR from '../assets/products/Battery Waste.png'
import eWasteEPR from '../assets/products/E-Waste.png'
import usedOilEPR from '../assets/products/Used Oil EPR.png'
import tyreEPR from '../assets/products/Tyre EPR.png'
import mswManagement from '../assets/products/Municipal Solid Waste Management.png'
import industryWasteManagement from '../assets/products/Industry Waste Management.png'

import { Flame, Cable, SprayCan, FileCheck2 as FileCheckIcon, Trash2, Building2 } from 'lucide-react'

// NOTE: category ids are 1-6 and every subcategory id is globally unique
// (101-105, 201-202, 301-305, 401, 501, 601) so there is never an id clash
// across categories, and every subcategory here has a matching product below.
export const categoryMeta = {
  1: { icon: Flame, accent: 'amber' },
  2: { icon: Cable, accent: 'teal' },
  3: { icon: SprayCan, accent: 'navy' },
  4: { icon: FileCheckIcon, accent: 'teal' },
  5: { icon: Trash2, accent: 'navy' },
  6: { icon: Building2, accent: 'amber' },
}

export const company = {
  name: 'Jimkey Ecopower',
  tagline: 'Pioneering the Future of Sustainable Energy and Circular Economy',
  phone: '+91 97680 08679',
  email: 'info@jimkey.in',
  address: "A-101, New India Chambers, Cross Road 'A', off MIDC, Andheri East, Mumbai 400093",
  whatsapp: '919768008679',
}

export const categories = [
  {
    id: 1,
    name: 'Alternative Fuel Resource (AFR)',
    subcategories: [
      { id: 101, name: 'Tyre Pyrolysis Oil' },
      { id: 102, name: 'Black Carbon Powder' },
      { id: 103, name: 'Used Cooking Oil (UCO)' },
      { id: 104, name: 'Tallow Oil' },
    ],
  },
  {
    id: 2,
    name: 'Steel Wire',
    subcategories: [
      { id: 201, name: 'Burnt - Waste Tyre Steel Wire' },
      { id: 202, name: 'Unburnt - Waste Tyre Steel Wire' },
    ],
  },
  {
    id: 3,
    name: 'Cleaning Chemicals',
    subcategories: [
      { id: 301, name: 'Dishwash' },
      { id: 302, name: 'Toilet Cleaner' },
      { id: 303, name: 'Bathroom Cleaner' },
      { id: 304, name: 'Dishwash Liquid' },
      { id: 305, name: 'Multipurpose Degreaser' },
    ],
  },
  {
    id: 4,
    name: 'Extended Producer Responsibility',
    subcategories: [
      { id: 401, name: 'EPR Services' },
      { id: 402, name: 'Plastic Waste' },
      { id: 403, name: 'Battery Waste' },
      { id: 404, name: 'E-Waste' },
      { id: 405, name: 'Used Oil' },
      { id: 406, name: 'Tyre' },
    ],
  },
  {
    id: 5,
    name: 'Municipal Solid Waste Management',
    subcategories: [{ id: 501, name: 'MSW Management' }],
  },
  {
    id: 6,
    name: 'Industry Waste Management',
    subcategories: [{ id: 601, name: 'Industrial Waste Management' }],
  },
]

export const products = [
  {
    id: 124,
    categoryId: 1,
    subCategoryId: 102,
    name: 'Carbon Black Powder',
    form: 'Powder',
    tagline: 'Carbon Black Powder From Tyre Pyrolysis',
    image: carbonBlack,
    description:
      "Recovered carbon black from tyre pyrolysis can be compacted into briquettes for clean-burning fuel with high Btu output and minimal ash, or used as a drop-in substitute for virgin carbon black (VCB) in tyre manufacturing, rubber compounding, pigments and coatings. It offers strong cost efficiency across cable jacketing, conveyor belts, hoses, doormats, nylon bags and industrial rubber goods.",
  },
  {
    id: 125,
    categoryId: 1,
    subCategoryId: 104,
    name: 'Tallow Oil',
    form: 'Liquid',
    tagline: 'Feedstock for biodiesel production',
    image: tallowOil,
    description:
      'Tallow oil is a key feedstock for the biofuel industry, converted into biodiesel through transesterification with an alcohol and catalyst. The resulting biodiesel closely matches petroleum diesel in energy content and viscosity, and can be used directly in diesel engines without modification.',
  },
  {
    id: 127,
    categoryId: 1,
    subCategoryId: 101,
    name: 'Pyrolysis Oil',
    form: 'Liquid',
    tagline: 'Generated from waste tyre pyrolysis',
    image: pyrolysisOil,
    description:
      'Waste tyre pyrolysis oil is used as fuel across heavy industries such as cement, glass, ceramics, bricks, heavy-oil power generation, steel production, boilers and heating supply. It can also be refined into diesel via a waste-oil distillation unit, widening its market and value.',
  },
  {
    id: 128,
    categoryId: 1,
    subCategoryId: 103,
    name: 'Used Cooking Oil',
    form: 'Liquid',
    tagline: 'Feedstock for biodiesel, UCO',
    image: usedCookingOil,
    description:
      "The market for Used Cooking Oil (UCO) keeps expanding as new applications emerge. Converting UCO into biodiesel can cut India's reliance on imported fossil fuels, strengthen the local economy, create green jobs and reduce the national carbon footprint.",
  },
  {
    id: 144,
    categoryId: 2,
    subCategoryId: 201,
    name: 'Burnt Steel Wire',
    form: 'Solid',
    tagline: 'By-product of tyre pyrolysis',
    image: burntSteelWire,
    description:
      "Burnt steel wire is a by-product of the waste-tyre pyrolysis process — tyres carry steel reinforcement (beads and belts) that remains behind in a burnt or semi-charred state after pyrolysis, often coated with residual carbon black. Though it looks like waste, it has several recycling and reuse options.",
  },
  {
    id: 145,
    categoryId: 2,
    subCategoryId: 202,
    name: 'Unburnt Steel Wire',
    form: 'Solid',
    tagline: 'Recovered from crumb rubber',
    image: unburntSteelWire,
    description:
      "Unburnt steel wire is the residual steel recovered when tyres are ground into crumb rubber during recycling. Since it hasn't been exposed to burning, its structural integrity and properties are well preserved, making it valuable for further recycling.",
  },
  {
    id: 150,
    categoryId: 3,
    subCategoryId: 301,
    name: 'Dishwash',
    form: 'Bar / Powder',
    tagline: 'Bar / powder for dishwashing',
    image: dishwash,
    description:
      'A dishwashing bar/powder formulated to cut through grease and food residue on utensils, leaving them clean and grease-free with everyday use.',
  },
  {
    id: 151,
    categoryId: 3,
    subCategoryId: 302,
    name: 'Toilet Cleaner',
    form: 'Liquid',
    tagline: 'Disinfectant toilet bowl cleaner',
    image: toiletCleaner,
    description:
      'A disinfectant toilet cleaner that removes stains, limescale and odour-causing bacteria from toilet bowls, keeping bathrooms hygienic and fresh.',
  },
  {
    id: 152,
    categoryId: 3,
    subCategoryId: 303,
    name: 'Bathroom Cleaner',
    form: 'Liquid',
    tagline: 'Multi-surface bathroom cleaner',
    image: bathroomCleaner,
    description:
      'A multi-surface bathroom cleaner for tiles, fittings and glass that lifts soap scum and hard-water stains for a streak-free shine.',
  },
  {
    id: 153,
    categoryId: 3,
    subCategoryId: 304,
    name: 'Dishwash Liquid',
    form: 'Liquid',
    tagline: 'Concentrated dishwashing liquid',
    image: dishwashLiquid,
    description:
      'A concentrated dishwashing liquid that produces a rich lather to cut through oil and grease on utensils while being gentle on hands.',
  },
  {
    id: 154,
    categoryId: 3,
    subCategoryId: 305,
    name: 'Multipurpose Degreaser',
    form: 'Liquid',
    tagline: 'Heavy-duty surface degreaser',
    image: multipurposeDegreaser,
    description:
      'A heavy-duty degreaser for kitchen, floor and industrial surfaces that breaks down tough grease, oil and grime for quick, effective cleaning.',
  },
  {
    id: 170,
    categoryId: 4,
    subCategoryId: 401,
    name: 'Extended Producer Responsibility (EPR)',
    form: 'Service',
    tagline: 'End-to-end EPR compliance support',
    image: null,
    description:
      'Jimkey supports brand owners, importers and manufacturers with Extended Producer Responsibility (EPR) compliance — covering plastic packaging, e-waste and battery waste obligations — by connecting them with authorised recyclers and helping manage documentation, targets and reporting under the applicable EPR framework.',
  },
  {
    id: 173,
    categoryId: 4,
    subCategoryId: 402,
    name: 'Plastic Waste EPR',
    form: 'Service',
    tagline: 'EPR compliance for plastic packaging',
    image: plasticWasteEPR,
    description:
      'Jimkey helps brand owners, producers and importers meet their Plastic Waste EPR obligations — connecting them with authorised recyclers and co-processors, and managing targets, documentation and annual reporting under the Plastic Waste Management Rules.',
  },
  {
    id: 174,
    categoryId: 4,
    subCategoryId: 403,
    name: 'Battery Waste EPR',
    form: 'Service',
    tagline: 'EPR compliance for battery producers',
    image: batteryWasteEPR,
    description:
      'Jimkey supports battery producers and importers with Battery Waste EPR compliance — channeling used batteries to authorised recyclers and handling registration, target tracking and reporting under the Battery Waste Management Rules.',
  },
  {
    id: 175,
    categoryId: 4,
    subCategoryId: 404,
    name: 'E-Waste EPR',
    form: 'Service',
    tagline: 'EPR compliance for electronic waste',
    image: eWasteEPR,
    description:
      'Jimkey assists electronics manufacturers, importers and brand owners with E-Waste EPR obligations — connecting them with authorised dismantlers and recyclers and managing collection targets and compliance reporting under the E-Waste Management Rules.',
  },
  {
    id: 176,
    categoryId: 4,
    subCategoryId: 405,
    name: 'Used Oil EPR',
    form: 'Service',
    tagline: 'EPR compliance for used/waste oil',
    image: usedOilEPR,
    description:
      'Jimkey helps producers and bulk consumers of lubricating and industrial oils manage Used Oil EPR compliance — channeling used oil to authorised re-refiners and recyclers and handling the associated documentation and reporting.',
  },
  {
    id: 177,
    categoryId: 4,
    subCategoryId: 406,
    name: 'Tyre EPR',
    form: 'Service',
    tagline: 'EPR compliance for waste tyres (ELT)',
    image: tyreEPR,
    description:
      'Jimkey supports tyre manufacturers and importers with Waste Tyre (End-of-Life Tyre) EPR compliance — connecting them with authorised recyclers and pyrolysis units and managing collection targets, documentation and reporting under the applicable EPR framework.',
  },
  {
    id: 171,
    categoryId: 5,
    subCategoryId: 501,
    name: 'Municipal Solid Waste Management',
    tagline: 'Collection, segregation & processing support',
    image: mswManagement,
    form: 'Service',
    description:
      'Jimkey works with municipal bodies and waste aggregators on municipal solid waste (MSW) management — supporting collection, segregation and onward processing of dry, wet and inert waste streams to reduce landfill load and recover reusable materials.',
  },
  {
    id: 172,
    categoryId: 6,
    subCategoryId: 601,
    name: 'Industry Waste Management',
    tagline: 'Industrial & hazardous waste handling',
    image: industryWasteManagement,
    form: 'Service',
    description:
      'Jimkey assists industrial clients with the responsible management of process and hazardous waste — coordinating collection, safe handling and channeling of waste streams to authorised recycling or disposal facilities in line with regulatory requirements.',
  },
]

export const gallery = [g1, g2, g3, g4, g5, g6]
export { vision, aboutImg, heroImg }



export const stats = [
  { value: '2021', label: 'Founded' },
  { value: '12+', label: 'Material streams traded' },
  { value: '21+', label: 'Partners & clients' },
  
]

export const valueProps = [
  {
    title: 'Verified material quality',
    desc: 'Every consignment of AFR, oils and steel wire is checked against agreed specs before it leaves the source.',
  },
  {
    title: 'Pan-India sourcing network',
    desc: 'A growing base of trusted suppliers across India keeps volumes and delivery timelines predictable.',
  },
  {
    title: 'Documentation, handled',
    desc: 'From EPR paperwork to waste-transfer records, Jimkey manages the compliance trail alongside the material.',
  },
  {
    title: 'Measurable impact',
    desc: 'Every tonne traded is a tonne of fossil fuel or virgin material displaced — tracked stage by stage.',
  },
]

export const faqs = [
  {
    q: 'What materials does Jimkey trade?',
    a: 'Alternative fuel resources (tyre pyrolysis oil, black carbon powder, UCO, tallow oil), burnt and unburnt steel wire recovered from tyre recycling, and a range of cleaning chemicals.',
  },
  {
    q: 'Who buys these materials?',
    a: 'Cement, glass, ceramics, brick and rubber manufacturers, biodiesel producers, and steel re-processors who use recovered material as a drop-in or blended input.',
  },
  {
    q: 'Does Jimkey handle compliance and EPR?',
    a: 'Yes — Jimkey supports brand owners and manufacturers with Extended Producer Responsibility obligations across plastic packaging, e-waste and battery waste.',
  },
  {
    q: 'Which regions do you operate in?',
    a: "Jimkey is headquartered in Mumbai and sources and supplies across India, with group companies extending the network further.",
  },
]

export const workingSteps = [
  { n: 1, title: 'Empower', desc: 'Promoting areas where fossil fuel consumption can be replaced with AFR' },
  { n: 2, title: 'Connect', desc: 'Clients who play an active part in sustainable change' },
  { n: 3, title: 'Develop', desc: 'A network of trusted suppliers for AFR' },
  { n: 4, title: 'Manage', desc: 'Monitoring the entire supply chain during transaction' },
  { n: 5, title: 'Delivery', desc: 'Delivery and reporting of high quality AFR' },
]

export const visionMission = [
  {
    title: 'The Vision and Mission',
    desc: 'Global leader in the trading of alternative fuel resources, championing the principles of circular economy and sustainability',
  },
  {
    title: 'Driving Sustainable Change',
    desc: 'Jimkey seeks to significantly reduce reliance on fossil fuels and contribute to a cleaner planet',
  },
  {
    title: 'Promotion of Renewable and Green Energy',
    desc: 'Jimkey aims to facilitate the integration of these sustainable energy sources into the mainstream, fostering a cleaner and healthier planet',
  },
  {
    title: 'Community Empowerment',
    desc: 'Jimkey strives to educate, inspire, and empower individuals to take an active role in shaping a greener future',
  },
]