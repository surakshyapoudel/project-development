import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechInnovate",
    image: "/placeholder.svg?height=100&width=100",
    text: "AI Solutions has revolutionized our data analysis processes. Their AI models have increased our efficiency by 300% and provided insights we never thought possible."
  },
  {
    name: "Michael Chen",
    role: "Data Scientist, DataCorp",
    image: "/placeholder.svg?height=100&width=100",
    text: "The team at AI Solutions is exceptional. Their custom AI solutions have helped us tackle complex problems with ease. I highly recommend their services."
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, FutureTech",
    image: "/placeholder.svg?height=100&width=100",
    text: "Implementing AI Solutions' technology has been a game-changer for our startup. We've seen a 50% increase in customer satisfaction and significant cost savings."
  },
  {
    name: "David Kim",
    role: "Head of Innovation, GlobalCorp",
    image: "/placeholder.svg?height=100&width=100",
    text: "AI Solutions delivers on their promises. Their AI-powered predictive maintenance system has reduced our downtime by 75% and saved us millions."
  }
]

export default function TestimonialSection() {
  return (
    <section className="py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          What Our Clients Say About AI Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">"{testimonial.text}"</p>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

