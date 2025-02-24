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
  {
    id: 3,
    title: "GeekLink",
    date: "2024.5~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/geeklink.png",
    images: [
      "/images/projects/geeklink.png",
      "/images/projects/geeklink-2.png",
      "/images/projects/geeklink-3.png",
      "/images/projects/geeklink-4.png",
      "/images/projects/geeklink-5.png",
      "/images/projects/geeklink-6.png",
      "/images/projects/geeklink-7.png",
      "/images/projects/geeklink-8.png",
    ],
    urls: [
      "https://github.com/kou7306/GeekLink_frontend",
      "https://github.com/kou7306/GeekLink_backend",
    ],
    urlTitles: [
      "GitHubリポジトリ（フロント）",
      "GitHubリポジトリ（バックエンド）",
    ],
    movie: "/videos/projects/geeklink.mp4",
    slide:
      "https://www.canva.com/design/DAGV8iQnDEo/M1P3i-p3hZWwmE2T1bWAkw/view?utm_content=DAGV8iQnDEo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h89f3385436",
  },
  {
    id: 4,
    title: "phono!",
    date: "2023.11~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/phono.png",
    images: [
      "/images/projects/phono.png",
      "/images/projects/phono-2.png",
      "/images/projects/phono-3.png",
    ],
    urls: [
      "https://github.com/E-moL0587/20231027",
      "https://pho-no20231027.vercel.app/",
    ],
    urlTitles: ["GitHubリポジトリ", "プロダクト"],
    slide:
      "https://www.canva.com/design/DAFzCf3DnMM/adzS-YSQJ3hCl7Xhu7aJKw/view?utm_content=DAFzCf3DnMM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7819385515",
  },
  {
    id: 5,
    title: "gkpt",
    date: "2023.11~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/gkpt-3.png",
    images: [
      "/images/projects/gkpt.png",
      "/images/projects/gkpt-2.png",
      "/images/projects/gkpt-3.png",
      "/images/projects/gkpt-4.png",
    ],
    urls: ["https://github.com/na2kera/gkpt", "https://gkpt.vercel.app/"],
    urlTitles: ["GitHubリポジトリ", "プロダクト"],
  },
  {
    id: 6,
    title: "里親募集サイト",
    date: "2024.5~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/satooya.png",
    images: [
      "/images/projects/satooya.png",
      "/images/projects/satooya-2.png",
      "/images/projects/satooya-3.png",
      "/images/projects/satooya-4.png",
    ],
    urls: [
      "https://github.com/na2kera/progate_hack",
      "https://topaz.dev/projects/a490dd57f2b6a224150c",
    ],
    urlTitles: ["GitHubリポジトリ", "Topa'z"],
  },
  {
    id: 7,
    title: "ポートフォリオ",
    date: "2025.2~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/portfolio.png",
    images: [
      "/images/projects/portfolio.png",
      "/images/projects/portfolio-2.png",
    ],
    urls: [
      "https://github.com/na2kera/portfolio",
      "https://portfolio-psi-eight-21.vercel.app/",
    ],
    urlTitles: ["GitHubリポジトリ", "ポートフォリオ"],
  },
  {
    id: 8,
    title: "LINEbot",
    date: "2023.8~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/linebot.png",
    images: ["/images/projects/linebot.png"],
    urls: ["https://github.com/na2kera/LINEbot0810"],
    urlTitles: ["GitHubリポジトリ"],
  },
  {
    id: 9,
    title: "欅祭プロダクト紹介",
    date: "2023.11~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/productlist.png",
    images: [
      "/images/projects/productlist.png",
      "/images/projects/productlist-2.png",
    ],
    urls: ["https://keyaki-project.vercel.app/home"],
    urlTitles: ["プロダクト"],
  },
  {
    id: 10,
    title: "ここめも",
    date: "2024.1~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/kokomemo.png",
    images: [
      "/images/projects/kokomemo.png",
      "/images/projects/kokomemo-2.png",
      "/images/projects/kokomemo-3.png",
    ],
    urls: [
      "https://github.com/na2kera/kokomemo",
      "https://kokomemo.vercel.app/",
    ],
    urlTitles: ["GitHubリポジトリ", "プロダクト"],
  },
  {
    id: 11,
    title: "Machiスタ",
    date: "2024.8~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/machista.png",
    images: ["/images/projects/machista.png"],
    urls: [
      "https://github.com/na2kera/opendata-hackathon",
      "https://odhackathon.metro.tokyo.lg.jp/collection/57/",
    ],
    urlTitles: ["GitHubリポジトリ", "プロダクト紹介"],
    slide:
      "https://www.canva.com/design/DAGO1cHlHNI/SoqxPeQY0EhvjDvHd_r4XA/view?utm_content=DAGO1cHlHNI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h224bb025f2",
    movie: "/videos/projects/machista.mp4",
  },
  {
    id: 12,
    title: "みんトレ",
    date: "2024.8~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/mintore.png",
    images: [
      "/images/projects/mintore.png",
      "/images/projects/mintore-2.png",
      "/images/projects/mintore-3.png",
    ],
    urls: ["https://github.com/na2kera/mintore"],
    urlTitles: ["GitHubリポジトリ"],
    slide:
      "https://www.canva.com/design/DAGQU5GNse0/3WMyKfzZ2VZvE1rAVGfqfw/view?utm_content=DAGQU5GNse0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0264d412de",
  },
  {
    id: 13,
    title: "家賃予測システム",
    date: "2024.12~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/yachin.png",
    images: ["/images/projects/yachin.png"],
    urls: ["https://github.com/na2kera/predict-price-frontend"],
    urlTitles: ["GitHubリポジトリ（フロントエンド)"],
    movie: "/videos/projects/yachin.mp4",
    slide:
      "https://www.canva.com/design/DAGZCSXs7-4/VOEeiaXxnvEjPKMrLLfYrg/view?utm_content=DAGZCSXs7-4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0b189f2846",
  },
  {
    id: 14,
    title: "ライムクイズ",
    date: "2024.11~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/rhyme.png",
    images: ["/images/projects/rhyme.png", "/images/projects/rhyme-2.png"],
    urls: ["https://github.com/na2kera/rhyme"],
    urlTitles: ["GitHubリポジトリ"],
    movie: "/videos/projects/rhyme.mp4",
  },
  {
    id: 15,
    title: "吉祥寺サイファー",
    date: "2024.10~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/kichijoji.png",
    images: [
      "/images/projects/kichijoji.png",
      "/images/projects/kichijoji-2.png",
      "/images/projects/kichijoji-3.png",
    ],
    urls: [
      "https://github.com/yoshiddddd/kichijoji_cipher",
      "https://kichijojicipherfrontend.vercel.app/",
    ],
    urlTitles: ["GitHubリポジトリ", "プロダクト"],
  },
  {
    id: 16,
    title: "モーニングセット予約システム",
    date: "2024.12~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/morning.png",
    images: ["/images/projects/morning.png"],
    urls: [
      "https://github.com/na2kera/breakfast-order",
      "https://breakfast-order-two.vercel.app/",
    ],
    urlTitles: ["GitHubリポジトリ", "プロダクト"],
    movie: "/videos/projects/morning.mp4",
  },
  {
    id: 17,
    title: "オリジナルパーセントバルーン",
    date: "2024.11~",
    description: "プロジェクトの説明文がここに入ります",
    thumbnail: "/images/projects/percentballoon.png",
    images: [
      "/images/projects/percentballoon.png",
      "/images/projects/percentballoon-2.png",
      "/images/projects/percentballoon-3.png",
    ],
    urls: [
      "https://github.com/na2kera/percent-balloon",
      "https://percent-balloon-hazel.vercel.app/",
    ],
    urlTitles: ["GitHubリポジトリ", "プロダクト"],
    movie: "/videos/projects/percentballoon.mp4",
  },
];
