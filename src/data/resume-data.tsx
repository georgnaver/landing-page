import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "GIZN",
  initials: "gizn",
  location: "Stockholm, Sweden, CET",
  locationLink: "https://www.google.com/maps/place/Stockholm",
  about:
    "MD/PhD",
  summary:
    "Clinical microbiologist with interest in epidemiology, data science and coding.",
  avatarUrl: "https://avatars.githubusercontent.com/u/88291560?v=4",
  personalWebsiteUrl: " ",
  contact: {
    email: "h@gizn.org",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/georgnaver",
        icon: GitHubIcon,
      },

      {
        name: "X",
        url: "https://x.com/giznse",
        icon: XIcon,
      },
    ],
  },
  
  work: [
    {
      company: "Incidence and spontaneous clearance of hepatitis C virus (HCV) in people who inject drugs at the Stockholm Needle Exchange - Importance for HCV elimination",
      link: "https://pubmed.ncbi.nlm.nih.gov/29998522/",
      badges: ["HCV", "HBV", "HIV"],
      title: "Journal of Viral Hepatitis",
      logo: ParabolLogo,
      start: "2018",
      description:
        " ",
    },

  ],

  projects: [
	{
      title: "KS salary comparison",
      techStack: [
        "R",
        "Shiny",
        "Quarto",
      ],
      description: "A small web app used for salary negotiation on Karolinska Hospital",
   /**   logo: ConsultlyLogo, */
      link: {
        label: "R",
        href: "https://gizn.shinyapps.io/LonKS/",
      },
    },
  
    {
      title: "The GIZN Medical Journal",
      techStack: [
        "Substack",
        "Newsletter",
      ],
      description: "An email newsletter on infectious diseases and clinical microbiology.",
   /**   logo: ConsultlyLogo, */
      link: {
        label: "Substack",
        href: "https://gizn.substack.com/",
      },
    },
    
{
      title: "GIZN Notes",
      techStack: [
        "Substack",
        "Notes",
      ],
      description: "A stream of thoughts and interesting research.",
   /**   logo: ConsultlyLogo, */
      link: {
        label: "Substack",
        href: "https://gizn.substack.com/notes",
      },
    },    
    
 {
      title: "Shared Zotero library",
      techStack: [
        "Scientific articles",
        "Zotero",
      ],
      description: "A collection of interesting, time-less scientific articles.",
   /**   logo: ConsultlyLogo, */
      link: {
        label: "Zotero",
        href: "https://www.zotero.org/groups/5337739/gizn/library",
      },
    },    

  ],
} as const;
