import { client } from "@/sanity/client";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

import {
  ContactDataDocument,
  EducationDataDocument,
  HomeDataDocument,
  SkillDataDocument,
  ExperienceDataDocument,
} from "@/types/types";
import {
  CONTACT_QUERY,
  EDUCATION_QUERY,
  EXPERIENCE_QUERY,
  HOME_QUERY,
  SKILL_QUERY,
} from "@/sanity/queries";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

const IndexPage = async () => {
  const homeData = await client.fetch<HomeDataDocument[]>(HOME_QUERY);
  const skillData = await client.fetch<SkillDataDocument[]>(SKILL_QUERY);
  const contactData = await client.fetch<ContactDataDocument[]>(CONTACT_QUERY);
  const educationData = await client.fetch<EducationDataDocument[]>(
    EDUCATION_QUERY
  );
  const experienceData = await client.fetch<ExperienceDataDocument[]>(
    EXPERIENCE_QUERY
  );

  return (
    <Wrapper
      content={
        <>
          <Header />
          <Home homeData={homeData[0]} />
          <Experience experienceData={experienceData} />
          <Skill skillData={skillData} />
          <Education educationData={educationData} />
          <Contact contactData={contactData} />
          <Footer />
        </>
      }
    />
  );
};

export default IndexPage;
