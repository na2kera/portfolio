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
    title: "3AIよれば文殊の知恵",
    date: "2023.10~",
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
    title: "リフティ",
    date: "2024.10~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/refty.png",
    images: [
      "/images/projects/refty.png",
      "/images/projects/refty.png",
      "/images/projects/refty.png",
      "/images/projects/refty.png",
    ],
    urls: [
      "https://github.com/yusei53/refty",
      "https://www.refty.jp/welcome",
      "https://www.refty.jp/",
    ],
    urlTitles: ["GitHubリポジトリ", "LP", "プロダクト"],
  },
];
