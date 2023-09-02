import React from 'react';

import { ColorsModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Topbar from '../src/scenes/global/Topbar';

const App = () => {
  const [theme, colorMode] = useMode();
  console.log(theme, colorMode);
  return (
    <ColorsModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="content">
            <Topbar></Topbar>
          </div>
        </div>
      </ThemeProvider>
    </ColorsModeContext.Provider>
  );
};

export default App;
