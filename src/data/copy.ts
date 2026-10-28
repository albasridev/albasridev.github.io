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

export const education = [
  { when: "2016–2023", label: "Ekonomi Pembangunan, Universitas Jambi" },
  { when: "2014–2016", label: "SMK Revany Indra Putra, Kota Jambi" },
  { when: "2010–2014", label: "SMPN 1 Muaro Jambi" },
  { when: "2004–2010", label: "SDN 73 Muaro Jambi" },
] as const;

type Copy = {
  description: string;
  nav: { home: string; tentang: string; pendidikan: string; kontak: string };
  hero: string;
  hello: string;
  availability: string;
  contactMe: string;
  yearsLabel: string;
  projectsLabel: string;
  services: { title: string; text: string }[];
  aboutTitle: string;
  aboutHeading: string;
  about: string;
  educationTitle: string;
  contactTitle: string;
  contactIntro: string;
  visit: string;
  footer: string;
  openMenu: string;
  closeMenu: string;
  backTop: string;
  darkMode: string;
  colorSettings: string;
  works: Work[];
};

export const copy: Record<Locale, Copy> = {
  id: {
    description: "Portofolio Hasan Basri, web developer dan graphic designer di Bali.",
    nav: { home: "Beranda", tentang: "Tentang", pendidikan: "Pendidikan", kontak: "Kontak" },
    hero: "Membangun Sistem & Panel Kustom dari Nol dengan Pemeliharaan Jangka Panjang.",
    hello: "Halo, saya Hasan Basri",
    availability: "Terbuka untuk Kolaborasi",
    contactMe: "Hubungi saya",
    yearsLabel: "Tahun pengalaman",
    projectsLabel: "Proyek selesai",
    services: [
      {
        title: "Website & Panel",
        text: "Dibangun dari nol hingga dirawat secara berkala. Selalu menggunakan perangkat (tools) yang paling tepat guna.",
      },
      {
        title: "Desain",
        text: "Menghadirkan visual untuk web dan merek, berbekal fondasi desain yang kuat.",
      },
    ],
    aboutTitle: "Tentang",
    aboutHeading: "Merancang merek dan website dengan kejelasan, kreativitas, dan kecepatan no-code.",
    about:
      "Saya menggabungkan desain web, identitas merek, dan pengembangan no-code untuk membantu bisnis bergerak lebih cepat tanpa kehilangan karakter aslinya. Setiap proyek dikerjakan dengan memadukan strategi dan gaya. Memastikan desain tidak hanya tampak menarik, tetapi juga fungsional dan berdampak nyata.",
    educationTitle: "Pendidikan",
    contactTitle: "Kontak",
    contactIntro: "Hubungi saya lewat WhatsApp, email, atau Instagram.",
    visit: "Kunjungi situs",
    footer: "Hak cipta © 2026 Al Basri Dev",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    backTop: "Kembali ke atas",
    darkMode: "Mode gelap",
    colorSettings: "Pengaturan warna",
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
    nav: { home: "Home", tentang: "About", pendidikan: "Education", kontak: "Contact" },
    hero: "Building custom systems and panels from scratch, with long-term maintenance.",
    hello: "Hello, I'm Hasan Basri",
    availability: "Open for collaboration",
    contactMe: "Contact me",
    yearsLabel: "Years of experience",
    projectsLabel: "Projects completed",
    services: [
      {
        title: "Website & Panel",
        text: "Built from scratch and maintained on a regular basis. The tools used are always the ones best suited to the job.",
      },
      {
        title: "Design",
        text: "Visuals for the web and the brand, grounded in a strong design foundation.",
      },
    ],
    aboutTitle: "About",
    aboutHeading: "Designing brands and websites with clarity, creativity, and no-code speed.",
    about:
      "I combine web design, brand identity, and no-code development to help businesses move faster without losing their original character. Every project blends strategy and style, so the design is not only attractive, but also functional and has a real impact.",
    educationTitle: "Education",
    contactTitle: "Contact",
    contactIntro: "Contact me on WhatsApp, email, or Instagram.",
    visit: "Visit site",
    footer: "Copyright © 2026 Al Basri Dev",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backTop: "Back to top",
    darkMode: "Dark mode",
    colorSettings: "Color settings",
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
