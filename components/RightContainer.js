import React from 'react';
import SubLegend from './subLegend';
export default class RightContainer extends React.Component {
    render() {
        const styles = {
            lA: {
               marginLeft: '240px',
               minHeight: '100%',
               backgroundColor: '#eff3f6',
               padding: '10px 15px 0 15px',
               boxSizing: 'border-box',
               Width: '1565px'
            },
            show: {
                height: '120px',
                backgroundColor: '#fff'
            },
            mapChina: {
                height: '830px',
                marginTop: '49px',
                backgroundColor: '#fff'
            }
        }
        return (
            <div style={styles.lA}>
               <div style={styles.show}>全国客流统计分析</div>
               <div style={styles.mapChina}>区域分布</div>
               <div style={styles.mapChina}>
                  <SubLegend/>
               </div>
               <div style={styles.mapChina}>全国高意向潜客客流累计达成率</div>
            </div>
        )
    }
}