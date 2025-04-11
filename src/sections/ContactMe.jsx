import React from 'react'
import { ABOUT_ME } from '../utils/data'
import { IoMdMail } from 'react-icons/io';
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdOutlineWeb } from 'react-icons/md';
import ContactInfoCard from '../components/ContactInfoCard';


const ContactMe = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Contact Me</h4>

          <p className='text-sm text-center mt-4 leading-6'>
            A versatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building 
            efficient, scalable, and user-centric solutions.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
          <div>
            <ContactInfoCard icon={<IoMdMail/>} text={ABOUT_ME.email}/>
            <ContactInfoCard icon={<IoMdPhonePortrait/>} text={ABOUT_ME.phone}/>
            <ContactInfoCard icon={<MdOutlineWeb/>} text={ABOUT_ME.website}/>
          </div>

          <div>
            <h5 className='md:hidden text-secondary text-lg font-medium mt-4 pb-5'>
              Contact Form
            </h5>
            <form action="" className='flex flex-col'>
              <input 
              type="text"
              name='fullname'
              placeholder='Full name'
              id=''
              className='input-box'
              autoComplete='off'
              />
  
              <input 
              type="text"
              name='email'
              placeholder='Email'
              id=''
              className='input-box'
              autoComplete='off'
              />
              
              <textarea
              type="text"
              name='message'
              placeholder='Message'
              id=''
              rows={3}
              className='input-box'
              autoComplete='off'
              />
              <button className='action-btn btn-scale-anim'>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe