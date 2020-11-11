import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

const MovableBox = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const fetchData = async (newPage) => {
        const resp = await fetchPage(newPage);
        setData(resp.data);
    }

    const handlePageChange = (event) => {
        setPage(event.target.value)
    }

    React.useEffect(() => fetchData(page), [page])

    return (
        <div>
            {data.length
                ? (
                    <div>
                        <h2>Users:</h2>
                        <ul>
                            {data.map((user) => <li>{user.first_name}&nbsp;{user.last_name}</li>)}
                        </ul>
                    </div>
                )
                : (<h2>No Users</h2>)}
            <input type={"number"} onChange={handlePageChange} value={page} />

        </div>
    )
}

export default MovableBox;