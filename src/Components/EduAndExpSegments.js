import styled from 'styled-components';
import { useState } from 'react';
import useHover from './Hover';
import SegmentsForm from './SegmentsForm';

const SegmentDisplayer = () => {
  const expSegs = useSegments([]);
  const eduSegs = useSegments([]);
  const startingValues = { first: '', second: '', third: '', fourth: '' };
  const eduLabels = ['FROM-TO', 'DEGREE', 'UNIVERSITY', 'DESCRIPTION'];
  const expLabels = ['FROM-TO', 'COMPANY', 'POSITION', 'DESCRIPTION'];

  const [educationHovered, isEducationHovered] = useHover(false);
  const [experienceHovered, isExperienceHovered] = useHover(false);

  const eduFormHandler = useForm(false);
  const expFormHandler = useForm(false);

  return (
    <SegmentsWrapper>
      <Wrapper ref={educationHovered}>
        <WrapperHeader>EDUCATION</WrapperHeader>
        {isEducationHovered ? (
          <AddButton {...eduFormHandler}>ADD</AddButton>
        ) : null}
        {eduFormHandler.active ? (
          <SegmentsForm
            formHandling={eduFormHandler}
            addSegment={eduSegs.addSegment}
            values={startingValues}
            labels={eduLabels}
          />
        ) : null}
        <SegmentsContainer>{eduSegs.displaySegments}</SegmentsContainer>
      </Wrapper>
      <Wrapper ref={experienceHovered}>
        <WrapperHeader>EXPERIENCE</WrapperHeader>
        {isExperienceHovered ? (
          <AddButton {...expFormHandler}>ADD</AddButton>
        ) : null}
        {expFormHandler.active ? (
          <SegmentsForm
            formHandling={expFormHandler}
            addSegment={expSegs.addSegment}
            values={startingValues}
            labels={expLabels}
          />
        ) : null}
        <SegmentsContainer>{expSegs.displaySegments}</SegmentsContainer>
      </Wrapper>
    </SegmentsWrapper>
  );
};

const useSegments = initialValue => {
  const [value, setValue] = useState(initialValue);

  const addSegment = segment =>
    setValue(prevSegments => [...prevSegments, segment]);

  const removeSegment = remove =>
    setValue(value.filter(segment => segment.id !== remove.id));

  const displaySegments = value.map(segment => (
    <SegmentBox key={segment.id}>
      {segment.first}
      <button
        onClick={() => {
          removeSegment(segment);
        }}
      ></button>
    </SegmentBox>
  ));

  return {
    value,
    addSegment,
    displaySegments,
  };
};

const useForm = initialValue => {
  const [active, setActive] = useState(initialValue);
  const handleClick = () => setActive(!active);
  return {
    active,
    onClick: handleClick,
  };
};

const SegmentsWrapper = styled.div`
  grid-area: segments;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 83% 1fr;
  grid-template-rows: 13% 1fr;
  position: relative;
`;

const WrapperHeader = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  transition: all 0.2s ease-in;
  color: #fff;
  text-shadow: 3px 2px 3px ${props => props.theme.secondary};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 3px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  height: 100%;
  background-color: ${props => props.theme.main};
`;

const AddButton = styled.button`
  position: absolute;
  right: 1%;
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

const SegmentsContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;

const SegmentBox = styled.div`
  background-color: red;
  height: 20%;
`;

export default SegmentDisplayer;
