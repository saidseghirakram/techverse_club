import { useParams } from "react-router-dom";
import { departements, members } from "../consts";
import PersonCard from "../components/PersonCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion, Variants } from "framer-motion";

function Department() {
  const { department } = useParams();
  let selectedDepartment: Departement | undefined;
  const rectVariants: Variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  // Animation variants for the path fill
  const pathVariants: Variants = {
    hidden: { fill: "rgba(135, 2, 132, 0)" },
    visible: {
      fill: "rgba(135, 2, 132, 1)",
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  if (department) {
    selectedDepartment = departements.find(
      (dep) => dep.name.toLowerCase() === department?.toLowerCase()
    );
    if (!selectedDepartment) {
      return (
        <div className="mx-16 py-8">
          No department exist with current pathname
        </div>
      );
    }
  } else {
    return (
      <div className="mx-16 py-8">
        No department exist with current pathname
      </div>
    );
  }

  const membersInDepartment: MemberEntity[] = members.filter(
    (member) =>
      (member as Member).departement?.name === selectedDepartment?.name
  );
  const leader = membersInDepartment.find((member) => member.isLeader)?.name;
  const leaderInfos = membersInDepartment.find((member) => member.isLeader);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="my-16 flex flex-col items-center gap-16">
      <motion.svg
        width={691}
        height={417}
        viewBox="0 0 890 417"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        className={"absolute left-0 z-0 top-44 hidden md:block"}
      >
        <defs>
          <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#870284", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#870284", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <motion.rect
          x={142.5}
          y={273.5}
          width={143}
          height={143}
          transform="rotate(90 142.5 273.5)"
          stroke="url(#grad1)"
          strokeWidth={2}
          variants={rectVariants}
          initial="hidden"
          animate="visible"
        />
        <mask id="path-2-inside-1_178_456" fill="white">
          <path d="M143 129V273H-1V129H143Z" />
        </mask>
        <path
          d="M143 129H143.4V128H143V129ZM-1 129V128H-2V129H-1ZM142.6 129V273H143.4V129H142.6ZM0 273V129H-2V273H0ZM-1 130H143V128H-1V130Z"
          fill="#870284"
          mask="url(#path-2-inside-1_178_456)"
          stroke="url(#grad1)"
        />
        <mask id="path-4-inside-2_178_456" fill="white">
          <path d="M766 272.743V416.743H142V272.743L766 272.743Z" />
        </mask>
        <path
          d="M766 272.743H766.4V272.443H766V272.743ZM766 416.743V417.443H766.4V416.743H766ZM765.6 272.743V416.743H766.4V272.743H765.6ZM766 416.043H142V417.443H766V416.043ZM142 273.043L766 273.043V272.443L142 272.443V273.043Z"
          fill="#870284"
          mask="url(#path-4-inside-2_178_456)"
          stroke="url(#grad1)"
        />
      </motion.svg>

      <motion.svg
        width={691}
        height={417}
        viewBox="0 0 891 417"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        className={"absolute top-44 right-0 z-0 hidden md:block"}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="0%">
            {/* Start with full opacity on the right */}
            <stop
              offset="0%"
              style={{ stopColor: "#870284", stopOpacity: 0.2 }}
            />
            {/* Gradually reduce opacity to 0 on the left */}
            <stop
              offset="100%"
              style={{ stopColor: "#870284", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <motion.rect
          x={0.5}
          y={0.5}
          width={143}
          height={143}
          transform="matrix(0 1 1 0 747 273)"
          stroke="url(#grad1)"
          strokeWidth={2}
          variants={rectVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Mask and Path */}
        <mask id="path-2-inside-1_810_1262" fill="white">
          <path d="M747 129V273H891V129H747Z" />
        </mask>
        <motion.path
          d="M747 129H746.6V128H747V129ZM891 129V128H892V129H891ZM747.4 129V273H746.6V129H747.4ZM890 273V129H892V273H890ZM891 130H747V128H891V130Z"
          fill="#870284"
          mask="url(#path-2-inside-1_810_1262)"
          stroke="url(#grad1)"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <mask id="path-4-inside-2_810_1262" fill="white">
          <path d="M124 272.743L124 416.743H748V272.743L124 272.743Z" />
        </mask>
        <motion.path
          d="M124 272.743H123.6V272.443H124V272.743ZM124 416.743V417.443H123.6V416.743H124ZM124.4 272.743L124.4 416.743H123.6L123.6 272.743H124.4ZM124 416.043H748V417.443H124V416.043ZM748 273.043L124 273.043V272.443L748 272.443V273.043Z"
          fill="#870284"
          mask="url(#path-4-inside-2_810_1262)"
          stroke="url(#grad1)"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.rect
          x={0.5}
          y={0.5}
          width={143}
          height={143}
          transform="matrix(0 1 1 0 747 273)"
          stroke="url(#grad1)"
          strokeWidth={2}
          variants={rectVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>

      {selectedDepartment && (
        <motion.div
          className="flex flex-col items-center md:mx-32 gap-4 z-50"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="md:text-2xl text-xl font-semibold font-geist text-center">
            {selectedDepartment?.name} Department Members
          </div>
          <div className="font-geistMono opacity-75 text-center text-sm font-normal">
            {selectedDepartment?.description}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 bg-primary shadow-2xl shadow-primary md:px-32"
      >
        {/* @ts-ignore */}
        <PersonCard
          name={leader as string}
          departement={{
            name: selectedDepartment?.name as string,
            description: selectedDepartment?.description as string,
          }}
          isLeader={true}
          // @ts-ignore
          image={
            // @ts-ignore
            leaderInfos.image.isImage
              ? {
                  isImage: true,
                  // @ts-ignore
                  image_url: leaderInfos.image.image_url,
                }
              : // @ts-ignore
                { nameShortCut: leaderInfos?.image.nameShortCut }
          }
        />
      </motion.div>

      <div className="md:w-2/3 w-1/2 z-10">
        <Carousel className="w-full">
          <CarouselContent>
            {membersInDepartment.map((member, index) => {
              if (member.isMember) {
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 lg:basis-1/4"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* @ts-ignore */}
                      <PersonCard
                        name={member.name}
                        isMember={true}
                        departement={(member as Member).departement}
                        image={
                          member.image.isImage
                            ? {
                                isImage: true,
                                // @ts-ignore
                                image_url: member.image.image_url,
                              }
                                // @ts-ignore
                            : { 
                              // @ts-ignore
                              nameShortCut: member.image.nameShortCut 
                            }
                        }
                      />
                    </motion.div>
                  </CarouselItem>
                );
              }
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Department;
