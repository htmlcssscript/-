import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../base/Chart';
import HeadInfo from '../base/HeadInfo';

export default class SubLegend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount(){
    }
    
    render() {
      return (
        <div>
            <HeadInfo/>
            <Chart/>
        </div>
      )
    }
  }
