<script>
import { UsersIcon } from '@zhuowenli/vue-feather-icons';

import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  setup() {
    return {
      series: [78.56, 105.02, 42.89],
      chartOptions: {
        labels: ["Desktop", "Mobile", "Tablet"],
        chart: {
          type: "donut",
          height: 219,
        },
        plotOptions: {
          pie: {
            size: 100,
            donut: {
              size: "76%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          position: "bottom",
          horizontalAlign: "center",
          offsetX: 0,
          offsetY: 0,
          markers: {
            width: 20,
            height: 6,
            radius: 2,
          },
          itemMargin: {
            horizontal: 12,
            vertical: 0,
          },
        },
        stroke: {
          width: 0,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + "k" + " Users";
            },
          },
          tickAmount: 4,
          min: 0,
        },
        colors: getChartColorsArray('["--vz-primary","--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.75"]'),
      },
    };
  },
  components: {
    UsersIcon
  }
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Headcount by Category</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -3, crossAxis: 0, mainAxis: 0 }">
          <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
              class="text-muted">General Worker<i class="mdi mdi-chevron-down ms-1"></i></span>
          </template>
          <BDropdownItem>General Worker</BDropdownItem>
          <BDropdownItem>Subcon Worker</BDropdownItem>
          <BDropdownItem>Subcon</BDropdownItem>
          <BDropdownItem>Operator</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody>
      <apexchart class="apex-charts" dir="ltr" height="219" :series="series" :options="chartOptions"></apexchart>

      <div class="table-responsive mt-3">
        <table class="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
          <tbody class="border-0">
            <tr>
              <td>
                <h4 class="text-truncate fs-14 fs-medium mb-0">
                  <i class="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Car Park
                </h4>
              </td>
              <td>
                <p class="text-end">
                  <UsersIcon class="me-2 icon-sm"></UsersIcon>2
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="text-truncate fs-14 fs-medium mb-0">
                  <i class="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Car Park
                </h4>
              </td>
              <td>
                <p class="text-end">
                  <UsersIcon class="me-2 icon-sm"></UsersIcon>2
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h4 class="text-truncate fs-14 fs-medium mb-0">
                  <i class="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Car Park
                </h4>
              </td>
              <td>
                <p class="text-end">
                  <UsersIcon class="me-2 icon-sm"></UsersIcon>2
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BCardBody>
  </BCard>
</template>