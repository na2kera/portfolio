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
      urls: ["https://x.com/na2kera_0510/status/1713489029973553203"],
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
      urls: [
        "https://www.seikei.ac.jp/university/news_topics/2023/16345.html",
        "https://x.com/PeachTech_0927/status/1737114192111681770",
      ],
    },
    {
      date: "2023年 12月",
      title: "技育CAMPアドバンスに参加",
      description:
        "10月に制作した「3AIよれば文殊の知恵」をアップデートして技育CAMPアドバンスに参加。CARTA HOLDINGS賞を受賞。",
      urls: ["https://x.com/na2kera_0510/status/1735979081550967021"],
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
      urls: [
        "https://x.com/PeachTech_0927/status/1850543124424372501",
        "https://x.com/na2kera_0510/status/1792123920986055026",
      ],
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
      urls: ["https://x.com/geek_pjt/status/1809450933736329292"],
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
      urls: [
        "https://note.supporterz.jp/n/n7e84e3fc0128#7c904a2f-790c-4fb7-8a94-852a51fb4006",
        "https://x.com/geek_pjt/status/1854093869484482829",
        "https://x.com/na2kera_0510/status/1855445753365434456",
        "https://x.com/na2kera_0510/status/1855471491158360462",
      ],
    },
    {
      date: "2024年 12月",
      title: "学生団体コラボイベントで登壇",
      description:
        "自身が所属しているPeachTechと、同じく学生団体のPACKERのコラボLTイベントで登壇した。",
      urls: ["https://x.com/PeachTech_0927/status/1867518606353084913"],
    },
    {
      date: "2024年 12月",
      title: "大学から特別奨励賞を受賞",
      description: "一年間の活動を評価され、成蹊大学から特別奨励賞を受賞。",
      urls: [
        "https://x.com/PeachTech_0927/status/1869533750658568330",
        "https://www.seikei.ac.jp/university/realife/event/18666.html",
      ],
    },
    {
      date: "2024年 1月",
      title: "TechTrainのイベント「つよナレ」で登壇",
      description:
        "TechTrainのイベント「つよナレ」にて学生枠で登壇。GeekLinkでのチーム開発について発表した。",
      urls: ["https://x.com/na2kera_0510/status/1887840382802956404"],
    },
    {
      date: "2025年 2月",
      title: "「リフティ」で技育博に参加",
      description:
        "PeachTech内で開発していた「リフティ」で技育博に参加。サイバーエージェント賞を受賞した。",
      urls: [
        "https://x.com/na2kera_0510/status/1888183465549644206",
        "https://www.seikei.ac.jp/university/news_topics/2025/18691.html",
      ],
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
      urls: [
        "https://arcra.jp/",
        "https://prtimes.jp/main/html/rd/p/000000027.000132533.html",
      ],
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
        "3Daysのインターンでレバテックルーキーのプロダクトに関して新機能の企画立案から実装、発表までを行った。4人1組のチームで与えられたデータから企業とユーザー（特にスカウト機能）のボトルネックを洗い出し、新機能の提案を行なった。そこから仕様の考案、ブラッシュアップ、実装を行って最後に事業責任者に向けて発表を行なった。普段は意識していないデータからボトルネックを発見するといった経験ができてとても成長できた。また、実装面では仕様や技術的選定などに関してチームをリードしていくことができた。",
    },
    {
      date: "2025年 7月",
      title: "Works Human Intelligenceの1dayインターンに参加",
      description:
        "Works Human Intelligenceの1dayインターンに参加。チームで追加機能の開発に取り組んだ。",
    },
    {
      date: "2025年 8月",
      title: "株式会社BuySell Technologiesの1dayインターンに参加",
      description:
        "ワークショップ型の1dayインターン。AIをフル活用して複数ある課題の中からチームで選択して実装を行なった。個人としてはパフォーマンス改善に取り組み、AIを活用してプロジェクトの調査や時間のかかっている部分の可視化、実装等を行なった。普段考えていることを実際の活用に落とせていいアウトプットができた。",
      urls: ["https://x.com/na2kera_0510/status/1958500094300295344"],
    },
    {
      date: "2025年 8月",
      title: "ラクスル株式会社の1dayインターンに参加",
      description:
        "1daysのインターン。インターン用に課題が用意されていて、チームでどの課題を実装するか相談し合いながら実装を行なった。主にRuby on Railsでの開発でRailsガイドやメンターの方の力を借りながらメール送信機能の実装を完了させることができた。",
      urls: ["https://x.com/na2kera_0510/status/1959214631454712102"],
    },
    {
      date: "2025年 8月",
      title: "株式会社SmartHRの4daysインターンに参加",
      description:
        "4daysでテーマに沿ったプロダクトの開発を行った。実際に行なっている一週間のスプリントを4日間で体験するという内容だった。仮説を立ててユーザー想定の社員の方から意見を聞き、レビュー、振り返りを早い速度で回していくアジャイル開発を体験した。チームとしての役割を考えられたインターンだった。",
      urls: ["https://x.com/na2kera_0510/status/1961401584169992557"],
    },
    {
      date: "2025年 9月",
      title: "サイボウズ株式会社の2weeksインターンに参加",
      description:
        "2週間でkintoneの開発チームに入ってClosureで実装されている一部コンポーネントのReact化を行なった。基本的な動作や、Storybookで触れるように実装、自動テストの実装までを行なった。JavaScript, TypeScript, Reactのベストプラクティスやアンチパターンについて学ぶのと同時に実際のチームに入ってのアジャイル開発を経験して実際にエンジニアとして働くことへのイメージができた。",
      urls: ["https://x.com/na2kera_0510/status/1966454776104677611"],
    },
    {
      date: "2025年 9月",
      title: "株式会社Speeeの3daysインターンに参加",
      description:
        "ワークショップ型の3daysインターン。複雑な不動産業界の売買のフローの中で課題を洗い出し、どこにアプローチできるかを考えてプロダクト案を発表するという内容だった。ドメインの理解からニーズの発見、エンドユーザーの深掘りなどビジネス観点で考えることが多く、今ままで持ったことがない視点でプロダクトに向き合うことができたインターンだった。",
    },
  ],
};
