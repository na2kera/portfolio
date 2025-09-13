export interface Profile {
  name: string;
  avatar: string;
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
    urls?: string[];
  }[];
}

export const profile: Profile = {
  name: "ぴーなっつ",
  avatar: "/images/icons/avatar.jpg",
  title: "学生エンジニア",
  bio: "27卒の学生エンジニア。フロントエンドをメインにしています。Cursorが好き。",
  skills: [
    {
      category: "プログラミング言語",
      items: [
        "/images/icons/typescript.svg",
        "/images/icons/javascript.svg",
        "/images/icons/python.svg",
        "/images/icons/ruby.svg",
      ],
    },
    {
      category: "フレームワーク",
      items: [
        "/images/icons/react.svg",
        "/images/icons/nextjs.svg",
        "/images/icons/express.svg",
        "/images/icons/vue.svg",
        "/images/icons/nuxtjs.svg",
        "/images/icons/rails.svg",
        "/images/icons/fastapi.svg",
      ],
    },
    {
      category: "その他ツール",
      items: ["/images/icons/git.svg", "/images/icons/notion.svg"],
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
      urls: ["https://github.com/Akira0809/vol.10"],
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
      urls: [
        "https://lp.youtrust.jp/",
        "https://tech.youtrust.co.jp/entry/2024/07/19/164548",
      ],
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
    {
      date: "2024年 7月",
      title: "「GeekLink」で技育博に参加",
      description: "5月に制作した「GeekLink」を継続開発し、技育博に参加した。",
    },
    {
      date: "2024年 8月",
      title: "株式会社TAIANで一週間のサマーインターン",
      description:
        "株式会社TAIANで一週間のサマーインターンに参加。フロントエンドのDDD化を行った。",
    },
    {
      date: "2024年 9月",
      title: "フェンリル株式会社で一週間のサマーインターン",
      description:
        "フェンリル株式会社で一週間のサマーインターンに参加。研修用プロダクトの新規機能追加、バグ修正等を行った。",
    },
    {
      date: "2024年 9月",
      title: "PeachTech内のハッカソンに参加",
      description:
        "PeachTech内のメンバーでハッカソンに参加。開発をリードしながら「みんトレ」を制作した。",
    },
    {
      date: "2024年 11月",
      title: "技育展決勝大会で登壇",
      description:
        "「GeekLink」を継続開発し、技育展決勝大会に進出。TOKYO NODE HALLでピッチを行った。",
    },
    {
      date: "2024年 12月",
      title: "学生団体コラボイベントで登壇",
      description:
        "自身が所属しているPeachTechと、同じく学生団体のPACKERのコラボLTイベントで登壇した。",
    },
    {
      date: "2024年 12月",
      title: "大学から特別奨励賞を受賞",
      description: "一年間の活動を評価され、成蹊大学から特別奨励賞を受賞。",
    },
    {
      date: "2024年 1月",
      title: "TechTrainのイベント「つよナレ」で登壇",
      description:
        "TechTrainのイベント「つよナレ」にて学生枠で登壇。GeekLinkでのチーム開発について発表した。",
    },
    {
      date: "2025年 2月",
      title: "「リフティ」で技育博に参加",
      description:
        "PeachTech内で開発していた「リフティ」で技育博に参加。サイバーエージェント賞を受賞した。",
    },
    {
      date: "2025年 4月",
      title: "ワンキャリアの2daysインターンに参加",
      description:
        "ワンキャリアの2daysインターンに参加。3人チームで既存プロダクトの追加機能の立案をし、責任者の方の前でプレゼンをした。",
    },
    {
      date: "2025年 6月",
      title: "株式会社ARCRAの長期インターンを開始。",
      description:
        "株式会社ARCRAでバックエンドを中心にAI系の開発を行っている。",
    },
    {
      date: "2025年 7月",
      title: "「GeekQuest」で技育博に参加",
      description:
        "技術系のイベントのレコメンドをするアプリ「GeekQuest」を2人チームで作成し、技育博に参加。",
    },
    {
      date: "2025年 7月",
      title: "レバレジーズ株式会社の3daysインターンに参加",
      description:
        "レバレジーズ株式会社の3daysインターンに参加。既存のプロダクトの新規機能を考え、実装し、責任者の前でプレゼンを行った。",
    },
    {
      date: "2025年 7月",
      title: "Works Human Intelligenceの1dayインターンに参加",
      description:
        "Works Human Intelligenceの1dayインターンに参加。チームで追加機能の開発に取り組んだ。",
    },
  ],
};
