import Image from 'next/image'
import NavBar from '@/componentes/NavBar/NavBar'
import Form from '@/componentes/Form/Form'


export default function Home() {
  return (
    <main >
      <header>
        <NavBar/>
      </header>
      <section className='d-flex'>
        <div>
          <Form/>
        </div>
        <div>
          <h2>hola</h2>
        </div>
      </section>
    </main>
  )
}
