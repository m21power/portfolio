import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import {
  FaUniversity,
  FaGraduationCap,
  FaGoogle,
  FaCode,
  FaTrophy,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

// Map icon names to their components with type assertion
const iconMap = {
  FaUniversity: FaUniversity as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
  MdSchool: MdSchool as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
  FaGraduationCap: FaGraduationCap as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
  FaGoogle: FaGoogle as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
  FaCode: FaCode as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
  FaTrophy: FaTrophy as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
};

// Define the type for the eduBg items
interface EduBgItem {
  title: string;
  desc: string;
  iconName: keyof typeof iconMap; // Restrict to keys of iconMap
  details?: {
    text: string;
    iconName: keyof typeof iconMap; // Restrict to keys of iconMap for details
  }[];
}

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>My Education Background</EduIntro>
      {eduBg.map(({ title, desc, details, iconName }) => {
        const Icon = iconMap[iconName]; // Get the icon component for title
        return (
          <EduList key={title}>
            <div className="title">
              <span className="icon">
                <Icon size={18} /> {/* Render the title icon */}
              </span>
              {title}
            </div>
            <div className="desc">{desc}</div>
            {details && (
              <div className="details">
                <ul className="details-list">
                  {details.map(({ text, iconName: detailIconName }, index) => {
                    const DetailIcon = iconMap[detailIconName]; // Get the icon component for details
                    return (
                      <li key={index}>
                        <DetailIcon size={14} className="inline-icon" />
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </EduList>
        );
      })}
    </Wrapper>
  );
};

const eduBg: EduBgItem[] = [
  {
    title: "Bachelor of Science in Computer Science",
    desc: "Addis Ababa University | Sep 2022 - Jun 2026",
    iconName: "FaUniversity",
    details: [
      {
        iconName: "FaGraduationCap",
        text: "Relevant Coursework: Data Structures & Algorithms, Mobile Application Development, Object-Oriented Programming, Database Management Systems",
      },
    ],
  },
  {
    title: "Competitive Programming and Coding Academy",
    desc: "Africa To Silicon Valley (A2SV) | Feb 2024 - Oct 2024",
    iconName: "MdSchool",
    details: [
      {
        iconName: "FaGoogle",
        text: "Google-backed program with strong focus on data structures and algorithms",
      },
      {
        iconName: "FaCode",
        text: "Solved 850+ problems on LeetCode and Codeforces",
      },
      {
        iconName: "FaTrophy",
        text: "A2SV has placed 80+ students at top tech companies (Google, Bloomberg, Databricks, Amazon, LinkedIn, Square)",
      },
    ],
  },
];

export default Education;
