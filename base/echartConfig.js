import React from 'react';
import {dataScope} from '../util/utils';
import echarts from 'echarts';
import './chart.css';
export default class eChartConfig extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            end: 33,
            barWidth: 12
        }
    }
    componentDidMount(){
        this.initeChart()
    }

    onCur(n, bW=12) {
       this.setState({
           end: n,
           barWidth: bW
       })
       this.initeChart()
    }
  
    initeChart() {
      var option1 = {
          calculable: true,
  
          dataZoom: [{
              type: 'slider',
              start: 0,
              end: this.state.end,
              height: 15,
              bottom: 4,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              dataBackground: {
                  areaStyle: {
                      color: '#8392A5'
                  },
                  lineStyle: {
                      opacity: 0.8,
                      color: '#8392A5'
                  }
              },
              handleStyle: {
                  color: '#fff',
                  shadowBlur: 3,
                  shadowColor: 'rgba(0, 0, 0, 0.6)',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
              }
          }, {
              type: 'inside'
          }],
  
          textStyle: {
              textShadowOffsetX: 5
          },
  
          title: {
              show: true,
              text: '每日客流达成量  单位: 百/人次',
              textStyle: {
                  fontSize: 14,
                  fontFamily: 'MicrosoftYaHei',
                  fontWeight: "lighter",
                  color: '#808080'
              },
              left: 101,
              top: 18,
              // top: 16,
              // left: 45,
              // padding: 8,
              // borderColor: '#58a',
              // borderWidth: 3
          },
  
          legend: {
              // orient: 'vertical'
              itemGap: 10
          },
  
          color: ['#e2e2e2'],
  
          tooltip: {
              show: true,
              trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
              showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
              hideDelay: 100, // 隐藏延迟，单位ms
              transitionDuration: 0.4, // 动画变换时间，单位s
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'cross', // 默认为直线，可选为：'line' | 'shadow'
                  label: {
                      show: true,
                  }
              },
              position: function (point, params, dom, rect, size) {
                  // dom.innerHTML = `<div class="tip" style="border: none;padding: 0;background: transparent" > 
                  //      <p> 累计客流达成率: <span> ${ params[0]['data']} </span> </p>
                  //      <p> 当天累计客流量: <span> ${ params[1]['data']} </span> </p>
                  //  </div>`
              }
          },
  
          grid: {
              left: '10%',
              // right: '4%',
              // containLabel: true
              show: true,
          },
  
          xAxis: [{
              type: 'category',
              data: dataScope('2017-6-30', '2017-10-1'),
              axisLabel: {
                  textStyle: {
                      color: '#3b3b3b',
                      fontFamily: 'MicrosoftYaHei',
                      fontSize: 12,
                  }
              },
              axisLine: {
                  lineStyle: {
                      color: '#e2e2e2'
                  }
              },
              markPoint: {
                  data: [{
                          type: 'max',
                          name: '最大值'
                      },
                      {
                          type: 'min',
                          name: '最小值'
                      }
                  ]
              },
          }],
  
          yAxis: [{
              type: 'value',
              min: '0',
              max: 'dataMax',
              data: [0, 10, 20, 30, 40, 50, 60],
              axisTick: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      color: '#e2e2e2',
                  }
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#3b3b3b',
                      fontFamily: 'MicrosoftYaHei',
                      fontSize: 12,
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: '#f9f9f9',
                  }
              },
              axisPointer: {
                  show: false
              }
          }],
  
          formatter: function (params) {
              if (params.value == 14) {
                  return '';
              } else {
                  return params.value;
              }
          },
  
          series: [{
              name: '直接访问',
              type: 'bar',
              barWidth: this.state.barWidth,
              data: [4, 7, 9, 10, 12, , 12, 3, 10, 12, 14, 29, 23, 3, 10, 12, 14, 29, 23, 3, 10,
                  12, 14, 29, 23, 3, 10, 12, 14, 29, 23, 10, 12, 14, 29, 23, 3, 10, 12, 14,
                  29, 23, 10, 12, 14, 29, 23, 3, 10, 12, 14, 29, 23, 14, 29, 23, 3, 10, 12,
                  14, 29, 14, 29, 23, 3, 10, , 14, 29, 23, 3, 10, 12, 14, 29, 14, 29, , 29,
                  14, 29, , 29, 14, 29, 23, 3, 10, 12, 14, 29, 12, 14, 29
              ],
              markPoint: {
                  symbol: 'circle',
                  symbolSize: 10,
                  color: 'transparent',
                  label: {
                      normal: {
                          show: true,
                          fontSize: 12,
                          color: '#000',
                          offset: [0, -15]
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'transparent',
                      }
                  },
                  data: [{
                          type: 'max',
                          name: '最大值'
                      },
                      {
                          type: 'min',
                          name: '最小值'
                      }
                  ]
              },
              itemStyle: {
                  normal: {
                      color: function (params) {
                          var index_color = params.value;
                          if (index_color >= 20) {
                              return '#7191b8';
                          } else {
                              return '#e65d4d';
                          }
                      },
                      width: 12,
                  },
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }]
      };
  
      var option2 = {
          dataZoom: [{
              type: 'slider',
              start: 0,
              end: this.state.end,
              height: 15,
              show: false
          }],
  
          title: {
              show: false,
              text: '每日客流达成率',
              textStyle: {
                  fontSize: 14,
                  fontFamily: 'MicrosoftYaHei',
                  fontWeight: "lighter",
                  color: '#808080'
              },
              // top: 16,
              // left: 45,
              // padding: 8,
              // borderColor: '#58a',
              // borderWidth: 3
          },
  
          tooltip: {
              show: true,
              trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
              showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
              hideDelay: 100, // 隐藏延迟，单位ms
              transitionDuration: 0.4, // 动画变换时间，单位s
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'cross', // 默认为直线，可选为：'line' | 'shadow'
                  label: {
                      show: true,
                  },
                  crossStyle: {
  
                  }
              },
              position: function (point, params, dom, rect, size) {
                  // dom.innerHTML = `<div class="tip" style="border: none;padding: 0;background: transparent" > 
                  //      <p> 累计客流达成率: <span> ${ params[0]['data']} </span> </p>
                  //      <p> 当天累计客流量: <span> ${ params[1]['data']} </span> </p>
                  //  </div>`
              },
          },
  
          legend: {
              data: [{
                  name: '每日客流达成率',
                  icon: 'line',
              }, {
                  name: '七日均线',
                  icon: 'line'
              }],
              itemWidth: 20,
              itemHeight: 20,
              textStyle: {
                  color: '#3b3b3b',
                  fontFamily: 'SourceHanSansCN-Light',
                  fongSize: 12,
  
              },
              itemGap: 40
          },
  
          grid: {
              left: '10%',
              bottom: '2%',
              show: true,
          },
  
          xAxis: {
              type: 'category',
              color: '#3b3b3b',
              boundaryGap: false,
              data: dataScope('2017-6-30', '2017-10-1'),
              show: false,
              axisTick: {
                  show: false,
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#3b3b3b',
                      fontFamily: 'MicrosoftYaHei',
                      fontSize: 12,
                      align: 'right'
                  }
              },
              boundaryGap: true,
              axisLine: {
                  onZeroAxisIndex: 0
              },
              // axisLine: {
              //    	lineStyle: {
              //    		width: 1,
              //    		color: '#e2e2e2'
              //    	}
              // }
          },
  
          yAxis: {
              type: 'value',
              data: [80, 100, 120, 140, 160, 180],
              min: 'dataMin',
              max: 'dataMax',
              axisLabel: {
                  formatter: '{value}%',
                  show: true,
                  textStyle: {
                      color: '#3b3b3b',
                      fontFamily: 'MicrosoftYaHei',
                      fontSize: 12,
                  }
              },
              axisTick: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      color: '#e2e2e2',
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: '#f9f9f9',
                  }
              }
          },
  
          series: [{
              name: '每日客流达成率',
              type: 'line',
              itemStyle: {
                  normal: {
                      color: '#7191b8'
                  }
              },
              lineStyle: {
              },
              connectNulls: true,
              smooth: false,
              data: [140.33, 119.07, 51.03, 55.28, 63.79, 85.05, 93.55, 153.08, 136.07, 51.03,
                  55.28, 63.79, 55.28, 59.53, 148.83, 140.33, 46.78, 63.79, 72.29, 63.79,
                  93.55, 136.07, 161.59, 51.03, 51.03, 59.53, 63.79, 55.28, 148.83, 136.07,
                  51.03, 55.28, 63.79, 59.53, 68.04, 161.59, 148.83, 51.03, 46.78, 63.79,
                  68.04, 80.79, 178.60, 161.59, 63.79, 59.53, 68.04, 80.79, 93.55, 174.35,
                  170.09, 68.04, 63.79, 72.29, 85.05, 102.06, 178.60, 170.09, 68.04, 68.04,
                  72.29, 89.30, 106.31, 187.10, 174.35, 72.29, 63.79, 72.29, 85.05, 102.06,
                  195.61, 182.85, 76.54, 68.04, 85.05, 93.55, 110.56, 204.11, 191.36, 80.79,
                  72.29, 85.05, 97.80, 114.81, 212.62, 204.11, 85.05, 76.54, 93.55, 106.31,
                  119.07
              ],
              showSymbol: false,
              markPoint: {
                  symbol: 'circle',
                  symbolSize: 10,
                  color: 'red',
                  label: {
                      normal: {
                          show: true,
                          fontSize: 12,
                          color: '#000',
                          offset: [0, -15]
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'red',
                      }
                  },
                  data: [{
                          type: 'max',
                          name: '最大值'
                      },
                      {
                          type: 'min',
                          name: '最小值'
                      }
                  ]
              }
          }, {
              name: '七日均线',
              type: 'line',
              smooth: false,
              itemStyle: {
                  normal: {
                      label: {
                          show: true
                      },
                      color: '#e65d4d'
                  }
              },
              connectNulls: true,
              data: [33, 28, 12, 13, 15, 20, 22, 36, 32, 12, 13, 15, 13, 14, 35, 33, 11, 15, 17,
                  15, 22, 32, 38, 12, 12, 14, 15, 13, 35, 32, 12, 13, 15, 14, 16, 38, 35, 12,
                  11, 15, 16, 19, 42, 38, 15, 14, 16, 19, 22, 41, 40, 16, 15, 17, 20, 24, 42,
                  40, 16, 16, 17, 21, 25, 44, 41, 17, 15, 17, 20, 24, 46, 43, 18, 16, 20, 22,
                  26, 48, 45, 19, 17, 20, 23, 27, 50, 48, 20, 18, 22, 25, 28
              ],
              markPoint: {
                  symbol: 'circle',
                  symbolSize: 10,
                  color: '#58a',
                  label: {
                      normal: {
                          show: true,
                          fontSize: 12,
                          color: 'blue',
                          offset: [0, -15]
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: 'blue',
                      }
                  },
                  data: [{
                          type: 'max',
                          name: '最大值'
                      },
                      {
                          type: 'min',
                          name: '最小值'
                      }
                  ]
              },
              showSymbol: false,
          }]
      };
  
      var myChart = echarts.init(document.getElementById('main1'));
      myChart.setOption(option1);
      var myChart2 = echarts.init(document.getElementById('main2'));
      myChart2.setOption(option2);
      echarts.connect([myChart, myChart2]);
    }
  
    render() {
        return (
            <div className="canvas-box">
                <div className="vertical" id="main2" style={{height: 356}} />
                <div className="vertical" id="main1" style={{height: 280}} />
            </div>
        )
    }
}