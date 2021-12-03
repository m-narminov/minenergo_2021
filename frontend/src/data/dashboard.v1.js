import {
    scatterDatetimeChild,
    dataSeries,
    generateDayWiseTimeSeries,
    randomizeArray,
    sparklineData,
} from '@/data/apexDataSeries'

export const dashboardOne = {
    series: [
        {
            name: 'Инциденты',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Прогнозируемые',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ],
    polygon: {
        latlngs: [
          [47.2263299, -1.6222],
          [47.21024000000001, -1.6270065],
          [47.1969447, -1.6136169],
          [47.18527929999999, -1.6143036],
          [47.1794457, -1.6098404],
          [47.1775788, -1.5985107],
          [47.1676598, -1.5753365],
          [47.1593731, -1.5521622],
          [47.1593731, -1.5319061],
          [47.1722111, -1.5143967],
          [47.1960115, -1.4841843],
          [47.2095404, -1.4848709],
          [47.2291277, -1.4683914],
          [47.2533687, -1.5116501],
          [47.2577961, -1.5531921],
          [47.26828069, -1.5621185],
          [47.2657179, -1.589241],
          [47.2589612, -1.6204834],
          [47.237287, -1.6266632],
          [47.2263299, -1.6222]
        ],
        color: "#ff00ff"
      },
    chartOptions: {
        colors: ['rgba(196, 181, 253, 1)', '#8b5cf6'],
        chart: {
            type: 'bar',

            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июн',
                'Июл',
                'Авг',
                'Сен',
                'Окт',
            ],
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return  val 
                },
            },
        },
    },
}

// export const dashboardOne = {
//   series: [
//     {
//       name: 'Net Profit',
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//     },
//     {
//       name: 'Revenue',
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//     },
//   ],
//   chartOptions: {
//     colors: ['rgba(196, 181, 253, 1)', '#8b5cf6'],
//   chart: {
//     type: 'bar',
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '55%',
//       borderRadius: 80,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ['transparent'],
//   },
//   xaxis: {
//     categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
//   },
//   fill: {
//     opacity: 1,
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return '$ ' + val + ' thousands';
//       },
//     },
//   },
//   }

// }

export const dashboardTwo = {
    series: [44, 55, 13, 43, 22],
    chartOptions: {
        fill: {
            colors: ['#EDE9FE', '#DDD6FE', '#8B5CF6', '#C4B5FD', '#A78BFA'],
        },
        chart: {
            height: 350,
            type: 'pie',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         // width: 200
        //       },
        //       legend: {
        //         show: false,
        //       },
        //     },
        //   },
        // ],
    },
}

export const splineAreaWidgetTwo = {
    series: [
        {
            name: 'series2',
            data: [11, 90, 45, 32, 34, 52, 41],
        },
    ],

    chartOptions: {
        chart: {
            width: '90%',
            height: 100,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        legend: {
            show: false,
        },

        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
            ],
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
        colors: ['#8b5cf6'],
        stroke: {
            curve: 'smooth',
            width: 1,
        },
    },
}
export const splineAreaWidgetThree = {
    series: [
        {
            name: 'series2',
            data: [41, 52, 34, 32, 45, 90, 11],
        },
    ],

    chartOptions: {
        chart: {
            width: '100%',
            height: 100,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        legend: {
            show: false,
        },

        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
            ],
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
        colors: ['#f59e0b'],
        stroke: {
            curve: 'smooth',
            width: 1,
        },
    },
}
