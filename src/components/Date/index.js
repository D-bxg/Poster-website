import React from 'react';

import { Calendar } from 'antd';

import './style.css';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    onPanelChange = (value, mode)=>{
        console.log(value, mode);
      }

    render() {
        return (
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}

export default Date;