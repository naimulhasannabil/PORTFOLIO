const About = () => {
    return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                I'm an enthusiastic Full Stack Developer eager to start my professional journey in building modern and user-friendly web applications. My passion for technology began with a curiosity about how websites and apps work, and it has grown into a dedication to learning, creating, and delivering impactful digital experiences
              </p>
              <p>
                I specialize in modern JavaScript frameworks, particularly React and Node.js, 
                and have a strong background in both frontend and backend development. I believe 
                in writing clean, maintainable code and following best practices to deliver 
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through blog posts and mentoring 
                junior developers.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">30+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">0-1+</div>
                <div className="text-gray-600">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg"
                alt="Developer at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600">0-1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;