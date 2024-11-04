import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../../components/ui/carousel";
import { events } from "../../../consts/index";
import { Link } from "react-router-dom";
import { handleClick } from "../../../lib/scrollTop";
import { MagicCard } from "../magic-card";

const Events = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const titleControls = useAnimation();
  useEffect(() => {
    if (titleInView) {
      titleControls.start('visible');
    }
  }, [titleControls, titleInView]);

  return (
    <div id="Events" className="relative w-full mt-16">
      <div className="flex flex-col md:items-start items-center mb-14">
        <span
          className="text-primary text-xs px-4 py-2 rounded-3xl text-border bg-gradient-to-r from-transparent to-white/5"
          style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
        >
          Events
        </span>
        <motion.div
          className="font-medium text-center md:text-start text-white mt-2 mb-2 text-3xl md:text-[36px]"
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          Let me show you
        </motion.div>
        <motion.p
          style={{ opacity: "0.7" }}
          className="font-normal text-center md:text-start text-gray-50 mt-2 mb-2 text-[20px]"
          initial={{ opacity: 0, y: 50 }}
          animate={titleControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          Our events with its inspiring details.
        </motion.p>
      </div>

      <div className="w-full px-10 flex flex-col md:flex-row md:gap-16 justify-around items-center">
        <div className="flex-1 text-end pr-6">
          <h1 className="font-geistMono mb-2 text-3xl lg:text-[48px] ">
            {events[selectedIndex].name}
          </h1>
          <p className="font-geistMono text-sm lg:text-lg text-gray-500">
            {events[selectedIndex].date}
          </p>
          <Icon
            icon="game-icons:fast-arrow"
            width="100"
            height="100"
            className="sm:w-auto text-light_purple md:rotate-0  rotate-45 animate-bounce-once mt-24 mr-10"
          />
        </div>
        <MagicCard
          className={`bg-secondary/50 border-none rounded-md w-fit h-fit mb-4 `}
        >
          <div className="w-[497px] bg-secondary/75 p-[16px] flex flex-col justify-center items-center text-white rounded-md">
            <img
              src={events[selectedIndex].image}
              className="h-[521px] w-[60%] sm:w-[465px] mb-2 z-10"
              alt="active_event"
            />
            <Link
              to={`/event-overview/${events[selectedIndex].name}`}
              className="group text-white font-geistMono mt-[10px] hover:text-white/75"
            >
              <a
                onClick={handleClick}
                className="flex text-xs md:text-sm lg:text-base items-center gap-2"
              >
                Learn more about the event
                <Icon
                  icon="tdesign:arrow-up"
                  width="24"
                  height="24"
                  className="rotate-45 border-2 group-hover:scale-125 group-hover:text-white/75 transition-all duration-200 group-hover:border-white/75 group-hover:p-0.5 group-hover:rotate-90 rounded-full border-white"
                />
              </a>
            </Link>
          </div>
        </MagicCard>
      </div>

      <div className="w-full flex justify-center">
        <Carousel className="w-[70%] md:w-[90%]">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent className=" ">
            {events.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/3 relative">
                <img
                  src={event.imageSlider}
                  alt={event.name}
                  className={`lg:h-52 py-4 w-full cursor-pointer border-b-[12px] lg:border-b-[16px] rounded-lg mb-5 border-b-secondary ${
                    selectedIndex !== index ? "opacity-25" : "opacity-100"
                  }`}
                  onClick={() => handleImageClick(index)}
                />
                {selectedIndex !== index && (
                  <div
                    onClick={() => handleImageClick(index)}
                    className="absolute cursor-pointer top-16 lg:top-24 left-1/3 font-bold text-xs md:text-sm lg:text-xl"
                  >
                    {event.name}
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
