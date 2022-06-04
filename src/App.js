import { ThemeProvider } from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from './Components/Title';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import SegmentControl from './Components/SegmentsControl';

function App() {
  const [theme, setTheme] = useState({
    main: '#94a3b8',
    secondary: '#4b5563',
  });

  useEffect(() => {
    const changeTheme = e => {
      if (e.keyCode !== 32) return;
      let index;
      const themeLibrary = [
        { main: '#94a3b8', secondary: '#4b5563' },
        { main: '#0f766e', secondary: '#701a75' },
        { main: '#737373', secondary: '#44403c' },
        { main: '#f87171', secondary: '#7f1d1d' },
        { main: '#fb923c', secondary: '#9a3412' },
        { main: '#fbbf24', secondary: '#a16207' },
        { main: '#84cc16', secondary: '#365314' },
        { main: '#2dd4bf', secondary: '#155e75' },
        { main: '#60a5fa', secondary: '#075985' },
        { main: '#a855f7', secondary: '#581c87' },
        { main: '#e879f9', secondary: '#701a75' },
        { main: '#fda4af', secondary: '#9f1239' },
      ];
      themeLibrary.map((themes, arrayIndex) =>
        themes.main === theme.main ? (index = arrayIndex) : themes
      );
      if (index === themeLibrary.length - 1) index = -1;
      setTheme({
        main: themeLibrary[index + 1].main,
        secondary: themeLibrary[index + 1].secondary,
      });
    };
    window.addEventListener('keydown', changeTheme);
    return () => window.removeEventListener('keydown', changeTheme);
  }, [theme]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Title />
        <Partition />
        <Contact />
        <Skills />
        <SegmentControl />
      </ThemeProvider>
    </div>
  );
}

const Partition = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  background-color: ${props => props.theme.secondary};
  z-index: -20;
`;

export default App;
