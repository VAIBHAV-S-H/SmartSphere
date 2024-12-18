import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Search...', 
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;