import React from 'react';
import './chart.css';
export default class Tables extends React.Component {
    render() {
        return (
            <div className="table-box">
            <table className="table">
                <tbody><tr className="sub" style={{height: 30}}>
                    <th>昨日客流达成率</th>
                    <th>客流</th>
                    <th>4136</th>
                </tr>
                <tr className="sub">
                    <th style={{color: 'red', fontSize: 30}}>118.27%</th>
                    <th>客流指标</th>
                    <th>3136</th>
                </tr>
                <tr style={{height: 60}}>
                    <td colSpan={2} className="only-seven" style={{height: 120}}>近7天客流参考数值</td>
                    <td />
                    <td />
                </tr>
                </tbody></table>
            <table cellSpacing={0} className="table table-diff" style={{textAlign: 'center'}}>
                <tbody><tr className="seven setHeight">
                    <th>日期</th>
                    <th>客流</th>
                    <th>客流指标</th>
                    <th>客流达成率</th>
                </tr>
                <tr className="setHeight">
                    <td>0929</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                <tr className="setHeight">
                    <td>0928</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                <tr className="setHeight">
                    <td>0927</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                <tr className="setHeight">
                    <td>0927</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                <tr className="setHeight">
                    <td>0926</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                <tr className="setHeight">
                    <td>0925</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                <tr className="setHeight">
                    <td>0924</td>
                    <td>4136</td>
                    <td>3136</td>
                    <td>118.27%</td>
                </tr>
                </tbody></table>
            </div>
        )
    }
}