import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Service";
import Testimonial from "./components/Testiomonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
   </>
  );
}

export default App;
