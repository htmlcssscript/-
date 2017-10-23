import React from 'react';

export default class LeftAside extends React.Component {
    render() {
        const styles = {
            lA: {
               width: '240px',
               float: 'left',
               minHeight: '100%'
            }
        }
        return (
            <div style={styles.lA}>
                  aside
            </div>
        )
    }
}