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
        },
        {
          x: ["DEFECT", "WORKS", "(CONST)"],
          y: [
            new Date("2019-03-12").getTime(),
            new Date("2019-03-13").getTime(),
          ],
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
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
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
  },
};

export { basicTimelineChart };
