import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Card from './components/Card'
import Navigation from './components/Navigation'
import Analyst from './components/Analyst'

function App() {


  return (
    <>
    <main className="container">
      <Navigation />
      <Header />
      <Card />
      <Analyst />
      <Footer />
    </main>


    </>
  )
}

export default App
