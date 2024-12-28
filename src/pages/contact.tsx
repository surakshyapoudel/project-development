import { PhoneNumberInput } from '@/components/forms/phone-number-input'
import { TextAreaInput } from '@/components/forms/text-area-input'
import { TextInput } from '@/components/forms/text-input'
import { BaseLayout } from '@/components/layout/base-layout'
import { Button } from '@/components/ui/button'
import { useForm } from '@inertiajs/react'

function Contact() {

  const contactForm = useForm({
    name: '',
    email: '',
    message: '',
    phone: ''
  })

  return (
    <div className='container mx-auto my-6 px-4'>
    <h1 className='text-3xl font-bold text-center my-6'>Contact US</h1>

    <form className='space-y-6' onSubmit={(e) => {
      e.preventDefault()
      contactForm.post('/contact', {
        onSuccess: () => {
          contactForm.reset()
        }
      })
    }}>
      <TextInput
        label='Name'
        name='name'
        placeholder='Enter your name'
        error={contactForm.errors.name}
        value={contactForm.data.name}
        onChange={contactForm.setData}
      />
         <TextInput
        label='Email'
        name='email'
        placeholder='Enter your email'
        error={contactForm.errors.email}
        value={contactForm.data.email}
        onChange={contactForm.setData}
      />
      <PhoneNumberInput
        label='Phone'
        name='phone'
        error={contactForm.errors.phone}
        value={contactForm.data.phone}
        onChange={contactForm.setData}
      />

      <TextAreaInput
        label='Message'
        name='message'
        error={contactForm.errors.message}
        value={contactForm.data.message}
        onChange={contactForm.setData}
      />

      <Button type='submit' loading={contactForm.processing}>Submit</Button>
    
    
    
    </form>
    
    
  </div>
  )
}

Contact.layout = BaseLayout

export default Contact