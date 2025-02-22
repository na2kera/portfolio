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
    icon: string;
  }[];
  timeline: {
    date: string;
    title: string;
    description: string;
  }[];
}

export const profile: Profile = {
  name: "ぴーなっつ",
  title: "学生エンジニア",
  bio: "27卒の学生エンジニア。フロントエンドをメインにしています。Cursorが好き。",
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
    {
      school: "千葉県立千葉東高等学校",
      degree: "普通科",
      period: "2020 - 2023",
    },
  ],
  contacts: [
    {
      platform: "GitHub",
      icon: "/images/icons/github.svg",
      url: "https://github.com/na2kera",
    },
    {
      platform: "Twitter",
      icon: "/images/icons/twitter.svg",
      url: "https://x.com/na2kera_0510",
    },
  ],
  timeline: [
    {
      date: "2023 3月",
      title: "千葉県立千葉東高等学校卒業",
      description: "千葉県立千葉東高等学校普通科を卒業",
    },
    {
      date: "2023 4月",
      title: "成蹊大学入学",
      description: "成蹊大学理工学部理工学科データ数理専攻に入学",
    },
    {
      date: "2023 6月",
      title: "ローコードハッカソンに参加",
      description:
        "IDEACTIVE JAPAN PROJECT主催のローコードハッカソンに参加。Power Appsを用いてお祭りに関するクイズができる位置情報アプリを制作。",
    },
  ],
};
