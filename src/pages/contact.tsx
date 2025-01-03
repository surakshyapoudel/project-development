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
    phone: '',
    address: '',
    companyName: '',
    country: '',
    jobTitle: '',
    jobDetail: ''
  })

  return (
    <div className='container mx-auto my-6 px-4'>
    <h1 className='text-3xl font-bold text-center my-6'>Contact Us</h1>

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

      <TextInput
        label='Address'
        name='address'
        placeholder='Enter your address'
        error={contactForm.errors.address}
        value={contactForm.data.address}
        onChange={contactForm.setData}
      />

      <TextInput
        label='Company Name'
        name='companyName'
        placeholder='Enter your company name'
        error={contactForm.errors.companyName}
        value={contactForm.data.companyName}
        onChange={contactForm.setData}
      />

      <TextInput
        label='Country'
        name='country'
        placeholder='Enter your country'
        error={contactForm.errors.country}
        value={contactForm.data.country}
        onChange={contactForm.setData}
      />

      <TextInput
        label='Job Title'
        name='jobTitle'
        placeholder='Enter your job title'
        error={contactForm.errors.jobTitle}
        value={contactForm.data.jobTitle}
        onChange={contactForm.setData}
      />

      <TextInput
        label='Job Detail'
        name='jobDetail'
        placeholder='Enter your job detail'
        error={contactForm.errors.jobDetail}
        value={contactForm.data.jobDetail}
        onChange={contactForm.setData}
      />

      <Button type='submit' loading={contactForm.processing}>Submit</Button>
    
    
    
    </form>
    
    
  </div>
  )
}

Contact.layout = BaseLayout

export default Contact