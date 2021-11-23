import React from 'react';
// import { contrast } from '../../../../utils/contrast';
import { useBackgroundColor } from '../hooks/use-background-color';

const Sidenav = () => {
    const backgroundColor = useBackgroundColor('#0000FF');

    return (
        <section style={{backgroundColor: backgroundColor}}>
            <ul>
                <li>Lorem, ipsum.</li>
                <li>Quae, sit?</li>
                <li>Maxime, assumenda.</li>
                <li>Quos, dignissimos!</li>
                <li>Harum, itaque.</li>
            </ul>

        </section>
    )
}

export default Sidenav