import React from 'react';

import { Calendar } from 'antd';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    onPanelChange = (value, mode)=>{
        console.log(value, mode);
      }

    render() {
        return (
            <div theme="dark" >
                <Calendar style={{ width: '100%', margin: '0 0 2rem' }} fullscreen={false} onPanelChange={this.onPanelChange}  />
            </div>
        );
    }
}

export default index;