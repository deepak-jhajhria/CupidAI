// import './App.css';
// import TrustedCompany from './components/TrustedCompany';
// import Faq from './components/Faq';
// import Crm from './components/Crm';
import ServiceCard from './components/ServiceCard';
// import IdentityHub from './components/IdentityHub';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      {/* <Faq /> */}
      <div className='bg-[url(./assets/images/servicebg.webp)] bg-black bg-BgSize bg-top  bg-no-repeat'>
        <ServiceCard />
      </div>
      {/* <IdentityHub /> */}
      {/* <Footer /> */}
      {/* <Crm /> */}
      {/* <TrustedCompany /> */}
    </div>
  )
}

export default App
