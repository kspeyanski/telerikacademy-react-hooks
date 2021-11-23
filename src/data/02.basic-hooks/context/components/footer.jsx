import React from 'react';
import { useBackgroundColor } from '../hooks/use-background-color';

const Footer = () => {
    const backgroundColor = useBackgroundColor('#FFFF00');
    return (<div style={{backgroundColor}}>footer</div>);
}
export default Footer;