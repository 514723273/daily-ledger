import React from 'react';
import { Calendar, Badge } from 'antd';
import { EventsWrapper } from './style';
import { MinuteToHour } from '../../utils/time';


export default class Test extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onPanelChange = this.onPanelChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.dateCellRender = this.dateCellRender.bind(this);
        this.monthCellRender = this.monthCellRender.bind(this);
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

    dateEventsFilter(item, selectedType, minValue) {
        let result = true;
        if(selectedType == null) {
            result = result && item.detail != null && item.detail.trim().length !== 0;      // 默认选择：事件详情不为空
        } else {
            // result = result && item.color.startsWith(selectedType);
        }
        if(minValue == null) {
            result = result && item.value >= 60;         // 默认选择：事件时长 >= 60 min
        } else {
            result = result && item.value >= minValue;
        }
        return result;
    }

    // Calendar
    onSelect = () => {
        // 扩展
    };

    // Calendar
    onPanelChange(date) {
        this.props.selectYearAndMouth(date.year(), date.month());
    };

    // Calendar
    dateCellRender(date) {
        const DEFAULT_COLOR = "#f9f9f9";

        if(date.year() !== this.props.selectedYear || date.month() !== this.props.selectedMonth) {      // 本年本月的才显示
            return null;
        }
        const dateEvents = this.props.monthEvents[date.date() - 1];     // 当天的所有事件
        if(dateEvents == null) {
            return null;
        }
        return (
            <EventsWrapper className="events">
                {
                    dateEvents
                    .filter(item => (this.dateEventsFilter(item, null, 30)))
                    .sort((a, b) => (a.value - b.value))
                    .map(item =>   
                        <li key={item.lineTime}>
                            <Badge color={this.props.typeColor[item.type] || DEFAULT_COLOR} text={`${MinuteToHour(item.value)}h ${item.type} ${item.detail != null ? item.detail : ""}`} />
                        </li>
                    )
                }
            </EventsWrapper>
        )
    }

    // Calendar
    monthCellRender(date) {
        // 扩展
    }

  }