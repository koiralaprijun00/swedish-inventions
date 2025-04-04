"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

const ContactForm = () => {
  const t = useTranslations("Translations")
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
        setFormData({ name: "", email: "", message: "" }) // Clear the form
      } else {
        const errorData = await response.json() // Try to parse error message
        setStatus(errorData.message || "Failed to send email") // Display error
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("Failed to send email")
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-8 mt-32 mb-32">
      {/* Left Section - Heading */}
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-8xl md:font-thin">
          {t("sayHello")}
        </h2>
        <p className="text-sm md:font-thin mt-2 md:mt-6">
        {t("contact-one")}<br /> {t("contact-two")}
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t("formlabelname")}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("yourName")}
              required
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 transition"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t("formlabelemail")}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("yourEmail")}
              required
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 transition"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t("formlabelmessage")}
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("yourMessage")}
              required
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 transition"
            />
          </div>

          <button type="submit" className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition">
            {t("formlabelsubmit")}
          </button>

          {status &&
            <p className={`mt-2 text-sm ${status.startsWith("Email sent") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
