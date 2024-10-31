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
    <div id='Members' className="min-h-[1500px] my-10 overflow-hidden">
      <span
        className="font-bold px-7 py-3 rounded-full"
        style={{ boxShadow: "1px -1px 1px 1px #FFFFFF40 " }}
      >
        Members
      </span>
      <div className="font-medium text-white mt-6 mb-2 text-[36px]">
        Let me introduce you to
      </div>
      <p
        style={{ opacity: "0.7" }}
        className="font-normal text-gray-50 mt-6 mb-16 text-[20px]"
      >
        Our events with their inspiring details.
      </p>

      <div className="w-full flex flex-col content-center items-center justify-center">
        {/* Display founders and president in a responsive manner */}
        <div className="w-full lg:mb-[100px]  mb-8">
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4  ">
            {foundersAndPresident.map((person, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mb-8 flex flex-col items-center" 
                style={{ flexBasis: 'calc(33.33% - 16px)' }} >
                <PersonCard {...person} />
                {person.isFounder && (
                  <div className="h-2 w-2 bg-red-500 mt-2" /> 
                )}
                {person.isPresident && (
                  <div className="h-2 w-2 bg-green-500 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* leaders */}
        <div className="w-full flex justify-center items-center">
          {/* Centered responsive columns for leaders */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
            {leaders.map((person, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mb-8"
                style={{ flexBasis: 'calc(33.33% - 16px)' }} 
              >
                <PersonCard {...person} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
