export type Locale = "id" | "en";

export const siteName = "Hasan Basri";
export const role = "Web Developer & Graphic Designer";
export const pageTitle = "Hasan Basri | Web Developer & Graphic Designer";

export type Work = {
  name: string;
  description: string;
  tool: string | null;
  href: string | null;
  image: string | null;
  alt: string | null;
  width: number | null;
  height: number | null;
  featured: boolean;
};

type Copy = {
  description: string;
  nav: { karya: string; tentang: string; kontak: string };
  hero: string;
  viewWork: string;
  contactMe: string;
  servicesTitle: string;
  services: { title: string; text: string }[];
  aboutTitle: string;
  about: string;
  contactTitle: string;
  contactIntro: string;
  visit: string;
  works: Work[];
};

export const copy: Record<Locale, Copy> = {
  id: {
    description: "Portofolio Hasan Basri, web developer dan graphic designer di Bali.",
    nav: { karya: "Karya", tentang: "Tentang", kontak: "Kontak" },
    hero: "Saya membangun website dan panel dari nol, lalu merawatnya. Berbasis di Bali.",
    viewWork: "Lihat karya",
    contactMe: "Hubungi saya",
    servicesTitle: "Yang saya kerjakan",
    services: [
      {
        title: "Website dan panel",
        text: "Dibangun dari nol, lalu dirawat. Alat dipilih sesuai kebutuhan.",
      },
      {
        title: "Desain",
        text: "Visual untuk web dan merek, dari latar belakang desain.",
      },
    ],
    aboutTitle: "Tentang",
    about:
      "Saya Hasan Basri, web developer dan graphic designer berbasis di Bali. Saya lulus Ekonomi Pembangunan dari Universitas Jambi pada 2023. Latar belakang desain saya bawa ke setiap website yang saya buat, jadi tampilan dan fungsi berjalan bersama. Saya bekerja sebagai vibe coder: alat mengikuti pekerjaan, dari WordPress, React, Node.js, sampai PHP.",
    contactTitle: "Kontak",
    contactIntro: "Hubungi saya lewat WhatsApp, email, atau Instagram.",
    visit: "Kunjungi situs",
    works: [
      {
        name: "Rota International",
        description:
          "Situs perusahaan untuk konsultasi dan proyek internasional. Dibangun dari nol dengan WordPress dan masih dirawat.",
        tool: "WordPress",
        href: "https://rotainternational.org/",
        image: "/works/rota.jpg",
        alt: "Tangkapan layar beranda Rota International",
        width: 1024,
        height: 567,
        featured: true,
      },
      {
        name: "LexaFX",
        description:
          "Situs produk Helix, sistem trading emas di MetaTrader 5. Dibangun dari nol dengan React dan masih dirawat.",
        tool: "React",
        href: "https://lexafx.com/",
        image: "/works/lexafx.jpg",
        alt: "Tangkapan layar beranda LexaFX",
        width: 1024,
        height: 563,
        featured: true,
      },
      {
        name: "Echlo Beauty",
        description:
          "Panel untuk rekapan. Tidak ada halaman depan untuk pengunjung. Dibangun dari nol dan masih dirawat.",
        tool: null,
        href: null,
        image: "/works/echlo.jpg",
        alt: "Tangkapan layar halaman masuk Echlo Beauty",
        width: 1024,
        height: 559,
        featured: true,
      },
      {
        name: "Alam Bukit Tigapuluh",
        description:
          "Situs perusahaan restorasi ekosistem di Jambi. Dibangun dari nol dengan WordPress dan masih dirawat.",
        tool: "WordPress",
        href: "https://alambukit30.com/",
        image: "/works/alam-bukit.jpg",
        alt: "Tangkapan layar beranda Alam Bukit Tigapuluh",
        width: 1024,
        height: 562,
        featured: false,
      },
    ],
  },
  en: {
    description: "Portfolio of Hasan Basri, a web developer and graphic designer in Bali.",
    nav: { karya: "Work", tentang: "About", kontak: "Contact" },
    hero: "I build websites and panels from scratch, then keep them running. Based in Bali.",
    viewWork: "View work",
    contactMe: "Contact me",
    servicesTitle: "What I do",
    services: [
      {
        title: "Websites and panels",
        text: "Built from scratch, then maintained. The tools follow the work.",
      },
      {
        title: "Design",
        text: "Visual work for the web and the brand, from a design background.",
      },
    ],
    aboutTitle: "About",
    about:
      "I'm Hasan Basri, a web developer and graphic designer based in Bali. In 2023 I graduated from Universitas Jambi with a degree in Ekonomi Pembangunan. I bring a design background to every website I build, so appearance and function stay together. I work as a vibe coder: the tools follow the job, from WordPress and React to Node.js and PHP.",
    contactTitle: "Contact",
    contactIntro: "Contact me on WhatsApp, email, or Instagram.",
    visit: "Visit site",
    works: [
      {
        name: "Rota International",
        description:
          "A company site for international consulting and projects. Built from scratch with WordPress and still maintained.",
        tool: "WordPress",
        href: "https://rotainternational.org/",
        image: "/works/rota.jpg",
        alt: "Screenshot of the Rota International homepage",
        width: 1024,
        height: 567,
        featured: true,
      },
      {
        name: "LexaFX",
        description:
          "Product site for Helix, a gold trading system on MetaTrader 5. Built from scratch with React and still maintained.",
        tool: "React",
        href: "https://lexafx.com/",
        image: "/works/lexafx.jpg",
        alt: "Screenshot of the LexaFX homepage",
        width: 1024,
        height: 563,
        featured: true,
      },
      {
        name: "Echlo Beauty",
        description:
          "A recap panel. There is no public storefront. Built from scratch and still maintained.",
        tool: null,
        href: null,
        image: "/works/echlo.jpg",
        alt: "Screenshot of the Echlo Beauty sign-in page",
        width: 1024,
        height: 559,
        featured: true,
      },
      {
        name: "Alam Bukit Tigapuluh",
        description:
          "Company site for an ecosystem restoration concession in Jambi. Built from scratch with WordPress and still maintained.",
        tool: "WordPress",
        href: "https://alambukit30.com/",
        image: "/works/alam-bukit.jpg",
        alt: "Screenshot of the Alam Bukit Tigapuluh homepage",
        width: 1024,
        height: 562,
        featured: false,
      },
    ],
  },
};

export const contacts = [
  {
    label: "WhatsApp",
    text: "+62 897 3783 911",
    href: "https://wa.me/628973783911",
    external: true,
  },
  {
    label: "Email",
    text: "hasan.n.dev@gmail.com",
    href: "mailto:hasan.n.dev@gmail.com",
    external: false,
  },
  {
    label: "Instagram",
    text: "@albasri.dev",
    href: "https://www.instagram.com/albasri.dev",
    external: true,
  },
] as const;
