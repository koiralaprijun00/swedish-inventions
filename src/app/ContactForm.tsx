const ContactForm = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12">
      <div className="max-w-3xl text-left">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Have Questions or Suggestions?</h2>
        <p className="text-gray-600 mb-8">
          Do you have questions, suggestions, or innovations related to Swedish inventions? We’d love to hear from you and collaborate on making ideas even better!
        </p>
      </div>
      <form className="max-w-3xl rounded-lg p-6 md:p-8 space-y-6">
        <div>
          <input type="text" id="name" className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-500" placeholder="Your Name" />
        </div>
        <div>
          <input type="email" id="email" className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-500" placeholder="Your Email" />
        </div>
        <div>
          <textarea id="message" rows={1} className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-500" placeholder="Your Message" />
        </div>
        <button type="submit" className="bg-gray-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-600 transition duration-300">
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactForm
