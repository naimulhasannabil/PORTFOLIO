const Projects = () => {
    const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      tags: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Travel Companion - Complete Travel Management Platform',
      description: 'A modern, full-featured travel website that combines beautiful marketing pages with comprehensive trip planning and management tools. Built with React, Vite, and Tailwind CSS.',
      image: 'https://camo.githubusercontent.com/a02268bddef1107bfb304c99560392fcb66411f1f47b9b3115b2c153fd307924/68747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f313539313337332f706578656c732d70686f746f2d313539313337332e6a7065673f6175746f3d636f6d70726573732663733d74696e797372676226773d31323030',
      tags: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide React'],
      liveUrl: 'https://travel-app-five-swart.vercel.app/',
      githubUrl: 'https://github.com/naimulhasannabil/Travel-Companion-App',
      featured: false
    },
    {
      title: 'Furniro - Premium Furniture E-Commerce Store',
      description: 'A modern, responsive furniture e-commerce website built with React, Tailwind CSS, and Vite. Furniro offers an elegant shopping experience for premium furniture with advanced filtering, wishlist functionality, and a complete user management system.',
      image: 'https://camo.githubusercontent.com/12ee805cf8fec2b949cdc82ce81b7c2361360d9db317cbda66118ddaa6195b3d/68747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f313537313436302f706578656c732d70686f746f2d313537313436302e6a7065673f6175746f3d636f6d70726573732663733d74696e797372676226773d31323030',
      tags: ['React', 'Tailwind CSS', 'Vite', 'React Context API'],
      liveUrl: 'https://ecommerce-nu-gules-64.vercel.app/',
      githubUrl: 'https://github.com/naimulhasannabil/ECommerce-Web-Shop',
      featured: false
    },
    {
      title: 'HODLIT - Cryptocurrency Portfolio Tracker',
      description: 'A modern, responsive cryptocurrency portfolio tracker built with React and Tailwind CSS.',
      image: 'https://camo.githubusercontent.com/791ceba99dfc86e543a098e78e1c0d11e4d52844bc3d5008ef82ab6ccf9484a2/68747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f3834343132342f706578656c732d70686f746f2d3834343132342e6a7065673f6175746f3d636f6d70726573732663733d74696e797372676226773d32303026683d323030',
      tags: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Lucide React', 'CoinGecko API'],
      liveUrl: 'https://crypto-mu-nine.vercel.app/',
      githubUrl: 'https://github.com/naimulhasannabil/Cryptocurrency-App',
      featured: false
    },
    {
      title: 'Real Estate Web Application',
      description: 'A modern, responsive real estate web application built with React, Vite, and Tailwind CSS. Find your dream home with our intuitive property search and browsing experience.',
      image: 'https://camo.githubusercontent.com/c788086b1eec67689e603836081a24c339eceb7efbfbde768787ee989f2fa1d6/68747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f313339363132322f706578656c732d70686f746f2d313339363132322e6a7065673f6175746f3d636f6d70726573732663733d74696e797372676226773d3132303026683d343030266669743d63726f70',
      tags: ['React', 'Vite', 'Tailwind CSS', 'React Router DOM', 'Lucide React'],
      liveUrl: 'https://realestateapp-seven.vercel.app/',
      githubUrl: 'https://github.com/naimulhasannabil/Real-Estate-App',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                    <span className="text-gray-300">•</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/naimulhasannabil"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
};

export default Projects;