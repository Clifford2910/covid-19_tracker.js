import React from 'react';
import './App.css';
import Header from './components/header'
import GlobalStatistic from './components/statistic'
import { fetchGlobalCovidInfo } from './services/apiCall'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalCovid: []
    }
  }

  async componentDidMount() {
    const globalData = await fetchGlobalCovidInfo();
    this.setState({globalCovid: globalData.results});
  }

  render() {
    return (
      <div class="wrapper">
        <div class="panel">
          <div class="panel-header">
            <Header />
          </div>
          <div class="panel-body">
            <div class="statistics">
              <div class="statistic">
                {this.state.globalCovid.map((gc) => {
                  return (
                    <GlobalStatistic key={gc.toString()} gc={ gc } />
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
