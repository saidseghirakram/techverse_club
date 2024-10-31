import { motion } from "framer-motion";
import LeftArrow from "../assets/svg/arrow-left.svg";
import { bootcampStat } from "../assets/events";
import ShotsSection from "../components/events/ShotsSection";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import StatisticCard from "../components/events/StatisticCard";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import PersonCard from "../components/PersonCard";
import { useParams } from "react-router-dom";
import { events } from "../consts";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const Events = () => {
  const { event } = useParams();
  let selectedEvent: EventEntity | undefined;
  const [eventImage, setEventImage] = useState<string>();

  if (event) {
    selectedEvent = events.find(
      (ev) => ev.name.toLowerCase() === event?.toLowerCase()
    );
    if (!selectedEvent) {
      return (
        <div className="mx-16 py-8">No event exist with current pathname</div>
      );
    }
  } else {
    return (
      <div className="mx-16 py-8">No event exist with current pathname</div>
    );
  }

  function getFirstLetters(name: string) {
    return name
      .split(" ")
      .map((word: string) => word[0])
      .join("");
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (selectedEvent?.image) {
      import(`/assets/Events/${selectedEvent.largeImage}`)
        .then((module) => setEventImage(module.default))
        .catch((error) => console.error("Error loading image:", error));
    }
  }, [selectedEvent]);

  return (
    <motion.div
      className="flex flex-col gap-16 md:gap-28 w-full lg:px-16 md:px-4 py-20"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center gap-10 md:gap-20"
        variants={fadeIn}
      >
        <motion.div
          className="flex flex-col gap-4 items-end w-full"
          variants={slideInFromRight}
        >
          <div className="relative w-full">
            <img
              src={LeftArrow}
              alt="left arrow"
              className="absolute -right-6 -top-6 md:-right-8 md:-top-8 rotate-135 w-10 md:w-auto"
            />

            <div className="relative group w-full">
              <motion.img
                src={eventImage}
                alt={selectedEvent.name}
                className="w-full rounded-[12px] sm:h-auto h-[175px] transition-all duration-300 group-hover:blur-md"
                variants={slideInFromLeft}
              />
              <motion.h1
                className="text-white hidden lg:block text-[26px] sm:text-[32px] md:text-[40px] absolute bottom-0 left-4 group-hover:hidden font-bold font-geist"
                variants={fadeIn}
              >
                {selectedEvent.name}
              </motion.h1>
              <div className="absolute inset-0 bg-black bg-opacity-50 px-4 sm:px-5 py-3 flex flex-col items-center justify-center gap-3 rounded-[12px] lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400">
                <h1 className="text-white text-xl md:text-[40px] font-bold font-geist">
                  {selectedEvent.name}
                </h1>
                <p className="text-white font-geistMono text-sm md:text-[22px] md:text-lg overflow-auto text-center">
                  {selectedEvent.descriptions}
                </p>
              </div>
            </div>

            <img
              src={LeftArrow}
              alt="left arrow"
              className="absolute -left-6 -bottom-6 md:-left-8 md:-bottom-8 -rotate-45 w-10 md:w-auto"
            />
          </div>
          <div className="flex flex-col items-end gap-4">
            <span className="text-light_purple font-medium text-sm md:text-xl font-geist">
              {selectedEvent.edition === 1 &&
                `${selectedEvent.edition}st Edition`}
              {selectedEvent.edition === 2 &&
                `${selectedEvent.edition}nd Edition`}
              {selectedEvent.edition !== 2 &&
                selectedEvent.edition !== 1 &&
                `${selectedEvent.edition}th Edition`}
            </span>
            <div className="flex items-center  gap-3 md:gap-6">
              <span className="text-white text-sm md:text-lg font-semibold leading-[28.13px] font-geist">
                {selectedEvent.date}
              </span>
              <Icon
                icon="bi:calendar-date-fill"
                width="24"
                height="24"
                className="text-light_purple"
              />
            </div>
            <div className="flex items-center gap-3 md:gap-6">
              <span className="text-white  text-nowrap text-sm md:text-lg font-semibold leading-[28.13px] font-geist">
                {selectedEvent.place}
              </span>
              <Icon
                icon="mingcute:map-fill"
                width="28"
                height="28"
                className="text-light_purple"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-3"
          variants={slideInFromLeft}
        >
          <span className="md:text-[24px] text-base sm:text-base font-geist font-semibold text-center text-light_purple md:leading-[35px]">
            Know more about <br /> the event
          </span>
          <Icon
            icon="game-icons:fast-arrow"
            width="50"
            height="50"
            className="sm:w-auto text-light_purple rotate-45 animate-bounce-once"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-8 w-full"
        variants={fadeIn}
      >
        <h1 className="font-geist text-2xl md:text-3xl font-bold text-white">
          Speakers:
        </h1>
        <motion.div
          className="flex gap-7 w-full md:w-[75%] justify-center flex-wrap"
          variants={slideInFromRight}
        >
          {selectedEvent.speakers.map((speaker, index) => {
            return (
              <PersonCard
                name={speaker.name}
                isSpeaker={true}
                image={{
                  nameShortCut: getFirstLetters(speaker.name),
                }}
                key={index}
              />
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-8 w-full"
        variants={slideInFromLeft}
      >
        <h1 className="font-geist text-2xl md:text-3xl font-bold text-white">
          Statistics:
        </h1>
        <motion.div
          className="flex justify-center mx-4 md:mx-0 items-center gap-8 md:gap-[60px] flex-wrap"
          variants={fadeIn}
        >
          {bootcampStat.map((stat, index) => {
            return (
              <StatisticCard
                childrenStyle="w-full md:w-fit"
                stat={stat}
                key={index}
              />
            );
          })}
        </motion.div>
      </motion.div>
      {selectedEvent.event_shots && (
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="font-geist text-2xl md:text-3xl font-bold text-white">
            Event Shots :
          </h1>
          <ShotsSection event={selectedEvent} />
        </div>
      )}
      {selectedEvent.website && (
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-8">
            <span className="font-geist text-base font-semibold text-light_purple text-center">
              Want to know <br /> more?
            </span>
            <HoverBorderGradient
              containerClassName="rounded-lg flex"
              as="button"
              className="bg-primary font-semibold py-1 items-center space-x-2 px-8"
            >
              <a
                href={selectedEvent.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Website
              </a>
            </HoverBorderGradient>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Events;
