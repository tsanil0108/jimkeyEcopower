import {
  FileCheck2,
  Recycle,
  BatteryCharging,
  Cpu,
  Trash2,
  Building2,
} from 'lucide-react'

import plasticWasteImage from '../assets/products/Plastic Waste EPR.png'
import eWasteImage from '../assets/products/E-Waste.png'
import batteryWasteImage from '../assets/products/Battery Waste.png'
import tyreEprImage from '../assets/products/Tyre EPR.png'
import mswImage from '../assets/products/Municipal Solid Waste Management.png'
import industryWasteImage from '../assets/products/Industry Waste Management.png'

/*
  Steps for the Services page journey.
  `to` = where the "Explore ..." link goes.
  Category ids: 4 = EPR, 5 = Municipal Solid Waste, 6 = Industry Waste
*/
export const serviceSteps = [
  {
    id: 1,
    num: '01',
    icon: FileCheck2,
    name: 'Extended Producer Responsibility',
    short: 'EPR',
    title: 'End-to-End EPR Compliance Support.',
    image: plasticWasteImage,
    to: '/services?category=4',
  },
  {
    id: 2,
    num: '02',
    icon: Cpu,
    name: 'E-Waste EPR',
    short: 'E-Waste EPR',
    title: 'E-Waste EPR for Electronics Producers & Importers.',
    image: eWasteImage,
    to: '/services?category=4',
  },
  {
    id: 3,
    num: '03',
    icon: BatteryCharging,
    name: 'Battery Waste EPR',
    short: 'Battery EPR',
    title: 'Battery Waste EPR with Authorised Recyclers.',
    image: batteryWasteImage,
    to: '/services?category=4',
  },
  {
    id: 4,
    num: '04',
    icon: Recycle,
    name: 'Tyre & Used Oil EPR',
    short: 'Tyre EPR',
    title: 'Waste Tyre & Used Oil EPR Compliance.',
    image: tyreEprImage,
    to: '/services?category=4',
  },
  {
    id: 5,
    num: '05',
    icon: Trash2,
    name: 'Municipal Solid Waste Management',
    short: 'MSW',
    title: 'Collection, Segregation & Processing Support.',
    image: mswImage,
    to: '/services?category=5',
  },
  {
    id: 6,
    num: '06',
    icon: Building2,
    name: 'Industry Waste Management',
    short: 'Industry Waste',
    title: 'Safe Handling of Industrial & Hazardous Waste.',
    image: industryWasteImage,
    to: '/services?category=6',
  },
]