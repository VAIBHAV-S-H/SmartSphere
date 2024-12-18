import React from 'react';
import { Search, Mail, User, Globe } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <a href="/" className="text-gray-900 hover:text-blue-600">Home</a>
                <a href="/events" className="text-gray-900 hover:text-blue-600">Events</a>
                <div className="relative group">
                  <button className="text-gray-900 group-hover:text-blue-600 inline-flex items-center">
                    Contents
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <a href="/faq" className="text-gray-900 hover:text-blue-600">FAQ</a>
                <a href="/about" className="text-gray-900 hover:text-blue-600">About</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <Search className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2 border-l pl-4">
                <button className="flex items-center space-x-1 text-gray-900">
                  <Globe className="h-5 w-5" />
                  <span>EN</span>
                </button>
                <span className="text-gray-300">|</span>
                <button className="text-gray-900">ID</button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;