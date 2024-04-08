import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Crm from './components/Crm';
import IdentityHub from './components/IdentityHub';
import Footer from './components/Footer';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import Pricing from './components/Pricing';
import dashboardimage from './assets/images/dashboardimage.webp'

function App() {
  return (
    <div className=" bg-black-primary max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <img className='max-w-[915px] w-full mx-auto -translate-y-[40%]' src={dashboardimage} alt='image' />
      <TrustedCompany />
      <Crm />
      <div className='bg-[url(./assets/images/servicebg.webp)] bg-black bg-BgSize bg-top bg-no-repeat'>
        < ServiceCard />
      </div>
      <Pricing />
      <Faq />
      <IdentityHub />
      <Footer />
    </div>
  )

}

export default App
