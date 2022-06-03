import styled from 'styled-components';
import { useState } from 'react';
import useHover from './Hover';

const SegmentDisplayer = () => {
  const [expSegments, setExpSegments] = useState([]);
  const [eduSegments, setEduSegments] = useState([]);

  return (
    <SegmentsWrapper>
      <Wrapper>
        <WrapperHeader>EDUCATION</WrapperHeader>
      </Wrapper>
      <Wrapper>
        <WrapperHeader>EXPERIENCE</WrapperHeader>
      </Wrapper>
    </SegmentsWrapper>
  );
};

const SegmentsWrapper = styled.div`
  grid-area: segments;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 88% 1fr;
  grid-template-rows: 13% 1fr;
`;

const WrapperHeader = styled.div`
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

export default SegmentDisplayer;
