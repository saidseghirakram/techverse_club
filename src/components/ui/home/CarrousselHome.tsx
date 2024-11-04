import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../carousel';
import { events } from '../../../consts/index';

const CarrousselHome = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="h-[1000px] mt-16 px-4">
      <span
        className="font-bold px-7 py-3 rounded-full"
        style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
      >
        Events
      </span>
      <div className="font-medium text-white mt-6 mb-2 text-[36px]">
        Let me show you
      </div>
      <p
        style={{ opacity: "0.7" }}
        className="font-normal text-gray-50 mt-6 mb-2 text-[20px]"
      >
        Our events with their inspiring details.
      </p>

      <Carousel className="relative ">
        <CarouselPrevious />
        <CarouselContent>
          <motion.div
            className="flex flex-row gap-3  justify-center"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex justify-center items-center  w-[100px]   pb-3  border-b-4 border-secondary border-solid">
                <motion.img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-[180px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
                  }}
                />
              </CarouselItem>
            ))}
          </motion.div>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarrousselHome;
