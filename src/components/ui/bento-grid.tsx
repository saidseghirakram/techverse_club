import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { handleClick } from "../../lib/scrollTop";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  isActive,
  textSize,
}: {
  name: string;
  className?: string;
  background: ReactNode;
  description?: string;
  href: string | undefined;
  cta: string;
  isActive?: boolean;
  textSize: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      className
    )}
  >
    <div>{background}</div>
    <div
      className={`pointer-events-none z-10 flex transform-gpu flex-col items-center gap-1 py-1 px-2 transition-all duration-300 ${
        isActive ? "group-hover:-translate-y-10" : ""
      }`}
    >
      <div
        className={`font-geist font-semibold ${textSize} text-center w-full`}
      >
        {name}
      </div>
      <div className={`font-geist font-normal ${textSize}`}>{description}</div>
    </div>
    {isActive && (
      <div
        className={cn(
          "pointer-events-none mb-2 absolute right-0 bottom-0 flex w-full translate-y-10 transform-gpu flex-row justify-center items-center opacity-0 transition-all duration-300 group-focus:translate-y-0 group-focus:opacity-100  lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto"
        >
          <NavLink to={href || "#"}>
            <a onClick={handleClick} className="flex items-center">
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </NavLink>
        </Button>
      </div>
    )}

    {isActive && (
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-focus:bg-black/[.1] lg:group-hover:bg-black/[.1]" />
    )}
  </div>
);

export { BentoCard, BentoGrid };
