import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Button } from "../components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { mailSender } from "../lib/mailSender";
import { useToast } from "../hooks/use-toast";
import { pathVariants } from "../consts/variants";

function Contact() {

  const form = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await mailSender(form.current);
    console.log(response)
    toast({
      title: "Contact Us: ",
      description: response.message,
    });
  };

  return (
    <div className=" md:mx-32 my-16 flex flex-col gap-4 justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-end text-xl md:text-3xl"
      >
        <div>Contact</div>
        <div className="text-[#DDDDDD]/75">Us</div>
      </motion.div>
      <div className="border-4 border-secondary/50 flex rounded-lg flex-col lg:flex-row">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-8 md:pl-20 md:p-8 md:pb-12 gap-8 text-sm md:text-base"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-1 text-nowrap"
          >
            <div>Hello there, my name is</div>
            <input
              type="text"
              className="placeholder:underline bg-transparent outline-none"
              placeholder="your name here"
              required
              name="user_name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col border-b border-white/50"
          >
            <div>and i want to ask you</div>
            <textarea
              rows={6}
              placeholder="short project description..."
              className="placeholder:underline bg-transparent outline-none resize-none"
              required
              name="message"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-1"
          >
            <div>You can reach me at</div>
            <input
              type="email"
              className="placeholder:underline bg-transparent outline-none"
              placeholder="your email address"
              required
              name="user_email"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-end"
          >
            <Button className="hover:text-secondary">Send</Button>
          </motion.div>
        </form>
        <div className="relative bg-secondary/50 md:overflow-hidden min-w-full lg:min-w-96">
          <Button
            size={"sm"}
            className="flex gap-1 md:gap-2 bg-white/75 absolute top-12 left-[30%] z-50 hover:bg-white/50 cursor-text"
          >
            <Icon
              className=" text-primary"
              icon="simple-icons:gmail"
              width="20"
              height="20"
            />
            <div className=" text-primary text-xs md:text-base">
              techverse@gmail.com
            </div>
          </Button>
          <NavLink to={"https://maps.app.goo.gl/vWSxijjbFW16ETqb8"}>
            <Button
              size={"sm"}
              className="flex gap-1 md:gap-2 bg-white/75 absolute top-28 left-[40%] z-50 animate-bounce hover:bg-white/50"
            >
              <Icon
                className=" text-primary"
                icon="mingcute:location-fill"
                width="20"
                height="20"
              />
              <div className=" text-primary text-xs md:text-base">
                Univ yahia fares - ouzera
              </div>
            </Button>
          </NavLink>
          <Button
            size={"sm"}
            className="flex gap-1 md:gap-2 bg-white/75 absolute top-44 left-[30%] z-50 hover:bg-white/50 cursor-text"
          >
            <Icon
              className=" text-primary"
              icon="map:university"
              width="20"
              height="20"
            />
            <div className=" text-primary text-sm md:text-base">
              Scientific club
            </div>
          </Button>
          <motion.svg
            viewBox="0 0 479 567"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              "lg:absolute bottom-0 left-[-12%] z-40 w-full lg::w-[28rem]"
            }
          >
            <motion.path
              d="M0 -9.12498C78.9511 71.8706 121.509 178.694 146.053 266.083C166.513 338.94 166.15 368.743 187.876 423.1C235.023 541.052 325.338 622.392 369.109 521.028C390.672 471.095 382.696 407.818 393.009 288.03C402.287 180.273 426.277 32.0679 493.252 -129"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M0.316895 43.1354C74.9505 101.362 116.689 195.554 141.181 271.709C162.046 336.587 165.681 361.774 190.1 414.259C239.715 520.575 319.273 595.333 363.039 507.361C386.682 459.832 384.298 398.814 398.191 279.671C410.149 177.152 435.16 33.9975 499.831 -124.174"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M0.632324 95.3959C70.9541 130.85 112.031 212.49 136.312 277.339C157.715 334.494 165.067 354.892 192.424 405.414C244.017 500.667 313.701 569.078 356.967 493.69C382.889 448.526 385.741 390.002 403.374 271.307C417.814 174.111 444.045 35.9345 506.398 -119.334"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M0.948242 147.653C66.9454 160.324 107.59 229.398 131.444 282.965C153.561 332.633 164.303 348.201 194.7 396.57C248.011 481.392 308.55 543.713 350.897 480.023C379.286 437.324 387.006 381.262 408.558 262.948C425.297 171.055 452.936 37.875 512.973 -114.526"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M1.26367 199.913C62.9418 189.83 103.421 246.11 126.574 288.595C149.635 330.896 163.432 341.815 196.976 387.725C251.781 462.761 303.74 519.269 344.827 466.356C375.859 426.402 388.083 372.472 413.742 254.585C432.606 167.916 461.816 39.812 519.556 -109.703"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M1.58057 252.174C58.9483 219.322 99.5556 262.387 121.708 294.221C145.962 329.078 162.476 335.736 199.253 378.88C255.394 444.743 299.168 495.718 338.758 452.689C372.576 415.932 388.977 363.497 418.927 246.222C439.766 164.622 470.704 41.7524 526.125 -104.874"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M1.89648 304.434C54.9382 248.81 95.9739 277.976 116.84 299.851C142.566 326.819 161.459 330.07 201.529 370.039C258.924 427.289 294.761 473.003 332.689 439.019C369.416 406.109 389.695 354.233 424.112 237.862C446.805 161.128 479.589 43.6894 532.7 -100.055"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M2.21191 356.691C50.9361 278.298 92.5939 292.671 111.965 305.477C139.388 323.6 160.399 324.813 203.799 361.195C262.412 410.327 290.424 451.046 326.613 425.352C366.351 397.138 390.253 344.577 429.29 229.488C453.749 157.384 488.47 45.6155 539.269 -95.2434"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M2.53564 408.951C46.9408 307.79 89.4698 319.484 107.11 311.107C135.963 297.4 159.345 319.973 206.089 352.35C265.919 393.8 286.1 429.765 320.549 411.685C363.339 389.238 390.693 334.465 434.481 221.14C460.646 153.416 497.362 47.5669 545.851 -90.392"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M2.84473 461.212C42.9324 337.278 86.2728 327.539 102.235 316.733C132.03 296.563 158.273 315.534 208.358 343.523C269.457 377.649 281.683 409.074 314.48 398.036C360.307 382.609 391.032 323.357 439.736 213.792C467.031 149.448 506.041 49.5117 552.47 -85.6892"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M3.16846 513.472C38.9255 366.769 83.1383 337.205 96.4428 320.895C128.071 296.866 157.174 311.079 210.621 334.689C273.007 361.771 276.28 396.362 308.084 384.387C357.267 375.895 391.507 312.256 445.01 206.442C473.554 145.478 514.912 51.5014 558.098 -80.9898"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              strokeMiterlimit="10"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}

export default Contact;
