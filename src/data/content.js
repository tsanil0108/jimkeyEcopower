import carbonBlack from '../assets/products/carbon-black.jpg'
import tallowOil from '../assets/products/tallow-oil.jpg'
import pyrolysisOil from '../assets/products/pyrolysis-oil.jpg'
import usedCookingOil from '../assets/products/used-cooking-oil.jpg'
import burntSteelWire from '../assets/products/burnt-steel-wire.jpg'
import unburntSteelWire from '../assets/products/unburnt-steel-wire.jpg'
import g1 from '../assets/gallery/g1.jpg'
import g2 from '../assets/gallery/g2.jpg'
import g3 from '../assets/gallery/g3.jpg'
import g4 from '../assets/gallery/g4.jpg'
import g5 from '../assets/gallery/g5.jpg'
import g6 from '../assets/gallery/g6.jpg'
import vision from '../assets/gallery/vision.jpg'
import aboutImg from '../assets/about-1.png'

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
    id: 19,
    name: 'Alternative Fuel Resource (AFR)',
    subcategories: [
      { id: 19, name: 'Tyre Pyrolysis oil' },
      { id: 20, name: 'Black Carbon Powder' },
      { id: 21, name: 'UCO' },
      { id: 23, name: 'Tallow oil' },
      { id: 24, name: 'Steel Wire' },
     
    ],
  },
  {
    id: 21,
    name: 'Steel Wire',
    subcategories: [
      { id: 24, name: 'Burnt - Waste Tyre Steel Wire' },
      { id: 25, name: 'Unburnt - Waste Tyre Steel Wire' },
    ],
  },
  {
    id: 22,
    name: 'Cleaning Chemicals',
    subcategories: [
      { id: 30, name: 'Dishwash' },
      { id: 31, name: 'Toilet Cleaner' },
      { id: 32, name: 'Bathroom Cleaner' },
      { id: 33, name: 'Dishwash Liquid' },
      { id: 34, name: 'Multipurpose Degreaser' },
    ],
  },
  {
    id: 40,
    name: 'Extended Producer Responsibility',
    subcategories: [{ id: 50, name: 'EPR Services' }],
  },
  {
    id: 41,
    name: 'Municipal Solid Waste Management',
    subcategories: [{ id: 51, name: 'MSW Management' }],
  },
  {
    id: 42,
    name: 'Industry Waste Management',
    subcategories: [{ id: 52, name: 'Industrial Waste Management' }],
  },
]

export const products = [
  {
    id: 124,
    categoryId: 19,
    subCategoryId: 19,
    name: 'Carbon Black Powder',
    tagline: 'Carbon Black Powder From Tyre Pyrolysis',
    image: carbonBlack,
    description:
      "Recovered carbon black from tyre pyrolysis can be compacted into briquettes for clean-burning fuel with high Btu output and minimal ash, or used as a drop-in substitute for virgin carbon black (VCB) in tyre manufacturing, rubber compounding, pigments and coatings. It offers strong cost efficiency across cable jacketing, conveyor belts, hoses, doormats, nylon bags and industrial rubber goods.",
  },
  {
    id: 125,
    categoryId: 19,
    subCategoryId: 20,
    name: 'Tallow Oil',
    tagline: 'Feedstock for biodiesel production',
    image: tallowOil,
    description:
      'Tallow oil is a key feedstock for the biofuel industry, converted into biodiesel through transesterification with an alcohol and catalyst. The resulting biodiesel closely matches petroleum diesel in energy content and viscosity, and can be used directly in diesel engines without modification.',
  },
  {
    id: 127,
    categoryId: 19,
    subCategoryId: 23,
    name: 'Pyrolysis Oil',
    tagline: 'Generated from waste tyre pyrolysis',
    image: pyrolysisOil,
    description:
      'Waste tyre pyrolysis oil is used as fuel across heavy industries such as cement, glass, ceramics, bricks, heavy-oil power generation, steel production, boilers and heating supply. It can also be refined into diesel via a waste-oil distillation unit, widening its market and value.',
  },
  {
    id: 128,
    categoryId: 19,
    subCategoryId: 21,
    name: 'Used Cooking Oil',
    tagline: 'Feedstock for biodiesel, UCO',
    image: usedCookingOil,
    description:
      "The market for Used Cooking Oil (UCO) keeps expanding as new applications emerge. Converting UCO into biodiesel can cut India's reliance on imported fossil fuels, strengthen the local economy, create green jobs and reduce the national carbon footprint.",
  },
  {
    id: 144,
    categoryId: 21,
    subCategoryId: 24,
    name: 'Burnt Steel Wire',
    tagline: 'By-product of tyre pyrolysis',
    image: burntSteelWire,
    description:
      "Burnt steel wire is a by-product of the waste-tyre pyrolysis process — tyres carry steel reinforcement (beads and belts) that remains behind in a burnt or semi-charred state after pyrolysis, often coated with residual carbon black. Though it looks like waste, it has several recycling and reuse options.",
  },
  {
    id: 145,
    categoryId: 21,
    subCategoryId: 25,
    name: 'Unburnt Steel Wire',
    tagline: 'Recovered from crumb rubber',
    image: unburntSteelWire,
    description:
      "Unburnt steel wire is the residual steel recovered when tyres are ground into crumb rubber during recycling. Since it hasn't been exposed to burning, its structural integrity and properties are well preserved, making it valuable for further recycling.",
  },
  {
    id: 150,
    categoryId: 22,
    subCategoryId: 30,
    name: 'Dishwash',
    tagline: 'Bar / powder for dishwashing',
    image: null,
    description:
      'A dishwashing bar/powder formulated to cut through grease and food residue on utensils, leaving them clean and grease-free with everyday use.',
  },
  {
    id: 151,
    categoryId: 22,
    subCategoryId: 31,
    name: 'Toilet Cleaner',
    tagline: 'Disinfectant toilet bowl cleaner',
    image: null,
    description:
      'A disinfectant toilet cleaner that removes stains, limescale and odour-causing bacteria from toilet bowls, keeping bathrooms hygienic and fresh.',
  },
  {
    id: 152,
    categoryId: 22,
    subCategoryId: 32,
    name: 'Bathroom Cleaner',
    tagline: 'Multi-surface bathroom cleaner',
    image: null,
    description:
      'A multi-surface bathroom cleaner for tiles, fittings and glass that lifts soap scum and hard-water stains for a streak-free shine.',
  },
  {
    id: 153,
    categoryId: 22,
    subCategoryId: 33,
    name: 'Dishwash Liquid',
    tagline: 'Concentrated dishwashing liquid',
    image: null,
    description:
      'A concentrated dishwashing liquid that produces a rich lather to cut through oil and grease on utensils while being gentle on hands.',
  },
  {
    id: 154,
    categoryId: 22,
    subCategoryId: 34,
    name: 'Multipurpose Degreaser',
    tagline: 'Heavy-duty surface degreaser',
    image: null,
    description:
      'A heavy-duty degreaser for kitchen, floor and industrial surfaces that breaks down tough grease, oil and grime for quick, effective cleaning.',
  },
  {
    id: 170,
    categoryId: 40,
    subCategoryId: 50,
    name: 'Extended Producer Responsibility (EPR)',
    tagline: 'End-to-end EPR compliance support',
    image: null,
    description:
      'Jimkey supports brand owners, importers and manufacturers with Extended Producer Responsibility (EPR) compliance — covering plastic packaging, e-waste and battery waste obligations — by connecting them with authorised recyclers and helping manage documentation, targets and reporting under the applicable EPR framework.',
  },
  {
    id: 171,
    categoryId: 41,
    subCategoryId: 51,
    name: 'Municipal Solid Waste Management',
    tagline: 'Collection, segregation & processing support',
    image: null,
    description:
      'Jimkey works with municipal bodies and waste aggregators on municipal solid waste (MSW) management — supporting collection, segregation and onward processing of dry, wet and inert waste streams to reduce landfill load and recover reusable materials.',
  },
  {
    id: 172,
    categoryId: 42,
    subCategoryId: 52,
    name: 'Industry Waste Management',
    tagline: 'Industrial & hazardous waste handling',
    image: null,
    description:
      'Jimkey assists industrial clients with the responsible management of process and hazardous waste — coordinating collection, safe handling and channeling of waste streams to authorised recycling or disposal facilities in line with regulatory requirements.',
  },
]

export const gallery = [g1, g2, g3, g4, g5, g6]
export { vision, aboutImg }

export const groupCompanies = [
  { name: 'Sureflo', url: 'https://sureflo.in/' },
  { name: 'AnamKlean', url: 'https://anamklean.com/' },
  { name: 'Petro Nefteng', url: 'https://petronefteng.com/' },
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