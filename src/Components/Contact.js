import styled, { ThemeContext } from 'styled-components';
import { useState, useRef, useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faGlobe,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const addressMain = useInput("123 Athen's street");
  const addressSecondary = useInput('Greece, Athens');
  const webMain = useInput('www.example.com');
  const webSecondary = useInput('www.example@gmail.com');
  const phoneMain = useInput('210110100010');
  const phoneSecondary = useInput('690023112');
  const [addressHover, isAddressHovered] = useHover(false);
  const [webHover, isWebHovered] = useHover(false);
  const [phoneHover, isPhoneHovered] = useHover(false);

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  return (
    <StyledContactContainer>
      <StyledContactHeader>CONTACT</StyledContactHeader>
      <StyledSectionsWrapper>
        <StyledContactSection ref={addressHover}>
          <StyledSectionHeader>Address</StyledSectionHeader>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{
              gridArea: 'icon',
              justifySelf: 'center',
              alignSelf: 'center',
              height: '40px',
              color: `${themeContext.main}`,
            }}
          />
          {isAddressHovered ? (
            <StyledInput {...addressMain} />
          ) : (
            <UpperText>{addressMain['value']}</UpperText>
          )}
          {isAddressHovered ? (
            <StyledInput {...addressSecondary} />
          ) : (
            <BottomText>{addressSecondary['value']}</BottomText>
          )}
        </StyledContactSection>
        <StyledContactSection ref={webHover}>
          <StyledSectionHeader>Web</StyledSectionHeader>
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              gridArea: 'icon',
              justifySelf: 'center',
              alignSelf: 'center',
              height: '40px',
              color: `${themeContext.main}`,
            }}
          />
          {isWebHovered ? (
            <StyledInput {...webMain} />
          ) : (
            <UpperText>{webMain['value']}</UpperText>
          )}
          {isWebHovered ? (
            <StyledInput {...webSecondary} />
          ) : (
            <BottomText>{webSecondary['value']}</BottomText>
          )}
        </StyledContactSection>
        <StyledContactSection ref={phoneHover}>
          <StyledSectionHeader>Phone</StyledSectionHeader>
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              gridArea: 'icon',
              justifySelf: 'center',
              alignSelf: 'center',
              height: '35px',
              color: `${themeContext.main}`,
            }}
          />
          {isPhoneHovered ? (
            <StyledInput {...phoneMain} />
          ) : (
            <UpperText>{phoneMain['value']}</UpperText>
          )}
          {isPhoneHovered ? (
            <StyledInput {...phoneSecondary} />
          ) : (
            <BottomText>{phoneSecondary['value']}</BottomText>
          )}
        </StyledContactSection>
      </StyledSectionsWrapper>
    </StyledContactContainer>
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

function useHover() {
  const [value, setValue] = useState(false);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);
  const ref = useRef();

  const callbackRef = useCallback(
    node => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
}

const StyledContactContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr;
  grid-area: 2 / 2 / 3 / 3;
  z-index: 1001;
`;

const StyledContactHeader = styled.h3`
  color: #fff;
  justify-self: center;
  align-self: center;
  padding: 5px 10px;
  border-radius: 15px;
  border: 4px solid ${props => props.theme.main};
`;

const StyledSectionsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const StyledContactSection = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'icon header'
    'icon informationFirst'
    'icon  informationSecond';
`;

const StyledSectionHeader = styled.h5`
  justify-self: flex-start;
  align-self: flex-end;
  margin: 0;
  color: #fff;
  grid-area: header;
`;

const UpperText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
  align-self: center;
  justify-self: flex-start;
  grid-area: informationFirst;
`;

const BottomText = styled(UpperText)`
  grid-area: informationSecond;
  align-self: flex-start;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 50%;
  align-self: center;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.secondary};
  font-size: 14px;
  outline: none;
  border: 1px solid ${props => props.theme.main};
  transition: all 0.2s ease-in;
  &:hover {
    border: 1px solid black;
    &:focus {
      padding: 4px;
      transform: scale(1.1);
    }
  }
`;

export default Contact;
