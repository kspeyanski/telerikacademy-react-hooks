import React from 'react';
// import { contrast } from '../../../../utils/contrast';
import ThemeChooser from './theme-chooser';
import {useBackgroundColor} from '../hooks/use-background-color';

const TableOfContents = () => {
    //Boris

    const backgroundColor = useBackgroundColor('#00FF00');

    return (
        <div style={{ backgroundColor: backgroundColor, padding: 16 }}>
            <ThemeChooser />
            <ul>
                <li>Lorem.</li>
                <li>Facilis.</li>
                <li>Possimus?</li>
                <li>Recusandae?</li>
                <li>Vel.</li>
            </ul>

        </div>
    )
}

export default TableOfContents