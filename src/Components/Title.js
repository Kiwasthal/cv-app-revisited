import styled from 'styled-components';
import { useState } from 'react';

const Title = props => {
  const [title, setTitle] = useState('Steerpike');
  const [hovered, setHovered] = useState(false);
  const getTitleInput = e => setTitle(e.target.value);

  const hoverHandler = () => (hovered ? setHovered(false) : setHovered(true));

  return (
    <StyledTitle>
      <StyledImageHolder />
      <StyledHeaderModal>
        {hovered ? (
          <StyledMainInput
            onMouseLeave={hoverHandler}
            value={title}
            onChange={getTitleInput}
          />
        ) : (
          <StyledMainHeader onMouseEnter={hoverHandler}>
            {title}
          </StyledMainHeader>
        )}
      </StyledHeaderModal>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  grid-area: title;
  background-color: red;
  display: grid;
  grid-template-columns: 10% 17% 17% 1fr;
  grid-template-rows: 5% 1fr 5%;
`;

const StyledHeaderModal = styled.div`
  background-color: purple;
  grid-area: 2 / 3 / 3 /5;
  height: 55%;
  align-self: center;
  display: grid;
  grid-template-rows: 15% 40% 30% 15%;
  grid-template-columns: 30% 1fr 10%;
`;

const StyledImageHolder = styled.div`
  border-radius: 200px;
  grid-area: 2 / 2 / 3 / 4;
  border: 10px solid black;
  z-index: 1001;
  background-color: yellow;
`;

const StyledMainHeader = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
  grid-area: 2 / 2 / 3 / 3;
  text-align: start;
`;

const StyledMainInput = styled.input`
  color: white;
  grid-area: 2 / 2 / 3 / 3;
  height: 50%;
  text-align: start;
  background-color: black;
`;

export default Title;
