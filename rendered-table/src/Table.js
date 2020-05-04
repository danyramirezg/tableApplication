import React, { Component } from 'react';
import './index.css';
import './Table.css'

export default class Table extends Component {

    render() {
        return (
            <div>
                <h2>Subscribers Table</h2>
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
                <div>
                <button onClick={() => this.props.sortBy('name')}>Sort by name</button>
                <button onClick={() => this.props.sortBy('age')}>Sort by age</button>
                <button onClick={() => this.props.sortBy('sport')}>Sort by sport</button>
                </div>
            </div>
        )
    }
}