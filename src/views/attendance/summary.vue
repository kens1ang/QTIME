<script>
export default {
  setup() {
    return {
      crmWidgets: [
        {
          id: 1,
          label: "Total Headcount",
          icon: "bx bx-hard-hat",
          counter: 20,
          decimals: 0,
        },
        {
          id: 2,
          label: "Total Backcharge",
          icon: "bx bx-money-withdraw",
          counter: 17532,
          decimals: 0,
          prefix: "RM",
        },
        {
          id: 3,
          label: "Total Cash",
          icon: "bx bx-money",
          counter: 3066,
          decimals: 69,
          prefix: "RM",
        },
        {
          id: 4,
          label: "Total Instapay",
          icon: "bx bx-credit-card",
          counter: 42934,
          decimals: 0,
          prefix: "RM",
        },
        {
          id: 4,
          label: "Total Payment",
          icon: "bx bx-dollar",
          counter: 28468,
          decimals: 0,
          prefix: "RM",
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body class="crm-widget mt-3">
    <BCardBody class="p-0">
      <BRow class="row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
        <BCol v-for="(item, index) of crmWidgets" :key="index">
          <div class="py-4 px-3">
            <h5 class="text-muted text-uppercase fs-13">
              {{ item.label }}
            </h5>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <i :class="`${item.icon} display-6 text-muted`"></i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h2 class="mb-0">{{item.prefix}}{{ item.counter }}{{ item.suffix }}</h2>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>

  <div class="card-body" style="margin-bottom: 30px; margin-top: 30px">
    <div class="listjs-table" id="customerList">
      <div
        class="table-responsive table-card mt-3 mb-1"
        style="max-height: 500px; overflow: auto"
      >
        <table class="table align-middle table-nowrap" id="customerTable">
          <thead class="table-primary">
            <tr>
              <th colspan="5">Approval List</th>
            </tr>
          </thead>
          <thead class="table-light">
            <tr>
              <th>Name</th>
              <th class="sort">Expired</th>
              <th class="sort">Date</th>
              <th>Status</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td>
                <span class="badge bg-primary-subtle text-primary"
                  >Approved</span
                >
              </td>
              <td>TOTAL 28165.72. headcount 27. back charge 13,463.50. .</td>
            </tr>
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td>
                <span class="badge bg-warning-subtle text-warning"
                  >Pending</span
                >
              </td>
              <td>
                VS July 2nd half: KSK Amt reduce RMM1,429. KSK Headcount reduce
                3, 30-->27 Pax
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
