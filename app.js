import '../src/less/input-dayjs.less';
import './app.less';
import dayjs from 'dayjs';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputDayJS from '../src/input-dayjs';
import packageJson from '../package.json';

class App extends Component {
  state = {
    d: dayjs()
  };

  handleChange = d => {
    this.setState({ d });
  };

  handleSave = () => {
    console.log('saved', this.state.d.format('ddd, MMM DD, YYYY hh:mm A'));
  };

  render() {

    return (
      <div className="app">
        <h1>
          {packageJson.name}: {packageJson.version}
        </h1>
        <h2>{packageJson.description}</h2>
        <form>
          <div className="input">
            <input type="text" value={this.state.d.format('ddd, MMM DD, YYYY hh:mm A')} readOnly />
          </div>
          <InputDayJS
            dayjs={this.state.d}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
          />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
