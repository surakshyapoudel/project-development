import Service from '#models/service'
import { BaseLayout } from '@/components/layout/base-layout'
import { formatDateTime } from '@/lib/utils'

function EventPage({ service }: { service: Service }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <img src={service.icon} alt={service.title} className="w-8 h-8 mr-3 text-primary" />
            <h1 className="text-3xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">{service.description}</p>
        </header>

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div
          className="mdEditor max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        <footer className="text-sm text-gray-500">
          <p>Last updated: {formatDateTime(service.updatedAt)}</p>
        </footer>
      </article>
    </main>
  )
}

EventPage.layout = BaseLayout

export default EventPage
