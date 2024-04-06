import './App.css';
import Faq from './components/Faq';
import Ourservices from './components/Ourservices';
import Footer from './components/Footer';
import IdentityHub from './components/IdentityHub';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="bg-black">
      <Faq />
      <Ourservices />
      <Pricing />
      <IdentityHub />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default App;
