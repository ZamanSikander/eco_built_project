import { Link } from "react-router-dom"

const TermsOfServices = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 md:mb-8 text-center">
        Terms of Service
      </h1>
      <div className="bg-white p-6 md:p-8 shadow-md rounded-lg space-y-4 text-gray-700">
        <p>
          Welcome to our platform. By using our services, you agree to comply
          with these Terms of Service.
        </p>
        <h2 className="text-xl font-semibold">Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities under your account.
        </p>
        <h2 className="text-xl font-semibold">Prohibited Activities</h2>
        <p>
          Users are prohibited from engaging in fraudulent, harmful, or
          disruptive activities on the platform.
        </p>
        <h2 className="text-xl font-semibold">Service Modifications</h2>
        <p>
          We reserve the right to modify or discontinue services at any time,
          with or without notice.
        </p>
        <h2 className="text-xl font-semibold">Liability Limitation</h2>
        <p>
          We are not liable for any damages resulting from the use or
          inability to use our services.
        </p>
        <p>
          For more details or inquiries about these terms, please{" "}
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

export default TermsOfServices