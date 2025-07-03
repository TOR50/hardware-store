import styled from "styled-components";

const MoreSection = styled.section`
  text-align: center;
  margin-top: 6rem;
  & h4 {
    font-size: 2.6rem;
    text-transform: uppercase;
  }
  & p {
    max-width: 60rem;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;

const MoreInfo = () => {
  return (
    <MoreSection>
      <h4>This is a React website</h4>
      <p>
        Hardware store is a E commerce website created with React 
        and styled with styled-components. It is a project to practice
        and improve the knowledge of React and to showcase as my personal project.
      </p>
      <p>
        I have taken inspiration from the internet and created this website 
        The colour and the design of the website is inspired by the HOME DEPOT website.
      </p>
      <p>
        Project for Gokboru Front-end course submission.
        -by Rauhan Kumar Roy
      </p>
    </MoreSection>
  );
};

export default MoreInfo;
