import{Container} from './components/index';
import {Header , Hero, MostPopular} from './sections/index';
import './App.css';
function App() {
  return (
  <>
    <Header />
    <Container>
      <Hero />
  <MostPopular/>
      
    </Container>
    {/* <Footer /> */}
  </>
  
  
  );
}

export default App;
