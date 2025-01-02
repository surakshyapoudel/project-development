import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Event from '#models/event'
import { BaseLayout } from "@/components/layout/base-layout"


function EventPage({ event }: { event: Event }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <div className="flex items-center space-x-4">
            <time className="text-sm text-gray-500">
              {new Date(event.date.toString()).toLocaleString()}
            </time>
            {event.completed ? (
              <Badge className="bg-green-500">Completed</Badge>
            ) : (
              <Badge className="bg-blue-500">Upcoming</Badge>
            )}
          </div>
        </div>

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div 
          className="mdEditor max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: event.content }}
        />

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Last updated: {new Date(event.updatedAt.toString()).toLocaleString()}
          </p>
        </div>
      </div>
    </main>
  )
}



EventPage.layout = BaseLayout

export default EventPage