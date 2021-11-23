import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';
    
const DataComponent = () => {
    const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(1);

    const handlePageChange = React.useCallback(
        (event) => {
            setPage(event.target.value)
        },
        []
    )

    const fetchData = React.useCallback(
        async () => {
            const resp = await fetchPage(page);
            setData(resp.data);
        },
        [page]
    )

    React.useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            {data
                ? (
                    <div>
                        <h2>Users:</h2>
                        <ul>
                            {data.map((user) => <li key={user.first_name}>{user.first_name}&nbsp;{user.last_name}</li>)}
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