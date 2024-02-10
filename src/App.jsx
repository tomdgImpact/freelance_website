import NavBar from './components/NavBar/NavBar';
import Presentation from './components/Presentation/Presentation';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Presentation />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App
