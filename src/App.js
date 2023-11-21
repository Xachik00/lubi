import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";

function App() {

  return (
    <div className="  mx-auto md:w-[600px] lg:w-[1000px] xl:w-[1200px]   2xl:w-[1600px]">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/About" element={<AboutPage />}/>
        <Route path="/Pricing" element={<PricingPage />}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;