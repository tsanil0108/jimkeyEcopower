import { Flame, Cable, SprayCan, FileCheck2, Trash2, Building2, Package } from 'lucide-react'

const iconMap = {
  Flame,
  Cable,
  SprayCan,
  FileCheck2,
  Trash2,
  Building2,
}

/** Backend Category.icon is a plain string (e.g. "Flame") — resolve it to a component. */
export function getCategoryIcon(name) {
  return iconMap[name] || Package
}