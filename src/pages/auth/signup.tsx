import { AuthLayout } from '@/components/layout/auth-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@inertiajs/react'

function Login() {
    return (
        <form className={"flex flex-col gap-6"} >
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create a new account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your details below to create a new account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="full_name">Full Name</Label>
                    <Input id="full_name" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="confirm_password">Password</Label>
                    <Input id="confirm_password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Sign Up
                </Button>

            </div>
            <div className="text-center text-sm">
                ALready have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                    Sign in
                </Link>
            </div>
        </form>
    )
}

Login.layout = AuthLayout

export default Login