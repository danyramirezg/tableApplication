import React, { Component } from 'react';
import Table from './Table';
import data from './subscribers.json'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {

    if (key === "age") {
      this.setState({
        data: data.sort((a, b) => a.age < b.age ? 1 : -1)
      })
      console.log(this.state.data);
    } else if (key === "name") {
      this.setState({
        data: data.sort((a, b) => a.name > b.name ? 1 : -1)
      })
      console.log(this.state.data);
    } else if (key === "sport") {
      this.setState({
        data: data.sort((a, b) => a.sport > b.sport ? 1 : -1)
      })
      console.log(this.state.data);
    }
  }

  render() {
    return <Table
      data={this.state.data}
      sortBy={this.sortBy}
    />
  }
}
