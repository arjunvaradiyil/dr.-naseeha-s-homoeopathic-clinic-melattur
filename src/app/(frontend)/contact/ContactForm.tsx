'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form-thanks" role="status">
        <p><strong>Thank you for your message.</strong></p>
        <p>We will get back to you soon. For faster appointment booking, you can also message us on <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} method="post" action="">
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="Enter Name" required autoComplete="name" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email Address</label>
        <input id="contact-email" name="email" type="email" placeholder="Enter Email Address" required autoComplete="email" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-phone">Telephone No.</label>
        <input id="contact-phone" name="phone" type="tel" placeholder="Enter Telephone No." autoComplete="tel" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" placeholder="Enter Subject" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={5} placeholder="Enter Message" required />
      </div>
      <button type="submit" className="btn contact-submit">SUBMIT</button>
    </form>
  )
}
