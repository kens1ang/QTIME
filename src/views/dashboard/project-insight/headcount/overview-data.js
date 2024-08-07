import getChartColorsArray from "@/common/getChartColorsArray";

const basicLineChart = {
    series: [
      {
        name: "Number of Worker",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 56, 65, 80, 92, 100, 75, 60, 45, 70, 85, 95, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],  // Example daily data for 31 days
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",  
      },
      colors: getChartColorsArray('["--vz-primary"]'),
      title: {
        text: "July 2024",
        align: "left",
        style: {
          fontWeight: 500,
        },
      },
      xaxis: {
        categories: [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
          "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ],
        title: {
          text: "Day",
        }
      },
      yaxis: {
        title: {
          text: "Number of Worker",
        },
      },
    },
};

export {
    basicLineChart,
};
