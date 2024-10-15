import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './context/global.jsx'
import { ThemeProvider, useTheme } from './context/themeContext.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <ThemeProvider>
        <StyledThemeProvider theme={useTheme}>
          <App />
        </StyledThemeProvider>
      </ThemeProvider>
    </GlobalProvider>
  </StrictMode>
)
