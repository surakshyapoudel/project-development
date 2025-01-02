import Service from '#models/service'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import ServiceCard from '@/components/service-card'
import TitleBox from '@/components/titlebox'
import { Page } from '@/types'
import { Head } from '@inertiajs/react'

function Services(props: { services: Page<Service> }) {
  return (
    <>
      <TitleBox title="Our Services" />
      <div className="container mx-auto my-20 px-4">
        <Head title="Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.services.data.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              description={service.description}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
        <PaginationLinks data={props.services} />
      </div>
    </>
  )
}
BaseLayout
Services.layout = BaseLayout

export default Services
