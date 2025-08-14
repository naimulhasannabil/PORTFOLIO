import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <section id='home'>
          <Hero scrollToSection={scrollToSection} />
        </section>
        <section id='about'>
          <About />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
