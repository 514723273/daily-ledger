import React from 'react';
import axios from 'axios';
import { Calendar, Badge } from 'antd';
import { EventsWrapper } from './style';
import { MinuteToHour } from '../../utils/time';


export default class Test extends React.PureComponent {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            monthEvents: [],
        };
        this.getMonthEvents = this.getMonthEvents.bind(this);
        this.onPanelChange = this.onPanelChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.dateCellRender = this.dateCellRender.bind(this);
        this.monthCellRender = this.monthCellRender.bind(this);
    }

    componentDidMount() {
        this.getMonthEvents();
    }

    render() {
        return (
            <Calendar
                onSelect={this.onSelect} 
                onPanelChange={this.onPanelChange}
                dateCellRender={this.dateCellRender} 
                monthCellRender={this.monthCellRender}
            />
        );
    }

    getMonthEvents() {
        axios.get(`/data/${this.state.selectedYear}/${this.state.selectedMonth + 1}.json`).then(res => {
            this.setState({monthEvents: res.data});
        }).catch(err => {
            this.setState({monthEvents: []});
        });
    }
  
    onSelect = () => {
        // 扩展
    };
  
    onPanelChange(date) {
        this.setState({selectedYear: date.year(), selectedMonth: date.month()}, this.getMonthEvents);
    };

    dateCellRender(date) {
        if(date.year() !== this.state.selectedYear || date.month() !== this.state.selectedMonth) {      // 本年本月的才显示
            return null;
        }
        const dateEvents = this.state.monthEvents[date.date() - 1];     // 当天的所有事件
        if(dateEvents == null) {
            return null;
        }
        return (
            <EventsWrapper className="events">
                {
                    dateEvents.filter(item => (item.detail != null && item.detail.trim().length !== 0 && item.value >= 60)).map(item =>   // 只有有详情的并且时长大于 60min 才显示
                        <li key={item.lineTime}>
                            <Badge color={item.color} text={`${MinuteToHour(item.value)}h ${item.detail}`} />
                        </li>
                    )
                }
            </EventsWrapper>
        )
    }

    monthCellRender(date) {
        // 扩展
    }
  }