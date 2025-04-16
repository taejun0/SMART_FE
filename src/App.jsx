import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/Theme';
import GlobalStyle from '@styles/GlobalStyles';

import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
