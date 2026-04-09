
export type SiteData = {
    availablity_date: string
}

export type WorkData = {
    id: string,
    title: string,
    details: {
        description: string,
        summary: string
    },
    roles: string[],
    links: {
        type: "web" | "android" | "ios" | undefined,
        text: string,
        link: string
    }[]
}[]

export type ExperienceProject = {
    id: string,
    title: string,
    type: string,
    description: string,
    techStack: string[]
}

export type ExperienceData = {
    company: string,
    role: string,
    duration: string,
    location: string,
    workMode: string,
    projects: ExperienceProject[],
    highlight: {
        title: string,
        description: string,
        techStack: string[]
    }
}