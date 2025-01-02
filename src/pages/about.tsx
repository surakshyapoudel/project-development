import { BaseLayout } from '@/components/layout/base-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Head, Link } from '@inertiajs/react'
import { Brain, Lightbulb, Users, Zap } from 'lucide-react'

function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Head title="About" />

      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About AI Solutions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Pioneering the future of artificial intelligence to solve complex problems and drive innovation across industries.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At AI Solutions, we're on a mission to harness the power of artificial intelligence to create transformative solutions that enhance businesses, improve lives, and shape a better future for all.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <img
              src="/signin.webp"
              alt="AI Solutions team working"
              className="rounded-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Brain, title: "Innovation", description: "Pushing the boundaries of AI technology" },
            { icon: Users, title: "Collaboration", description: "Working together to achieve greatness" },
            { icon: Lightbulb, title: "Ethical AI", description: "Developing responsible AI solutions" },
            { icon: Zap, title: "Impact", description: "Creating meaningful change through AI" },
          ].map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Robotics",
            "Predictive Analytics",
            "AI Ethics and Governance",
          ].map((expertise, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{expertise}</h3>
              <p className="text-gray-700">
                Our team of experts brings cutting-edge knowledge and experience in {expertise.toLowerCase()} to every project.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Innovate with AI?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's explore how AI Solutions can help transform your business and drive growth through advanced AI technologies.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </main>
  )
}

About.layout = BaseLayout

export default About