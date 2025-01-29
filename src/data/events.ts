interface EventType {
  title: string;
  imagePath: string;
  date: string;
  month: string;
  location: string;
  time: string;
  description: string;
  registerLink: string;
  isOpen: boolean;
}

export const upcomingEvents: EventType[] = [
  {
    title: "Workshop TBA",
    imagePath: "/placeholder.svg",
    date: "31",
    month: "JAN",
    location: "FNH 130",
    time: "January 31st, 2025 : 5-8pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    registerLink: "",
    isOpen: false,
  },
  {
    title: "Workshop TBA",
    imagePath: "/placeholder.svg",
    date: "14",
    month: "FEB",
    location: "Arbutus Collegium (6488 University Blvd)",
    time: "February 14th, 2025 : 7-9:30pm",
    description:
      "Learn how to make delicious pizzas from scratch and decorate chocolate strawberries for a perfect Valentine's Day treat!",
    registerLink: "",
    isOpen: false,
  },
  {
    title: "Workshop TBA",
    imagePath: "/placeholder.svg",
    date: "28",
    month: "FEB",
    location: "FNH 130",
    time: "February 28th, 2025 : 5-8pm",
    description:
      "Stay tuned for details about this exciting workshop! More information will be announced soon.",
    registerLink: "",
    isOpen: false,
  },
];
