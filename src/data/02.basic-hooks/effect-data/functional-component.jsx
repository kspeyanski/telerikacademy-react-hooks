import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

const MovableBox = (props) => {
    const [data, setData] = React.useState(null)
    const [page, setPage] = React.useState(1);

    const fetchData = async (wantedPage) => {
        const result = await fetchPage(wantedPage);
        setData(result.data);
    }
    // Fira Code font
    // feature: font ligatures
    React.useEffect(() => {
        fetchData(page)
    }, [page])

    return  (
        <div>
            <input value={page} type="number" onChange={(event) => { setPage(event.target.value)}}/>
            {data?.length
                ? (
                    <div>
                        <h2>Users:</h2>
                        <ul>
                            {data.map((item) => <li key={item.id}>{item.first_name}</li>)}
                        </ul>
                    </div>
                )
                : (<h2>Loading Users</h2>)}
        </div>
    )
}

export default MovableBox;