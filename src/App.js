import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Presentation from './components/Presentation';
import Studies from './components/Studies';
import GraphicDesign from './components/GraphicDesign';
import Frontend from './components/Frontend';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>            
      <Navbar />
      <Welcome />
      <Presentation />
      <Studies />
      <GraphicDesign />
      <Frontend />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
