import React from 'react';
// import { contrast } from '../../../../utils/contrast';
import { useBackgroundColor } from '../hooks/use-background-color';

const Navbar = () => {
    const backgroundColor = useBackgroundColor('#FFA500');

    return (<nav style={{ backgroundColor }}>navigation</nav>)
}

export default Navbar