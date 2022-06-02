import { ThemeProvider } from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from './Components/Title';

function App() {
  const [theme, setTheme] = useState({
    main: 'purple',
    secondary: 'red',
  });

  const changeTheme = theme => {
    let index;
    const themeLibrary = [
      { main: 'red', secondary: 'blue' },
      { main: 'purple', secondary: 'green' },
      { main: 'pink', secondary: 'black' },
      { main: 'orange', secondary: 'yellow' },
    ];
    themeLibrary.map((obj, arrayIndex) => {
      if (obj.main === theme.main) {
        index = arrayIndex;
      }
    });
    if (index === themeLibrary.length - 1) index = -1;
    setTheme({
      main: themeLibrary[index + 1].main,
      secondary: themeLibrary[index + 1].secondary,
    });
  };

  const useKeyPress = targetKey => {
    useEffect(() => {
      window.addEventListener('keydown', e => {
        changeTheme(theme);
      });
      // return () => {
      //   window.removeEventListener('keydown', e => {
      //     changeTheme(theme);
      //   });
      // };
    }, []);
  };
  const space = useKeyPress('space');

  return (
    <div className="App">
      {space}
      <button
        onClick={e => {
          changeTheme(theme);
        }}
      ></button>
      <ThemeProvider theme={theme}>
        <Title />
        <Button>HEy</Button>
        <RightPartition />
      </ThemeProvider>
    </div>
  );
}

const Button = styled.button`
  background-color: ${props => props.theme.main};
`;

const RightPartition = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  background-color: ${props => props.theme.secondary};
  z-index: -20;
`;

export default App;
