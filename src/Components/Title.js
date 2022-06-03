import styled from 'styled-components';
import { useState } from 'react';

const Title = props => {
  const header = useInput('Steerpike');
  const subHeader = useInput('Learning React');
  const [hovered, setHovered] = useState(false);

  const hoverHandler = () => (hovered ? setHovered(false) : setHovered(true));

  return (
    <StyledTitle>
      <StyledImageHolder />
      <StyledHeaderModal>
        {hovered ? (
          <StyledHeaderInput {...header} onMouseLeave={hoverHandler} />
        ) : (
          <StyledMainHeader onMouseEnter={hoverHandler}>
            {header['value']}
          </StyledMainHeader>
        )}
        {hovered ? (
          <StyledSubHeaderInput {...subHeader} onMouseLeave={hoverHandler} />
        ) : (
          <StyledSubHeader onMouseEnter={hoverHandler}>
            {subHeader['value']}
          </StyledSubHeader>
        )}
      </StyledHeaderModal>
    </StyledTitle>
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

const StyledTitle = styled.div`
  grid-area: title;
  display: grid;
  grid-template-columns: 10% 17% 17% 1fr;
  grid-template-rows: 5% 1fr 5%;
`;

const StyledHeaderModal = styled.div`
  background-color: ${props => props.theme.main};
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
  font-size: 48px;
  grid-area: 2 / 2 / 3 / 3;
  text-align: start;
  align-self: flex-end;
`;

const StyledSubHeader = styled.h2`
  padding: 0;
  margin: 0;
  color: white;
  grid-area: 3 / 2 / 4 / 3;
  text-align: start;
`;

const StyledHeaderInput = styled.input`
  color: white;
  grid-area: 2 / 2 / 3 / 3;
  height: 50%;
  text-align: start;
  background-color: black;
`;

const StyledSubHeaderInput = styled(StyledHeaderInput)`
  grid-area: 3 / 2 / 4 /3;
`;

export default Title;
