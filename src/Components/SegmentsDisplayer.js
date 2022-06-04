import styled from 'styled-components';
import { useState } from 'react';
import EditingForm from './EditingForm';
import useHover from './Hover';

const SegmentsDisplayer = props => {
  const [SegmentHovered, isSegmentHovered] = useHover(false);
  const { origin, removeOrigin, originIndex, editOrigin } = props;

  const formHandler = useForm(false);
  console.log(formHandler.active);

  const handleRemove = () => removeOrigin(origin);

  return (
    <SegmentBox ref={SegmentHovered}>
      <SegmentDate>{origin.first}</SegmentDate>
      <SegmentDegree>{origin.second}</SegmentDegree>
      <SegmentUniversity>{origin.third}</SegmentUniversity>
      <SegmentInformation>{origin.fourth}</SegmentInformation>
      <SegmentDesginMarkContainer />
      {formHandler.active ? (
        <EditingForm
          formHandling={formHandler}
          edit={editOrigin}
          index={originIndex}
          values={origin}
          labels={origin.names}
        ></EditingForm>
      ) : null}
      {isSegmentHovered ? (
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      ) : null}
      {isSegmentHovered ? <EditButton {...formHandler}>Edit</EditButton> : null}
    </SegmentBox>
  );
};

export default SegmentsDisplayer;

const useForm = initialValue => {
  const [active, setActive] = useState(initialValue);
  const handleClick = () => setActive(!active);
  return {
    active,
    onClick: handleClick,
  };
};

const SegmentBox = styled.div`
  display: grid;
  grid-template-columns: 20% 30% 1fr;
  height: 20%;
  position: relative;
`;

const SegmentDesginMarkContainer = styled.div`
  transition: all 0.2s ease-in;
  grid-area: 1 / 1 / 3 / 2;
  height: 36%;
  width: 20%;
  background-color: ${props => props.theme.main};
  align-self: center;
  justify-self: center;
`;

const SegmentDate = styled.p`
  grid-area: 1 / 2 / 2 / 3;
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

const SegmentDegree = styled.p`
  grid-area: 2 / 2 / 3 / 3;
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const SegmentUniversity = styled.p`
  grid-area: 1 / 3 / 2 / 4;
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const SegmentInformation = styled.p`
  grid-area: 2 / 3 / 3 / 4;
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
`;

const RemoveButton = styled.button`
  position: absolute;
  right: 1%;
  transition: all 0.2s ease-in;
  box-shadow: 0px 8px 5px ${props => props.theme.secondary};
  outline: none;
  border: none;
  font-size: 8px;
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

const EditButton = styled(RemoveButton)`
  left: 0px;
  width: 10%;
`;
