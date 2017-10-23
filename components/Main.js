import React from 'react';
import LeftAside from './LeftAside';
import RightContainer from './RightContainer';
export default class Main extends React.Component {
    render() {
        const styles = {
            h: {
                minHeight: '100%',
                minWidth: '1565px'
            }
        }
        return ( 
            <div style = { styles.h } >
                <LeftAside / >
                <RightContainer / >
            </div>
        )
    }
}