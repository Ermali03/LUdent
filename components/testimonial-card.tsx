import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
}

export function TestimonialCard({ quote, name, location }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
        <p className="text-lg italic">{quote}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
