/* import { NavLink } from "react-router-dom";
import PersonCard from "../components/PersonCard";
import { Button } from "../components/ui/button"; */
import {Header} from "../components/ui/home/Header";
import About from "../components/ui/home/AboutHome";
//import CarrousselHome from "../components/ui/home/CarrousselHome";
import Members from "../components/ui/home/Members";
import {Partners} from "../components/ui/home/Partners";

function Welcome() {

  return (
    <div className="flex flex-col pt-[800px]">

       <Header />
       <About />
  {/*        <CarrousselHome />
 */}   
     <Partners />
     <Members />


 

    
    {/*   <NavLink to='/event-overview/bootcamp'>
        <Button id="Home" className="font-geistMono bg-secondary">
          Go to bootcamp event
        </Button>
      </NavLink>
      <PersonCard
        name="kadik salah eddine"
        departement={{
          name:"IT",
          description:"it..."
          }
        }
        isLeader={true}
        image={{
          nameShortCut: "SK",
        }}
      /> */}
    </div>
    
  );
}

export default Welcome;
