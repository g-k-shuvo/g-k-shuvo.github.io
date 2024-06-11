import React, { useEffect, useState } from "react";
import {
  ContactDataDocument,
  EducationDataDocument,
  HomeDataDocument,
  SkillDataDocument,
  ExperienceDataDocument,
} from "@/src/types/types";
import {
  CONTACT_QUERY,
  EDUCATION_QUERY,
  EXPERIENCE_QUERY,
  HOME_QUERY,
  SKILL_QUERY,
} from "@/src/sanity/queries";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import Experience from "@/src/components/Experience";
import Skill from "@/src/components/Skill";
import Education from "@/src/components/Education";
import Contact from "@/src/components/Contact";
import { client } from "@/src/sanity/client";
import Loader from "@/src/components/Loader";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState<HomeDataDocument[]>([]);
  const [skillData, setSkillData] = useState<SkillDataDocument[]>([]);
  const [contactData, setContactData] = useState<ContactDataDocument[]>([]);
  const [educationData, setEducationData] = useState<EducationDataDocument[]>(
    []
  );
  const [experienceData, setExperienceData] = useState<
    ExperienceDataDocument[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchedHomeData =
        await client.fetch<HomeDataDocument[]>(HOME_QUERY);
      const fetchedSkillData =
        await client.fetch<SkillDataDocument[]>(SKILL_QUERY);
      const fetchedContactData =
        await client.fetch<ContactDataDocument[]>(CONTACT_QUERY);
      const fetchedEducationData =
        await client.fetch<EducationDataDocument[]>(EDUCATION_QUERY);
      const fetchedExperienceData =
        await client.fetch<ExperienceDataDocument[]>(EXPERIENCE_QUERY);

      setHomeData(fetchedHomeData);
      setSkillData(fetchedSkillData);
      setContactData(fetchedContactData);
      setEducationData(fetchedEducationData);
      setExperienceData(fetchedExperienceData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <Loader setLoading={setLoading} />
  ) : (
    <>
      <Header />
      {homeData.length > 0 && <Home homeData={homeData[0]} />}
      <Experience experienceData={experienceData} />
      <Skill skillData={skillData} />
      <Education educationData={educationData} />
      <Contact contactData={contactData} />
      <Footer />
    </>
  );
};

export default IndexPage;
