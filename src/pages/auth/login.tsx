import { TextInput } from '@/components/forms/text-input'
import { AuthLayout } from '@/components/layout/auth-layout'
import { Button } from '@/components/ui/button'
import { useForm } from '@inertiajs/react'

function Login() {



    const loginForm = useForm({
        email: '',
        password: ''
    })

    return (
        <form className={"flex flex-col gap-6"} onSubmit={(e) => {
            e.preventDefault()
            loginForm.post('/login')
        }}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <TextInput
                    name='email'
                    label='Email'
                    placeholder='Enter your email'
                    onChange={loginForm.setData}
                    value={loginForm.data.email}
                    error={loginForm.errors.email}
                />

                <TextInput
                    name='password'
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    onChange={loginForm.setData}
                    value={loginForm.data.password}
                    error={loginForm.errors.password}
                />


                <Button loading={loginForm.processing} type="submit" className="w-full">
                    Login
                </Button>

            </div>
          
        </form>
    )
}

Login.layout = AuthLayout

export default Login