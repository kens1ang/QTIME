<script>
import { basicTimelineChart } from "./timeline-data.js";
import { toRaw } from "vue";

export default {
  data() {
    return {
      series: basicTimelineChart.series,
      chartOptions: basicTimelineChart.chartOptions,
    };
  },
  computed: {
    rawSeries() {
      return toRaw(this.series);
    },
  },
};
</script>

<template>
  <apexchart
    class="apex-charts"
    height="350"
    dir="ltr"
    :series="rawSeries"
    :options="chartOptions"
  ></apexchart>
</template>
