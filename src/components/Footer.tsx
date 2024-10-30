import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import logo from "@/assets/images/logo.png";
import discord from "@/assets/images/discord.png";
import instagram from "@/assets/images/instagram.png";
import linkedin from "@/assets/images/linkedin.png";
import facebook from "@/assets/images/facebook.png";
import { NavLink } from "react-router-dom";
import { handleScroll } from "../lib/handleScroll";
function Footer() {
  return (
    <div className="border-t border-white/30 px-8 py-8 lg:py-16">
      <div className="flex flex-wrap justify-start items-start gap-8 md:gap-4 md:justify-between">
        <div className="flex flex-col w-full lg:w-fit items-center gap-4">
          <div className="text-nowrap text-xl md:text-2xl text-bold">
            Made with 💜 by Techverse
          </div>
          <div>
            <div className="flex items-center gap-4">
              <NavLink
                to="https://www.instagram.com/techverse.club/"
                className={"hover:opacity-80"}
              >
                <img className="w-10 h-10" src={instagram} alt="" />{" "}
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/company/techverse-club/mycompany/"
                className={"hover:opacity-80"}
              >
                <img className="w-10 h-10" src={linkedin} alt="" />
              </NavLink>
              <NavLink
                to="https://discord.gg/J7vp3xRF"
                className={"hover:opacity-80"}
              >
                <img className="w-10 h-10" src={discord} alt="" />{" "}
              </NavLink>
              <NavLink
                to="https://www.facebook.com/profile.php?id=61553627314456"
                className={"hover:opacity-80"}
              >
                <img className="w-10 h-10" src={facebook} alt="" />{" "}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold">Services</div>
          <div className="font-geistMono flex flex-col gap-2 font-semibold text-sm">
            <NavLink to={"contact-us"}>Design</NavLink>
            <NavLink to={"contact-us"}>Development</NavLink>
            <NavLink to={"contact-us"}>Content Creation</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold">Techverse Info</div>
          <div className="font-geistMono w-36 font-light text-sm">
            Techverse is a scientific club in medea founded in 2023 by some
            passionate IT student
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold">Contact</div>
          <div className=" flex flex-col gap-2  text-sm">
            <div className="flex flex-col ">
              <div className="font-semibold">Email :</div>
              <div className="font-semibold text-white/75">techverse@gmail.com</div>
            </div>
            <div className="flex flex-col ">
              <div className="font-semibold">Address :</div>
              <div className="font-semibold text-white/75 font-geistMono">
                Yahia Fares, Medea, ALG
              </div>
            </div>
            <NavLink to="contact-us">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-primary font-semibold items-center space-x-2"
              >
                <div className="flex items-center gap-2">
                  <Icon icon="fluent-mdl2:contact" width="16" height="16" />
                  <span>Contact us</span>
                </div>
              </HoverBorderGradient>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between flex-col md:flex-row gap-8 mt-16 md:mt-0 md:gap-0">
        <img className="md:w-2/5 w-full " src={logo} alt="" />
        <div className="flex items-end flex-col gap-2">
          <Icon
            onClick={() => handleScroll("#Home")}
            className="bg-white text-primary p-2 cursor-pointer hover:scale-105 transition-all duration-200 w-8 h-8"
            icon="teenyicons:up-outline"
          />
          <div className="md:text-xl text-xs font-geistMono text-nowrap">
            © 2023 Techverse.All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
