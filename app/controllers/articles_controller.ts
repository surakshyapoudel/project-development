import { getPageNumber, getPaginationData } from '#helpers/getPage'
import Article from '#models/article'
import { articleValidator, updateArticleValidator } from '#validators/article'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ArticlesController {
    public async userIndex({ inertia, request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const articles = await Article.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('articles', {
            articles: getPaginationData(articles, '/articles')
        })
    }
    public async index({ inertia, request }: HttpContext) {
        const pageNumber = getPageNumber(request)
        const articles = await Article.query().orderBy('updated_at', 'desc').paginate(pageNumber, 10)
        return inertia.render('admin/article/index', {
            articles: getPaginationData(articles, '/admin/article')
        })
    }

    public async create({ inertia }: HttpContext) {
        return inertia.render('admin/article/create')
    }

    public async show({ inertia, request }: HttpContext) {

        const id = Number(request.param('id'))
        const article = await Article.findOrFail(id)
        return inertia.render('article/show', {
            article
        })
    }

    public async edit({ inertia, request }: HttpContext) {

        const id = Number(request.param('id'))
        const article = await Article.findOrFail(id)
        return inertia.render('admin/article/edit', {
            article
        })
    }

    public async store({ request, response, session }: HttpContext) {
        const {image , ...data } = await request.validateUsing(articleValidator)

        const imageName = `${cuid()}.${image.extname}`

        await image.move(app.makePath('storage/uploads'), {
            name: imageName
        })
        
        await Article.create({
            ...data,
            image: "/uploads/" + imageName
        })

        session.flash("success", "Article created successfully")
        return response.redirect().toPath('/admin/article')
    }

    public async update({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const article = await Article.findOrFail(id)
        const { image , ...data } = await request.validateUsing(updateArticleValidator)

        if(image){
            const imageName = `${cuid()}.${image.extname}`
            await image.move(app.makePath('storage/uploads'), {
                name: "/uploads/" + imageName
            })
            article.image = imageName
        }

        article.merge(data)

        await article.save()

        session.flash("success", "Article updated successfully")
        return response.redirect().toPath('/admin/article')
    }

    public async destroy({ request, response, session }: HttpContext) {
        const id = Number(request.param('id'))
        const article = await Article.findOrFail(id)
        await article.delete()
        session.flash("success", "Article deleted successfully")
        return response.redirect().back()
    }


}