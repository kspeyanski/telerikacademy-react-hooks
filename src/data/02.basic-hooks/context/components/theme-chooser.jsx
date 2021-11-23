import React from 'react';
import ThemeContext from '../theme-context';
import { useBackgroundColor } from '../hooks/use-background-color';
// import { contrast } from '../../../../utils/contrast';

const LocalizationContext = React.createContext('bg-BG');

class ThemeChooser extends React.Component {
    
    
    render() {
        return (
            <LocalizationContext.Consumer>
            {(local) => (
            <ThemeContext.Consumer>
                {([theme, setTheme]) => (
                   
                            <div style={{ backgroundColor: '#ff0000', padding: 8 }}>
                            <h2 >Theme: {theme}</h2>
                            <button onClick={() => {
                                setTheme(theme === 'light' ? 'dark' : 'light')
                            }}>
                                Change Theme
                            </button>
                        </div>
                    
                )}
            </ThemeContext.Consumer>
                        )}
                    </LocalizationContext.Consumer>
        )
    }
}

export default ThemeChooser;