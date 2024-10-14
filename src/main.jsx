import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { ThemeProvider, useTheme } from './context/themeContext.jsx'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
      <ThemeProvider>
        <StyledThemeProvider theme={useTheme}>
          <App />
        </StyledThemeProvider>
      </ThemeProvider>
  </StrictMode>
)
