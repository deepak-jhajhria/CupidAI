import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Crm from './components/Crm';
import IdentityHub from './components/IdentityHub';
import Footer from './components/Footer';
import Header from './components/Header';
import Pricing from './components/Pricing';
import BackTop from './components/BackTop';
import ServiceCardNew from './components/ServiceCardNew';

function App() {
  return (
    <div className=" bg-black-primary max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <TrustedCompany />
      <Crm />
      <div className='bg-[url(./assets/images/servicebg.webp)] bg-BgSize bg-center bg-no-repeat'>
        <ServiceCardNew/>
      </div>
      <Pricing />
      <Faq />
      <IdentityHub />
      <Footer />
      <BackTop />
    </div>
  )

}

export default App
