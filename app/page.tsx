import { Metadata } from "next";
import { ProjectLabel, ProjectType } from "./types/Project";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

interface ContentfulGraphQLResponse {
  data: {
    projectCollection: {
      items: {
        id: number;
        title: string;
        description: string;
        image: {
          url: string;
        } | null;
        projectLabels: string[];
        liveUrl: string;
        githubUrl: string;
      }[];
    };
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zakk Fast - Full-Stack Developer",
    description:
      "Full-stack software engineer specializing in React, TypeScript, and modern web applications. View my projects and get in touch.",
    keywords: [
      "Full-Stack Developer",
      "React",
      "TypeScript",
      "Web Development",
    ],
    openGraph: {
      title: "Zakk Fast - Full-Stack Developer",
      description:
        "Full-stack software engineer specializing in React, TypeScript, and modern web applications.",
      url: "https://zakkfast.io",
      siteName: "Zakk Fast",
      type: "website",
    },
  };
}

async function getProjects(): Promise<ProjectType[]> {
  const query = `
    query {
      projectCollection(order: displayOrder_ASC) {
        items {
          id
          title
          description
          image {
            url
          }
          projectLabels
          liveUrl
          githubUrl
        }
      }
    }
  `;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch projects from Contentful");
  }

  const data: ContentfulGraphQLResponse = await response.json();

  return data.data.projectCollection.items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "",
    projectLabels: item.projectLabels.map((label) => label as ProjectLabel),
    liveUrl: item.liveUrl,
    githubUrl: item.githubUrl,
  }));
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
