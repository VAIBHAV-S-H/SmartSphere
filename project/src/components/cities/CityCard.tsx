import React from 'react';
import { City } from '../../utils/types';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
        <p className="text-gray-600 mb-4">{city.title}</p>
        <p className="text-gray-700">{city.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc pl-5">
            {city.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityCard;