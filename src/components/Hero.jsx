import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-row">
      <div className={`${styles.paddingX} justify-center max-w-7xl mx-auto flex flex-row items-center gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]"> Akshat </span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}> 
            I Develop Web Applications & <br className="sm:block hidden"/>Solutions for Real World Problems.
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
