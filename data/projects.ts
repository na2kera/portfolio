export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  images: string[];
  urls?: string[];
  urlTitles?: string[];
  movie?: string;
  slide?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "プロジェクト1",
    date: "2025.1.23",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/3AI.webp",
    images: ["/images/projects/3AI.webp", "/images/projects/3AI-2.png"],
    urls: [
      "https://github.com/Akira0809/vol.10",
      "https://github.com/Akira0809/vol.10-2023",
      "https://github.com/na2kera/likeChatgptFront",
    ],
    urlTitles: [
      "GitHubリポジトリ（技育博）",
      "GitHubリポジトリ（技育CAMP）",
      "GitHubリポジトリ（フロント）",
    ],
    slide:
      "https://www.canva.com/design/DAFw9HktVmM/XQi_fhjgtZfzbjz9k8oa8A/view?utm_content=DAFw9HktVmM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ba2a0468c",
  },
  {
    id: 2,
    title: "プロジェクト2",
    date: "2025.2.10",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/refty.png",
    images: [
      "/images/projects/refty.png",
      "/images/projects/refty.png",
      "/images/projects/refty.png",
      "/images/projects/refty.png",
    ],
    urls: ["https://github.com/yusei53/refty"],
    urlTitles: ["GitHubリポジトリ"],
    slide: "",
  },
];
