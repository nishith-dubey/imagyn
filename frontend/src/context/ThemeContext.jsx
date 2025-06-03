import React, { Children, createContext } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme='light';

  return(
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}