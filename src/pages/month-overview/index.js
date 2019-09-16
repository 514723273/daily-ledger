import React, { PureComponent } from 'react';
import axios from 'axios';
import TimeBar from '../../components/time-bar';

export default class MonthOverview extends PureComponent {
    componentDidMount() {
        axios.get('./2019/09.json').then(res => {
        
        })
    }

    render() {
        return (
            <TimeBar />
        )
    }
}