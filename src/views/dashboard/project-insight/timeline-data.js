import getChartColorsArray from "@/common/getChartColorsArray";

const basicTimelineChart = {
  series: [
    {
      data: [
        {
          x: "Code",
          y: [
            new Date("2019-03-02").getTime(),
            new Date("2019-03-04").getTime(),
          ],
        },
        {
          x: "Test",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Validation",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-12").getTime(),
          ],
        },
        {
          x: "Deployment",
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-18").getTime(),
          ],
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
      },
    },
    colors: getChartColorsArray('["--vz-primary"]'),
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Tasks",
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
  },
};

export { basicTimelineChart };
