
import About from '../../Components/About/About'
import Artic from '../../Components/Artic/Artic'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Servic from '../../Components/Servic/Servic'
import './Home.css'

function Home() {

  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Servic/>
     <Main/>
     <Artic/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home
