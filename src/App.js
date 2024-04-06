import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Footer from './components/Footer';
import IdentityHub from './components/IdentityHub';
import Crm from './components/Crm';

function App() {
  return (
    <div className="bg-black">
      <Faq />
      <IdentityHub />
      <Footer />
      {/* <Crm /> */}
      {/* <TrustedCompany /> */}
    </div>
  )
}

export default App
