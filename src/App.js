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
import BackTop from './components/BackTop';
document.body.classList.add("overflow-hidden")

function App() {
  const [preloder, setpreloder] = React.useState(true)
  setTimeout(() => {
    setpreloder(false)
    document.body.classList.remove("overflow-hidden")
  }, 4000);
  return (
    <div className=" bg-black-primary max-w-[1920px] mx-auto overflow-hidden">
      {preloder && <Preloader />}
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
