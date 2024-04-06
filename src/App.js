import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Crm from './components/Crm';
import Ourservices from './components/Ourservices';
import Pricing from './components/Pricing';
import IdentityHub from './components/IdentityHub';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" bg-black-primary max-w-[1920px] mx-auto">
      {/* <Ourservices /> */}
      {/* <Pricing /> */}
      <Faq />
      <IdentityHub />
      <Footer />
      {/* <Crm /> */}
      {/* <TrustedCompany /> */}
    </div>
  )

}

export default App
