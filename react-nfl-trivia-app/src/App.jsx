import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Quiz from './components/Quiz'
import Navigation from './components/Navigation'
import Analyst from './components/Analyst'
import Badges from './components/Badges'
import About from './components/About'

function App() {


  return (
    <>
    <main className="container">
      <Navigation />
      <Header />
      <Quiz />
      <Analyst />
      <Badges />
      <About />
      <Footer />
    </main>


    </>
  )
}

export default App
