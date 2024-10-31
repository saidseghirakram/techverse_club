import { cn } from "../../../lib/utils";
import Marquee from "../../../components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      id="Partners"
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
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Partners() {
  return (
   <div className="mt-24 overflow-hidden relative">
    <div className="mb-4">
    <span
        className="font-bold px-7 py-3 rounded-full"
        style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
      >
        Partners
      </span>
      <div className="font-medium text-white mt-6 mb-2 text-[36px]">
      These achievements
      </div>
      <p
        style={{ opacity: "0.7" }}
        className="font-normal text-gray-50 mt-6 mb-2 text-[20px]"
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
