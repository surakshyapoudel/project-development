import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react' // Icon for button
import { Link } from '@inertiajs/react'

interface ServiceCardProps {
  id: number
  title: string
  description: string
  icon: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon }) => {
  return (
    <Link href={`/service/${id}`} className="inline-flex items-center justify-start">
      <Card className="w-full shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="flex items-center  space-y-4">
          <div className="text-3xl text-indigo-600 mx-auto">
            <img src={icon} height={50} width={50} />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default ServiceCard
