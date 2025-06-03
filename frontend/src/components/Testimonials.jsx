import { DownloadIcon, Eye, Star, StarIcon, Wand } from "lucide-react";
import React from "react";

function Testimonials() {
  return (
    <section className="min-h-[80vh] flex flex-col py-10 md:py-20">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Testimonials</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>


    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="text-gray-600 mb-5 flex-grow">
            "This product completely transformed my workflow. The quality is
            outstanding and the customer support is exceptional. I couldn't be
            happier with my purchase!"
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Customer"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="text-gray-600 mb-5 flex-grow">
            "Incredible value for the price. The AI features saved us countless hours
            of work and helped us deliver better results to our clients."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Customer"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">Michael Chen</p>
              <p className="text-sm text-gray-500">Creative Director, DesignCo</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
          </div>

          <blockquote className="text-gray-600 mb-5 flex-grow">
            "While the learning curve was a bit steep initially, the results we're
            getting now are phenomenal. The support team was very helpful."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Customer"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">Emma Rodriguez</p>
              <p className="text-sm text-gray-500">Product Manager, Innovate Inc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Testimonials;
