<script>

import {
  basicLineChart,
} from "../../charts/apex/line/data";

export default {
    data() {
    return {
      basicLineChart: basicLineChart,
    };
  },
};

</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Headcount Overview</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -3, crossAxis: 0, mainAxis: 0 }">
          <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
              class="text-muted">All<i class="mdi mdi-chevron-down ms-1"></i></span>
          </template>
          <BDropdownItem>All</BDropdownItem>
          <BDropdownItem>General Worker</BDropdownItem>
          <BDropdownItem>Subcon Worker</BDropdownItem>
          <BDropdownItem>Subcon</BDropdownItem>
          <BDropdownItem>Operator</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody class="px-0">
        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicLineChart.series"
        :options="basicLineChart.chartOptions"></apexchart>    
    </BCardBody>
  </BCard>
</template>