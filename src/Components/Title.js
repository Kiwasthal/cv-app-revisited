import styled from 'styled-components';
import { useState } from 'react';
import useHover from './Hover';

const Title = props => {
  const header = useInput('Steerpike');
  const subHeader = useInput('Learning React');
  const [hovered, isHovered] = useHover(false);
  const [imagehovered, isImageHovered] = useHover(false);
  const [image, setImage] = useState(null);

  const ImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <StyledTitle>
      <StyledImageHolder
        style={{ backgroundImage: `url(${image})` }}
        ref={imagehovered}
      >
        {isImageHovered ? (
          <ImgLabel htmlFor="img">Upload Image</ImgLabel>
        ) : null}
        <input
          id="img"
          type="file"
          onChange={ImageChange}
          style={{ display: 'none' }}
        />
      </StyledImageHolder>
      <StyledHeaderModal ref={hovered}>
        {isHovered ? (
          <StyledHeaderInput {...header} />
        ) : (
          <StyledMainHeader>{header['value']}</StyledMainHeader>
        )}
        {isHovered ? (
          <StyledSubHeaderInput {...subHeader} />
        ) : (
          <StyledSubHeader>{subHeader['value']}</StyledSubHeader>
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
  transition: all 0.2s ease-in;
  background-color: ${props => props.theme.main};
  grid-area: 2 / 3 / 3 /5;
  height: 55%;
  align-self: center;
  display: grid;
  grid-template-rows: 15% 40% 30% 15%;
  grid-template-columns: 30% 1fr 10%;
`;

const StyledImageHolder = styled.div`
  transition: all 0.2s ease-in;
  border-radius: 200px;
  grid-area: 2 / 2 / 3 / 4;
  border: 10px solid black;
  z-index: 1001;
  background-color: ${props => props.theme.secondary};
  position: relative;
  background-size: 100%;
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
  align-self: center;
  grid-area: 2 / 2 / 3 /3;
  width: 90%;
  height: 50%;
  align-self: center;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.main};
  font-size: 18px;
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

const StyledSubHeaderInput = styled(StyledHeaderInput)`
  grid-area: 3 / 2 / 4 /3;
  align-self: flex-start;
`;

const ImgLabel = styled.label`
  position: absolute;
  left: 23%;
  font-weight: 600;
  box-shadow: 0px 3px 5px black;
  top: 40%;
  cursor: pointer;
  background-color: ${props => props.theme.main};
  color: #fff;
  padding: 10px 5px;
  border: 3px solid black;
`;

export default Title;
