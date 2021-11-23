import React from 'react';
import { contrast } from '../../../../utils/contrast';
import ThemeContext from '../theme-context';

export const useBackgroundColor = (color) => {
  const [theme] = React.useContext(ThemeContext);

  return theme === 'light'
    ? contrast(color, 0.2)
    : contrast(color, -0.2);
}
