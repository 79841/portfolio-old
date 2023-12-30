import { TSkillData } from "@/types/SkillData";

export const skillsData: Record<string, Record<string, TSkillData>> = {
  frontEnd: {
    javascript: {
      name: "Javascript",
      defaultImage: "/images/skills/javascript-original.svg",
    },
    typescript: {
      name: "Typescript",
      defaultImage: "/images/skills/typescript-original.svg",
    },
    react: {
      defaultImage: "/images/skills/react-original.svg",
      name: "React",
    },
    redux: {
      defaultImage: "/images/skills/redux-original.svg",
      name: "Redux",
    },
    nextjs: {
      defaultImage: "/images/skills/nextjs-original.svg",
      darkModeImage: "/images/skills/nextjs-white.svg",
      name: "Next.js",
    },
    recoil: {
      defaultImage: "/images/skills/recoil-logo.avif",
      name: "Recoil",
    },
    zustand: {
      name: "Zustand",
      defaultImage: "/images/skills/bear.avif",
    },
    tanstackQuery: {
      defaultImage: "/images/skills/tanstack-original.avif",
      name: "Tanstack Query",
    },
    styledComponents: {
      name: "Styled Components",
      defaultImage: "/images/skills/styled-components-logo.avif",
    },
    tailwindcss: {
      defaultImage: "/images/skills/tailwindcss-plain.svg",
      name: "Tailwindcss",
    },
    shadcn: {
      defaultImage: "/images/skills/shadcn-original.svg",
      darkModeImage: "/images/skills/shadcn-white.svg",
      name: "Shadcn",
    },
    jest: {
      name: "Jest",
      defaultImage: "/images/skills/jest-logo.avif",
    },
    testingLibrary: {
      defaultImage: "/images/skills/testing-library-logo.avif",
      name: "Testing Library",
    },
    msw: { defaultImage: "/images/skills/msw-logo.avif", name: "Msw" },
    prisma: {
      defaultImage: "/images/skills/prisma-logo.avif",
      name: "Prisma",
    },
  },
  backEnd: {
    nodejs: {
      defaultImage: "/images/skills/nodejs-logo.avif",
      name: "Node.js",
    },
    express: {
      defaultImage: "/images/skills/express-original.svg",
      darkModeImage: "/images/skills/express-white.svg",
      name: "Express.js",
    },
    nestjs: {
      defaultImage: "/images/skills/nestjs-plain.svg",
      name: "Nest.js",
    },
    fastapi: {
      defaultImage: "/images/skills/fastapi-original.svg",
      name: "FastAPI",
    },
    php: {
      defaultImage: "/images/skills/php-plain.svg",
      name: "PHP",
    },
    firebase: {
      defaultImage: "/images/skills/firebase-plain.svg",
      name: "Firebase",
    },
    mysql: {
      defaultImage: "/images/skills/mysql-original.svg",
      name: "Mysql",
    },
    mongodb: {
      defaultImage: "/images/skills/mongodb-original.svg",
      name: "Mongodb",
    },
  },
  app: {
    flutter: {
      defaultImage: "/images/skills/flutter-original.svg",
      name: "Flutter",
    },
  },
  deployment: {
    vultr: {
      defaultImage: "/images/skills/vultr-logo.webp",
      name: "Vultr",
    },
    firebase: {
      defaultImage: "/images/skills/firebase-plain.svg",
      name: "Firebase",
    },
    vercel: {
      defaultImage: "/images/skills/vercel-logo.avif",
      name: "Vercel",
    },
    docker: {
      defaultImage: "/images/skills/docker-plain.svg",
      name: "Docker",
    },
  },
  statusManagement: {
    github: {
      defaultImage: "/images/skills/github-original.svg",
      name: "Github",
    },
    git: {
      defaultImage: "/images/skills/git-original.svg",
      name: "Git",
    },
  },
  communication: {
    jira: {
      defaultImage: "/images/skills/jira-original.svg",
      name: "Jira",
    },
    confluence: {
      defaultImage: "/images/skills/confluence-original.svg",
      name: "Confluence",
    },
    slack: {
      defaultImage: "/images/skills/slack-original.svg",
      name: "Slack",
    },
    discord: {
      defaultImage: "/images/skills/discord-logo.ico",
      name: "Discord",
    },
    gather: {
      defaultImage: "/images/skills/gather-logo.avif",
      name: "Gather",
    },
    figma: {
      defaultImage: "/images/skills/figma-original.svg",
      name: "Figma",
    },
  },
};
