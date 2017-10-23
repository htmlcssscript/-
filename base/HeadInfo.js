import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Select } from 'antd';
const Option = Select.Option;
import './headInfo.css';
let year = [2017,2016,2015,2014];
const month = [1,2,3,4,5,6,7,8,9,10,11,12];
var data = []
for(var i = 1; i <=31;i++){
   data.push(i);
}
export default class HeadInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2017,
            month: 8,
            days: data
        }
    }

    componentDidMount() {
        var d = new Date();
        var y = d.getFullYear();
        if(year[0] == y) {
            return
        } else {
            year.push(y);
        }
    }

    init() {
        var aUL = document.getElementById('dropDown');
        var aA = aUL.getElementsByTagName('a');

        for (let i = 0; i < aA.length; i++) {
            aA[i].onclick = function() {
                for (var i = 0; i < aA.length; i++) {
                    aA[i].className = '';
                }
                this.className = 'active';
            }
        }
    }

    createDate(){
         var allData = []
         var sum = new Date(this.state.year, this.state.month, 0).getDate();
         console.log(sum)
         for(var i = 1 ; i <= parseInt(sum) ; i++) {
            allData.push(i)
         }
         this.setState({
           days: allData
         })
    }

    getYear(value) {
        this.setState({
           year: value
        })
    }

    getMonth(value) {
        this.setState({
            month: value
        })

        this.createDate();

    }
    getDay(value) {

    }
    render() {
        const yearGroup = year.map(item => <Option key={item}>{item}</Option>);
        const monthGroup = month.map(item => <Option key={item}>{item}</Option>);
        const dayGroup = this.state.days.map(item => <Option key={item}>{item}</Option>);

        return ( <
            div className = "main" >
            <
            div className = "lineEl default" >
            <
            p > < span className = "mapOfChina" > 全国 < /span>高意向潜客每日客流达成率</p >
            <
            p className = "textStyle" > 全国 < /p> <
            /div> <
            div className = "lineEl" >
            <
            div className = "default" >
            <
            p > < span > 数据更新时间: < /span><time className="textStyleTime"> 2017-08-31 18:00</time > < /p> <
            p > < span > 数据更新时间: < /span><time className="textStyleTime"> 2017-07-31 - 2017-08-31 </time > < /p> <
            /div> <
            /div> 
            <div className = "lineEl offset" >
                <Select defaultValue={year[0]} style={{ width: 60 }} onChange={this.getYear.bind(this)}>
                  {yearGroup}
                </Select>
                <Select defaultValue={month[7]} style={{ width: 60 }} onChange={this.getMonth.bind(this)}>
                  {monthGroup}
                </Select>
                <Select defaultValue={this.state.days[10]} style={{ width: 60 }} onChange={this.getDay.bind(this)}>
                  {dayGroup}
                </Select>
           </div> 
            <
            div className = "lineEl offsetImage" >
            <
            img className = "setImageColor"
            src = "icon/logoDownload.png" / >
            <
            /div> <
            /div>
        )
    }
}