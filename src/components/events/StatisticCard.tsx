import { MagicCard } from "../ui/magic-card";
import NumberTicker from "../ui/number-ticker";

type StatisticProps = {
  stat: {
    count: number;
    title: string;
  };
  childrenStyle?: string;
};

function StatisticCard({ stat, childrenStyle }: StatisticProps) {
  return (
    <MagicCard childrenStyle={childrenStyle} className={`bg-secondary/50 w-full border-none rounded-md ${childrenStyle? childrenStyle : 'w-fit'}`}>
      <div className="sm:w-[200px] lg:flex-grow-0 py-6 flex-grow flex flex-col items-center gap-2 bg-gradient-to-b from-[#87028390] to-[#21002040] md:px-[26px] md:py-[25px] rounded-md">
        <div className="flex items-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-geist font-bold">+</div>
          <NumberTicker
            value={stat.count}
            className="text-white text-2xl md:text-3xl lg:text-4xl  font-geist font-bold md:leading-[62px]"
          />
        </div>
        <span className="text-white text-lg md:text-xl font-medium font-geist md:leading-[46px]">
          {stat.title}
        </span>
      </div>
    </MagicCard>
  );
}

export default StatisticCard;
