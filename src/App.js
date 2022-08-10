import './App.css';
import {Home} from './pages/Home'
import Footer from './components/Footer';
import Header from './components/Header'
import About from './pages/About';
import Contact from './pages/Contact'


const App = () => {
  return(
    <>
      <Home />
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
