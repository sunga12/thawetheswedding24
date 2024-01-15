import { useEffect } from 'react';
import './App.css';
import BigDay from './components/BigDay';
import Gifts from './components/Gifts';
import Home from './components/Home';
import Navigation from './components/Navigation';

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
    </div>
  );
}

export default App;
