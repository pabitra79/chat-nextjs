import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Header />

      <section className='grow py-24'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>Realtime Chat & Video App</h1>
        </div>
      </section>

      <Footer />
    </main>
  )
}
