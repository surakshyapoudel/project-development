import { getPageNumber, getPaginationData } from '#helpers/getPage'
import Service from '#models/service'
import { serviceValidator, updateServiceValidator } from '#validators/service'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ServicesController {

    public async userIndex({ inertia ,request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const services = await Service.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('services', {
            services: getPaginationData(services, '/services')
        })
    }

    public async index({ inertia ,request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const services = await Service.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('admin/service/index', {
            services: getPaginationData(services, '/admin/service')
        })
    }

    public async create({ inertia }: HttpContext) {
        return inertia.render('admin/service/create')
    }

    public async show({ inertia, request }: HttpContext) {

        const id = Number(request.param('id'))
        const service = await Service.findOrFail(id)
        return inertia.render('service/show', {
            service
        })
    }

    public async edit({ inertia, request }: HttpContext) {
        
        const id = Number(request.param('id'))
        const service = await Service.findOrFail(id)
        return inertia.render('admin/service/edit', {
            service
        })
    }

    public async store({ request, response, session }: HttpContext) {
        const { image, icon, ...data } = await request.validateUsing(serviceValidator)

        const imageName = `${cuid()}.${image.extname}`

        await image.move(app.makePath('storage/uploads'), {
            name: imageName
        })

        const iconName = `${cuid()}.${icon.extname}`
        await icon.move(app.makePath('storage/uploads'), {
            name: iconName
        })

        await Service.create({
            ...data,
            image: "/uploads/" + imageName,
            icon: "/uploads/" + iconName
        })

        session.flash("success", "Service created successfully")
        return response.redirect().toPath('/admin/service')
    }

    public async update({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const service = await Service.findOrFail(id)
        const { image, icon, ...data } = await request.validateUsing(updateServiceValidator)

        if(image){
            const imageName = `${cuid()}.${image.extname}`
            await image.move(app.makePath('storage/uploads'), {
                name: imageName
            })
            service.image = "/uploads/" + imageName
        }

        if(icon){
            const iconName = `${cuid()}.${icon.extname}`
            await icon.move(app.makePath('storage/uploads'), {
                name: iconName
            })
            service.icon = "/uploads/" + iconName
        }

        await service.merge(data).save()
        session.flash("success", "Service updated successfully")
        return response.redirect().toPath('/admin/service')
    }

    public async destroy({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const service = await Service.findOrFail(id)
        await service.delete()
        session.flash("success", "Service deleted successfully")
        return response.redirect().toPath('/admin/service')
    }


}