interface EventEntity {
    name: string;
    descriptions: string;
    image: string;
    imageSlider?: string;
    largeImage: string
    date: string;
    speakers: SpeakerEntity [];
    statistics: Statistics;
    place: string;
    event_shots: string[] | React.RefObject<HTMLImageElement>[] | null ;
    website?: string
    edition: number
}

// type Speaker = {
//     name: string, 
//     image?: string
// }

type Statistics = [
    {participants: string;},
    {workshops?: string;},
    {topics: string,}
]