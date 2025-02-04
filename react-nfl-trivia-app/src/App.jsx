import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import TriviaPage from './Pages/TriviaPage';
import AnalystPage from './Pages/AnalystPage';
import BadgesPage from './Pages/BadgesPage';
import AboutPage from './Pages/AboutPage';
import Navigation from './components/Navigation';


function App() {
  return(
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<TriviaPage />} />
      <Route path="/analyst" element={<AnalystPage />} />
      <Route path="/badges" element={<BadgesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
    </>
  )

}

export default App;
