import type { SiteData, WorkData, ExperienceData } from "./types";

export const workScrollState: { active: boolean, speed: number } = $state({ active: false, speed: 0 });
export const viewPortState: { isMobile: boolean, slickscrollInstance: any } = $state({ isMobile: false, slickscrollInstance: null })
export const scrollAnchorState: { home: HTMLElement | undefined, work: HTMLElement | undefined, experience: HTMLElement | undefined, about: HTMLElement | undefined } = $state({ home: undefined, work: undefined, experience: undefined, about: undefined });
export const dataState: { siteData: SiteData | undefined, workData: WorkData | undefined, experienceData: ExperienceData | undefined } = $state({ siteData: undefined, workData: undefined, experienceData: undefined })