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

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>My Education Background</EduIntro>
      {eduBg.map(({ title, desc, details, icon }) => (
        <EduList key={title}>
          <div className="title">
            <span className="icon">{icon}</span>
            {title}
          </div>
          <div className="desc">{desc}</div>
          {details && <div className="details">{details}</div>}
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor of Science in Computer Science",
    desc: "Addis Ababa University | Sep 2022 - Jun 2026",
    icon: <FaUniversity size={18} />,
    details: (
      <ul className="details-list">
        <li>
          <FaGraduationCap size={14} className="inline-icon" />
          <span>
            Relevant Coursework: Data Structures & Algorithms, Mobile
            Application Development, Object-Oriented Programming, Database
            Management Systems
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Competitive Programming and Coding Academy",
    desc: "Africa To Silicon Valley (A2SV) | Feb 2024 - Oct 2024",
    icon: <MdSchool size={20} />,
    details: (
      <ul className="details-list">
        <li>
          <FaGoogle size={14} className="inline-icon" />
          <span>
            Google-backed program with strong focus on data structures and
            algorithms
          </span>
        </li>
        <li>
          <FaCode size={14} className="inline-icon" />
          <span>Solved 850+ problems on LeetCode and Codeforces</span>
        </li>
        <li>
          <FaTrophy size={14} className="inline-icon" />
          <span>
            A2SV has placed 80+ students at top tech companies (Google,
            Bloomberg, Databricks, Amazon, LinkedIn, Square)
          </span>
        </li>
      </ul>
    ),
  },
];

export default Education;
