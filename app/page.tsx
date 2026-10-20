import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ServicesGrid from './components/ServicesGrid'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectGallery from './components/ProjectGallery'
import CareerBanner from './components/CareerBanner'
import Memorial from './components/Memorial'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectGallery />
      <CareerBanner />
      <Memorial />
      <Footer />
    </main>
  )
}