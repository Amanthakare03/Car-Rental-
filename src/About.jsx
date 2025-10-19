import React from "react";

const App = () =>{
    return(
        <>
        <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-blue-600">Car Rentals</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Welcome to <span className="font-semibold text-gray-800">Car Rentals</span>, 
          your trusted partner for affordable, reliable, and convenient car rentals. 
          Whether you’re planning a weekend getaway, a business trip, or a family vacation, 
          we’ve got the perfect ride to match your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To make car rentals simple, transparent, and stress-free for every customer 
              through technology and top-quality service.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Why Choose Us?</h3>
            <p className="text-gray-600">
              We offer flexible rental plans, well-maintained cars, 24/7 customer support, 
              and the best prices in the market — all designed for your comfort and safety.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading car rental brand recognized for innovation, trust, 
              and exceptional customer experiences.
            </p>
          </div>
        </div>

        {/* <div className="mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Book Your Ride Now
          </button>
        </div> */}
      </div>
    </section>
        
    </>
    )
}
export default App;


