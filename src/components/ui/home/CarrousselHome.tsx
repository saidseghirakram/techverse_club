import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../carousel";
import { events } from "../../../consts/index";

function CarrousselHome() {
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

      {/* Carousel Component */}
      <Carousel className="relative ">
        <CarouselPrevious />
        <CarouselContent>
          <div className="flex flex-row gap-3  justify-center">
            {events.map((event, index) => (
              <CarouselItem key={index} className="flex justify-center items-center  w-[100px]   pb-3  border-b-4 border-secondary border-solid"> 
                <img src={event.image} alt={event.name} className="w-full h-[180px]" />
           
              </CarouselItem>
            ))} 
          </div>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarrousselHome;
