import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './components/Top';
import Main from './components/Main';
class App extends React.Component {
  render() {
    return (
      <div style={{minHeight: '100%'}}>
        <Top/>
        <Main/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))