import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/app/landing/Hero'
import Features from '@/app/landing/Features'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Header />

      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
