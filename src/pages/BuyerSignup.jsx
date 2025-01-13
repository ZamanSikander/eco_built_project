const BuyerSignup = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-8 text-center">
          Buyer Sign-Up
        </h1>
        <form className="space-y-6 bg-white p-6 md:p-8 shadow-md rounded-lg">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
  
          {/* Business Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Business Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Business/Organization Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type of Buyer</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Individual</option>
                  <option>Corporate</option>
                  <option>Government</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Purchase Preferences */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Purchase Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Primary Material Interests</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                  multiple
                >
                  <option>Wood</option>
                  <option>Steel</option>
                  <option>Concrete</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Approximate Purchase Frequency</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Project-Based</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Account Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Username <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password <span className="text-red-500">*</span></label>
                <input
                  type="password"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
  
          {/* Submit Button */}
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
  
  export default BuyerSignup;
  