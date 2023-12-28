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
    "Clinical Microbiologist with interest in ...",
  avatarUrl: "https://avatars.githubusercontent.com/u/88291560?v=4",
  personalWebsiteUrl: " ",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
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
        "The major transmission route for hepatitis C virus (HCV) is through sharing of unsterile injection equipment among people who inject drugs (PWID). The WHO strategy for HCV elimination by 2030 proposes increased efforts to treat PWID populations that drive the HCV epidemic. Among participants in the Stockholm needle exchange programme (NEP), the HCV prevalence is 60%. We aimed to study HCV incidence, spontaneous HCV clearance rate, and predictors associated with new HCV infections and reinfections in NEP participants. All 2320 patients enrolled in the programme between 8 April 2013 and 23 September 2016 were tested for HCV at baseline, and responded to a questionnaire regarding sociodemographic data and injection risk behaviour. Tests for HCV were repeated at an interval of 3-6 months. The anti-HCV prevalence in the NEP participants at baseline was 77%, and the prevalence of HCV RNA was 57%. 24% of the anti-HCV positive were HCV RNA negative with a spontaneously cleared HCV infection. The overall HCV incidence rate was 22/100 PY. The HCV incidence rate in the HCV naive group was 26/100 PY, and in the spontaneously cleared group 19/100. Although there were no significant differences in becoming HCV infected between the two groups (31% vs 29%), the rate of spontaneous HCV clearance was significantly lower in the HCV naive group, 20% vs 44%, (P < 0.05). A high HCV incidence rate was noted among the PWID indicating that treatment needs to be scaled up in conjunction with harm reduction measures to achieve HCV elimination goals set by WHO. This includes high coverage needle exchange programmes and effective addiction treatment for substance users, including opiate substitution treatment.",
    },

  ],

  projects: [
    {
      title: "GIZN Substack",
      techStack: [
        "Email",
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
      title: "Shared Zotero library",
      techStack: [
        "Scientific articles",
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
