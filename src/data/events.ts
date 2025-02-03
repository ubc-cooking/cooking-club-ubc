interface EventType {
  title: string;
  imagePath: string;
  date: string;
  month: string;
  location: string;
  time: string;
  registerLink: string;
  isOpen: boolean;
  isFull: boolean;
}

export const upcomingEvents: EventType[] = [
  // {
  //   title: "Workshop TBA",
  //   imagePath: "/home/events/chickenpiccata.webp",
  //   date: "31",
  //   month: "JAN",
  //   location: "FNH 130",
  //   time: "January 31st, 2025 : 5-8pm",
  //   registerLink: "",
  //   isOpen: false,
  // },
  {
    title: "Workshop TBA",
    imagePath: "/graphics/tomato.svg",
    date: "14",
    month: "FEB",
    location: "Arbutus Collegium (6488 University Blvd)",
    time: "February 14th, 2025 : 5.30-8:30pm",
    registerLink: "",
    isOpen: false,
    isFull: false,
  },
  {
    title: "Workshop TBA",
    imagePath: "/graphics/taco.svg",
    date: "28",
    month: "FEB",
    location: "FNH 130",
    time: "February 28th, 2025 : 7.30-9.30pm",
    registerLink: "",
    isOpen: false,
    isFull: false,
  },
];
