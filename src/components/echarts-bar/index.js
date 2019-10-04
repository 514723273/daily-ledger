import React from 'react';

import echarts from 'echarts';
// // 按需加载
// import echarts from 'echarts/lib/echarts';
// // 导入柱状图
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markPoint';

import echartsTheme from '../../constants/echarts-theme';

export default class EchatsBar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.echartsBarRef = React.createRef();
    }

    initBarChart() {
        const ECHATRS_THEME = 'TimeLedger';
        
        echarts.registerTheme(ECHATRS_THEME, echartsTheme);

        // 基于准备好的 dom，初始化 echarts 实例
        const barEchat = echarts.init(this.echartsBarRef.current, ECHATRS_THEME);
        // 绘制图表
        barEchat.setOption({
            title: { text: '月份统计' },
            tooltip: {},
            legend: {
                data: ["睡觉", "学习", "修身养性", "娱乐", "日常", "特殊"],
            },
            xAxis: {
                data: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12","13", "14", "15", "16", "17", "18","19", "20", "21", "22", "23", "24","25", "26", "27", "28", "29", "30","31"],
            },
            yAxis: {},
            series: this.props.series,
        })
    }
    componentDidMount() {
        this.initBarChart();
    }

    // didMount 只发生一遍!!! 更新数据无效果
    componentDidUpdate() {
        this.initBarChart();
    }

    render() {
        return (
            <div style={{ width: 2000, height: 600 }} ref={this.echartsBarRef}></div>
        )
    }
}