export const HOME_QUERY = `*[_type == "homeData"]{
    name,
    heading,
    subHeading,
    'imageUrl': image.asset->url
  }`;
export const SKILL_QUERY = `*[_type == "skillData"]{
    name,
    order
  }`;
export const CONTACT_QUERY = `*[_type == "contactData"]{
    name,
    value,
    "icon": icon.asset->url
  }`;
export const EDUCATION_QUERY = `*[_type == "educationData"]{
    institution,
    location,
    exam,
    examNameShort,
    'passingYear': passingYear,
    order
  }`;

export const EXPERIENCE_QUERY = `*[_type == "experienceData"]{
    companyName,
    position,
    from,
    to,
    order,
    details
  }`;
