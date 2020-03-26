import React from 'react';
import './statistic.css';
import { Statistic } from 'semantic-ui-react';

class GlobalStatistic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Statistic.Group inverted>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_cases}</Statistic.Value>
          <Statistic.Label>Total Cases</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_recovered}</Statistic.Value>
          <Statistic.Label>Total Recovered</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_deaths}</Statistic.Value>
          <Statistic.Label>Total Deaths</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_active_cases}</Statistic.Value>
          <Statistic.Label>Active Cases</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_serious_cases}</Statistic.Value>
          <Statistic.Label>Serious Cases</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_new_cases_today}</Statistic.Value>
          <Statistic.Label>New Cases Today</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{this.props.gc.total_new_deaths_today}</Statistic.Value>
          <Statistic.Label>New Deaths Today</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    )
  }
};

export default GlobalStatistic
