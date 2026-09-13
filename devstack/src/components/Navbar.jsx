import { useState } from 'react';
import logo from '../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [activeAuth, setActiveAuth] = useState('signin');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Technologies', id: 'tech' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">

      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-base font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveNav(item.id)}
              className={`transition-all duration-300 ${
                activeNav === item.id
                  ? 'text-pink-600 font-semibold'
                  : 'text-slate-500 hover:text-pink-500'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveAuth('signin')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
              activeAuth === 'signin'
                ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white border-transparent shadow-md'
                : 'bg-white text-slate-500 border-gray-200 hover:border-orange-400 hover:text-orange-500'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveAuth('signup')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
              activeAuth === 'signup'
                ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white border-transparent shadow-md'
                : 'bg-white text-slate-500 border-gray-200 hover:border-orange-400 hover:text-orange-500'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 border-t border-gray-100">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveNav(item.id);
                setIsOpen(false);
              }}
              className={`block py-2 transition-all duration-300 ${
                activeNav === item.id
                  ? 'text-pink-600 font-semibold'
                  : 'text-slate-500 hover:text-pink-500'
              }`}
            >
              {item.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};
export default Navbar;