import Service from '#models/service'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import ServiceCard from '@/components/service-card'
import { Page } from '@/types'

function Services(props : {
  services : Page<Service>
}) {
  return (
    <div className='container mx-auto my-6 px-4'>
      <h1 className='text-3xl font-bold text-center my-6'>Our Services</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        props.services.data.map(service => (
          <ServiceCard key={service.id} id={service.id} description={service.description} icon={service.icon} title={service.title} />
        ))
      }
      </div>
      <PaginationLinks data={props.services} />
    </div>
  )
}
BaseLayout
Services.layout = BaseLayout

export default Services