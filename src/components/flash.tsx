import { SharedProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const Flash = () => {
  const {
    props: { flash },
  } = usePage<SharedProps>()

  const error = flash.error
  const success = flash.success
  const message = flash.message

  useEffect(() => {
    if (success) {
      toast.success(success, {
        dismissible: true,
      })
    }
    if (error) {
      toast.error(error, {
        dismissible: true,
      })
    }
    if (message) {
      toast.info(message, {
        dismissible: true,
      })
    }
  }, [flash])

  return null
}