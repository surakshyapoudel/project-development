import Project from '#models/project'
import { BaseLayout } from '@/components/layout/base-layout'
import PaginationLinks from '@/components/pagination-links'
import { ProjectCard } from '@/components/project-card'
import { Page } from '@/types'

function GalleryPage(props : {
  projects : Page<Project>
}) {
  return (
    <div className='container mx-auto my-6 px-4'>
    <h1 className='text-3xl font-bold text-center my-12'>Our Projects</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
      props.projects.data.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))
    }
    </div>
    <PaginationLinks data={props.projects} />
  </div>
  )
}

GalleryPage.layout = BaseLayout
export default GalleryPage