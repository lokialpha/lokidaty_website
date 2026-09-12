import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import ScreenshotGallery from '../components/ScreenshotGallery'
import WhyLokiDaty from '../components/WhyLokiDaty'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <ScreenshotGallery />
      <WhyLokiDaty />
      <FAQ />
      <CTA />
    </main>
  )
}
