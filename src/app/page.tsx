import Hero from '@/components/sections/home/Hero'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
          <section id="pricing">
        <Pricing />
      </section>
    </>
  )
}
import Pricing from '@/components/sections/home/Pricing'