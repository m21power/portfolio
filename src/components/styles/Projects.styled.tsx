// Update your Projects.styled.tsx with these color changes
import styled from "styled-components";

export const ProjectsIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
  color: #e6f1ff; // Light blueish-white for better readability
`;

export const ProjectContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  border-left: 2px solid #64ffda; // Teal accent border
  padding-left: 1rem;
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #ccd6f6;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  a {
    color: inherit;
    margin-left: 10px;
    display: inline-flex;
    transition: color 0.2s ease;

    &:hover {
      color: #64ffda;
    }
  }
`;

export const ProjectDesc = styled.div`
  color: #8892b0; // Lighter gray-blue for descriptions
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
`;

export const ExperienceContainer = styled(ProjectContainer)`
  margin-bottom: 2rem;
`;

export const ExperienceCompany = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccd6f6; // Matching project titles
`;

export const ExperienceRole = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: #8892b0; // Matching project descriptions
  margin: 0.25rem 0 0.5rem 0;
`;

export const TechPill = styled.span`
  display: inline-block;
  background-color: rgba(100, 255, 218, 0.1); // Semi-transparent teal
  color: #64ffda; // Bright teal text
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid rgba(100, 255, 218, 0.3); // Light teal border
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2); // Slightly more opaque on hover
  }
`;

export const ProjectThumbnail = styled.div`
  width: 180px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(100, 255, 218, 0.3); // Matching tech pill border
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(100, 255, 218, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
