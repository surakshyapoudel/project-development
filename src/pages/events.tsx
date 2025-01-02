import Event from '#models/event'
import { EventCard } from '@/components/event-card'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import { Page } from '@/types'
import React from 'react'

function Events(props : {
  events : Page<Event>
}) {
  return (
    <div className='container mx-auto my-6 px-4'>
    <h1 className='text-3xl font-bold text-center my-6'>Our Events</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
      props.events.data.map(event => (
        <EventCard {...event} key={event.id} />
      ))
    }
    </div>
    <PaginationLinks data={props.events} />
  </div>
  )
}

Events.layout = BaseLayout

export default Events