
const distributedColumnchart = {
  series: [{
    name: 'Headcount',
    type: 'column',
    data: [2, 2, 3, 5, 7, 7]
  }, {
    name: 'Working Hours',
    type: 'line',
    data: [16, 16, 24, 40, 56, 56]
  }],
  chartOptions: {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: [0, 4]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['OPERATOR', ['SITE', 'FACILITY'], 'HOUSEKEEPING', ['DEFECT', 'WORKS (CONST)'], ['DEFECT', 'WORKS (PDI)'], 'WORK ON BEHALF'],
    yaxis: [{
      title: {
        text: 'Headcount',
      },
    
    }, {
      opposite: true,
      title: {
        text: 'Working Hours'
      }
    }]
  },
};

export { distributedColumnchart };
