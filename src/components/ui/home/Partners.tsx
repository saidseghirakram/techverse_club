import { cn } from "../../../lib/utils";
import Marquee from "../../../components/ui/marquee";

const reviews = [
  {
    name: "GDG_MEDEA",
    username: "@GDG_MEDEA",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "OWASP_ALGIERS",
    username: "@OWASP_ALGIERS",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "UNIV_MEDEA",
    username: "@UNIV_MEDEA",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "almaahed.international",
    username: "@almaahed.international",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "NASS_ELKHIR",
    username: "@NASS_ELKHIR",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "GDG_MEDEA",
    username: "@GDG_MEDEA",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "DATACAMP",
    username: "@DATACAMP",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
}: {
  img: string;
  name: string;
  username: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
    </figure>
  );
};

export function Partners() {
  return (
   <div className="mt-24 overflow-hidden relative" id="Partners">
    <div className="flex flex-col md:items-start items-center mb-14 mt-2">
        <span
          className="text-primary text-xs px-4 py-2 rounded-3xl text-border bg-gradient-to-r from-transparent to-white/5"
          style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
        >
          Partners
        </span>
        <div className="font-medium text-center md:text-start text-white mt-2 mb-2 text-3xl md:text-[36px]">
          These achievements
        </div>
        <p
          style={{ opacity: "0.7" }}
          className="font-normal text-center md:text-start text-gray-50 mt-2 mb-2 text-[20px]"
        >
          wouldn’t have been possible without our sponsors
        </p>
      </div>
     <div className=" flex h-[500px] w-full flex-col items-center justify-center  rounded-lg  ">
     
     <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="h-[250px] pointer-events-none absolute bottom-[130px] left-0 w-1/12 bg-gradient-to-r from-[rgba(135,2,132,0.7)] dark:from-background"></div>
      <div className="h-[250px] pointer-events-none absolute bottom-[130px] right-0 w-1/12 bg-gradient-to-l from-[rgba(135,2,132,0.7)] dark:from-background"></div>
      </div>
   </div>
  );
}