import { createContext, useContext, useState } from "react";
import { themes } from "../styles/themes";
import PropTypes from "prop-types";

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const ThemeProvider = ({children}) => {

    const[theme, setTheme] = useState(0)
    const seletedTheme = themes[theme]

    return (
        <ThemeContext.Provider value={seletedTheme}>
            <ThemeUpdateContext.Provider value={setTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    return useContext(ThemeContext)
}

export const useThemeUpdate = () =>{
    return useContext(ThemeUpdateContext)
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}