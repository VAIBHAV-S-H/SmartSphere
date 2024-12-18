import React from 'react';
import { NavigationLink } from '../../utils/types';

interface NavLinkProps extends NavigationLink {
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className = '' }) => (
  <a 
    href={href} 
    className={`text-gray-900 hover:text-blue-600 ${className}`}
  >
    {label}
  </a>
);

export default NavLink;