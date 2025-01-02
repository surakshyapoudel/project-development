import User from '#models/user'
import { loginValidator } from '#validators/login'
import type { HttpContext } from '@adonisjs/core/http'
import { safeError } from '#helpers/safeError'

export default class AuthController {

    async index({ inertia , auth ,response}: HttpContext) {

        return inertia.render('auth/login')
    }


    async store({ request, auth, response, session }: HttpContext) {
        const { email, password, remember } = await request.validateUsing(loginValidator)

        const [user, err] = await safeError(User.verifyCredentials(email, password))

        if (err) {
            session.flash('error', 'Invalid credentials')
            return response.redirect().back()
        }
        await auth.use('web').login(user, remember)
        return response.redirect().toPath('/admin')
    }

    async destroy({ auth, response }: HttpContext) {
        await auth.use('web').logout()
        response.redirect().toPath('/login')
    }
}