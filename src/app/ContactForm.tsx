'use client'

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus("Email sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send email. Please try again later.")
      }
    } catch (error) {
      console.error(error)
      setStatus("An error occurred. Please try again later.")
    }
  }

  return (
    <form className="max-w-3xl rounded-lg" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-4xl font-bold mb-4">Do you know some Inventions?</h2>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-500"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-500"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-500"
          placeholder="Your Message"
        />
      </div>
      <button type="submit" className="bg-gray-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-600 transition duration-300">
        Submit
      </button>
      {status &&
        <p className="text-sm text-green-600 mt-2">
          {status}
        </p>}
    </form>
  )
}

export default ContactForm
