import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white text-black p-6 md:p-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch with us for any inquiries or support.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="grid md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <h2 className="text-xl font-semibold">📍 Address</h2>
          <p className="text-gray-600">123 Market Street, Douala, Cameroon</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">📞 Phone</h2>
          <p className="text-gray-600">+237 675 123 456</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">✉ Email</h2>
          <p className="text-gray-600">support@yourstore.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 p-6 md:p-12 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Send us a Message</h2>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 border rounded-md"></textarea>
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Live Chat Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition">
          💬 Live Chat
        </button>
      </div>

      {/* FAQs Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <details className="p-4 border rounded-md">
            <summary className="cursor-pointer font-semibold">How can I track my order?</summary>
            <p className="mt-2 text-gray-600">You can track your order through the 'My Orders' section in your profile.</p>
          </details>
          <details className="p-4 border rounded-md">
            <summary className="cursor-pointer font-semibold">What payment methods do you accept?</summary>
            <p className="mt-2 text-gray-600">We accept MTN Mobile Money, Orange Money, Visa, and MasterCard.</p>
          </details>
          <details className="p-4 border rounded-md">
            <summary className="cursor-pointer font-semibold">How do I return an item?</summary>
            <p className="mt-2 text-gray-600">Returns are accepted within 7 days of delivery. Contact support for assistance.</p>
          </details>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Find Us on the Map</h2>
        <div className="mt-6">
          <iframe
            className="w-full h-80 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.88360789038!2d9.670816157530656!3d4.059081685071202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d20e0dfd1a1%3A0x4e66e21e8e2b680f!2sDouala!5e0!3m2!1sen!2scm!4v1618000000000!5m2!1sen!2scm"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold">Connect with Us</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-blue-500 text-2xl">📘 Facebook</a>
          <a href="#" className="text-blue-400 text-2xl">🐦 Twitter</a>
          <a href="#" className="text-pink-600 text-2xl">📷 Instagram</a>
          <a href="#" className="text-red-600 text-2xl">▶ YouTube</a>
        </div>
      </div>

      {/* Customer Support Hours */}
      <div className="mt-12 text-center bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Customer Support Hours</h2>
        <p className="text-gray-600 mt-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>

      {/* Extra Information to Extend Page */}
      <div className="mt-12 p-6 bg-white">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">Get your groceries delivered within hours.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-semibold">Secure Payments</h3>
            <p className="text-gray-600 mt-2">All transactions are protected with end-to-end encryption.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2">We are always available to help you with your orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
