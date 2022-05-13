import React, { Component } from 'react';
import Work2 from './Work2';

class Work1 extends Component {
    render() {
        return (
            <div>
                <Work2 name="Suraj"/>
                <Work2 name="Sarath"/>
                <Work2 name="Athira"/>
                <Work2 name="Aravind"/>
            </div>
        );
    }
}

export default Work1;
