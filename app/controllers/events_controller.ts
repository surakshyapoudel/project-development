import { getPageNumber, getPaginationData } from '#helpers/getPage'
import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
import { eventValidator, updateEventValidator } from '#validators/event'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { DateTime } from 'luxon'

export default class EventsController {
    public async index({ inertia  ,request}: HttpContext) {
        
        const pageNumber = getPageNumber(request)
        const events = await Event.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)

        return inertia.render('admin/event/index', {
            events: getPaginationData(events, '/admin/event')
        })
    }



    public async create({ inertia }: HttpContext) {
        return inertia.render('admin/event/create')
    }

    public async show({ inertia, request }: HttpContext) {

        const id = Number(request.param('id'))
        const event = await Event.findOrFail(id)
        return inertia.render('admin/event/show', {
            event
        })
    }



    public async edit({ inertia ,request }: HttpContext) {
        
        const id = Number(request.param('id'))
        const event = await Event.findOrFail(id)
        return inertia.render('admin/event/edit', {
            event
        })
    }

    public async store({ request, response, session }: HttpContext) {
        const {image , date, ...data } = await request.validateUsing(eventValidator)

        const imageName = `${cuid()}.${image.extname}`

        await image.move(app.makePath('storage/uploads'), {
            name: imageName
        })

        await Event.create({
            ...data,
            image: "/uploads/" + imageName,
            date:  DateTime.fromJSDate(date)
        })

        session.flash("success", "Event created successfully")
        return response.redirect().toPath('/admin/event')
    }

    public async update({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const event = await Event.findOrFail(id)
        const { image , date, ...data } = await request.validateUsing(updateEventValidator)

        if(image){
            const imageName = `${cuid()}.${image.extname}`
            await image.move(app.makePath('storage/uploads'), {
                name: imageName
            })
            event.image = "/uploads/" + imageName
        }

        event.merge({
            ...data,
            date: DateTime.fromJSDate(date)
        })

        await event.save()

        session.flash("success", "Event updated successfully")
        return response.redirect().toPath('/admin/event')
    }

    public async destroy({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const event = await Event.findOrFail(id)
        await event.delete()

        session.flash("success", "Event deleted successfully")
        return response.redirect().toPath('/admin/event')
    }

}