import { Link } from '@inertiajs/react'
import { Command, GalleryVerticalEnd } from 'lucide-react'
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
          <Link href="/" className='flex items-center gap-2 font-mediumcleat'>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Command className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">AI Solutions</span>
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

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Solutions</h3>
              <p>
                Pioneering the future of artificial intelligence to solve complex problems and drive
                innovation across industries.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-blue-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-blue-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-blue-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 AI Street, Tech City, 12345</p>
              <p>Email: info@aisolutions.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export const BaseLayout = (page: React.ReactNode) => <Layout>{page}</Layout>
