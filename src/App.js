import './App.css';
import Faq from './components/Faq';
import Ourservices from './components/Ourservices';
import IdentityHub from './components/IdentityHub';

function App() {
  return (
    <div className="bg-black">
      <Faq />
      <Ourservices />
      <IdentityHub />
      {/* <Faq /> */}
    </div>
  );
}

export default App;
