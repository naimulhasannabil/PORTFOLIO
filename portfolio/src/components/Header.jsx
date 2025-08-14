import { useState } from "react";

const Header = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ]

    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container-max">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">NHN</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
};

export default Header;