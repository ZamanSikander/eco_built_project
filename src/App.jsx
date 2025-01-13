
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import OurStory from "./pages/OurStory"
import Help from "./pages/Help";
import SupplierSignup from "./pages/SupplierSignup";
import ContractorSignup from "./pages/ContractorSignup";
import BuyerSignup from "./pages/BuyerSignup";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurStory" element={<OurStory/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/SupplierSignup" element={<SupplierSignup/>}/>
        <Route path="/ContractorSignup" element={<ContractorSignup/>}/>
        <Route path="/BuyerSignup" element={<BuyerSignup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/TermsOfServices" element={<TermsOfServices/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App