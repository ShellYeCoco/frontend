import { dateFormat } from 'Utils'

// 生成虚拟数据
const dateList = []
const orderList = []
const moneyList = []
for ( let i = 0; i < 7; i++ ) {
    dateList.push(dateFormat(Date.parse(new Date()) - i * 1000 * 60 * 60 * 24, 'yyyy-MM-dd'))
    let cup = parseInt(Math.random() * 100)
    orderList.push(cup)
    moneyList.push(cup * (parseInt(Math.random() * 10) + 10))
} 

export default {
    title: {
        // text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['卖出数量', '营业额']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '卖出数量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: orderList
        },
        {
            name: '营业额',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: moneyList
        }
    ]
};
