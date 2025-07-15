import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdList, HelpWrapper } from "../styles/Help.styled";
import { checkRedirect, getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../Terminal";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

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
      {socials.map(({ id, title, url, icon }) => (
        <CmdList key={id}>
          <Cmd>
            <span style={{ marginRight: "10px", display: "inline-flex" }}>
              {icon}
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
      ))}
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/m21power",
    icon: <FaGithub size={16} />,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mesay-lemma",
    icon: <FaLinkedin size={16} />,
  },
  {
    id: 3,
    title: "LeetCode",
    url: "https://leetcode.com/u/m_power/",
    icon: <FaCode size={16} />,
  },
];

export default Socials;
