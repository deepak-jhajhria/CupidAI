import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Footer from './components/Footer';
import IdentityHub from './components/IdentityHub';
import Crm from './components/Crm';
import Ourservices from './components/Ourservices';
import Pricing from './components/Pricing';
import CustomizedAccordions from './components/FaqNew';

function App() {
  return (
    <div className="bg-black">
      <CustomizedAccordions />
      <Faq />
      <Ourservices />
      <Pricing />
      <IdentityHub />
      <Footer />
      {/* <Crm /> */}
      {/* <TrustedCompany /> */}
    </div>
  )
}

export default App
