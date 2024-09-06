<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Attendance from "./attendance.vue";
import WorkOrder from "./work-order.vue";
import Registration from "./registration.vue";
import Resignation from "./resignation.vue";

export default {
  data() {
    return {
      title: "Pending Board",
      currentTab: "attendance",
    };
  },
  components: {
    Layout,
    PageHeader,
    Attendance,
    WorkOrder,
    Registration,
    Resignation,
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader
      title="Pending Board"
      subTitle="Dashboard"
    />

    <!-- Nav tabs -->
    <ul class="nav nav-tabs nav-tabs-custom nav-primary mb-3" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link All py-3"
          :class="{ active: currentTab === 'attendance' }"
          @click.prevent="setTab('attendance')"
          href="#"
        >
          Attendance
          <span class="badge bg-danger-subtle text-danger">2</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-3"
          :class="{ active: currentTab === 'workOrder' }"
          @click.prevent="setTab('workOrder')"
          href="#"
        >
          Work Order
          <span class="badge bg-danger-subtle text-danger">1</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-3"
          :class="{ active: currentTab === 'registration' }"
          @click.prevent="setTab('registration')"
          href="#"
        >
          Registration
          <span class="badge bg-danger-subtle text-danger">1</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-3"
          :class="{ active: currentTab === 'resignation' }"
          @click.prevent="setTab('resignation')"
          href="#"
        >
          Resignation
        </a>
      </li>
    </ul>

    <!-- Attendance -->
    <div
      v-if="currentTab === 'attendance'"
      class="card-body"
      style="margin-bottom: 30px; margin-top: 30px"
    >
      <Attendance />
    </div>

    <!-- Work Order -->
    <div
      v-if="currentTab === 'workOrder'"
      class="card-body"
      style="margin-bottom: 30px; margin-top: 30px"
    >
      <WorkOrder />
    </div>

    <!-- Registration -->
    <div
      v-if="currentTab === 'registration'"
      class="card-body"
      style="margin-bottom: 30px; margin-top: 30px"
    >
      <Registration />
    </div>

    <!-- Resignation -->
    <div
      v-if="currentTab === 'resignation'"
      class="card-body"
      style="margin-bottom: 30px; margin-top: 30px"
    >
      <Resignation />
    </div>
  </Layout>
</template>
