import React from 'react';
import './App.css';
import TrustedCompany from './components/TrustedCompany';
import Faq from './components/Faq';
import Crm from './components/Crm';
import IdentityHub from './components/IdentityHub';
import Footer from './components/Footer';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Preloader from './components/Preloader';
import BackTop from './components/BackToTop';
import ServiceCardNew from './components/ServiceCardNew';
import { usePreloader } from './components/common/Hooks';

function App() {
  const isLoading = usePreloader();
  return (
    <div className="mx-auto overflow-hidden bg-black-primary">
      <div className='max-w-[1920px] mx-auto'>
        {
          isLoading ? (<Preloader />) : (<>
            <Header />
            <TrustedCompany />
            <Crm />
            <div className='bg-[url(./assets/images/servicebg.webp)] bg-BgSize bg-center bg-no-repeat'>
              <ServiceCardNew />
            </div>
            <Pricing />
            <Faq />
            <IdentityHub />
            <Footer />
            <BackTop /></>)
        }
      </div>

    </div >
  )

}

export default App
