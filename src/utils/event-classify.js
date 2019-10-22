let TYPE_COLOR = null;
let TYPE_CODE = {};

let LARGE_TYPE_PREFIX = "*";

const getLargeTypeName = (eventType) => {
    const color = TYPE_COLOR[eventType];
    const largTypeCode = `${color[2]}${color[4]}${color[6]}`;
    return TYPE_CODE[largTypeCode];
}

const generateTypeCode = () => {
    for(let key of Object.keys(TYPE_COLOR)) {
        if(key.startsWith(LARGE_TYPE_PREFIX)) {
            const color = TYPE_COLOR[key];
            const code = `${color[2]}${color[4]}${color[6]}`;
            TYPE_CODE[code] = key.substring(1);
        }
    }
}

const initSeries = () => {
    const series = [];
    for(let value of Object.values(TYPE_CODE)) {
        series.push({
            name: value,
            type: 'bar',
            itemStyle: {
                color: TYPE_COLOR[`${LARGE_TYPE_PREFIX}${value}`],
            },
            data: new Array(31).fill(0),
        })
    }

    return series;
};

const classify = (series, index, event) => {
    const largeTypeName = getLargeTypeName(event.type);
    const value = event.value;
    for(let se of series) {
        if(se.name === largeTypeName) {
            se.data[index] += value / 60;
        }
    }
}

/**
    处理成 series 数据组
    series: [
        {
            name: '睡觉',
            type: 'bar',
            data: [650, 600],
        },
        {
            name: '日常',
            type: 'bar',
            data: [250, 276],
        },
        {
            name: '学习',
            type: 'bar',
            data: [105, 205],
        }
    ]

 */

 const seriesHandle = (monthEvents, typeColor) => {
    TYPE_COLOR = typeColor;

    generateTypeCode();

    const series = initSeries();
    
    for(let i = 0; i < monthEvents.length; i ++) {  // i 代表 天
        if(monthEvents[i] == null) {
            continue;
        }
        for(let j = 0; j < monthEvents[i].length; j ++) {   // j 代表 一天中的一个事件
            if(monthEvents[i][j] == null || monthEvents[i][j].value == null || TYPE_COLOR[monthEvents[i][j].type] == null) {    // 这个事件为 null 或者 出现 {lineTime: null, value: null, type: null} 或者 type 写错的情况
                continue;
            }
            classify(series, i, monthEvents[i][j]);
        }
    }
    return series;
 }

 export default seriesHandle;

/**
    处理出一天的统计结果。
    {睡觉: 650, 日常: 250, 修身养性: 90, 学习: 105, 娱乐: 345}
 */
// const classify = (event, result) => {
//     if(event == null || event.value == null || TYPE_COLOR[event.type] == null) {
//         return;
//     }
//     const largeType = TYPE_CODE[getLargeType(event.type)];

//     if(result[result.length - 1][largeType] == null) {
//         result[result.length - 1][largeType] = 0;
//     }
//     result[result.length - 1][largeType] += event.value;
// }

/**
 *  两层循环遍历所有的 event，结果处理为 result 数组，即每天的统计结果。
    0: {睡觉: 650, 日常: 250, 修身养性: 90, 学习: 105, 娱乐: 345}
    1: {睡觉: 600, 日常: 276, 学习: 205, 娱乐: 324, 修身养性: 35}
 */
// const classifyAllEvents = (monthEvents, typeColor) => {
//     TYPE_COLOR = typeColor;
//     const result = [];
//     console.log(monthEvents);
//     monthEvents.forEach(events => {
//         result.push({});
//         if(events == null) {
//             return;
//         }
//         events.forEach(event => {
//             classify(event, result);
//         })
//     });

//     return result;
// }



