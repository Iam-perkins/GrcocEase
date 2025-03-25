import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-black px-6 py-12 md:px-16 lg:px-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Welcome to [Your Store Name], your trusted online grocery marketplace in Cameroon.
        </p>
      </section>

      {/* Company History */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in [Year], [Your Store Name] started with a vision to revolutionize the way people shop for groceries in Cameroon. 
          Our journey began with a small local marketplace, and today, we serve thousands of customers across the country.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide high-quality, fresh, and affordable groceries through a seamless online experience. 
          We envision a future where everyone in Cameroon can access healthy food with just a few clicks.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team is made up of dedicated professionals passionate about delivering the best service. 
          From logistics experts to customer support specialists, everyone at [Your Store Name] works together to bring you the best shopping experience.
        </p>
      </section>

      {/* Achievements & Milestones */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
          <li>Served over [X] customers across Cameroon.</li>
          <li>Partnered with over [X] local grocery vendors.</li>
          <li>Recognized as one of the fastest-growing e-commerce platforms.</li>
        </ul>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="border-l-4 border-red-500 pl-4 italic text-gray-700">
          "Amazing service! The groceries were fresh, and the delivery was fast!" - [Customer Name]
        </div>
        <div className="border-l-4 border-red-500 pl-4 italic text-gray-700 mt-4">
          "Best online grocery shopping experience in Cameroon!" - [Customer Name]
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <p className="text-gray-700 leading-relaxed">
          At [Your Store Name], we stand for:
        </p>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
          <li>Quality and Freshness</li>
          <li>Customer Satisfaction</li>
          <li>Reliability and Trust</li>
          <li>Community Support</li>
        </ul>
      </section>

      {/* Future Plans */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Future</h2>
        <p className="text-gray-700 leading-relaxed">
          We are constantly improving and expanding. In the future, we plan to introduce more categories, 
          faster delivery services, and greater discounts for our loyal customers.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you're a customer looking for quality groceries or a vendor wanting to reach more buyers, 
          [Your Store Name] is here for you. Let's grow together!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
