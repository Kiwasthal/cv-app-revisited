import { useState } from 'react';
import styled from 'styled-components';

const SKills = () => {
  return (
    <SkillsContainer>
      <StyledSkillsHeader>SKILLS</StyledSkillsHeader>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  display: grid;
  border: 1px solid black;
  grid-template-rows: 20% 1fr;
  grid-area: 3 / 2 / 4 / 3;
  z-index: 1001;
  position: relative;
`;

const StyledSkillsHeader = styled.h3`
  letter-spacing: 1px;
  transition: all 0.2s ease-in;
  color: #fff;
  justify-self: center;
  align-self: center;
  padding: 5px 10px;
  border-radius: 15px;
  border: 4px solid ${props => props.theme.main};
`;

export default SKills;
