import React from 'react';
import { useThemeBackground } from '../hooks/use-theme-background';
import ThemeContext from '../theme-context';

const ThemeChooser = () => {
    const backgroundColor = useThemeBackground('#FF0000');
    const [theme, setTheme] = React.useContext(ThemeContext);

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div style={{ backgroundColor, padding: 8 }}>
            <h2 >Theme: placeholder</h2>
            <button onClick={handleClick}>
                Change Theme
            </button>
        </div>
    )

}

export default ThemeChooser;