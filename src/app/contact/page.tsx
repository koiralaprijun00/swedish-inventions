"use client" // if you handle client-side form submission

import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Simple client-side handler (no backend yet)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Thanks, ${name}! We have received your message: ${message}`)
    // Reset form fields (optional)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">Have feedback, questions, or ideas to share? Please fill out the form below—we would love to hear from you!</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded p-2"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded p-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded p-2 h-24"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Share your thoughts..."
            required
          />
        </div>

        <button type="submit" className="bg-yellow-500 text-regalBlue-600 py-2 px-4 font-bold rounded hover:bg-yellow-600">
          Send
        </button>
      </form>
    </main>
  )
}
