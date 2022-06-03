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
      id: id,
    });
    props.formHandling.onClick();
  };

  return (
    <Form>
      <CloseForm {...props.formHandling}>+</CloseForm>
      <label>{props.labels[0]}</label>
      <input {...firstInput} />
      <button onClick={submitInput}>Add</button>
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
