import { MagicCard } from "../magic-card";
import Images from '../../../consts/images';
import CountUp from 'react-countup'; 
import { cardsData ,statsData } from './../../../consts/home';

// Array of stats data

function About() {
  return (
    <div className="min-h-[1700px] px-4">
      <span
        className="font-bold px-7 py-3 rounded-full"
        style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
      >
        About
      </span>
      <div className="font-medium text-white mt-6 mb-2 text-[36px]">
        Let me introduce you to
      </div>
      <p
        style={{ opacity: "0.7" }}
        className="font-normal text-gray-50 mt-6 mb-2 text-[20px]"
      >
        Our club with our amazing statistics.
      </p>

      {/* Parent div containing two child divs */}
      <div  className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-12">
        
        {/* First div containing two MagicCards */}
        <div className="flex flex-col gap-12 ">
          {cardsData.slice(0, 2).map((card, index) => (
            <MagicCard
              key={index}
              className="border-none px-6 flex flex-col justify-center text-geistMono bg-secondary w-[300px] sm:w-[530px]   h-[500px]"
            >
              <div>
                <h2 className="text-xl text-geistMono font-bold my-8">
                  {card.title}
                </h2>
                <p
                  style={{ opacity: "0.7" }}
                  className="text-xl text-geistMono font-normal my-8"
                >
                  {card.paragraph}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>

        {/* Second div containing one MagicCard */}
        <div className="flex justify-center relative ">
          <img
            src={Images.AnimatedCube}
            alt="AnimatedCube"
            className="absolute left-0 top-[-205px] z-10 md:left-[50px] md:top-[-205px] hidden sm:block"
            />
          <MagicCard
            className="border-none px-6 flex flex-col justify-center text-geistMono bg-secondary  w-[300px] sm:w-[530px]   h-[500px]"
          >
            <div>
              <h2 className="text-xl text-geistMono font-bold my-8">
                {cardsData[2].title}
              </h2>
              <p
                style={{ opacity: "0.7" }}
                className="text-xl text-geistMono font-normal my-8"
              >
                {cardsData[2].paragraph}
              </p>
            </div>
          </MagicCard>
        </div>
      </div>

      {/* Start stats */}
      <div className="w-full my-16 pt-16 ">
        <div className="">
          {statsData.map((stat, index) => (
            <div key={index} className="flex items-center border-solid border-white border-b-[1px] pb-5 mb-8">
              <h1 className="text-4xl font-bold w-[200px]">
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              </h1>
              <p className="text-xl w-full ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
