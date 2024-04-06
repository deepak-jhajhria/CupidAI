import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Crm from './components/Crm';
import Ourservices from './components/Ourservices';
import Pricing from './components/Pricing';
import IdentityHub from './components/IdentityHub';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className=" bg-black-primary max-w-[1920px] mx-auto">
      <Header />
      {/* <Ourservices /> */}
      {/* <Pricing /> */}
      <div className='bg-[url(./assets/images/servicebg.webp)] bg-black bg-BgSize bg-top  bg-no-repeat'>
        <ServiceCard />
      </div>
      {/* <Crm /> */}
      {/* <TrustedCompany /> */}
      <Faq />
      <IdentityHub />
      <Footer />
    </div>
  )

}

export default App
