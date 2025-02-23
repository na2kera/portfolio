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
      date: "2023年 3月",
      title: "千葉県立千葉東高等学校卒業",
      description: "千葉県立千葉東高等学校普通科を卒業",
    },
    {
      date: "2023年 4月",
      title: "成蹊大学入学",
      description: "成蹊大学理工学部理工学科データ数理専攻に入学",
    },
    {
      date: "2023年 6月",
      title: "ローコードハッカソンに参加",
      description:
        "IDEACTIVE JAPAN PROJECT主催のローコードハッカソンに参加。Power Appsを用いてお祭りに関するクイズができる位置情報アプリを制作。",
    },
    {
      date: "2023年 8月",
      title: "PeachTech副代表に就任",
      description: "PeachTech創設者に誘われ副代表に就任する。",
    },
    {
      date: "2023年 10月",
      title: "初めてのハッカソンに参加",
      description:
        "技育CAMPマンスリーハッカソンに即席で参加。「3AIよれば文殊の知恵」というプロダクトを制作し、最優秀賞を受賞。",
    },
    {
      date: "2023年 11月",
      title: "PeachTech内でチームを組み、ハッカソンに参加",
      description: "技育CAMPマンスリーハッカソンで「phono!」を制作した。",
    },
    {
      date: "2023年 12月",
      title: "成蹊大学賞を受賞",
      description: "一年間の個人の活動が評価され、成蹊大学賞を受賞。",
    },
    {
      date: "2023年 12月",
      title: "技育CAMPアドバンスに参加",
      description:
        "10月に制作した「3AIよれば文殊の知恵」をアップデートして技育CAMPアドバンスに参加。CARTA HOLDINGS賞を受賞。",
    },
    {
      date: "2024年 3月",
      title: "株式会社YOUTRUSTでインターンを始める",
      description:
        "初めての実務型インターンでReact, Ruby on Railsの経験を積んだ。",
    },
    {
      date: "2024年 5月",
      title: "技育CAMPマンスリーハッカソンに参加",
      description:
        "Xで参加募集していたメンバーと一緒にハッカソンに参加。「GeekLink」を制作し、努力賞を受賞した。",
    },
    {
      date: "2024年 5月",
      title: "Progateハッカソンに参加",
      description:
        "第一回のProgateハッカソンに参加。初めてチームをリードして保護犬、保護猫の里親募集ができるサイトを開発した。",
    },
  ],
};
