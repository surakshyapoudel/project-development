import type { HttpContext } from '@adonisjs/core/http'

import { getPageNumber, getPaginationData } from "#helpers/getPage"
import Project from '#models/project'
import { projectValidator, updateProjectValidator } from '#validators/project'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'

export default class ProjectsController {

    public async userIndex({ inertia ,request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const projects = await Project.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('projects', {
            projects: getPaginationData(projects, '/projects')
        })
    }

    public async index({ inertia ,request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const projects = await Project.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('admin/project/index', {
            projects: getPaginationData(projects, '/admin/project')
        })
    }


    public async create({ inertia }: HttpContext) {
        return inertia.render('admin/project/create')
    }


    public async edit({ inertia, request }: HttpContext) {
        const id = Number(request.param('id'))
        const project = await Project.findOrFail(id)
        return inertia.render('admin/project/edit', {
            project
        })
    }


    public async store({ request, response, session }: HttpContext) {
        const { image, ...data } = await request.validateUsing(projectValidator)

        const imageName = `${cuid()}.${image.extname}`

        await image.move(app.makePath('storage/uploads'), {
            name:  imageName
        })

        await Project.create({
            ...data,
            image: "/uploads/" + imageName,
        })

        session.flash('success', 'Project created successfully')
        return response.redirect().toPath('/admin/project')
    }


    public async update({ request, response, session }: HttpContext) {
        const { image, ...data } = await request.validateUsing(updateProjectValidator)

        const id = Number(request.param('id'))
        const project = await Project.findOrFail(id)

        if (image) {
            const imageName = `${cuid()}.${image.extname}`
            await image.move(app.makePath('storage/uploads'), {
                name: imageName
            })

            project.image = "/uploads/"+ imageName
        }

        project.merge(data)
        await project.save()

        session.flash('success', 'Project updated successfully')
        return response.redirect().toPath('/admin/project')
    }


    public async destroy({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const project = await Project.findOrFail(id)
        await project.delete()
        session.flash('success', 'Project deleted successfully')
        return response.redirect().toPath('/admin/project')
    }



}