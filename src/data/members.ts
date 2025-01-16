interface TeamType {
  team: string;
  members: MemberType[];
}

export interface MemberType {
  name: string;
  role: string;
}

export const teamData: TeamType[] = [
  {
    team: "admin",
    members: [
      { name: "Umang Ajmera", role: "President" },
      { name: "Nathan Wu", role: "Vice President" },
      { name: "McEwen Gutierrez", role: "Treasurer" },
    ],
  },
  {
    team: "cooking",
    members: [
      { name: "Cristin Cheung", role: "Cooking Director" },
      { name: "Sarah Toy", role: "Cooking Director" },
      { name: "Ada Zhou", role: "Cooking Coordinator" },
      { name: "Anna Xie", role: "Cooking Coordinator" },
      { name: "Jane Nguyen", role: "Cooking Coordinator" },
      { name: "Jessica Lin", role: "Cooking Coordinator" },
      { name: "Linh Ha", role: "Cooking Coordinator" },
      { name: "Luke Kojima", role: "Cooking Coordinator" },
      { name: "Shriya Dua", role: "Cooking Coordinator" },
      { name: "Takeo Iwase", role: "Cooking Coordinator" },
      { name: "Tracy Ngo", role: "Cooking Coordinator" },
      { name: "Yujia Zeng", role: "Cooking Coordinator" },
      { name: "Yujin Han", role: "Cooking Coordinator" },
    ],
  },
  {
    team: "marketing",
    members: [
      { name: "Prudence Hung", role: "Marketing Director" },
      { name: "Caitlin Serafino", role: "Marketing Director" },
      { name: "Joyce Lau", role: "Social Media Rep" },
      { name: "Katie Chang", role: "Social Media Rep" },
      { name: "Leo Shang", role: "Graphic Designer" },
      { name: "Jessica Wang", role: "Graphic Designer" },
      { name: "Kelvin Zhou", role: "Photographer / Videographer" },
      { name: "Leann Tham", role: "Photographer / Videographer" },
      { name: "Yingdoe Chen", role: "Photographer / Videographer" },
      { name: "Matthew Haryanto", role: "Web Developer" },
      { name: "Alisa", role: "Web Developer" },
      { name: "Jeanne", role: "Content Research and Development Coordinator" },
    ],
  },
  {
    team: "partnership",
    members: [
      { name: "Luna Yu", role: "Partnership + Outreach Director" },
      { name: "Issac Cheung", role: "Partnership + Outreach Director" },
      { name: "Dilpreet", role: "Partnership + Outreach Coordinator" },
      { name: "Zak", role: "Partnership + Outreach Coordinator" },
      { name: "Twarit Arora", role: "Partnership + Outreach Coordinator" },
      { name: "Simona Kolvek", role: "Partnership + Outreach Coordinator" },
      { name: "Zak", role: "Partnership + Outreach Coordinator" },
    ],
  },
  {
    team: "internal",
    members: [
      { name: "Aundrea Henry", role: "Internal Director" },
      { name: "Charmee Shah", role: "Internal Director" },
      { name: "Benjamin Wong", role: "Internal Coordinator" },
      { name: "Daniel Guo", role: "Internal Coordinator" },
      { name: "Sakshi Chawla", role: "Internal Coordinator" },
    ],
  },
];
