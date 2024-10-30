import Spline from '@splinetool/react-spline';
import Images from '../../../consts/images';


export function Header() {
  return (

    <div className="mb-10 min-h-[700px] w-full gap-10  px-10 flex flex-col justify-center items-center">
      
      <div className=" w-full sm:w-[100%] absolute top-0 left-0 h-[750px] z-0">
      <Spline scene="https://prod.spline.design/Y8rLgqzaAGtOeN-F/scene.splinecode" />
      </div>

          <h1         
          className="z-10 font-display text-center text-xl font-bold tracking-[-0.02em]
           text-white  md:text-7xl md:leading-[5rem]"
          >Techverse club</h1>
          <img src={Images.logo} alt="logo"  className='z-10' />
       {/*  <VelocityScroll
        text="Coding Minds Creating Tomorrow"
        default_velocity={2}
        className="font-display text-center text-xl font-bold tracking-[-0.02em] text-black drop-shadow-sm
         dark:text-white md:text-6xl md:leading-[5rem]"
      /> */}
    </div>
  );
}
