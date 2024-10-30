interface EventEntity {
    name: string;
    descriptions: string;
    image: string;
    date: string;
    speakers: Speaker[];
    statistics: Statistics;
    place: string;
    event_shots: string[] | React.RefObject<HTMLImageElement>[] ;
    website?: string
    edition: number
}

type Speaker = {
    name: string, 
    image?: string
}

type Statistics = [
    {participants: string;},
    {workshops?: string;},
    {topics: string,}
]