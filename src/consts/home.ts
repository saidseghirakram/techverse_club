
export interface CardData {
  title: string;
  paragraph: string;
}

// Array of card data
export const cardsData: CardData[] = [
  {
    title: "About the Club",
    paragraph:
      "The Techverse Scientific Club 🎓 is a vibrant community of students and professionals united by a passion for science, research, and innovation. Founded at Yahia Fares Medea, the club fosters curiosity while encouraging participation in knowledge-sharing. Members explore various scientific fields, collaborate on research, and contribute to the club's dynamic environment.",
  },
  {
    title: "Our Activities",
    paragraph:
      "The Techverse Scientific Club offers a variety of activities aimed at fostering both technical expertise and personal development. We believe in a balanced approach to learning, focusing not only on scientific fields but also on essential soft skills. Our key activities include Workshops, Bootcamps, Competitions, and Events & Conferences.",
  },
  {
    title: "Membership & Benefits",
    paragraph:
      "By joining the Techverse Scientific Club, you'll play an active role in organizing and participating in events and workshops, gaining valuable hands-on experience. You'll also have opportunities to network with experts and alumni, expanding your professional connections. Additionally, members can develop leadership skills.",
  },
];

export const statsData = [
  { number: 100, label: 'Members', suffix: '+' },
  { number: 5, label: 'Events', suffix: '+' },
  { number: 1, label: 'Participants', suffix: 'k+' },
];
