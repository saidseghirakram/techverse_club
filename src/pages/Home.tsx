import About from "../components/ui/home/AboutHome"
import Members from "../components/ui/home/Members"
import {Header} from "../components/ui/home/Header"
import Events from "../components/ui/home/Events"
import { Partners } from "../components/ui/home/Partners"

function Home() {
  return (
    <div className="overflow-hidden">
            < Header />
             <About />
             <Events/>
             <Members />
             <Partners />

             


    </div>
  )
}

export default Home