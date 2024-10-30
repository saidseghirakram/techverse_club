import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../../components/ui/carousel'; // Adjust the import path accordingly
import { events } from '../../../consts/index'; // Adjust the import path accordingly
import { useState } from 'react';

function Events() {
  // State to track the selected event index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle image click
  const handleImageClick = (index:number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="relative w-full ">
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
      <div className="w-[50%] p-4 bg-gray-800 text-white mb-4 rounded">
        <h2 className="text-xl font-bold">{events[selectedIndex].name}</h2>
        <p className="mt-2">{events[selectedIndex].descriptions}</p>
        <p className="mt-2 text-sm">{events[selectedIndex].date}</p>
        <p className="mt-2 font-semibold">{events[selectedIndex].place}</p>
        <a
          href={events[selectedIndex].website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 underline"
        >
          Learn More
        </a>
      </div>
      <div className=" w-full flex justify-center">

      <Carousel className='w-[90%]'>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent className='w-1/3'>
          {events.map((event, index) => (
            <CarouselItem key={index} className="p-4">
              {/* Make images clickable to update the selected event */}
              <img
                src={event.image}
                alt={event.name}
                className="h-64 w-full object-cover cursor-pointer"
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
