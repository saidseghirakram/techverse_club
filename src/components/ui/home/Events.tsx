import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../../components/ui/carousel'; // Adjust the import path accordingly
import { events } from '../../../consts/index'; // Adjust the import path accordingly
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Events() {
  // State to track the selected event index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle image click
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

      {/* Div to show selected event details */}
      <div className='w-full flex justify-around items-center'>
        <div>
          <h1 className="font-geistMono text-[48px] ">{events[selectedIndex].name}</h1>
        </div>
        <div className="w-[497px] bg-secondary p-[16px] text-white mb-4 rounded-md">
          <img src={events[selectedIndex].image} className='h-[521px] w-[465px]' alt="active_event" />
          <Link
            to={`/event-overview/${events[selectedIndex].name.replace(/\s+/g, '-').toLowerCase()}`} 
            className="mt-4 text-white font-geistMono my-[20px]"
          >
            Learn more about the event
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Carousel className='w-[90%]'>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent className='w-1/3'>
            {events.map((event, index) => (
              <CarouselItem key={index} className="p-4">
                <img
                  src={event.imageSlider}
                  alt={event.name}
                  className="h-64 w-full object-contain cursor-pointer border-b-[20px] mb-5 border-b-secondary"
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
