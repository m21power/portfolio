import { useContext, useEffect, useState } from "react";
import { termContext } from "../Terminal";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
  ExperienceContainer,
  ExperienceRole,
  ExperienceCompany,
  TechPill,
  ProjectThumbnail,
} from "../styles/Projects.styled";
import { FaServer, FaMobile, FaCar, FaGithub } from "react-icons/fa";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import Usage from "../Usage";

// Add styled components for the modal
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  cursor: default;

  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border: 2px solid #64ffda;
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #64ffda;
  }
`;

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const currentCommand = getCurrentCmdArry(history);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      [...experience, ...projects].forEach(({ id, url }) => {
        id === parseInt(arg[1]) && url && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return (
    <div data-testid="projects">
      {selectedImage && (
        <ModalBackdrop onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <img src={selectedImage} alt="Enlarged view" />
          </ModalContent>
        </ModalBackdrop>
      )}

      <ProjectsIntro>
        My professional journey and notable projects
      </ProjectsIntro>

      {/* Professional Experience */}
      <h3
        className="projects-section-title"
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          color: "#64ffda",
          fontSize: "1.25rem",
          position: "relative",
          display: "inline-block",
          paddingBottom: "0.5rem",
        }}
      >
        Professional Experience
      </h3>
      {experience.map(exp => (
        <ExperienceContainer key={exp.id}>
          <div>
            <ExperienceCompany>
              {exp.icon && (
                <span style={{ marginRight: "10px" }}>{exp.icon}</span>
              )}
              {exp.company}
            </ExperienceCompany>
            <ExperienceRole>{exp.role}</ExperienceRole>
            <div>
              <ul style={{ paddingLeft: "1.2rem", margin: "0.5rem 0" }}>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div style={{ marginTop: "0.5rem" }}>
                {exp.tech.map(t => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
            </div>
          </div>
          {exp.thumbnail && (
            <ProjectThumbnail onClick={() => handleImageClick(exp.thumbnail)}>
              <img src={exp.thumbnail} alt={exp.company} />
            </ProjectThumbnail>
          )}
        </ExperienceContainer>
      ))}

      {/* Projects */}
      <h3
        className="projects-section-title"
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          color: "#64ffda",
          fontSize: "1.25rem",
          position: "relative",
          display: "inline-block",
          paddingBottom: "0.5rem",
        }}
      >
        Projects
      </h3>
      {projects.map(proj => (
        <ProjectContainer key={proj.id}>
          <div>
            <ProjectTitle>
              {`${proj.id}. ${proj.title}`}
              {proj.url && (
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
            </ProjectTitle>
            <ProjectDesc>{proj.desc}</ProjectDesc>
            <div style={{ marginTop: "0.5rem" }}>
              {proj.tech.map(t => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>
          </div>
          {proj.thumbnail && (
            <ProjectThumbnail onClick={() => handleImageClick(proj.thumbnail)}>
              <img src={proj.thumbnail} alt={proj.title} />
            </ProjectThumbnail>
          )}
        </ProjectContainer>
      ))}
    </div>
  );
};

const experience = [
  {
    id: 1,
    company: "Africa To Silicon Valley (A2SV)",
    role: "Backend Developer - Stocket",
    icon: <FaServer />,
    details: [
      "Developed scalable backend services to handle real-time stock market data",
      "Led improvements to backend architecture including middleware integration and error handling optimization",
      "Automated deployments and testing using CI/CD pipelines",
    ],
    tech: ["Golang", "PostgreSQL", "gRPC", "Docker", "CI/CD"],
    url: null,
    thumbnail: null,
  },
  {
    id: 2,
    company: "Africa To Silicon Valley (A2SV)",
    role: "Mobile App Development Intern",
    icon: <FaMobile />,
    details: [
      "Developed mobile apps using Flutter and Dart following TDD principles",
      "Collaborated on app design, testing, and deployment",
      "Contributed to seamless user experience implementation",
    ],
    tech: ["Flutter", "Dart", "Git"],
    url: null,
    thumbnail: null,
  },
  {
    id: 3,
    company: "Golden Ride",
    role: "Mobile App Developer",
    icon: <FaCar />,
    details: [
      "Developed driver-side app with Flutter using Clean Architecture and BLoC",
      "Integrated real-time location updates using Socket.IO and Google Maps API",
      "Managed secure data storage and implemented REST API communication",
    ],
    tech: [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Socket.IO",
      "Google Maps API",
    ],
    url: null,
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1752581130/golden_ride_dn4abj.png",
  },
];

const projects = [
  {
    id: 4,
    title: "Near Me – Campus Social Network",
    desc: "Real-time chat and location-based discovery for campus students with 240+ daily active users.",
    details: [
      "Built high-performance app with seamless real-time interactions",
      "Enabled real-time data sync through event-driven workflows",
      "Implemented features like meme-sharing and geo-tagged posts",
    ],
    tech: ["Flutter", "Golang", "Firestore", "Firebase"],
    url: "https://github.com/m21power/near-me",
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1752581204/438113441-e5a00585-cd2e-4042-b778-b38a38df1c4e.png_dob1wy.png",
  },
  {
    id: 5,
    title: "Shekla – Food Ordering App",
    desc: "Smooth food ordering experience with real-time updates and intuitive UI/UX design.",
    details: [
      "Designed clean and engaging UI/UX focused on user convenience",
      "Integrated real-time order status and updates using WebSockets",
      "Implemented secure authentication and order management with Firebase",
    ],
    tech: ["Flutter", "UI/UX", "WebSocket", "Firebase"],
    url: "https://github.com/m21power/shekla", // replace with actual repo if different
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1752580651/shekla_l925qh.jpg", // replace if you want another
  },
  {
    id: 6,
    title: "E-Food",
    desc: "Scalable platform for managing orders, real-time updates, and food inventory.",
    details: [
      "Developed REST APIs for food ordering and real-time updates",
      "Designed efficient database schema for users and orders",
      "Deployed using Docker for scalability",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "WebSockets"],
    url: "https://github.com/m21power/EFood",
    thumbnail: null,
  },
  {
    id: 7,
    title: "Lingo – Language Practice App",
    desc: "Conversation-based language practice with daily user pairing and 50+ active users.",
    details: [
      "Developed real-time matching system to pair users daily for conversation",
      "Built clean, responsive UI with Flutter for smooth chat experience",
      "Planned AI-powered feedback feature to analyze speaking skills",
    ],
    tech: ["Flutter", "Golang", "PostgreSQL", "Firestore"],
    url: "https://github.com/m21power/lingo-mobile", // change if different
    thumbnail: null,
  },
];

export default Projects;

// Add the following CSS to your global stylesheet or in a CSS module
// If using styled-components, you can convert this to a styled component instead

/*
.projects-section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 1px;
  background-color: #64ffda;
}
*/
