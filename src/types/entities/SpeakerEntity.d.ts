type MemberImage = 
  | { isImage: true; image: string }
  | { isImage?: false; nameShortCut: string };

interface SpeakerEntity extends MemberImage {
    name: string;
    isSpeaker: true
}