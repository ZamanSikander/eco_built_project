const Help = () => {
    return (
      <div className="container mx-auto px-6 py-12 bg-gray-50">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-600 text-center mb-8">How Can We Help You?</h1>
  
        {/* Section 1: FAQs */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions (FAQs)</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Quick Answers to Common Questions About Our Platform
          </p>
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">How do I create an account?</h3>
              <p className="text-gray-600">
                Creating an account is simple! Click on the Sign Up button on the top right of the homepage, fill out the required details, and verify your email address to get started.
              </p>
            </div>
  
            {/* Question 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">How can I list my materials?</h3>
              <p className="text-gray-600">
                To list your materials, log into your account and navigate to the Dashboard. Select Add Listing, fill in the required details about your materials, and upload clear images for better visibility.
              </p>
            </div>
  
            {/* Question 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">What are the costs for using the platform?</h3>
              <p className="text-gray-600">
                Our platform offers free basic listings. Premium features like enhanced visibility or promoted listings are available at competitive rates. Check the pricing page for detailed information.
              </p>
            </div>
  
            {/* Question 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">How do I contact a vendor or contractor?</h3>
              <p className="text-gray-600">
                You can contact vendors or contractors directly through our secure messaging system. Simply click on the Contact button on their profile or listing page.
              </p>
            </div>
  
            {/* Question 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Is my data secure on the platform?</h3>
              <p className="text-gray-600">
                Yes, we prioritize data security. Your information is stored securely and only shared as necessary to facilitate transactions. Refer to our Privacy Policy for more details.
              </p>
            </div>
  
            {/* Question 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Can I edit or remove my listings?</h3>
              <p className="text-gray-600">
                Absolutely! Navigate to your Dashboard, find the listing you want to edit or remove, and use the options provided to make changes or delete it.
              </p>
            </div>
  
            {/* Question 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">What payment methods are accepted?</h3>
              <p className="text-gray-600">
                We accept payments via credit cards, debit cards, and popular digital wallets. For larger transactions, wire transfers may also be an option.
              </p>
            </div>
          </div>
        </section>
  
        {/* Section 2: Troubleshooting and Support */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Troubleshooting and Support</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Need Assistance? Follow These Steps to Resolve Common Issues.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Step 1: Visit the User Guide</h3>
              <p className="text-gray-600">
                Our <a href="#" className="text-green-600 hover:underline">User Guide</a> provides detailed instructions to help you navigate the platform effectively.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Step 2: Join the Community Forum</h3>
              <p className="text-gray-600">
                Connect with other users in our <a href="#" className="text-green-600 hover:underline">Community Forum</a> to share experiences and find solutions.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Step 3: Submit a Support Request</h3>
              <p className="text-gray-600">
                If the issue persists, you can <a href="#" className="text-green-600 hover:underline">submit a support request</a> for personalized assistance.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Help;
  