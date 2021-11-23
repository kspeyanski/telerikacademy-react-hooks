import React from 'react';
import ThemeContext from '../theme-context';

import Article from './article';
import Sidenav from './sidenav';
import TableOfContents from './table-of-contents';

import { useBackgroundColor } from '../hooks/use-background-color';

const Main = () => {
    const backgroundColor = useBackgroundColor('#FF00FF');

    return (
        <div style={{ display: 'flex', backgroundColor: backgroundColor, padding: 16 }}>
            <Sidenav />
            <Article />
            <TableOfContents />
        </div>
    )
}

export default Main