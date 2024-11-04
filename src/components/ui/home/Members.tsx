import { motion } from 'framer-motion';
import useInViewAnimation from '../../../lib/useInViewAnimation';
import { members as allMembers } from '../../../consts/index';
import PersonCard from "../../PersonCard";

export const filteredMembers = allMembers.filter(
  (member) => member.isLeader || member.isFounder || member.isPresident
);

export const membersCards: MemberEntity[] = filteredMembers.map((member) => {
  const baseMember: MemberEntityBase = {
    name: member.name,
    image: member.image.isImage
      ? { isImage: true, image_url: member.image.image_url }
      : { isImage: false, nameShortCut: member.image.nameShortCut },
  };

  if (member.isFounder) {
    return {
      ...baseMember,
      isFounder: true,
      isLeader: false,
      isPresident: false,
      isMember: false,
      departement: null,
    } as Founder;
  }

  if (member.isLeader) {
    return {
      ...baseMember,
      isLeader: true,
      isFounder: false,
      isPresident: false,
      isMember: false,
      departement: member.departement || null,
    } as Leader;
  }

  if (member.isPresident) {
    return {
      ...baseMember,
      isLeader: false,
      isFounder: false,
      isPresident: true,
      isMember: false,
      departement: null,
    } as President;
  }

  // Default case for regular members
  return {
    ...baseMember,
    isLeader: false,
    isFounder: false,
    isPresident: false,
    isMember: true,
    departement: member.departement || null,
  } as Member;
});

function Members() {
  const foundersAndPresident = membersCards.filter(
    (person) => person.isFounder || person.isPresident
  );

  const leaders = membersCards.filter((person) => person.isLeader);

  return (
    <div id='Members' className="min-h-[1500px] mt-16 overflow-hidden">
      <div className="flex flex-col md:items-start items-center mb-14 mt-2">
        <span
          className="text-primary text-xs px-4 py-2 rounded-3xl text-border bg-gradient-to-r from-transparent to-white/5"
          style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
        >
          Members
        </span>
        <motion.div
          className="font-medium text-center md:text-start text-white mt-2 mb-2 text-3xl md:text-[36px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          Let me introduce you to
        </motion.div>
        <motion.p
          style={{ opacity: "0.7" }}
          className="font-normal text-center md:text-start text-gray-50 mt-2 mb-2 text-[20px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
        >
          Our departments including members.
        </motion.p>
      </div>

      <div className="w-full flex flex-col content-center items-center justify-center">
        {/* Display founders and president in a responsive manner */}
        <div className="w-full lg:mb-[100px]  mb-8">
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4  ">
            {foundersAndPresident.map((person, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [ref, controls] = useInViewAnimation({ triggerOnce: true, threshold: 0.1 });

              return (
                <motion.div
                  key={index}
                  // @ts-ignore
                  ref={ref}
                  className="flex-shrink-0 mb-4 flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  // @ts-ignore
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.3 } },
                  }}
                  style={{ flexBasis: 'calc(33.33% - 16px)' }}
                >
                  <PersonCard {...person} />
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* leaders */}
        <div className="w-full flex justify-center items-center">
          {/* Centered responsive columns for leaders */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
            {leaders.map((person, index) => {
              const [ref, controls] = useInViewAnimation({ triggerOnce: true, threshold: 0.1 });

              return (
                <motion.div
                  key={index}
                  // @ts-ignore
                  ref={ref}
                  className="flex-shrink-0 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  // @ts-ignore
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.3 } },
                  }}
                  style={{ flexBasis: 'calc(33.33% - 16px)' }}
                >
                  <PersonCard {...person} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
