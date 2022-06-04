import styled from 'styled-components';
import uniqid from 'uniqid';
import { useState } from 'react';

const SegmentsForm = props => {
  const firstInput = useInput(props.values.first);
  const secondInput = useInput(props.values.second);
  const thirdInput = useInput(props.values.third);
  const fourthInput = useInput(props.values.fourth);

  const submitInput = () => {
    let id = uniqid();
    props.addSegment({
      first: firstInput.value,
      second: secondInput.value,
      third: thirdInput.value,
      fourth: fourthInput.value,
      names: [
        props.labels[0],
        props.labels[1],
        props.labels[2],
        props.labels[3],
      ],
      id: id,
    });
    props.formHandling.onClick();
  };

  return (
    <Form>
      <CloseForm {...props.formHandling}>+</CloseForm>
      <InputWrapper>
        <InputHeader>{props.labels[0]}</InputHeader>
        <FormInput {...firstInput} />
      </InputWrapper>
      <InputWrapper>
        <InputHeader>{props.labels[1]}</InputHeader>
        <FormInput {...secondInput} />
      </InputWrapper>
      <InputWrapper>
        <InputHeader>{props.labels[2]}</InputHeader>
        <FormInput {...thirdInput} />
      </InputWrapper>
      <InputWrapper>
        <InputHeader>{props.labels[3]}</InputHeader>
        <FormInput {...fourthInput} />
      </InputWrapper>
      <CreateButton onClick={submitInput}>Add</CreateButton>
    </Form>
  );
};

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => setValue(e.target.value);

  return {
    value,
    onChange: handleChange,
  };
};

export default SegmentsForm;

const Form = styled.div`
  transition: all 0.2s ease-in;
  grid-area: 1 / 1 / 4 / 3;
  z-index: 1001;
  justify-self: flex-end;
  box-shadow: 3px 5px 5px ${props => props.theme.secondary};
  margin-right: 10px;
  border-radius: 10px;
  height: 90%;
  width: 80%;
  background-color: ${props => props.theme.main};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
`;

const CloseForm = styled.div`
  position: absolute;
  right: 5%;
  top: 2%;
  font-size: 32px;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.2s ease-in;
  color: ${props => props.theme.secondary};
  &:hover {
    transform: scale(1.3) rotate(45deg);
    color: #fff;
  }
`;

const FormInput = styled.input`
  max-width: 100%;
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

const InputHeader = styled.h5`
  margin: 0;
  color: ${props => props.theme.secondary};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateButton = styled.button`
  padding: 8px 5px;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  outline: none;
  width: 50%;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.main};
  &:hover {
    color: ${props => props.theme.secondary};
    background-color: #fff;
  }
`;
