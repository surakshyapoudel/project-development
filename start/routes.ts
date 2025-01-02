/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ArticlesController from '#controllers/articles_controller'
import AuthController from '#controllers/auth_controller'
import ContactsController from '#controllers/contacts_controller'
import EventsController from '#controllers/events_controller'
import GalleriesController from '#controllers/galleries_controller'
import ServicesController from '#controllers/services_controller'
import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { normalize, sep } from 'path'
import { middleware } from './kernel.js'
import Event from '#models/event'
import OpenAI from "openai";

const API_KEY = env.get('GEMINI_API_KEY')

const openai = new OpenAI({
  apiKey: API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


import env from './env.js'
import Service from '#models/service'
import Article from '#models/article'
import Gallery from '#models/gallery'

router.post('/api/chat', async ({ request }) => {

  const body = request.body() as OpenAI.Chat.Completions.ChatCompletionMessageParam[]
  const events = await Event.all()
  const services = await Service.all()
  const articles = await Article.all()

  const res = await openai.chat.completions.create({
    model: "gemini-1.5-flash",
    messages: [
      {
        role: "system", content: `


        You are an help desk agent for a ai based company . Please help the user with their query. Use the following details to help the user.
        
        Here are the list of services:

        ${JSON.stringify(services)}
        
        Here are the list of events : 
        
        ${JSON.stringify(events)}


        Here are some articles from the company: 
        ${JSON.stringify(articles)}


`   },
      ...body
    ],
  });

  return res
})
const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/

router.get('/uploads/*', ({ request, response }) => {
  const filePath = request.param('*').join(sep)
  const normalizedPath = normalize(filePath)

  if (PATH_TRAVERSAL_REGEX.test(normalizedPath)) {
    return response.badRequest('Malformed path')
  }

  const absolutePath = app.makePath('storage/uploads', normalizedPath)
  return response.download(absolutePath)
})


router.group(() => {

  router.get('/', async function ({ inertia }) {
    const articles =  await Article.query().orderBy('updated_at', 'desc').limit(5).exec()
    const events = await Event.query().orderBy('updated_at', 'desc').limit(5).exec()
    const services = await Service.query().orderBy('updated_at', 'desc').limit(5).exec()
    const galleries = await Gallery.query().orderBy('updated_at', 'desc').limit(5).exec()

    return inertia.render('home', {
      articles,
      events,
      services,
      galleries
    })
  })
  router.on('/about').renderInertia('about')
  router.get('/services', [ServicesController, 'userIndex'])
  router.get('/articles', [ArticlesController, 'userIndex'])
  router.on('/contact').renderInertia('contact')
  router.get('/gallery', [GalleriesController, 'userIndex'])
  router.get('/events' , [EventsController, 'userIndex'])
  router.post('/contact', [ContactsController, 'store'])



  // Auth Routes

  router.get('/login', [AuthController, 'index']).middleware(middleware.guest())
  router.post('/login', [AuthController, 'store'])
  router.post('/logout', [AuthController, 'destroy'])

  router.get('/article/:id', [ArticlesController, 'show'])
  router.get('/events/:id', [EventsController, 'show'])
  router.get('/service/:id', [ServicesController, 'show'])
  


  router.group(() => {
    router.on('/').renderInertia("admin/dashboard").middleware(middleware.auth())

    // Articles Routes
    router.get('/article', [ArticlesController, 'index']).middleware(middleware.auth())
    router.get('/article/create', [ArticlesController, 'create']).middleware(middleware.auth())
    router.post('/article', [ArticlesController, 'store']).middleware(middleware.auth())
    router.get('/article/:id', [ArticlesController, 'edit']).middleware(middleware.auth())
    router.put('/article/:id', [ArticlesController, 'update']).middleware(middleware.auth())
    router.delete('/article/:id', [ArticlesController, 'destroy']).middleware(middleware.auth())


    // Events Routes
    router.get('/event', [EventsController, 'index']).middleware(middleware.auth())
    router.get('/event/create', [EventsController, 'create']).middleware(middleware.auth())
    router.post('/event', [EventsController, 'store']).middleware(middleware.auth())
    router.get('/event/:id', [EventsController, 'edit']).middleware(middleware.auth())
    router.put('/event/:id', [EventsController, 'update']).middleware(middleware.auth())
    router.delete('/event/:id', [EventsController, 'destroy']).middleware(middleware.auth())

    // Services Routes
    router.get('/service', [ServicesController, 'index']).middleware(middleware.auth())
    router.get('/service/create', [ServicesController, 'create']).middleware(middleware.auth())
    router.post('/service', [ServicesController, 'store']).middleware(middleware.auth())
    router.get('/service/:id', [ServicesController, 'edit']).middleware(middleware.auth())
    router.put('/service/:id', [ServicesController, 'update']).middleware(middleware.auth())
    router.delete('/service/:id', [ServicesController, 'destroy']).middleware(middleware.auth())

    // Gallery Routes
    router.get('/gallery', [GalleriesController, 'index']).middleware(middleware.auth())
    router.get('/gallery/create', [GalleriesController, 'create']).middleware(middleware.auth())
    router.post('/gallery', [GalleriesController, 'store']).middleware(middleware.auth())
    router.get('/gallery/:id', [GalleriesController, 'edit']).middleware(middleware.auth())
    router.put('/gallery/:id', [GalleriesController, 'update']).middleware(middleware.auth())
    router.delete('/gallery/:id', [GalleriesController, 'destroy']).middleware(middleware.auth())


    // Contacts Routes 
    router.get('/contact', [ContactsController, 'index']).middleware(middleware.auth())


  }).middleware(middleware.auth()).prefix('/admin')


}).middleware(middleware.inertia())






