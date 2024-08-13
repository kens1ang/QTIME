<script>
import { distributedColumnchart } from "./subelement-data.js";

export default {
  data() {
    return {
      distributedColumnchart: distributedColumnchart,
      currentTab: "generalworker",
    };
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<template>
  <!-- Nav Tabs-->
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
        :class="{ active: currentTab === 'subcon' }"
        @click.prevent="setTab('subcon')"
        href="#"
      >
        Subcon
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link py-3"
        :class="{ active: currentTab === 'operator' }"
        @click.prevent="setTab('operator')"
        href="#"
      >
        Operator
      </a>
    </li>
  </ul>

  <!-- General Worker -->
  <div v-if="currentTab === 'generalworker'">
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="distributedColumnchart.series"
      :options="distributedColumnchart.chartOptions"
    ></apexchart>
  </div>
  <!-- Subcon as KSK -->
  <div v-if="currentTab === 'subconasksk'">
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="distributedColumnchart.series"
      :options="distributedColumnchart.chartOptions"
    ></apexchart>
  </div>
  <!-- Subcon -->
  <div v-if="currentTab === 'subcon'">
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="distributedColumnchart.series"
      :options="distributedColumnchart.chartOptions"
    ></apexchart>
  </div>
  <!-- Operator -->
  <div v-if="currentTab === 'operator'">
    <apexchart
      class="apex-charts"
      height="350"
      dir="ltr"
      :series="distributedColumnchart.series"
      :options="distributedColumnchart.chartOptions"
    ></apexchart>
  </div>
</template>