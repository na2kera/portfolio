export interface Profile {
  name: string;
  title: string;
  bio: string;
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
  contacts: {
    platform: string;
    url: string;
    icon?: string;
  }[];
}

export const profile: Profile = {
  name: "あなたの名前",
  title: "職種や肩書き",
  bio: "自己紹介文をここに記載します。これまでの経験や、興味のある分野、目指していることなどを書くことができます。",
  skills: [
    {
      category: "プログラミング言語",
      items: ["TypeScript", "JavaScript", "Python", "Java"],
    },
    {
      category: "フレームワーク",
      items: ["React", "Next.js", "Nuxt.js", "Vue.js"],
    },
    {
      category: "その他ツール",
      items: ["Git", "Notion", "Cursor"],
    },
  ],
  education: [
    {
      school: "成蹊大学",
      degree: "理工学部理工学科データ数理専攻",
      period: "2023 - 2027",
    },
  ],
  contacts: [
    {
      platform: "GitHub",
      url: "https://github.com/na2kera",
    },
    {
      platform: "Twitter",
      url: "https://x.com/na2kera_0510",
    },
  ],
};
