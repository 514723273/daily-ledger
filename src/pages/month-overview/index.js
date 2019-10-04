import React, { PureComponent, Fragment } from 'react';
import axios from 'axios';
import Calendar from '../../components/calendar';
import EchartsBar from '../../components/echarts-bar';

import eventClassify from '../../utils/event-classify';


export default class MonthOverview extends PureComponent {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            typeColor: {},
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            monthEvents: [],
            echartsSeries: [],
        };
        this.getMonthEvents = this.getMonthEvents.bind(this);
        this.selectYearAndMouth = this.selectYearAndMouth.bind(this);
    }

    componentDidMount() {
        // 获取所有颜色
        axios.get('/data/type-color.json').then(res => {
            this.setState({typeColor: res.data});
        }).then(() => {
            this.getMonthEvents();
        });
    }

    render() {
        return (
            <Fragment>
                <Calendar 
                    typeColor={this.state.typeColor} 
                    selectedYear={this.state.selectedYear} 
                    selectedMonth={this.state.selectedMonth} 
                    monthEvents={this.state.monthEvents}
                    selectYearAndMouth={this.selectYearAndMouth}
                />
                <EchartsBar 
                    series={this.state.echartsSeries}
                />
            </Fragment>
        )
    }

    getMonthEvents() {
        axios.get(`/data/${this.state.selectedYear}/${this.state.selectedMonth + 1}.json`).then(res => {
            this.setState({monthEvents: res.data});

            const echartsSeries = eventClassify(res.data, this.state.typeColor);    // 为图表分类
            this.setState({echartsSeries});
        }).catch(err => {
            this.setState({monthEvents: []});
        });
    }

    selectYearAndMouth(selectedYear, selectedMonth) {
        this.setState({selectedYear, selectedMonth}, this.getMonthEvents);      // getMonthEvents 又会再次修改 state
    }
}