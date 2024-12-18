import React from 'react';
import { Activity, Leaf, Lightbulb, MapPin, BarChart2, Bell } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Traffic Monitoring',
    description: 'Real-time traffic updates and smart routing for efficient navigation.',
  },
  {
    icon: Leaf,
    title: 'Waste Management',
    description: 'Smart waste collection and recycling initiatives for a cleaner city.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Energy-efficient lighting systems that adapt to natural light and movement.',
  },
  {
    icon: MapPin,
    title: 'City Navigation',
    description: 'Interactive maps showing points of interest and real-time transit info.',
  },
  {
    icon: BarChart2,
    title: 'Data Dashboard',
    description: 'Comprehensive city metrics and analytics at your fingertips.',
  },
  {
    icon: Bell,
    title: 'Alerts & Updates',
    description: 'Stay informed with personalized notifications about your city.',
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Smart City Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our comprehensive suite of smart city solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center mt-2">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;