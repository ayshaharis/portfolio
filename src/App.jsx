

import './App.css'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Intro from './components/Intro'
import Footer from './components/Footer'



function App() {
  return (
<div  className="flex flex-col min-h-screen">
  <Navbar/>
  <main className='flex-grow'>
  <div id="intro" className="min-h-screen bg-gray-100 flex items-center justify-center"><Intro/> </div>
  <div id="projects"className="min-h-screen bg-gray-100 flex items-center justify-center"><Projects/> </div>
  <div id="skills" className="min-h-screen bg-gray-100 flex items-center justify-center"><Skills/> </div>
  <div id="contact"className="min-h-screen bg-gray-100 flex items-center justify-center"><Contact/> </div>
  </main>
 
 <Footer/> 

</div>
  )
}

export default App
