import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Login</h1>
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 focus:ring-4 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        {/* Signup Links */}
        <div className="mt-6 text-center space-y-4">
          <p className="text-sm text-gray-600">Do not have an account? Sign up as:</p>
          <div className="flex flex-col gap-4">
            <Link
              to="/SupplierSignup"
              className="block w-full md:w-auto bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
            >
              Supplier
            </Link>
            <Link
              to="/ContractorSignup"
              className="block w-full md:w-auto bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
            >
              Contractor
            </Link>
            <Link
              to="/BuyerSignup"
              className="block w-full md:w-auto bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
            >
              Buyer
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login