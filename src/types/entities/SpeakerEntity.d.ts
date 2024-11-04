type SpeakerImage = 
  { image: { isImage: true; image_url: string } }
  | { image: { isImage?: false; nameShortCut: string } };

interface Speaker {
  name: string;
  isSpeaker: true;
}

type SpeakerEntity = Speaker & SpeakerImage;
