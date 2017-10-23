import React from 'react';
import EchartConfig from './echartConfig';
import Tables from './Tables';
import Tab from '../components/Tab';
export default class Chart extends React.Component {
  constructor(props) {
      super(props)
  }

  onCut(value) {
    let n = 33;
    let bW = 12;
    if(value === '7天') {
       n = 7
    } else if (value === '31天') {
       n = 33
    } else if (value === '91天') {
       n = 100
       bW = 3
    }
    this.refs.ec.onCur(n, bW)
  }
  render() {
      return (
        <div className="box" style={{position: 'relative'}}>
            <div style={{margin: '20px 0'}}></div>
            <Tab onCut={this.onCut.bind(this)}/>
            <EchartConfig ref='ec'/>
            <Tables />
        </div>
      )
  }
}