<script>
import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  setup() {
    return {
      series: [19405, 40552, 15824, 30635],
      chartOptions: {
        labels: ["Bitcoin", "Ethereum", "Litecoin", "Dash"],
        chart: {
          type: "donut",
          height: 224,
        },
        plotOptions: {
          pie: {
            size: 100,
            offsetX: 0,
            offsetY: 0,
            donut: {
              size: "70%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "18px",
                  offsetY: -5,
                },
                value: {
                  show: true,
                  fontSize: "20px",
                  color: "#343a40",
                  fontWeight: 500,
                  offsetY: 5,
                  formatter: function (val) {
                    return "$" + val;
                  },
                },
                total: {
                  show: true,
                  fontSize: "13px",
                  label: "Total value",
                  color: "#9599ad",
                  fontWeight: 500,
                  formatter: function (w) {
                    return (
                      "$" +
                      w.globals.seriesTotals.reduce(function (a, b) {
                        return a + b;
                      }, 0)
                    );
                  },
                },
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value;
            },
          },
        },
        stroke: {
          lineCap: "round",
          width: 2,
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.65", "--vz-primary-rgb, 0.50"]'),
      },
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="border-0 align-items-center d-flex">
      <BCardTitle class="mb-0 flex-grow-1">Cost Breakdown</BCardTitle>
      <div>
        <div class="flex-shrink-0 ms-2">
          <BDropdown variant="link" class="card-header-dropdown" toggle-class="btn btn-soft-primary btn-sm arrow-none"
            menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -105, crossAxis: 0, mainAxis: 10 }">
            <template #button-content><span class="text-uppercase">Category<i
                  class="mdi mdi-chevron-down align-middle ms-1"></i></span></template>
            <BDropdownItem>Category</BDropdownItem>
            <BDropdownItem>Sub Element</BDropdownItem>
            <BDropdownItem>Work Order</BDropdownItem>
          </BDropdown>
        </div>
      </div>
    </BCardHeader>
    <BCardBody>
      <apexchart class="apex-charts" height="224" dir="ltr" :series="series" :options="chartOptions"></apexchart>

      <ul class="list-group list-group-flush border-dashed mb-0 mt-3 pt-2">
        <li class="list-group-item px-0">
          <div class="d-flex">
            <div class="flex-shrink-0 avatar-xs">
              <span class="avatar-title bg-light p-1 rounded-circle">
                <img src="@/assets/images/svg/crypto-icons/btc.svg" class="img-fluid" alt="" />
              </span>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-1">Labour</h6>
            </div>
            <div class="flex-shrink-0 text-end">
              <h6 class="mb-1">$100,000.00</h6>
            </div>
          </div>
        </li>

        <li class="list-group-item px-0">
          <div class="d-flex">
            <div class="flex-shrink-0 avatar-xs">
              <span class="avatar-title bg-light p-1 rounded-circle">
                <img src="@/assets/images/svg/crypto-icons/btc.svg" class="img-fluid" alt="" />
              </span>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-1">Labour</h6>
            </div>
            <div class="flex-shrink-0 text-end">
              <h6 class="mb-1">$100,000.00</h6>
            </div>
          </div>
        </li>

        <li class="list-group-item px-0">
          <div class="d-flex">
            <div class="flex-shrink-0 avatar-xs">
              <span class="avatar-title bg-light p-1 rounded-circle">
                <img src="@/assets/images/svg/crypto-icons/btc.svg" class="img-fluid" alt="" />
              </span>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-1">Labour</h6>
            </div>
            <div class="flex-shrink-0 text-end">
              <h6 class="mb-1">$100,000.00</h6>
            </div>
          </div>
        </li>

        <li class="list-group-item px-0">
          <div class="d-flex">
            <div class="flex-shrink-0 avatar-xs">
              <span class="avatar-title bg-light p-1 rounded-circle">
                <img src="@/assets/images/svg/crypto-icons/btc.svg" class="img-fluid" alt="" />
              </span>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="mb-1">Labour</h6>
            </div>
            <div class="flex-shrink-0 text-end">
              <h6 class="mb-1">$100,000.00</h6>
            </div>
          </div>
        </li>

      </ul>

    </BCardBody>
  </BCard>
</template>