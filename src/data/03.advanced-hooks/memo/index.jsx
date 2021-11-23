import React from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './components/main';

import ThemeContext from './theme-context';
import { useForceUpdate } from '../../../utils/index';

const App = () => {
    const [theme, setTheme] = React.useState('light');
    const forceUpdate = useForceUpdate();
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <button onClick={() => forceUpdate()}>force Update</button>
            <div style={{ backgroundColor: '#000000', padding: 16 }}>
                <Navbar />
                <Main />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App;
