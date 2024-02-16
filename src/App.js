import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Home />}/>
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
