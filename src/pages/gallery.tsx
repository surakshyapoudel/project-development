import type Gallery from '#models/gallery'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import { Page } from '@/types'

function GalleryPage(props : {
  galleries : Page<Gallery>
}) {
  return (
    <div className='container mx-auto my-6 px-4'>
    <h1 className='text-3xl font-bold text-center my-6'>Our Gallery</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
      props.galleries.data.map(gallery => (
        <img key={gallery.id} src={gallery.image} className='w-full' />
      ))
    }
    </div>
    <PaginationLinks data={props.galleries} />
  </div>
  )
}

GalleryPage.layout = BaseLayout
export default GalleryPage