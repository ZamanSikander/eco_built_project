import contact_2 from "../assets/contact_2.png"
const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="md:hidden bg-yellow-200 p-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            <h1 className="text-center font-bold text-2xl">Get in Touch with Us</h1>
            <p className="p-2 text-pretty">We’re here to help you connect with trusted vendors and contractors, streamline your sourcing process, and answer any questions you may have.</p>
          </div>
          <div className="justify-center hidden md:block">
            <img
              src={contact_2}
              alt="Contact Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions or want to work with us? Fill out the form, and we’ll get back to you
              as soon as possible.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
