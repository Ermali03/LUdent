import Link from "next/link"
import {
  AlignLeft,
  Crown,
  Droplet,
  Layers,
  Paintbrush,
  Smile,
  Sparkles,
  SmileIcon as Tooth,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconMap: Record<string, LucideIcon> = {
    Tooth: Tooth,
    Smile: Smile,
    AlignLeft: AlignLeft,
    Crown: Crown,
    Paintbrush: Paintbrush,
    Sparkles: Sparkles,
    Droplet: Droplet,
    Zap: Zap,
    Layers: Layers,
  }

  const Icon = IconMap[service.icon] || Tooth

  return (
    <Link
      href={`/services/${service.id}`}
      className="group block p-8 border border-gray-200 hover:border-teal-500 transition-colors"
    >
      <div className="space-y-6">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
          <Icon className="h-8 w-8 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
        <div className="flex items-center text-teal-600 font-medium">
          LEARN MORE <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
