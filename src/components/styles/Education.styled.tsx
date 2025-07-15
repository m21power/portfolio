import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.75rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #64ffda;
      flex-shrink: 0;
    }
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
    padding-left: 1.625rem;
  }

  .details {
    padding-left: 1.625rem;
    margin-top: 0.5rem;

    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
        align-items: flex-start;

        svg {
          color: #64ffda;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
      }
    }
  }
`;
