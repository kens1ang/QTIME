<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import headcountOverview from "./headcount/headcount-overview.vue";
import headcountLocation from "./headcount/headcount-location.vue";
import headcountSubelement from "./headcount/headcount-subelement.vue";
import ongoingTask from "./task-management/ongoing-task.vue";
import timelineDetails from "./task-management/timeline-details.vue";
import projectLogs from "./task-management/project-logs.vue";
import widget from "./widget.vue";
import weather from "./weather.vue";

export default {
  data() {
    return {
      title: "Project Insight",
    };
  },
  components: {
    headcountOverview,
    headcountLocation,
    Layout,
    PageHeader,
    headcountSubelement,
    ongoingTask,
    widget,
    weather,
    projectLogs,
    timelineDetails,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Project Insight" subTitle="Dashboard" />

    <!-- Project Name -->
    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <h1 style="font-size: 25px; margin-top: 5px">FORUM2</h1>
    </div>

    <!-- Widgets & Weather -->
    <BRow class="custom-breakpoint">
      <BCol xl="6" md="12">
        <widget />
      </BCol>
      <BCol xl="6" md="12">
        <weather />
      </BCol>
    </BRow>

    <!-- Headcount by Subelement & Overview-->
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1"
              >Headcount by Subelement</BCardTitle
            >
            <div class="flex-shrink-0">
              <BDropdown
                variant="link"
                class="card-header-dropdown"
                toggle-class="text-reset dropdown-btn arrow-none"
                menu-class="dropdown-menu-end"
                aria-haspopup="true"
                :offset="{ alignmentAxis: -3, crossAxis: 0, mainAxis: 0 }"
              >
                <template #button-content>
                  <span class="fw-semibold text-uppercase fs-12">Sort by: </span
                  ><span class="text-muted"
                    >Today<i class="mdi mdi-chevron-down ms-1"></i
                  ></span>
                </template>
                <BDropdownItem>Today</BDropdownItem>
                <BDropdownItem>This Week</BDropdownItem>
                <BDropdownItem>This Month</BDropdownItem>
                <BDropdownItem>This Year</BDropdownItem>
              </BDropdown>
            </div>
          </BCardHeader>
          <BCardBody class="p-0">
            <headcountSubelement />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <headcountOverview />
      </BCol>
    </BRow>

    <!-- Headcount by Location & Project Logs -->
    <BRow>
      <BCol xxl="8" md="4">
        <BCard no-body class="card-height-100">
          <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1"
              >Headcount by Location</BCardTitle
            >
            <div class="flex-shrink-0">
              <BDropdown
                variant="link"
                class="card-header-dropdown"
                toggle-class="text-reset dropdown-btn arrow-none"
                menu-class="dropdown-menu-end"
                :offset="{ alignmentAxis: -140, crossAxis: 0, mainAxis: 0 }"
              >
                <template #button-content>
                  <span class="text-muted fs-16"
                    ><i class="mdi mdi-dots-vertical align-middle"></i
                  ></span>
                </template>
                <BDropdownItem>Add Location</BDropdownItem>
                <BDropdownItem>Add RFID</BDropdownItem>
              </BDropdown>
            </div>
          </BCardHeader>
          <BCardBody class="p-0">
            <headcountLocation />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="4">
        <projectLogs />
      </BCol>
    </BRow>

    <!-- Project Timeline -->
    <BRow>
      <BCol xl="12">
        <BCard no-body class="card-height-100">
          <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Ongoing Task</BCardTitle>
            <div class="flex-shrink-0">
              <BDropdown
                variant="link"
                class="card-header-dropdown"
                toggle-class="text-reset dropdown-btn arrow-none"
                menu-class="dropdown-menu-end"
                aria-haspopup="true"
                :offset="{ alignmentAxis: -3, crossAxis: 0, mainAxis: 0 }"
              >
                <template #button-content>
                  <span class="fw-semibold text-uppercase fs-12">Sort by: </span
                  ><span class="text-muted"
                    >Day<i class="mdi mdi-chevron-down ms-1"></i
                  ></span>
                </template>
                <BDropdownItem>Day</BDropdownItem>
                <BDropdownItem>Week</BDropdownItem>
                <BDropdownItem>Month</BDropdownItem>
                <BDropdownItem>Year</BDropdownItem>
              </BDropdown>
            </div>
          </BCardHeader>
          <BRow>
            <BCol xl="8" class="pe-0">
              <BCard
                no-body
                class="mb-0 border-start-0 border-top-0 border-bottom-0 rounded-0"
              >
                <BCardBody class="p-0">
                  <ongoingTask />
                </BCardBody>
              </BCard>
            </BCol>
            <BCol xl="4" class="ps-0">
              <BCard
                no-body
                class="mb-0 border-start-0 border-top-0 border-bottom-0 border-end-0 overflow-auto"
                style="max-height: 500px"
              >
                <timelineDetails />
              </BCard>
            </BCol>
          </BRow>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

<style>
@media (max-width: 1399.98px) {
  .custom-breakpoint .col-xl-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
