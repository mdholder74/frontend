import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Card from './components/Card'
import Navigation from './components/Navigation'
import Analyst from './components/Analyst'
import Badges from './components/Badges'

function App() {


  return (
    <>
    <main className="container">
      <Navigation />
      <Header />
      <Card />
      <Analyst />
      <Badges />
      <Footer />
    </main>


    </>
  )
}

export default App
