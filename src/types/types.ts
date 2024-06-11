import { SanityDocument } from "next-sanity";

export interface HomeDataDocument extends SanityDocument {
  name: string;
  heading: string;
  subHeading: string;
  imageUrl: string;
}

export interface ExperienceDataDocument extends SanityDocument {
  companyName: string;
  position: string;
  from: string;
  to: string;
  details: string[];
}

export interface SkillDataDocument extends SanityDocument {
  name: string;
}

export interface EducationDataDocument extends SanityDocument {
  institution: string;
  location: string;
  exam: string;
  passingYear: string;
  details: string[];
}

export interface ContactDataDocument extends SanityDocument {
  name: string;
  value: string;
  icon: string;
}

export interface HomeProps {
  homeData: HomeDataDocument;
}

export interface ExperienceProps {
  experienceData: ExperienceDataDocument[];
}

export interface SkillProps {
  skillData: SkillDataDocument[];
}

export interface EducationProps {
  educationData: EducationDataDocument[];
}

export interface ContactProps {
  contactData: ContactDataDocument[];
}

export interface VerticalTabProps {
  data: TabData[];
}

interface TabData {
  title: string;
  heading: string;
  date: string;
  other?: string[];
}

export interface VerticalTabListProps {
  key: number;
  onClick: (id: number) => void;
  title: String;
  index: number;
  activeTabId: number;
}

export interface VerticalTabContentProps {
  key: number;
  title: string;
  date: string;
  other?: string[];
  index: number;
  activeTabId: number;
}

export interface LoaderProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
