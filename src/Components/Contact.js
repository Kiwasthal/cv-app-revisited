import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faGlobe,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <StyledContactContainer>
      <StyledContactHeader>CONTACT</StyledContactHeader>
      <StyledSectionsWrapper>
        <StyledContactSection>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{
              gridArea: 'icon',
              justifySelf: 'center',
              alignSelf: 'center',
              height: '40px',
            }}
          />
        </StyledContactSection>
        <StyledContactSection>
          <StyledSectionHeader>Adress</StyledSectionHeader>
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              gridArea: 'icon',
              justifySelf: 'center',
              alignSelf: 'center',
              height: '40px',
            }}
          />
        </StyledContactSection>
        <StyledContactSection>
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              gridArea: 'icon',
              justifySelf: 'center',
              alignSelf: 'center',
              height: '35px',
            }}
          />
        </StyledContactSection>
      </StyledSectionsWrapper>
    </StyledContactContainer>
  );
};

const StyledContactContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr;
  grid-area: 2 / 2 / 3 / 3;
  border: 1px solid black;
  z-index: 1001;
`;

const StyledContactHeader = styled.h2`
  color: #fff;
  justify-self: center;
  align-self: center;
  padding: 5px 3px;
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
  align-self: center;
  margin: 0;
  color: #fff;
  grid-area: header;
`;

export default Contact;
