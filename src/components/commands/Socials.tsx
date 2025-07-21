import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdList, HelpWrapper } from "../styles/Help.styled";
import { checkRedirect, getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../Terminal";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

// Define the type for iconMap
interface IconMap {
  [key: string]: React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >;
}

// Map icon names to their components with type assertion
const iconMap: IconMap = {
  FaGithub: FaGithub as React.FC<
    {
      size?: number | string;
      className?: string;
    } & React.SVGProps<SVGSVGElement>
  >,
  FaLinkedin: FaLinkedin as React.FC<
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
};

// Define the type for the socials items
interface SocialItem {
  id: number;
  title: string;
  url: string;
  iconName: keyof typeof iconMap; // Restrict to keys of iconMap
}

const Socials: React.FC = () => {
  const { history, rerender } = useContext(termContext);
  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(currentCommand[1]) && window.open(url, "_blank");
      });
    }
  }, [currentCommand, rerender]);

  return (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, iconName }) => {
        const Icon = iconMap[iconName]; // Get the icon component
        return (
          <CmdList key={id}>
            <Cmd>
              <span style={{ marginRight: "10px", display: "inline-flex" }}>
                <Icon size={16} /> {/* Render the icon */}
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {title}
              </a>
            </Cmd>
          </CmdList>
        );
      })}
    </HelpWrapper>
  );
};

const socials: SocialItem[] = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/m21power",
    iconName: "FaGithub",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "type or paste code herehttps://www.linkedin.com/in/mesay-lemma",
    iconName: "FaLinkedin",
  },
  {
    id: 3,
    title: "LeetCode",
    url: "https://leetcode.com/u/m_power/",
    iconName: "FaCode",
  },
];

export default Socials;
