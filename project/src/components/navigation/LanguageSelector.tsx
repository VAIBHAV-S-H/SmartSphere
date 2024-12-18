import React from 'react';
import { Globe } from 'lucide-react';
import { LANGUAGES } from '../../utils/constants';

const LanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 border-l pl-4">
      <button className="flex items-center space-x-1 text-gray-900">
        <Globe className="h-5 w-5" />
        <span>{LANGUAGES[0].code}</span>
      </button>
      <span className="text-gray-300">|</span>
      {LANGUAGES.slice(1).map((lang) => (
        <button key={lang.code} className="text-gray-900">
          {lang.code}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;