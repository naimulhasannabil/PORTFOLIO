import { useState, useEffect } from "react";

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true)
        }
        },
        { threshold: 0.1 }
    )

    const element = document.getElementById     ('skills-section')
    if (element) {
        observer.observe(element)
    }

    return () => {
        if (element) {
        observer.unobserve(element)
        }
    }
    }, [])

    const skills = [
      { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
      { name: 'React.js', level: 90, color: 'bg-blue-500' },
      { name: 'Node.js', level: 85, color: 'bg-green-500' },
      { name: 'Python', level: 80, color: 'bg-blue-600' },
      { name: 'TypeScript', level: 85, color: 'bg-blue-700' },
      { name: 'MongoDB', level: 85, color: 'bg-green-600' },
      { name: 'Prisma', level: 80, color: 'bg-blue-800' },
      { name: 'Next.js', level: 80, color: 'bg-orange-500' },
    ]

    const categories = [
      {
        title: 'Frontend',
        icon: '🎨',
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS']
      },
      {
        title: 'Backend',
        icon: '⚙️',
        skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Next.js']
      },
      {
        title: 'Database',
        icon: '🗃️',
        skills: ['MongoDB', 'Prisma', 'MySQL', 'Firebase']
      },
      {
        title: 'DevOps & Tools',
        icon: '🚀',
        skills: ['Docker', 'Git', 'Vite', 'vercel']
      }
    ]
    
    return (
    <section id="skills-section" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm proficient in a wide range of technologies and constantly learning new ones
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 delay-${index * 100} ${skill.color}`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 card-hover"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Skills;