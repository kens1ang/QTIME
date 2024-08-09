<script>
export default {
  setup() {
    return {
      crmWidgets: [
        {
          id: 1,
          label: "Headcount Today",
          icon: "bx bx-hard-hat",
          counter: 39,
          decimals: 0,
        },
        {
          id: 2,
          label: "Total Working Hours",
          icon: "bx bx-time-five",
          counter: 17532,
          suffix: "h",
          decimals: 0,
        },
        {
          id: 3,
          label: "Task Overdue",
          icon: "bx bx-task-x",
          counter: 2,
          decimals: 0,
        },
        {
          id: 4,
          label: "Machinery",
          icon: "bx bx-cog",
          counter: 2,
          decimals: 0,
        },
        {
          id: 5,
          label: "Incident & Accident Report",
          icon: "bx bxs-error",
          counter: 1,
          decimals: 1,
        },
        {
          id: 5,
          label: "Inventory Levels",
          icon: "bx bxs-package",
          counter: 88,
          suffix: "%",
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
      <BRow class="row-cols-xxl-2 row-cols-md-3 row-cols-1 g-0">
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
                  {{item.counter}}{{ item.suffix }}
                </h2>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>
