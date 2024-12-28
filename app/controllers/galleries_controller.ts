import type { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { getPageNumber, getPaginationData } from '#helpers/getPage'
import Gallery from '#models/gallery'
import { galleryValidator, updateGalleryValidator } from '#validators/gallery'

export default class GalleriesController {

    public async userIndex({ inertia, request }: HttpContext) {

        const pageNumber = getPageNumber(request)
        const galleries = await Gallery.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)

        return inertia.render('gallery', {
            galleries: getPaginationData(galleries, '/gallery')
        })
    }
    public async index({ inertia, request }: HttpContext) {

        const pageNumber = getPageNumber(request)
        const galleries = await Gallery.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)

        return inertia.render('admin/gallery/index', {
            galleries: getPaginationData(galleries, '/admin/gallery')
        })
    }

    public async create({ inertia }: HttpContext) {
        return inertia.render('admin/gallery/create')
    }


    public async show({ inertia, request }: HttpContext) {

        const id = Number(request.param('id'))
        const gallery = await Gallery.findOrFail(id)
        return inertia.render('admin/gallery/show', {
            gallery
        })
    }

    public async edit({ inertia, request }: HttpContext) {

        const id = Number(request.param('id'))
        const gallery = await Gallery.findOrFail(id)
        return inertia.render('admin/gallery/edit', {
            gallery
        })
    }


    public async store({ request, response, session }: HttpContext) {
        const { image, ...data } = await request.validateUsing(galleryValidator)

        const imageName = `${cuid()}.${image.extname}`

        await image.move(app.makePath('storage/uploads'), {
            name: imageName
        })

        await Gallery.create({
            ...data,
            image: "/uploads/" + imageName
        })

        session.flash("success", "Gallery created successfully")
        return response.redirect().toPath('/admin/gallery')
    }

    public async update({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const gallery = await Gallery.findOrFail(id)

        const { image, ...data } = await request.validateUsing(updateGalleryValidator)

        if (image) {
            const imageName = `${cuid()}.${image.extname}`
            await image.move(app.makePath('storage/uploads'), {
                name: imageName
            })
            gallery.image = "/uploads/" + imageName

        }

        gallery.merge({
            ...data,
        })
        await gallery.save()

        session.flash("success", "Gallery updated successfully")
        return response.redirect().toPath('/admin/gallery')
    }

    public async destroy({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const gallery = await Gallery.findOrFail(id)
        await gallery.delete()
        session.flash("success", "Gallery deleted successfully")
        return response.redirect().toPath('/admin/gallery')
    }




}