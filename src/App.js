import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Services from './components/services';
import Hero from './components/homepage';
import Header from './components/header';
import './css/responsive.css';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Services />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
