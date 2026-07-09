export type Locale = "en" | "ru";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    home: string;
    experience: string;
    projects: string;
    about: string;
  };
  hero: {
    status: string;
    title: string;
    subtitle: string;
    explore: string;
    connect: string;
    imageAlt: string;
  };
  tape: {
    words: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    visitLive: string;
    viewGithub: string;
    items: {
      id: string;
      company: string;
      year: string;
      title: string;
      results: string[];
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    readsTitle: string;
    readsDescription: string;
    toolboxTitle: string;
    toolboxDescription: string;
    educationTitle: string;
    educationDescription: string;
    certificationsTitle: string;
    certificationsDescription: string;
    beyondTitle: string;
    beyondDescription: string;
    bookAlt: string;
    mapAlt: string;
    memojiAlt: string;
    management: string;
    formations: string[];
    certifications: string[];
    hobbies: {
      title: string;
      emoji: string;
      left: string;
      top: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    button: string;
    mailSubject: string;
    mailBody: string;
  };
  footer: {
    rights: string;
    resume: string;
  };
};
