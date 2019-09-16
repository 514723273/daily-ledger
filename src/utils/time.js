const SEPARATOR = ':';

// 将时间字符串转化为小数
const timeStrToFloat = timeStr => {
    const HourMinute = timeStr.split(SEPARATOR).map(item => Number.parseInt(item));
    const timeFloat = HourMinute[0] + HourMinute[1] / 60;
    return timeFloat;
}

export const timeToLeftOffsetAndWidth = (preDayThing, nowDayThing) => {
    let preTimeFloat = 0, nowTimeFloat = 0;
    
    // 第一天第一个事件起点从 0 开始，其余都是从上一个结束点开始
    if(preDayThing != null) {
        preTimeFloat = timeStrToFloat(preDayThing.time);
    }
    nowTimeFloat = timeStrToFloat(nowDayThing.time);
    return {
        leftOffset: `${preTimeFloat / 24 * 100}%`, 
        width: `${(nowTimeFloat - preTimeFloat) / 24 * 100}%`
    };
}