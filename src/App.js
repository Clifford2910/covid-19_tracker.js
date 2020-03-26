import React from 'react';
import './App.css';
import Header from './components/header'
import Header2 from './components/header2'
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
        </div>
      </div>
    );
  }
}

export default App;
