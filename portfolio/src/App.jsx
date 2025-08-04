import './App.css'
import Hero from './components/Hero/hero.jsx'
import NavBar from './components/NavBar/navbar.jsx'
import About from './components/about.jsx'
import Projects from './components/Projects/projects.jsx'
function App() {

  return (
    <div className=" bg-zinc-50/10">
      <NavBar />
      <Hero />
      <About/>
      <Projects />
    </div>
  )
}

export default App
