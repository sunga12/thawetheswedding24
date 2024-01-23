import { useEffect } from 'react';
import './App.css';
import BigDay from './components/BigDay';
import Gifts from './components/Gifts';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = "The Thawethes 2024"
  }, [])
  return (
    <div className="App">
      <Navigation />
      <Home />
      <BigDay />
      <Gifts />
      <Contact />
    </div>
  );
}

export default App;
