import { motion } from 'framer-motion';
import useInViewAnimation from '../../../lib/useInViewAnimation'; 
import { MagicCard } from '../magic-card';
import Images from '../../../consts/images';
import { cardsData, statsData } from './../../../consts/home';
import NumberTicker from '../number-ticker';
import cubs from '../../../assets/images/Home/cubs.png';

const About = () => {
  const [mainRef, mainControls] = useInViewAnimation({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="About" className="min-h-[1700px] md:px-4 relative">
      <img src={cubs} alt="" className="absolute left-0 top-1/2 hidden md:block" />
      <div className="flex flex-col md:items-start items-center">
        <span
          className="text-primary text-xs px-4 py-2 rounded-3xl text-border bg-gradient-to-r from-transparent to-white/5"
          style={{ boxShadow: '1px -1px 1px 1px #FFFFFF40 ' }}
        >
          About
        </span>
        <motion.div
          className="font-medium text-center md:text-start text-white mt-2 mb-2 text-3xl md:text-[36px]"
          // @ts-ignore
          ref={mainRef}
          initial={{ opacity: 0, y: 50 }}
          // @ts-ignore
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          Let me introduce you to
        </motion.div>
        <motion.p
          style={{ opacity: '0.7' }}
          className="font-normal text-center md:text-start text-gray-50 mt-2 mb-2 text-[20px]"
          initial={{ opacity: 0, y: 50 }}
          // @ts-ignore
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          Our club with our amazing statistics.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-24 mt-12"
        initial={{ opacity: 0, y: 50 }}
        //@ts-ignore
        animate={mainControls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
        }}
      >
        <div className="flex flex-col gap-12 lg:ml-16">
          {cardsData.slice(0, 2).map((card, index) => (
            <MagicCard
              key={index}
              className="border-none px-6 flex flex-col justify-center font-geistMono bg-secondary/75 w-[300px] sm:w-[400px]"
            >
              <div className="px-2">
                <div className="md:text-2xl text-lg font-geistMono font-bold mt-8 mb-4">
                  {card.title}
                </div>
                <p
                  style={{ opacity: '0.7' }}
                  className="md:text-xl text-sm font-geistMono font-normal mt-4 mb-8"
                >
                  {card.paragraph}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>

        <div className="flex justify-center relative lg:mr-16">
          <img
            src={Images.AnimatedCube}
            alt="AnimatedCube"
            className="absolute left-0 top-[-205px] z-10 md:left-[50px] md:top-[-205px] hidden lg:block"
          />
          <MagicCard className="border-none px-6 flex flex-col justify-center font-geistMono bg-secondary/75  w-[300px] sm:w-[400px]">
            <div className="px-2">
              <div className="md:text-2xl text-lg font-geistMono font-bold mt-8 mb-4">
                {cardsData[2].title}
              </div>
              <p
                style={{ opacity: '0.7' }}
                className="md:text-xl text-sm font-geistMono font-normal mt-4 mb-8"
              >
                {cardsData[2].paragraph}
              </p>
            </div>
          </MagicCard>
        </div>
      </motion.div>

      {/* Start stats */}
      <div className="w-full my-16 pt-16">
        {statsData.map((stat, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [statRef, statControls] = useInViewAnimation({ triggerOnce: true, threshold: 0.1 });

          return (
            <motion.div
              key={index}
              // @ts-ignore
              ref={statRef}
              className="flex items-center border-solid border-white/75 border-b-[1px] pb-5 mb-8"
              initial={{ opacity: 0, y: 50 }}
              // @ts-ignore
              animate={statControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.3 } },
              }}
            >
              <h1 className="text-4xl font-bold w-[200px]">
                <NumberTicker value={stat.number} className="text-white font-geistMono" />
                {stat.suffix}
              </h1>
              <p className="text-xl w-full">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
