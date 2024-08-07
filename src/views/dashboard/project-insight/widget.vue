<script>
export default {
  setup() {
    return {
      crmWidgets: [
        {
          id: 1,
          label: "Total Headcount",
          icon: "bx bx-hard-hat",
          counter: 39,
          decimals: 0,
        },
        {
          id: 2,
          label: "Pending Payment",
          icon: "bx bx-dollar",
          counter: 72,
          decimals: 0,
        },
        {
          id: 3,
          label: "Pending Attendance",
          icon: "bx bx-group",
          counter: 32,
          decimals: 0,
        },
        {
          id: 4,
          label: "Pending Work Orders",
          icon: "bx bx-brush-alt",
          counter: 2,
          decimals: 0,
        },
        {
          id: 5,
          label: "Pending Registration",
          icon: "bx bxs-user-check",
          counter: 1,
          decimals: 1,
        },
        {
          id: 5,
          label: "Pending Resignation",
          icon: "bx bxs-user-x",
          counter: 0,
          decimals: 0,
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body class="crm-widget">
    <BCardBody class="p-0">
      <BRow class="row-cols-xxl-3 row-cols-md-3 row-cols-1 g-0">
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
                <h2 class="mb-0">
                  {{item.counter}}
                </h2>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>
