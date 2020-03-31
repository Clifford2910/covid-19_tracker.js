import _ from 'lodash'
import React, { Component } from 'react'
import './table.css';
import { Table } from 'semantic-ui-react'

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    column: null,
    data: [],
    direction: null,
  }

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    let allCountryRows = []
    for (var i = 1; i < 183; i++) {
      allCountryRows.push(
      <Table.Row className="bodyRow" key={this.props.cc[i].title}>
        <Table.Cell className="bodyCell">{this.props.cc[i].title}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_cases}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_recovered}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_deaths}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_active_cases}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_serious_cases}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_new_cases_today}</Table.Cell>
        <Table.Cell className="bodyCell">{this.props.cc[i].total_new_deaths_today}</Table.Cell>
      </Table.Row>
      )
    }

    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header className="tableHeader">
          <Table.Row className="headerRow">
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'name' ? direction : null}
              onClick={this.handleSort('name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'Total Cases' ? direction : null}
              onClick={this.handleSort('Total Cases')}
            >
              Total Cases
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'Total Recovered' ? direction : null}
              onClick={this.handleSort('Total Recovered')}
            >
              Total Recovered
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'Total Deaths' ? direction : null}
              onClick={this.handleSort('Total Deaths')}
            >
              Total Deaths
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'Active Cases' ? direction : null}
              onClick={this.handleSort('Active Cases')}
            >
              Active Cases
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'Serious Cases' ? direction : null}
              onClick={this.handleSort('Serious Cases')}
            >
              Serious Cases
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'New Cases Today' ? direction : null}
              onClick={this.handleSort('New Cases Today')}
            >
              New Cases Today
            </Table.HeaderCell>
            <Table.HeaderCell
              className="headerCell"
              sorted={column === 'New Deaths Today' ? direction : null}
              onClick={this.handleSort('New Deaths Today')}
            >
              New Deaths Today
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="tableBody">
          {allCountryRows}
        </Table.Body>
      </Table>
    )
  }
}

export default SortableTable
