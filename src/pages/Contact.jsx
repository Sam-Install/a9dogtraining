import React, { useRef, useState } from 'react';
import MyMaps from '../components/Mymaps'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const form = useRef();

const sendEmail = (e) => {

  e.preventDefault();

emailjs.sendForm('service_zgyraxi','template_ekwkjzi',form.current,'XTzTQ1CR6F8UbXpiN').then(
  ()=>{

    alert("Message Sent Successfully");
    form.current.reset();
  },
  (error)=>{
    alert("Failed to send Email, please retry", error.text);
  }
)

}

  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 overflow-x-hidden">
      {/* Form section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center text-sm w-full max-w-md">
          <h1 className="text-2xl font-semibold text-slate-700 pb-4 text-center">
            Get in touch with us
          </h1>
          <p className="text-sm text-gray-500 text-center pb-10">
            We are happy to receive and respond to your inquiries and feedback.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full">
              <label htmlFor="name" className="text-black/70">Your Name</label>
              <input
                name="user_name"
                id="name"
                type="text"
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-black/70">Your Email</label>
              <input
                name="user_email"
                id="email"
                type="email"
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                required
              />
            </div>

<div className="w-full">
              <label htmlFor="subject" className="text-black/70">Your Subject/issue</label>
              <input
                name="subject"
                id="subject"
                type="subject"
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                required
              />
            </div>

          </div>
          <div className="mt-6 w-full">
            <label htmlFor="message" className="text-black/70">Message</label>
            <textarea
              name="message"
              id="message"
              className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 bg-orange-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition-transform"
          >
            Send Message
          </button>
          {status === 'SUCCESS' && <p className="mt-2 text-green-600">Message sent successfully!</p>}
          {status === 'ERROR' && <p className="mt-2 text-red-600">Error sending message. Please try again.</p>}
        </form>
      </div>

      {/* Map section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <MyMaps />
      </div>
    </div>
  );
};

export default Contact;
