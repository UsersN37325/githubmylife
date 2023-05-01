import React, {Component} from 'react';

class Index extends Component {
    componentWillUnmount() {
        alert('tugadi')
    }

    render() {
        const {users} = this.props
        return (
            <div>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Favourite</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {
                                users.map(item => <p>{item.name}</p>)
                            }
                        </td>
                        <td>
                            {
                                users.map(item => <p>{item.age}</p>)
                            }
                        </td><td>
                            {
                                users.map(item => <p>{item.favourity}</p>)
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Index;