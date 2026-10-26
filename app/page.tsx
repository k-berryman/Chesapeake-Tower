import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ServicesGrid from './components/ServicesGrid'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectGallery from './components/ProjectGallery'
import About from './components/About'
import CareerBanner from './components/CareerBanner'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectGallery />
      <About />
      <CareerBanner />
      <Footer />
    </main>
  )
}