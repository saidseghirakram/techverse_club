import { useEffect, useState } from "react";
import { BentoCard } from "./ui/bento-grid";
import { MagicCard } from "./ui/magic-card";
import { useNavigate } from "react-router-dom";

function PersonCard(person: MemberEntity | SpeakerEntity) {
  function getImageContent(image: MemberImage): React.ReactNode {
    if (image.isImage) {
      return image.image_url;
    } else {
      return image.nameShortCut;
    }
  }

  let backgroundSizeClass = "";
  if ((person as SpeakerEntity).isSpeaker) {
    backgroundSizeClass = "w-32 lg:w-28 m-3 h-36 lg:h-32 text-2xl"; // medium size for speakers
  } else if ((person as MemberEntity).isMember) {
    backgroundSizeClass = "w-20 lg:w-24 m-2 h-28 lg:h-28 text-2xl"; // small size for regular members
  } else {
    backgroundSizeClass = "w-28 lg:w-32 h-32 lg:h-36 m-4 text-3xl";
  }

  let containerSizeClass = "";
  if ((person as SpeakerEntity).isSpeaker) {
    containerSizeClass = "w-40 lg:w-40 lg:h-full justify-start py-0"; // medium size for speakers
  } else if ((person as MemberEntity).isMember) {
    containerSizeClass = "lg:w-32"; // small size for regular members
  } else {
    containerSizeClass = "";
  }

  let textSize = "text-base lg:text-lg";
  if ((person as SpeakerEntity).isSpeaker) {
    textSize = "text-sm lg:text-base"; // medium size for speakers
  } else if ((person as MemberEntity).isMember) {
    textSize = "text-xs"; // small size for regular members
  } else {
    textSize = "text-base lg:text-lg";
  }

  const router = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size to handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = () => {
    if (isSmallScreen && (person as MemberEntity).isLeader) {
      console.log(isSmallScreen);
      router(`/department-overview/${(person as Leader).departement?.name}`);
    }
  };

  const background = (
    <div className="flex flex-col items-center">
      <div
        className={`font-poppins font-normal ${backgroundSizeClass} flex text-secondary justify-center items-center border-2  border-secondary`}
      >
        {getImageContent((person as MemberEntity).image)}
      </div>
    </div>
  );

  let description = null;
  if ((person as MemberEntity).isFounder) {
    description = "Club Founder";
  } else if ((person as MemberEntity).isLeader) {
    description = `${(person as Leader).departement?.name} Lead`;
  } else if ((person as MemberEntity).isPresident) {
    description = "Club President";
  } else if ((person as MemberEntity).isMember) {
    description = `${(person as Member).departement?.name} Member`
  }
  return (
    <div
      onClick={handleCardClick}
    >
    <MagicCard
      className={`bg-secondary/50 border-none rounded-md w-fit`}
    >
      <BentoCard
        name={person.name}
        {...(description && { description })}
        cta="Learn more"
        href={
          (person as MemberEntity).isLeader
            ? `/department-overview/${(person as Leader).departement?.name}`
            : undefined
        }
        background={background}
        className={`bg-transparent border-none shadow-none p-2 w-[220px] ${(person as MemberEntity).isLeader || (person as MemberEntity).isPresident || (person as MemberEntity).isFounder  ? 'h-[280px]' : 'h-[220px]'}  ${containerSizeClass}`}
        isActive={
          !!description &&
          description !== "Club Founder" &&
          description !== "Club President" &&
          !(person as MemberEntity).isMember
        }
        textSize={textSize}
      />
    </MagicCard>
    </div>
  );
}

export default PersonCard;
