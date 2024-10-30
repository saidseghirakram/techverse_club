// Keep the original interfaces and types unchanged
interface Departement {
  name: string;
  description: string;
}

type MemberImage = 
  | { isImage: true; image_url: string }
  | { isImage?: false; nameShortCut: string };

interface MemberEntityBase {
  name: string;
  image: MemberImage;
}

interface Leader extends MemberEntityBase {
  departement: Departement | null;
  isLeader: true;
  isFounder?: false;
  isPresident?: false;
  isMember?: false;
}

interface Founder extends MemberEntityBase {
  isLeader?: false;
  isFounder: true;
  isPresident?: false;
  isMember?: false;
}

interface President extends MemberEntityBase {
  isLeader?: false;
  isFounder?: false;
  isPresident: true;
  isMember?: false;
}

interface Member extends MemberEntityBase {
  departement: Departement | null;
  isLeader?: false;
  isFounder?: false;
  isPresident?: false;
  isMember: true;
  image: { isImage?: false; nameShortCut: string };
}

type MemberEntity = Leader | Founder | President | Member;

// New extended interfaces for additional functionality
interface LeaderExtended extends Leader {
  additionalInfo?: string; // New optional property for leaders
}

interface FounderExtended extends Founder {
  status?: string; // New optional property for founders
}

interface PresidentExtended extends President {
  termDuration?: number; // New optional property for presidents
}

interface MemberExtended extends Member {
  status?: string; // New optional property for members
}

// Union type for extended member entities
type MemberEntityExtended = LeaderExtended | FounderExtended | PresidentExtended | MemberExtended;
