import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

class DataComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            page: 1
        }
    }

    fetchData = async () => {
        const resp = await fetchPage(this.state.page);
        this.setState({ data: resp.data })
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        this.fetchData();
    }

    handlePageChange = (event) => {
        this.setState({ page: event.target.value })
    }

    render() {
        return (
            <div>
                {this.state.data.length
                    ? (
                        <div>
                            <h2>Users:</h2>
                            <ul>
                                {this.state.data.map((user) => <li key={user.id}>{user.first_name}&nbsp;{user.last_name}</li>)}
                            </ul>
                        </div>
                    )
                    : (<h2>No users</h2>)}
                <input type={"number"} onChange={this.handlePageChange} value={this.state.page} />
            </div>
        )
    }
}

export default DataComponent;