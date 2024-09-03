<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Details from "./details.vue";
import ApprovalHistory from "./approval-history.vue";
import Payment from "./payment.vue";
import Summary from "./summary.vue";

export default {
  data() {
    return {
      title: "Attendance",
      currentTab: "summary",
    };
  },
  components: {
    Layout,
    PageHeader,
    Details,
    ApprovalHistory,
    Payment,
    Summary,
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
    <PageHeader title="Attendance Details" subTitle="Attendance" />

    <!-- Nav tabs -->
    <ul class="nav nav-tabs nav-tabs-custom nav-primary mb-3" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link All py-3"
          :class="{ active: currentTab === 'summary' }"
          @click.prevent="setTab('summary')"
          href="#"
        >
          Summary
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-3"
          :class="{ active: currentTab === 'details' }"
          @click.prevent="setTab('details')"
          href="#"
        >
          Details
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-3"
          :class="{ active: currentTab === 'payment' }"
          @click.prevent="setTab('payment')"
          href="#"
        >
          Payment
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link py-3"
          :class="{ active: currentTab === 'approvalHistory' }"
          @click.prevent="setTab('approvalHistory')"
          href="#"
        >
          Approval History
        </a>
      </li>
    </ul>

    <!-- Page title & Reports-->
    <div class="d-flex justify-content-between align-items-center">
      <!-- Page Title -->
      <div class="col-7">
        <div v-if="currentTab != 'approvalHistory'" class="d-flex gap-3 align-items-center justify-content-start">
          <h4>SCPT1A-Parcel2(308U) - General Worker - Period 1</h4>
          <span class="badge bg-primary-subtle text-primary">Printed</span>
        </div>
        <div v-if="currentTab === 'approvalHistory'" class="d-flex gap-3 align-items-center justify-content-start">
          <h4>SCPT1A-Parcel2(308U) - General Worker</h4>
        </div>
      </div>  

      <!-- Reports -->
      <div class="col-5 text-end">
        <button
          v-if="currentTab === 'summary'"
          type="button"
          class="btn btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i class="ri-time-line label-icon align-middle fs-16 me-2"></i
          >Hours Report
        </button>

        <button
          v-if="currentTab === 'payment'"
          type="button"
          class="btn mt-2 btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i
            class="ri-file-excel-2-line label-icon align-middle fs-16 me-2"
          ></i>
          AA Only Attendance Summary
        </button>

        <button
          v-if="currentTab === 'payment'"
          type="button"
          class="btn mt-2 btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i
            class="ri-file-excel-2-line label-icon align-middle fs-16 me-2"
          ></i>
          ACC Attendance Summary
        </button>

        <button
          v-if="currentTab === 'payment'"
          type="button"
          class="btn mt-2 btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i
            class="ri-file-excel-2-line label-icon align-middle fs-16 me-2"
          ></i>
          HR Payroll Report
        </button>

        <button
          v-if="currentTab === 'payment'"
          type="button"
          class="btn mt-2 btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i
            class="ri-file-excel-2-line label-icon align-middle fs-16 me-2"
          ></i>
          Instapay Report
        </button>

        <button
          v-if="currentTab === 'details'"
          type="button"
          class="btn btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i class="ri-file-excel-2-line label-icon align-middle fs-16 me-2"></i
          >Export Excel
        </button>

        <button
          v-if="currentTab === 'details'"
          type="button"
          class="btn btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i class="ri-line-chart-line label-icon align-middle fs-16 me-2"></i
          >Export Excel Analytics
        </button>
      </div>
    </div>

    <!-- Summary -->
    <div v-if="currentTab === 'summary'">
      <Summary />
    </div>

    <!-- Attendance -->
    <div v-if="currentTab === 'details'">
      <Details />
    </div>

    <!-- Approval History -->
    <div v-if="currentTab === 'approvalHistory'">
      <ApprovalHistory />
    </div>

    <!-- Payment -->
    <div v-if="currentTab === 'payment'">
      <Payment />
    </div>
  </Layout>
</template>

<style></style>
