import React from 'react';
import './App.css';
import Header from './components/header'
import Header2 from './components/header2'
import GlobalStatistic from './components/statistic'
import SortableTable from './components/table'
import { fetchGlobalCovidInfo } from './services/apiCall'
import { fetchCountryCovidInfo } from './services/apiCall'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalCovid: [],
      countryCovid: []
    }
  }

  async componentDidMount() {
    const globalData = await fetchGlobalCovidInfo();
    this.setState({globalCovid: globalData.results});
    const countryData = await fetchCountryCovidInfo();
    this.setState({countryCovid: countryData.countryitems});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="panel">
          <div className="panel-header">
            <Header />
          </div>
          <div className="panel-body">
            <div className="statistics">
              <div className="statistic">
                {this.state.globalCovid.map((gc) => {
                  return (
                    <GlobalStatistic key={gc.toString()} gc={ gc } />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="panel-header">
            <Header2 />
          </div>
          <div className="panel-body">
            <div className="tables">
              <div className="table">
                {this.state.countryCovid.map((cc) => {
                  return (
                    <SortableTable key={cc.toString()} cc={ cc } />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
