import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';
import { useForceUpdate } from '../../../utils/';

const DataComponent = () => {
    const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const forceUpdate = useForceUpdate();

    const fetchData = React.useCallback(async () => {
        console.log('fetch data')
        const resp = await fetchPage(page);

        setData(resp.data);
    }, [page])

    const handlePageChange = (event) => {
        setPage(event.target.value);
    }

    React.useEffect(() => fetchData(), [fetchData])

    console.log('re-render')

    return (
        <div>
            <button onClick={() => forceUpdate()}>Force Update</button>
            {data
                ? (
                    <div>
                        <h2>Users:</h2>
                        <ul>
                            {data.map((user) => <li>{user.first_name}&nbsp;{user.last_name}</li>)}
                        </ul>
                        <h3>Page:</h3>
                        <input type="number" min={1} max={2} value={page} onChange={handlePageChange} />
                    </div>
                )
                : (<h2>Loading Users</h2>)}
        </div>
    )
}

export default DataComponent;