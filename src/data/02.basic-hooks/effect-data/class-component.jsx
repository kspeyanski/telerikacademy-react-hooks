import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

class DataComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    fetchData = async () => {
        const response = await fetchPage(1);
        this.setState({ data: response.data })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                {this.state.data.length
                    ? (
                        <div>
                            <h2>Users:</h2>
                            <ul>
                                {this.state.data.map((item) => <li key={item.id}>{item.first_name}</li>)}
                            </ul>
                        </div>
                    )
                    : (<h2>Loading Users</h2>)}
            </div>
        )
    }
}

export default DataComponent;