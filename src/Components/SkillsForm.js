import styled from 'styled-components';
import { useState } from 'react';
import uniqid from 'uniqid';

const SkillsForm = props => {
  const skillName = useInput('');
  const skillPercentage = useInput('');
  const { addSkill, hideForm } = props;
  const clickHandler = () => {
    let id = uniqid();
    if (skillPercentage.value > 100)
      addSkill({ name: skillName.value, percentage: 100 });
    else
      addSkill({
        name: skillName.value,
        percentage: skillPercentage.value,
        id: id,
      });
    hideForm();
  };

  return (
    <StyledSkillsForm>
      <CloseForm onClick={hideForm}>+</CloseForm>
      <InputWrappers>
        <InputHeader>SKILL</InputHeader>
        <FormInput {...skillName} />
      </InputWrappers>
      <InputWrappers>
        <InputHeader>PERCENTAGE</InputHeader>
        <FormInput {...skillPercentage} />
      </InputWrappers>
      <CreateButton onClick={clickHandler}>CREATE</CreateButton>
    </StyledSkillsForm>
  );
};

export default SkillsForm;

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => setValue(e.target.value);

  return {
    value,
    onChange: handleChange,
  };
};

const StyledSkillsForm = styled.div`
  grid-area: 1 / 1 / 4 / 3;
  z-index: 1002;
  border-radius: 20px;
  background-color: ${props => props.theme.main};
  position: relative;
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputHeader = styled.h5`
  margin: 0;
  color: ${props => props.theme.secondary};
`;

const InputWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.main};
  font-size: 14px;
  outline: none;
  border: 1px solid ${props => props.theme.secondary};
  transition: all 0.2s ease-in;
  &:hover {
    border: 1px solid #fff;
    &:focus {
      padding: 4px;
      transform: scale(1.1);
    }
  }
`;

const CreateButton = styled.button`
  padding: 8px 5px;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  outline: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.main};
  &:hover {
    color: ${props => props.theme.secondary};
    background-color: #fff;
  }
`;

const CloseForm = styled.div`
  position: absolute;
  right: 5%;
  top: 2%;
  font-size: 28px;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.2s ease-in;
  color: ${props => props.theme.secondary};
  &:hover {
    transform: scale(1.3) rotate(45deg);
    color: #fff;
  }
`;
