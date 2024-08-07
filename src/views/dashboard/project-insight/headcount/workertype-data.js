import getChartColorsArray from "@/common/getChartColorsArray";

const colors = getChartColorsArray('["--vz-primary", "--vz-success",  "--vz-gray-200", "--vz-secondary", "--vz-primary-rgb, 0.6", "--vz-info"]');

const distributedColumnchart = {
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30],
    },],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            events: {
                click: function () {
                    // console.log(chart, w, e)
                },
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: "45%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: [
                ["PROTECTION"],
                ["SURVEY", "ASSISTANCE"],   
                ["TRAFFIC", "CONTROLLER"],
                ["SAFETY", "HEALTH &", "ENVIRONMENT"],
                ["OPERATOR"],
                ["WORK ORDER"],
                ["LOGISTICS"],
                ["DEFECT", "WORKS", "(CONST)"],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: "12px",
                },
            },
            title: {
                text: "Subelement",
            }
        },
        yaxis: {
            title: {
                text: "Headcount",
            },
        },  
    },
};

export {
    distributedColumnchart,
};