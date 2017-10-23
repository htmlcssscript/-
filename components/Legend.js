import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
// import HeadInfo from '../base/HeadInfo';
import SubLegend from './subLegend';
export default class Legend extends React.Component {
    const styles= {
      line: {
        textAlign: 'center'
      }
    }
    render() {
      return (
        <div style={styles.line}>
          {/* <HeadInfo/> */}
          <SubLegend/>
        </div>
      )
    }
  }
