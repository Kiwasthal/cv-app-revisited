import styled from 'styled-components';
import { useState } from 'react';

const EditingForm = props => {
  const { formHandling, edit, index, values, labels } = props;

  const firstInput = useInput(values.first);
  const secondInput = useInput(values.second);
  const thirdInput = useInput(values.third);
  const fourthInput = useInput(values.fourth);

  const handler = () => {
    console.log(index, firstInput.value);
    edit(
      index,
      firstInput.value,
      secondInput.value,
      thirdInput.value,
      fourthInput.value
    );
    formHandling.onClick();
  };

  return (
    <Form>
      <CloseForm {...formHandling}>+</CloseForm>
      <Wrapper>
        <Label>{labels[0]}</Label>
        <Input {...firstInput} />
      </Wrapper>
      <Wrapper>
        <Label>{labels[1]}</Label>
        <Input {...secondInput} />
      </Wrapper>
      <Wrapper>
        <Label>{labels[2]}</Label>
        <Input {...thirdInput} />
      </Wrapper>
      <Wrapper>
        <Label>{labels[3]}</Label>
        <Input {...fourthInput} />
      </Wrapper>
      <AddButton onClick={handler}>EDIT</AddButton>
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

const Form = styled.div`
  transition: all 0.2s ease-in;
  grid-area: 1 / 1 / 4 / 3;
  z-index: 1001;
  justify-self: flex-end;
  box-shadow: 3px 5px 5px ${props => props.theme.main};
  margin-right: 10px;
  border-radius: 10px;
  height: 350px;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  position: absolute;
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
  color: ${props => props.theme.main};
  &:hover {
    transform: scale(1.3) rotate(45deg);
    color: #fff;
  }
`;

const Input = styled.input`
  width: 80%;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.secondary};
  font-size: 14px;
  outline: none;
  border: 1px solid ${props => props.theme.main};
  transition: all 0.2s ease-in;
  &:hover {
    border: 1px solid #fff;
    &:focus {
      padding: 4px;
      transform: scale(1.1);
    }
  }
`;

const Label = styled.label`
  color: ${props => props.theme.main};
`;

const Wrapper = styled.div`
  gap: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled.button`
  transition: all 0.2s ease-in;
  box-shadow: 0px 8px 5px ${props => props.theme.secondary};
  outline: none;
  border: none;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 15px;
  font-weight: 700;
  color: #fff;
  padding: 5px 12px;
  background-color: ${props => props.theme.main};
  &:hover {
    background-color: #fff;
    color: ${props => props.theme.main};
    &:active {
      transform: translateY(4px);
    }
  }
`;

export default EditingForm;
