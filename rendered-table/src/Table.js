import React, { Component } from 'react';

export default class Table extends Component {

    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Sport</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                                this.props.data.map((item) => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.sport}</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
                <buttom onClick={() => this.props.sortBy('name')}>Sort by name</buttom>
                <button onClick={() => this.props.sortBy('age')}>Sort by age</button>
            </div>
        )
    }
}