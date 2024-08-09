<script>
import { basicTimelineChart } from "./timeline-data.js";
import { toRaw } from "vue";

export default {
  data() {
    return {
      series: basicTimelineChart.series,
      chartOptions: basicTimelineChart.chartOptions,
      currentTab: "generalworker",
    };
  },
  computed: {
    rawSeries() {
      return toRaw(this.series);
    },
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<template>
  <ul class="nav nav-tabs nav-tabs-custom nav-primary" role="tablist">
    <li class="nav-item">
      <a
        class="nav-link All py-3"
        :class="{ active: currentTab === 'generalworker' }"
        @click.prevent="setTab('generalworker')"
        href="#"
      >
        General Worker
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link py-3"
        :class="{ active: currentTab === 'subconasksk' }"
        @click.prevent="setTab('subconasksk')"
        href="#"
      >
        Subcon as KSK
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link py-3"
        :class="{ active: currentTab === 'staff' }"
        @click.prevent="setTab('staff')"
        href="#"
      >
        Staff
      </a>
    </li>
  </ul>

  <div v-if="currentTab === 'generalworker'">
    <apexchart
      class="apex-charts"
      height="450"
      dir="ltr"
      :series="rawSeries"
      :options="chartOptions"
    ></apexchart>
  </div>

  <div v-if="currentTab === 'subconasksk'">
    <apexchart
      class="apex-charts"
      height="450"
      dir="ltr"
      :series="rawSeries"
      :options="chartOptions"
    ></apexchart>
  </div>

  <div v-if="currentTab === 'staff'">
    <apexchart
      class="apex-charts"
      height="450"
      dir="ltr"
      :series="rawSeries"
      :options="chartOptions"
    ></apexchart>
  </div>
</template>
