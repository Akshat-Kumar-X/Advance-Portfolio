import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <div className="w-full md:flex justify-between items-center max-w-7xl mx-auto">
            <Hero />
            <div className="md:block hidden me-11">
              <Spline scene="https://prod.spline.design/BVZyuOcOPcnAPAP1/scene.splinecode"/>
            </div>
          </div>
          <div className='z-100 mt-[-50px] w-full flex justify-center items-center'>
        <a href='#about'>
          <div className=' z-100 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
