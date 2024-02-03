import NavBar from './components/NavBar/NavBar';
import Presentation from './components/Presentation/Presentation';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <div className='site-container'>
        <header><NavBar /></header>
        <main>
          <Presentation />
        </main>
      </div>
      <footer className='footer'><Footer /></footer>
    </>
  );
}

export default App
