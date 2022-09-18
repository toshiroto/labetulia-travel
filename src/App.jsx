import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Services from "./components/Services"



function App () {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}


export default App
