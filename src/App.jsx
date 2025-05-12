import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/Theme';
import GlobalStyle from '@styles/GlobalStyles';

import { useEffect } from 'react';

import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();

    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
