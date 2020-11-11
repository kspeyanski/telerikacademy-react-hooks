import React from 'react';

export const useForceUpdate = () => {
    const [, setForce] = React.useState(false);

    const forceUpdate = () => { setForce(f => !f) }

    return forceUpdate
}