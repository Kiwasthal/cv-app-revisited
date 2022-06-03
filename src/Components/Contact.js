import styled from 'styled-components';

const Contact = () => {
  return (
    <StyledContactContainer>
      <StyledContactHeader>CONTACT</StyledContactHeader>
      <StyledSectionsWrapper />
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
  color: ${props => props.theme.main};
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

export default Contact;
