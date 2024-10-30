import { Icon } from "@iconify-icon/react/dist/iconify.js";







import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../../components/ui/carousel'; 
import { events } from '../../../consts/index'; 
import { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Events() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className='mb-14'>
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
          Our events with its inspiring details.
        </p>
      </div>

      <div className='w-full px-10 flex flex-col sm:flex-row sm:gap-16 justify-around items-center'>
        <div className='flex-1 text-end pr-6'>
          <h1 className="font-geistMono text-[48px] ">{events[selectedIndex].name}</h1>
          <p className="font-geistMono text-[28px] text-gray-500">{events[selectedIndex].date}</p>
          <Icon
            icon="game-icons:fast-arrow"
            width="100"
            height="100"
            className="sm:w-auto text-light_purple md:rotate-0  rotate-45 animate-bounce-once mt-24 mr-10"
          />
        </div>
        <div className="w-[497px] bg-secondary p-[16px] flex flex-col justify-center items-center text-white mb-4 rounded-md">
          <img src={events[selectedIndex].image} className='h-[521px] w-[60%] sm:w-[465px] mb-6' alt="active_event" />
          <Link
            to={`/event-overview/${events[selectedIndex].name.replace(/\s+/g, '-').toLowerCase()}`} 
            className=" text-white font-geistMono mt-[10px] my-[20px] underline"
          >
            Learn more about the event
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Carousel className='w-[70%] md:w-[90%]'>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent className=' w-full sm:w-1/3  md:w-1/3'>
            {events.map((event, index) => (
              <CarouselItem  key={index} className="p-4">
                <img
                  src={event.imageSlider}
                  alt={event.name}
                  className={`h-64 w-full object-contain cursor-pointer border-b-[20px] mb-5 border-b-secondary ${selectedIndex !== index ? 'opacity-50' : 'opacity-100'}`} // Apply opacity based on selected index
                  onClick={() => handleImageClick(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Events;
