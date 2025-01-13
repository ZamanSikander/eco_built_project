const SupplierSignup = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-8 text-center">
          Supplier Sign-Up
        </h1>
        <form className="space-y-6 bg-white p-6 md:p-8 shadow-md rounded-lg">
          {/* Business Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Business Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Type</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Manufacturer</option>
                  <option>Distributor</option>
                  <option>Recycler</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Registration Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Industry Focus</label>
                <select
                  multiple
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Construction</option>
                  <option>Manufacturing</option>
                  <option>Landscaping</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Contact Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Position/Title</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
  
          {/* Location */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Location</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  State/Province <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ZIP/Postal Code</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>USA</option>
                  <option>Canada</option>
                  <option>UK</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Platform Details */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Platform Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Inventory Upload</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Communication Method</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Platform Messaging</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Account Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
  
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  
  export default SupplierSignup;
  