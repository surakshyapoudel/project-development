import { getPageNumber, getPaginationData } from '#helpers/getPage'
import Contact from '#models/contact'
import { contactValidator } from '#validators/contact'
import type { HttpContext } from '@adonisjs/core/http'

export default class ContactsController {

    public async index({ inertia, request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const contacts = await Contact.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('admin/contact/index', {
            contacts: getPaginationData(contacts, '/admin/contact')
        })
    }

    public async store({ request, response, session }: HttpContext) {
        const data = await request.validateUsing(contactValidator)
        await Contact.create(data)
        session.flash('success', 'Contact created successfully')
        return response.redirect().back()
    }




}