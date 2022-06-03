import { useState } from 'react';
import styled from 'styled-components';
import useHover from './Hover';
import SkillsForm from './SkillsForm';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [hovered, isHovered] = useHover(false);

  const [formActive, setFormActive] = useState(false);

  const addSKill = skill => setSkills(prevSkills => [...prevSkills, skill]);

  const showForm = () => setFormActive(true);
  const hideForm = () => setFormActive(false);

  const removeSkill = remove =>
    setSkills(skills.filter(skill => skill.id !== remove.id));

  const displaySkills = skills.map(skill => (
    <SkillBox
      key={skill.id}
      onClick={() => {
        removeSkill(skill);
      }}
    >
      <SkillName>{skill.name}</SkillName>
      <SkillPercentageWrapper>
        <SkillPercentage
          style={{ width: `${skill.percentage}%` }}
        ></SkillPercentage>
      </SkillPercentageWrapper>
    </SkillBox>
  ));

  return (
    <SkillsContainer ref={hovered}>
      {formActive ? (
        <SkillsForm addSkill={addSKill} hideForm={hideForm} />
      ) : null}
      {isHovered ? (
        <AddSkillButton onClick={showForm}>ADD</AddSkillButton>
      ) : null}
      <StyledSkillsHeader>SKILLS</StyledSkillsHeader>
      <SegmentDisplayer>{displaySkills}</SegmentDisplayer>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr;
  grid-template-columns: 1fr;
  grid-area: 3 / 2 / 4 / 3;
  z-index: 1001;
  position: relative;
`;

const StyledSkillsHeader = styled.h3`
  grid-area: 1 / 1 / 2 / 3;
  letter-spacing: 1px;
  transition: all 0.2s ease-in;
  color: #fff;
  justify-self: center;
  align-self: center;
  padding: 5px 10px;
  border-radius: 15px;
  border: 4px solid ${props => props.theme.main};
`;

const SegmentDisplayer = styled.div`
  grid-auto-rows: minmax(5%, 100%);
  display: grid;
  justify-items: center;
`;

const AddSkillButton = styled.button`
  transition: all 0.2s ease-in;
  box-shadow: 0px 5px 5px #333;
  border: 3px solid black;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 15px;
  font-weight: 700;
  color: #fff;
  padding: 6px 10px;
  position: absolute;
  top: 3%;
  left: 5%;
  background-color: ${props => props.theme.main};
  &:hover {
    background-color: #fff;
    color: ${props => props.theme.main};
    &:active {
      transform: translateY(4px);
    }
  }
`;

const SkillBox = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillName = styled.h3`
  transition: all 0.2s ease-in;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.main};
`;

const SkillPercentageWrapper = styled.div`
  border-radius: 10px;
  width: 65%;
  height: 10px;
  border: 2px solid ${props => props.theme.main};
`;

const SkillPercentage = styled.div`
  transition: all 0.2s ease-in;
  border-radius: 10px;
  height: 100%;
  background-color: ${props => props.theme.main};
`;

export default Skills;
