
import Event from "#models/event"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "./ui/badge"

export function EventCard({ id, title, description, image, date, completed  }: Event) {
    const eventDate = new Date(date.toString()).toLocaleString()
  
    return (
      <Card className="w-full  overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
            {completed ? 
              <Badge className="absolute top-2 right-2 bg-green-500">
                Completed
              </Badge> : 
              <Badge className="absolute top-2 right-2 bg-red-500">
                Upcoming
              </Badge>
            }
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <time className="text-sm text-gray-500">
            {eventDate}
          </time>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <a
            href={`/events/${id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </a>
        </CardFooter>
      </Card>
    )
  }