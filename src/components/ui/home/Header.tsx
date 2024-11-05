import Spline from "@splinetool/react-spline";
import Images from "../../../consts/images";
import SlightFlip from "../flip-text";
import { motion } from "framer-motion";

export function Header() {
  return (
    <div
      id="Home"
      className="mb-10 min-h-[700px] w-full flex flex-col md:justify-center items-center gap10 md:gap-24 px-10"
    >
      <div className=" w-full sm:w-[100%] absolute top-0 left-0 h-[750px] z-0">
        <Spline scene="https://prod.spline.design/xm8Tov-nIzDJ2pP3/scene.splinecode" />{" "}
      </div>
      <div className="flex flex-col gap-2 justify-center items-center mt-24 md:mt-0">
        <motion.div
          className="z-10 font-geist font-display text-center text-3xl font-bold text-white  md:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to{" "}
        </motion.div>
        <SlightFlip
          className="gradient-text font-geist font-display text-center text-3xl font-bold md:text-7xl "
          word={"Techverse club"}
        />
        <motion.div
          className="z-10 font-geistMono text-center text-sm text-white font-light md:text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Coding Minds Creating Tomorrow
        </motion.div>
      </div>
      <img src={Images.logo} alt="logo" className="z-10 mt-16 md:mt-0" />
      {/*  <VelocityScroll
        text="Coding Minds Creating Tomorrow"
        default_velocity={2}
        className="font-display text-center text-xl font-bold tracking-[-0.02em] text-black drop-shadow-sm
         dark:text-white md:text-6xl md:leading-[5rem]"
      /> */}
    </div>
  );
}
