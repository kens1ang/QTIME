<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import headcountOverview from "./headcount/headcount-overview.vue";
import headcountLocation from "./headcount-location.vue";
import projectLogs from "./project-logs.vue";
import headcountWorkertype from "./headcount/headcount-workertype.vue";
import projectTimeline from "./project-timeline.vue";

export default {
  data() {
    return {
      title: "Project Insight",
    };
  },
  components: {
    headcountOverview,
    headcountLocation,
    projectLogs,
    Layout,
    PageHeader,
    headcountWorkertype,
    projectTimeline,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Project Insight" subTitle="Dashboard" />

    <div class="d-sm-flex align-items-center justify-content-between mb-3">
      <h1 style="font-size: 25px; margin-top: 5px">FORUM2</h1>
    </div>

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
          <BCardBody>
            <BTabs nav-class="mb-3">
              <BTab title="General Worker">
                <headcountWorkertype />
              </BTab>
              <BTab title="Subcon as KSK">
                <headcountWorkertype />
              </BTab>
              <BTab title="Subcon">
                <headcountWorkertype />
              </BTab>
              <BTab title="Operator">
                <headcountWorkertype />
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <headcountOverview />
      </BCol>
    </BRow>

    <!--Headcount-->
    <BRow>
      <BCol xxl="12" md="4">
        <headcountLocation />
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="5">
        <projectLogs />
      </BCol>
      <BCol xl="7">
        <BCard no-body>
          <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Project Timeline</BCardTitle>
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
          <BCardBody>
            <BTabs nav-class="mb-3">
              <BTab title="General Worker">
                <projectTimeline />
              </BTab>
              <BTab title="Subcon as KSK">
                <projectTimeline />
              </BTab>
              <BTab title="Staff">
                <projectTimeline />
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

<style></style>
