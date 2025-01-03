import Article from '#models/article'
import Event from '#models/event'
import Gallery from '#models/gallery'
import Project from '#models/project'
import Service from '#models/service'
import ArticleCard from '@/components/article-card'
import { EventCard } from '@/components/event-card'
import { BaseLayout } from '@/components/layout/base-layout'
import { ProjectCard } from '@/components/project-card'
import ServiceCard from '@/components/service-card'
import TestimonialSection from '@/components/testimonials'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Head, Link } from '@inertiajs/react'

function Home({
  events,
  galleries,
  services,
  articles,
  projects,
}: {
  events: Event[]
  galleries: Gallery[]
  services: Service[]
  projects: Project[]
  articles: Article[]
}) {
  return (
    <>
      <Head title="Home" />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Pioneering AI Solutions for a Smarter Future
                </h1>
                <p className="text-xl mb-6">
                  Unlock the power of artificial intelligence to transform your business and drive
                  innovation.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/ai.png"
                  alt="AI technology illustration"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Our Past Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} />)}
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center"> Gallery</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {galleries.slice(0, 4).map((gallery) => (
                <img key={gallery.id} src={gallery.image} className="w-full" />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="w-full py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/articles">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 ">
          <div className="container mx-auto px-4">
            <TestimonialSection />
          </div>
        </section>
        {/* Events Section */}
        <section className="w-full py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {events.slice(0, 2).map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8">
              Let's discuss how AI Solutions can help you achieve your goals and stay ahead of the
              competition.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

Home.layout = BaseLayout

export default Home
