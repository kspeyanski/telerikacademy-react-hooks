import React from 'react';
import { useBackgroundColor } from '../hooks/use-background-color';
// import { contrast } from '../../../../utils/contrast';

const Article = () => {
    const backgroundColor = useBackgroundColor('#FFFFFF');
    return (
        <article
            style={{ backgroundColor, padding: 16 }}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem aliquam porro exercitationem soluta sapiente animi enim provident totam iure consequuntur ducimus maiores earum ad incidunt magnam, veniam voluptas suscipit?
        </article>)
}

export default Article