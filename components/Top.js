import React from 'react';

export default class Top extends React.Component {
    render(){
        const styles = {
            top: {
                borderBottom: '1px solid #ddd',
                height: '145px'
            }
        }
        return (
            <div style={styles.top}>login</div>
        )
    }
}