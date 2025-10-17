import Hero from '@/components/sections/home/Hero'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
          <section id="about">
        <About />
      </section>
    </>
  )
}
import About from '@/components/sections/home/About'