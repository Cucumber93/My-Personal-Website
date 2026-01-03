
//Components
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <div>hi</div>
      <section id='header'>
        <Header/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='experience'>
        <Experience/>
      </section>
      <section id='projects'>
        < Projects/>
      </section>
      <section id='contact'>
        < Contact/>
      </section>
    </div>
  )
}

export default App
