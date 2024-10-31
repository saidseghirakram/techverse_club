import imageSrc from "../consts/images";

export const statistics = {
  members: 100,
  events: 5,
  participants: "1k",
};



export const events: EventEntity[] = [
  {
    name: "DEVFEST",
    descriptions:
      "It is an annual event presented by the GDG (Google Developers Group), where it stands as one of the most significant demonstrations the club presents every year. It consists of valuable lectures given by distinguished professors, doctors, and experts in various technical, artistic, and scientific fields, delivered interactively with those interested and the attendees in general, for three consecutive days. The club coordinated with the Techverse club, where the event served as the inaugural ceremony for the club, marking its entry into the world of university clubs and the beginning of its activities. Last year's event witnessed 8 valuable lectures presented by 8 distinguished doctors, from December 24-26, 2024.",
    image: imageSrc.events.devfest,
    imageSlider: imageSrc.events.slider.devfestHoriz,
    largeImage: 'devfest/devfest.png',
    date: "24th-26th December, 2024",
    speakers: [
      { name: "Mr. Abdelbasset Zerrouki" },
      { name: "Mr. Mohamed Mouzaoui" },
      { name: "Mr. Anas Yahia" },
      { name: "Mr. Ahmed Bachir Cherif" },
      { name: "Mr. Raouf Rahish" },
      { name: "Mr. Nabil Hadj Ahmed" },
      { name: "Mr. Ayoub Manzou" },
      { name: "Mr. Abderrahim Abdellaoui" },
      { name: "Mr. Zineddine Boudegna" },
    ],
    statistics: [
      { participants: "700" },
      {},
      { topics: "9" },
    ],
    place: "University Medea - theatre",
    event_shots: [
      "devfest/DSC05520.JPG",
      "devfest/2023_12_26_11_00_IMG_4916.JPG",
      "devfest/DSC05524.JPG",
      "devfest/DSC05585.JPG",
      "devfest/DSC05566.JPG",
      "devfest/2023_12_26_16_49_IMG_5021.JPG",
    ],
    website: "https://devfest23medea.vercel.app/",
    edition: 2,
  },
  {
    name: "101BOOTCAMP",
    descriptions:
      "The event consists of a series of workshops in the field of technology, aimed at students and individuals interested in learning more about this field, including 4 technical courses.",
    image: imageSrc.events.bootcamp,
    imageSlider: imageSrc.events.slider.bootcampHoriz,
    largeImage: '101-bootcamp/101-bootcamp.jpg',
    date: "20th April, 2024",
    speakers: [
      { name: "Mr. Chikh Imade-eddine" },
      { name: "Mr. Titraoui Akram" },
      { name: "Mr. Takdenti Amine" },
      { name: "Mr. Abdeldjalil Dahmani" },
    ],
    statistics: [
      { participants: "150" },
      { workshops: "4" },
      { topics: "4" },
    ],
    place: "University Medea - wezera",
    event_shots: [
      "101-bootcamp/jeo.webp",
      "101-bootcamp/20240225_154126.jpg",
      "101-bootcamp/_MG_0277.jpg",
      "101-bootcamp/_MG_0308.jpg",
      "101-bootcamp/IMG_0310.jpg",
      "101-bootcamp/AGC_20240225_152344013.jpg",
    ],
    website: "https://bootcamp-101.vercel.app/",
    edition: 1,
  },
  {
    name: "TID: Techverse Intelligence Day",
    descriptions:
      "It is a technological event presented by OWASP Algiers in collaboration with Techverse Club. Last year, it focused on cyber security and included a series of workshops and lectures for enthusiasts in this field. The event aims to enrich knowledge in the technical aspect and the goals of the field.",
    image: imageSrc.events.tid,
    imageSlider: imageSrc.events.slider.tidHoriz,
    largeImage:"TID/Untitled-1 1.png",
    date: "25th February to 5th March, 2024",
    speakers: [
      { name: "Mr. Amine Taher EL HOUARI" },
      { name: "Mrs. Meriam Maroua MAHDI" },
      { name: "Mrs. Yasmine AZZAZ" },
      { name: "Mr. Mahdi Nacer KERKAR" },
      { name: "Mrs. Wissam BOUATTOU" },
      { name: "Mr. Hichem BELGUENDOUZ" },
    ],
    statistics: [
      { participants: "100" },
      {},
      { topics: "6" },
    ],
    place: "University Medea - wezera",
    event_shots: [
      "TID/IMG_0057.JPG",
      "TID/IMG_0074.JPG",
      "TID/IMG_0093.JPG",
      "TID/IMG_0098.JPG",
      "TID/IMG_0167.JPG",
      "TID/IMG_0159.JPG",
    ],
    edition: 1,
  },
  {
    name: "IMPACT Event",
    descriptions:
      "It is an online event that includes many topics with the best speakers in various fields.",
    image: imageSrc.events.impact,
    imageSlider: imageSrc.events.slider.impactHoriz,
    largeImage:'impact/impact.png',
    date: "1st March, 2024",
    speakers: [
      { name: "Mrs. Imane Fehis" },
      { name: "Mr. Houssem Benmahieddine" },
      { name: "Mr. Zakaria Houam" },
    ],
    statistics: [
      { participants: "500" },
      {},
      { topics: "3" },
    ],
    place: "Online",
    event_shots: null,
    edition: 1,
  },
];



export const departements: Departement[] = [
  {
    name: "Design",
    description:
      "The Design department includes graphic designers crafting visual content, UI/UX designers ensuring intuitive and appealing interfaces, and branding specialists maintaining a consistent brand identity across all platforms.",
  },
  {
    name: "IT",
    description:
      "The IT department includes developers creating and maintaining platforms, UI/UX designers ensuring a user-friendly experience, and educators training members on new technologies.",
  },
  {
    name: "Communication",
    description:
      "The Communication department manages social media, public relations, and replies to public messages, ensuring consistent messaging, engaging content, and fostering connections with the audience across various platforms.",
  },
  {
    name: "Logistics",
    description:
      "The Logistics department manages equipment setup, and on-site coordination. This team handles scheduling, vendor relations, and purchasing event requirements, ensuring all necessary resources are in place for successful events. Through meticulous planning and efficient management, they deliver seamless experiences.",
  },
  {
    name: "External",
    description:
      "The External Relations department secures sponsors, partners, and speakers for events, cultivating relationships with industry leaders and organizations to enhance event quality and reach. This team negotiates sponsorship deals, identifies and invites relevant speakers, and maintains a network of contacts to support successful event planning and execution.",
  },
  {
    name: "Technique",
    description:
      "The Technical department manages audio-visual equipment and technology for events. This team configures microphones, data projectors, and computers, ensuring optimal setup and functionality. They also handle sound systems, lighting, and other technical aspects, working closely with speakers and presenters. The department is responsible for troubleshooting technical issues and providing support throughout events to guarantee smooth operations.",
  },
  {
    name: "Delegation",
    description:
      "The Delegation department oversees event organization, focusing on sales-related aspects and attendee management. This team handles event decorations, creating engaging environments for attendees. They manage the check-in and check-out processes, ensuring a smooth flow of participants.",
  },
  {
    name: "Human Resources",
    description:
      "The Human Resources manager recruits and manages student volunteers. They handle club member applications, organize orientation programs, and maintain records of student participation in various club activities.",
  },
  {
    name: "Multimedia",
    description:
      "The Multimedia Lead department creates and curates audio-visual content for events, including videos, animations, and graphics. This team collaborates with designers and IT specialists to enhance event presentations and engage audiences through innovative multimedia solutions."
  }
  
];

export const members: MemberEntity[] = [
  // Founders...
  {
    name: "Akram Said Seghir",
    isFounder: true,
    image: {
      isImage: false,
      nameShortCut: "AK",
    },
  },
  {
    name: "Islam Hamadou",
    isPresident: true,
    image: {
      isImage: false,
      nameShortCut: "IH",
    },
  },
  // Leaders...
  {
    name: "Akram Titraoui",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "AT",
    },
    departement: departements[0],
  },
  {
    name: "Kadik Salah Eddine",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "KS",
    },
    departement: departements[1],
  },
  {
    name: "Selma Tassist",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "ST",
    },
    departement: departements[2],
  },
  {
    name: "Moncef Ferhi",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "MF",
    },
    departement: departements[3],
  },

  {
    name: "Feth Ennour Bachene",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "FB",
    },
    departement: departements[4],
  },
  {
    name: "Yacine Medjeber",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "YM",
    },
    departement: departements[5],
  },
  {
    name: "Meriem Hasnaoui",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "MH",
    },
    departement: departements[6],
  },
  {
    name: "Ikram Melhout",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "IK",
    },
    departement: departements[7],
  },
  {
    name: "benaissa mohamed yahia",
    isLeader: true,
    image: {
      isImage: false,
      nameShortCut: "BY",
    },
    departement: departements[8],
  },
  // Design department members
  {
    name: "Abdelbasset Hachelaf",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "NT",
    },
    departement: departements[0],
  },
  {
    name: "Mohamed Kamel Mazari",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "KM",
    },
    departement: departements[0],
  },
  {
    name: "Mouadh Haceini",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[0],
  },
  {
    name: "Toubal Mouadh",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "KM",
    },
    departement: departements[0],
  },
  {
    name: "louai zerrouki",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "NT",
    },
    departement: departements[0],
  },

  // IT department members
  {
    name: "Abderaouf Ganif",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "YB",
    },
    departement: departements[1],
  },
  {
    name: "Abdeldjalil Dahmani",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LH",
    },
    departement: departements[1],
  },
  {
    name: "Alaa Eddine Bouziani",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Amine Takdenti",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Amine Amellal",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Azeddine Aioula",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Imad Chikh",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Lotfi Hallas",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Mohamed Younus Belhadj",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Ossama Fergani",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Ouzir Hanane",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Zin Eddine Ougrid",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },
  {
    name: "Benhadjer Mohamed",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "OB",
    },
    departement: departements[1],
  },

  // Communication department members
  {
    name: "Ahlam Cherchali",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[2],
  },
  {
    name: "Amaouche Sonia",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "RB",
    },
    departement: departements[2],
  },
  {
    name: "Amel Hamou",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Amel Oulache",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Asmaa Aici",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Hamdani Aya",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Houda Kourdali",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Jakboub Abdallah",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Kawther Merabet",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Khaled Benkali",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "guernina khouloud",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Kinda boulahlib",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Mohamed Islam Takdenti",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Racha Brn",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Rafik Zeroual",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Sabra Rbt",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Houda Boudjebbour",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },
  {
    name: "Ikram Sellam",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FZ",
    },
    departement: departements[2],
  },

  // Logistics department members
  {
    name: "Achraf Benhadjer",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[3],
  },
  {
    name: "Addala Mohamed",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LM",
    },
    departement: departements[3],
  },
  {
    name: "Alyaa Benhafri",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SD",
    },
    departement: departements[3],
  },
  {
    name: "Anis Benykhlef",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SD",
    },
    departement: departements[3],
  },
  {
    name: "Khadidja Kosseir",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SD",
    },
    departement: departements[3],
  },
  {
    name: "Zitouni Sendous",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SD",
    },
    departement: departements[3],
  },
  {
    name: "Zitouni Meriem El Batoul",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SD",
    },
    departement: departements[3],
  },

  // External department members
  {
    name: "Abdo Goudjil",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "YB",
    },
    departement: departements[4],
  },
  {
    name: "Akram",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "ML",
    },
    departement: departements[4],
  },
  {
    name: "Amine Amellal",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "IB",
    },
    departement: departements[4],
  },

  // Technique department members
  {
    name: "Hafri Fatima Zohra",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "RM",
    },
    departement: departements[5],
  },
  {
    name: "Houssam",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[5],
  },
  {
    name: "Noufel Bensalem",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[5],
  },
  {
    name: "Rafika Boulardjam",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[5],
  },
  {
    name: "Roumaissa Guellabi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "AB",
    },
    departement: departements[5],
  },
  {
    name: "Yacine Boudiaf",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FK",
    },
    departement: departements[5],
  },
  {
    name: "Mohamed Islam Hadjer Braham",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "FK",
    },
    departement: departements[5],
  },

  // Delegation department members
  {
    name: "Hafidha Bouabdellah",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "LB",
    },
    departement: departements[6],
  },
  {
    name: "Houssem Harzelli",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "TH",
    },
    departement: departements[6],
  },
  {
    name: "Ismail Sdr",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Nada Sidhoum",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "badri nouha",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Nour el houda Djellal",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Safaa Tchouketch",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Safia Chergui",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Takdenti Douaa",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Taki",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Yous Meriem",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "Yousra Daami",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "sonia",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },
  {
    name: "maroua saili",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[6],
  },

  // multimedia
  {
    name: "Abir Bensalem",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "Anis Photographe",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "Hamza Chabira",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "Imen Zouaoucha",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "Imess Kanza",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "Insaf Atchi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "Mouna Chergui",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
  {
    name: "assala benkortbi",
    isMember: true,
    image: {
      isImage: false,
      nameShortCut: "SM",
    },
    departement: departements[8],
  },
];


export const club_informations = {
  email: "techverse@gmail.com",
  addresse: "ouzera",
  social_medea_links: [
    {
      discord: "Tech",
    },
    {
      instagram: "Tech",
    },
    {
      facebook: "Tech",
    },
    {
      linkedin: "Tech",
    },
  ],
};

export const partners = [
  {
    name: "gdg",
    image: "im.png",
  },
];
