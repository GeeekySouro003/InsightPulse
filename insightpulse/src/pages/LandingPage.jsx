import Footer from '@/components/Footer';
import LandingNavigation from '@/components/LandingNavigation';
import { Button } from 'react-bootstrap';
import SideImg from '../assets/feedback1.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-body-tertiary min-h-screen">
      <LandingNavigation />

      <div className=" max-w-2xl mx-auto">
        <div className="p-4 ml-10 mt-20">
          <h1>
            There is no failure.{' '}
            <span className="text-violet-300">Only feedback.</span>
          </h1>
          <p>“Feedback is the breakfast of champions.”</p>
        <span className='font-thin text-xs'>  – Ken Blanchard</span>
        </div>

        <div className="space-x-4 ml-20 ">
          <Button style={{ background: 'white', color: 'black' }}>
            Learn More
          </Button>
          <Button style={{ background: 'black', color: 'white' }}>
            <Link
              to="/create-account"
              style={{ textDecorationLine: 'none', color: 'white' }}
            >
              Get Started
            </Link>
          </Button>
        </div>
      </div>
      <img
        src={SideImg}
        alt="SideImg"
        className="object-cover h-full mx-auto mt-2 p-4 mix-blend-multiply"
      />
      <Footer />
    </div>
  );
};

export default LandingPage;