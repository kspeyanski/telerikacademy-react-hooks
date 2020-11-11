import React from 'react';
import ThemeChooser from './theme-chooser';
import { useThemeBackground } from '../hooks/use-theme-background';

const TableOfContents = () => {
    const backgroundColor = useThemeBackground('#00FF00');

    return (
        <div style={{ backgroundColor, padding: 16 }}>
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