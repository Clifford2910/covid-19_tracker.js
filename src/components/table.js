import React, { Component } from 'react'
import './table.css';
import { Table } from 'semantic-ui-react'

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    column: null,
    direction: null,
  }

  render() {
    let allCountryDataRows = []
    for (var i = 1; i < 183; i++) {
      allCountryDataRows.push(
      <Table.Row key={this.props.cc[i].title}>
        <Table.Cell>{this.props.cc[i].title}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_cases}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_recovered}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_deaths}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_active_cases}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_serious_cases}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_new_cases_today}</Table.Cell>
        <Table.Cell>{this.props.cc[i].total_new_deaths_today}</Table.Cell>
      </Table.Row>
      )
    }

    const { column, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'title' ? direction : null}
              // onClick={this.handleSort('title')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_cases' ? direction : 'ascending'}
              // onClick={this.handleSort('total_cases')}
            >
              Total Cases
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_recovered' ? direction : null}
              // onClick={this.handleSort('total_recovered')}
            >
              Total Recovered
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_deaths' ? direction : null}
              // onClick={this.handleSort('total_deaths')}
            >
              Total Deaths
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_active_cases' ? direction : null}
              // onClick={this.handleSort('total_active_cases')}
            >
              Active Cases
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_serious_cases' ? direction : null}
              // onClick={this.handleSort('total_serious_cases')}
            >
              Serious Cases
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_new_cases_today' ? direction : null}
              // onClick={this.handleSort('total_new_cases_today')}
            >
              New Cases Today
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_new_deaths_today' ? direction : null}
              // onClick={this.handleSort('total_new_deaths_today')}
            >
              New Deaths Today
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {allCountryDataRows}
        </Table.Body>
      </Table>
    )
  }
}

export default SortableTable
