import { Link } from "react-router-dom"

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 md:mb-8 text-center">
        Privacy Policy
      </h1>
      <div className="bg-white p-6 md:p-8 shadow-md rounded-lg space-y-4 text-gray-700">
        <p>
          We value your privacy and are committed to protecting your personal
          information. This policy outlines how we collect, use, and safeguard
          your data.
        </p>
        <h2 className="text-xl font-semibold">Information Collection</h2>
        <p>
          We collect personal details such as your name, email, phone number,
          and other necessary information during account creation or usage of
          our services.
        </p>
        <h2 className="text-xl font-semibold">Use of Information</h2>
        <p>
          The information collected is used to improve our services, provide
          personalized experiences, and for communication purposes.
        </p>
        <h2 className="text-xl font-semibold">Data Protection</h2>
        <p>
          We implement industry-standard measures to ensure your data is
          secure. However, no system is completely foolproof.
        </p>
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal data by
          contacting our support team.
        </p>
        <p>
          If you have any concerns about our Privacy Policy, feel free to{" "}
          <Link
            to="/Contact"
            className="text-green-600 font-semibold hover:underline"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy