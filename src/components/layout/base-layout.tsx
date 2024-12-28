import { Link } from '@inertiajs/react'
import { GalleryVerticalEnd } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Flash } from '../flash'
import { MyComponent } from '../chatbot'

interface BaseLayoutProps {
  children: React.ReactNode
}
function Layout(props: BaseLayoutProps) {
  return (
    <main>
      <Flash />
      <header className=" w-90 shadow-sm sticky">
            <MyComponent />
        <div className="flex container justify-between items-center p-4 mx-auto h-[70px] ">
          <Link href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-6" />
            </div>
          </Link>
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/events">Events</Link>
            <Link href="/gallery">Gallery</Link>
          </nav>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>

            <Button variant={'secondary'} asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      {props.children}
    </main>
  )
}

export const BaseLayout = (page: React.ReactNode) => <Layout>{page}</Layout>
