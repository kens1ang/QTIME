import getChartColorsArray from "@/common/getChartColorsArray";

const basicTimelineChart = {
  series: [
    {
      data: [
        {
          x: "HOUSEKEEPING",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-04").getTime(),
          ],
          percentage: 70,
        },
        {
          x: "HOUSEKEEPING",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-05").getTime(),
          ],
        },
        {
          x: "OPERATOR",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
          percentage: 40,
        },
        {
          x: "OPERATOR",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-13").getTime(),
          ],
        },
        {
          x: ["SITE", "FACILITY"],
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime(),
          ],
          percentage: 100,
        },
        {
          x: ["DEFECT", "WORKS", "(CONST)"],
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-13").getTime(),
          ],
          percentage: 15,
        },
        {
          x: ["DEFECT", "WORKS", "(CONST)"],
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-18").getTime(),
          ],
        },
        {
          x: ["DEFECT", "WORKS", "(PDI)"],
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-13").getTime(),
          ],
          percentage: 100,
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        rangeBarGroupRows: true,
        borderRadius: 10,
        rangeBarOverlap: true,
      },
    },
    colors: getChartColorsArray('["--vz-primary"]'),
    xaxis: {
      type: "datetime",
      title: {
        text: "Day",
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const percentage = opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex].percentage;
        return percentage ? `${percentage}%` : ''; 
      },
      offsetX: 0,
      style: {
        colors: ['#fff'], 
        fontSize: '12px',
      },
    },
  },
};

export { basicTimelineChart };
