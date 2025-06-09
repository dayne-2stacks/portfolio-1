export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  company: string;
  className: string;
  thumbnail: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Volunteer Researcher",
    desc: "Developed fingerprint pore detection and matching algorithms using graph KNN and machine learning.",
    company: "USF College of Engineering",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Manager",
    desc: "Spearheaded website revamp and managed a database of 9,000+ users.",
    company: "Patel College of Global Sustainability",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "IT Consultant",
    desc: "Migrated an internationally hosted website to secure local servers.",
    company: "Turneffe Atoll Sustainability Association",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "STEM Journalist",
    desc: "Wrote science-based articles for public understanding.",
    company: "Amandala",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
