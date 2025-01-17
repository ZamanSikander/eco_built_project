// import Hero_img from "../assets/Hero_img.jpg"
import { Link } from "react-router-dom";
import Hero_img3 from "../assets/Hero_img3.jpg";
import {
  Tablet,
  FolderSearch,
  Users,
  TicketSlash,
  ListCheck,
  Search,
  Truck,
  DollarSign,
  MessageCircle,
} from "lucide-react";
const Home = () => {
  return (
    <div>
      <main
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center mt-2 text-white"
        style={{
          backgroundImage: `url(${Hero_img3})`, // Replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-green-600/80 to-green-900/80 sm:to-green-900/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Heading */}
          <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">
            Sustainable Solutions for Your Business
          </h1>
          {/* Subheading */}
          <p className="mt-4 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto text-white">
          Imagine a world where every material finds a second life—your business can lead the charge
          </p>
          {/* Call to Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/BuyerSignup"
              className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg text-lg font-medium hover:bg-green-600 transition duration-300"
            >
              Be a Buyer
            </Link>
            <a
              href="#"
              className="bg-[#F5F3E7] hover:bg-[#EDEADE] text-[#3B9A3B] px-6 py-3 rounded-md shadow-lg text-lg font-medium transition duration-300"
            >
              Join Our Network
            </a>
          </div>
        </div>
      </main>
      <section className=" mt-[5rem] bg-[#F5F3E7] p-6 rounded-md">
        <h1 className="text-center sm:text-3xl text-lg w-full font-bold p-6 sm:p-10">
          Built for Your Business, Powered by{" "}
          <span className="font-bold text-[#3B9A3B] underline decoration-[#3B9A3B] decoration-2">
            Collaboration
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-around gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex-1 text-center transition duration-150 ease-in-out transform hover:scale-105">
            <h2 className="text-lg font-bold mb-4">For Vendors</h2>
            <p className="text-gray-600 mb-6">
              Showcase your inventory of reusable materials, connect with
              contractors effortlessly, and drive your business toward
              sustainability.
            </p>
            <button className="bg-[#3B9A3B] text-white px-6 py-2 rounded-md font-medium hover:bg-[#2d7a2d] transition duration-300">
              Get Started as a Vendor
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex-1 text-center border transition duration-150 ease-in-out transform hover:scale-105">
            <h2 className="text-lg font-bold mb-4">For Contractors</h2>
            <p className="text-gray-600 mb-6">
              Access a curated network of vendors, compare materials, and source
              with confidence to meet your project needs.
            </p>
            <button className="bg-[#3B9A3B] text-white px-6 py-2 rounded-md font-medium hover:bg-[#2d7a2d] transition duration-300">
              Find Trusted Vendors
            </button>
          </div>
        </div>
      </section>
      <section className="text-center py-10 mt-6">
        <h1 className="text-3xl font-bold mb-10">Why Choose Us?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          <div className="bg-yellow-200 p-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            <ListCheck color="#89ca77" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              Know what You already have
            </h2>
            <p>
              Complete asset visibility is the first step towards mature and
              optimized procurement.
            </p>
          </div>
          <div className="bg-orange-200 p-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            <TicketSlash color="#89ca77" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              Use what You already have
            </h2>
            <p>
              Informed procurement decisions make facilities management a
              breeze.
            </p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            <Users color="#89ca77" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Impact Your community</h2>
            <p>
              Re-home your resources—just because it’s end-of-life doesn’t mean
              it’s end of story.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            <FolderSearch color="#89ca77" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              Be better at what You already do
            </h2>
            <p>
              Activate underutilized, surplus, and in-storage assets at your
              organization.
            </p>
          </div>
          <div className="bg-green-200 p-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            <Tablet color="#89ca77" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              Sell what You no longer need
            </h2>
            <p>
              Reclaim value from your decommissioned assets and dispose of them
              sustainably.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center py-10 mt-6 bg-[#f5f3e7]">
        <div>
          <h2 className="text-xl p-2 sm:text-3xl font-semibold">
            Seamlessly{" "}
            <span className="text-[#3B9A3B]">Connecting Contractors</span> and
            Bulk Suppliers
          </h2>
          <p className="sm:mx-28 my-2 p-3">
            Instantly discover trusted vendors, browse available inventory,
            compare list prices, and communicate directly. From your first
            search to awarding contracts, manage every step in a streamlined,
            all-in-one platform.
          </p>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-8 py-10 container mx-auto">
          {/* Search of Materials */}
          <div className="flex flex-col items-center text-center w-1/2 sm:w-auto">
            <Search color="#89ca77" className="mb-2" />
            <p className="text-sm md:text-base font-bold">Search of Materials</p>
          </div>

          {/* Find Vendors */}
          <div className="flex flex-col items-center text-center w-1/2 sm:w-auto">
            <Truck color="#89ca77" className="mb-2" />
            <p className="text-sm md:text-base font-bold">Find Vendors</p>
          </div>

          {/* See Listing Pricing */}
          <div className="flex flex-col items-center text-center w-1/2 sm:w-auto">
            <DollarSign color="#89ca77" className="mb-2" />
            <p className="text-sm md:text-base font-bold">See Listing Pricing</p>
          </div>

          {/* Communicate and Share Directly */}
          <div className="flex flex-col items-center text-center w-1/2 sm:w-auto">
            <MessageCircle color="#89ca77" className="mb-2" />
            <p className="text-sm md:text-base font-bold">
              Communicate and Share Directly
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
