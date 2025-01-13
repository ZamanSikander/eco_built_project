import Hero_img3 from "../assets/Hero_img3.jpg";
import story_1 from "../assets/story_1.jpg";
import story_2 from "../assets/story_2.jpg"
const OurStory = () => {
    return (
      <div className="container mx-auto px-6 py-12 bg-gray-50">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-green-600 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600">
            Discover our journey, vision, and commitment to creating a sustainable future.
          </p>
        </section>
  
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">Building a Sustainable Future</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At <span className="font-semibold">[Your Website Name]</span>, we believe in transforming the way industries source and use materials. Our vision is to reduce waste, promote reuse, and create a circular economy where every resource finds its maximum potential. By bridging the gap between vendors and contractors, we aim to make sustainable practices the norm, not the exception.
            </p>
          </div>
          <img
            src={Hero_img3}
            alt="Our Vision"
            className="rounded-lg shadow-lg w-full"
          />
        </section>
  
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={story_1}
            alt="How It All Began"
            className="rounded-lg shadow-lg w-full"
          />
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">How It All Began</h2>
            <p className="text-lg text-gray-700">Turning Challenges into Opportunities</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our journey began with a simple yet powerful idea: what if unused materials could find a new purpose instead of ending up in landfills? With years of experience in construction and materials management, we saw an opportunity to connect businesses, solve industry inefficiencies, and make sustainability accessible.
            </p>
          </div>
        </section>
  
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Who We Serve</h2>
            <p className="text-lg text-gray-700">Empowering Vendors and Contractors Alike</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We’re here to support every part of the supply chain. Whether you’re a vendor looking to showcase your inventory or a contractor searching for cost-effective materials, our platform is designed to meet your needs. By fostering trust, transparency, and collaboration, we help both sides of the industry thrive while contributing to a greener planet.
            </p>
          </div>
          <img
            src={story_2}
            alt="Who We Serve"
            className="rounded-lg shadow-lg w-full"
          />
        </section>
  
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Our Commitment</h2>
          <p className="text-lg text-gray-700">More Than a Platform—A Movement</p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">[Your Website Name]</span>, we don’t just provide a service; we’re part of a larger mission to reshape the industry. Every connection made on our platform contributes to a sustainable future. We’re committed to innovation, building strong partnerships, and continuously improving to meet the evolving needs of our community.
          </p>
        </section>
      </div>
    );
  };
  
  export default OurStory;
  