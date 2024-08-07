<script>
import { distributedColumnchart } from "./workertype-data.js";

export default {
  data() {
    return {
      distributedColumnchart: distributedColumnchart,
    };
  },
};
</script>

<template>
  <apexchart
    class="apex-charts"
    height="350"
    dir="ltr"
    :series="distributedColumnchart.series"
    :options="distributedColumnchart.chartOptions"
  ></apexchart>
</template>
