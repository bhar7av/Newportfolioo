import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs } from "react-icons/si";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Live Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github Repository
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  gcp: {
    title: "GCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">GCP</span>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">FastAPI</span>,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">SQLite</span>,
  },
  clerk: {
    title: "Clerk",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">Clerk</span>,
  },
  capacitor: {
    title: "Capacitor",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">Capacitor</span>,
  },
  chromadb: {
    title: "ChromaDB",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">Chroma</span>,
  },
  gemini: {
    title: "Gemini",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">Gemini</span>,
  },
  razorpay: {
    title: "Razorpay",
    bg: "black",
    fg: "white",
    icon: <span className="text-[10px] font-bold">Razorpay</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "whatsapp-bot",
    category: "RAG AI Study Assistant",
    title: "WhatsApp Study Bot",
    src: "/assets/projects-screenshots/whatsappbot.png",
    screenshots: ["whatsappbot.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.chromadb,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.razorpay,
      ],
    },
    live: "#",
    github: "https://github.com/bhar7av/whatsapp-study-bot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A WhatsApp-based RAG study assistant powered by Gemini.
          </TypographyP>
          <TypographyP className="font-mono">
            WhatsApp Study Bot processes user-uploaded notes and PDFs, indexing them into ChromaDB vector databases to answer user queries with highly context-grounded citations directly in WhatsApp chats.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Core Architecture</TypographyH3>
          <p className="font-mono mb-2">
            - **RAG & Vector Embeddings**: Ingests files (PDFs/notes), chunks documents, and stores vectors inside ChromaDB.
            - **Per-User Isolation**: Complete boundary isolation between user document namespaces.
            - **Monetization & API Integration**: WhatsApp Cloud API webhooks handle media receiving and texting; integrated Razorpay Payment Links with FastAPI endpoints to manage freemium subscription tier limits stored in SQLite.
          </p>
        </div>
      );
    },
  },
  {
    id: "pulsefit-neo",
    category: "AI-Powered Fitness",
    title: "PulseFit Neo",
    src: "/assets/projects-screenshots/pulsefit.png",
    screenshots: ["pulsefit.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.capacitor,
      ],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.clerk,
      ],
    },
    live: "#",
    github: "https://github.com/bhar7av/PulseFit-Neo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-stack mobile-responsive fitness application.
          </TypographyP>
          <TypographyP className="font-mono">
            PulseFit Neo leverages AI to generate personalized workout routines and offers real-time physical workout metrics tracking, wrapped in a mobile hybrid shell using Capacitor.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <p className="font-mono mb-2">
            - **Native Device Integrations**: Leveraged Capacitor API wrappers for accelerometer-based step tracking and GPS workout geo-routing.
            - **Modern Data Layer**: Implemented a secure authentication layer using Clerk, and dynamic schemas in a PostgreSQL server powered by Drizzle ORM.
          </p>
        </div>
      );
    },
  },
  {
    id: "forecasting",
    category: "Machine Learning",
    title: "Time Series Forecasting",
    src: "/assets/projects-screenshots/forecasting.png",
    screenshots: ["forecasting.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node, // Stand-in for TensorFlow
      ],
    },
    live: "#",
    github: "https://github.com/bhar7av/Time-Series-Forecasting",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-step future value predictor using deep learning.
          </TypographyP>
          <TypographyP className="font-mono">
            An advanced ML framework built to forecast values 7 to 30 days into the future. Leveraged XGBoost ensembles and Long Short-Term Memory (LSTM) networks built with TensorFlow, backed by thorough walk-forward validation and robust temporal feature scaling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "expenseflow",
    category: "Full-Stack Finance",
    title: "ExpenseFlow",
    src: "/assets/projects-screenshots/expenseflow.png",
    screenshots: ["expenseflow.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sqlite,
      ],
    },
    live: "https://xpenseflow-chi.vercel.app",
    github: "https://github.com/bhar7av/expenseflow-frontend",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack personal finance tracker with live charts and reports.
          </TypographyP>
          <TypographyP className="font-mono">
            ExpenseFlow enables users to track monthly spending, categorize transaction streams, and view historical budgets. Built with a Flask REST API on the backend, JWT authentication, and a sleek React/Tailwind frontend dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Architecture</TypographyH3>
          <p className="font-mono mb-2">
            - Secure JWT token rotation stored in local session headers.
            - Relational SQLite schema with active index constraints.
            - Clean charts displaying spending distributions.
          </p>
        </div>
      );
    },
  },
];

export default projects;
