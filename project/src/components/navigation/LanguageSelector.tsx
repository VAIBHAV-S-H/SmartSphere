import React from 'react';
import { Globe } from 'lucide-react';
import { LANGUAGES } from '../../utils/constants';

const LanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 border-l pl-4">
      <button className="flex items-center space-x-1 text-gray-900">
        <Globe className="h-5 w-5" />
        <span>EN</span>
      </button>
      <span className="text-gray-300">|</span>
      <button className="text-gray-900">ID</button>
    </div>
  );
};

export default LanguageSelector;