import Rain from './components/rain'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import './styles/App.css'

function App() {
  
  return (
    <>
      <div className='main'>
        <Rain />
        <Header />
        <Hero />
      </div>
      <section>
        <About />
      </section>
    </>
  )
}

export default App
