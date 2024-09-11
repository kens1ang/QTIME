<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Details from "./details.vue";
import Payment from "./payment.vue";
import Summary from "./summary.vue";

export default {
  data() {
    return {
      title: "Attendance",
      currentTab: "summary",
      paymentVoucherTitle: "Payment Voucher",
      paymentVoucherModal: false,
    };
  },
  components: {
    Layout,
    PageHeader,
    Details,
    Payment,
    Summary,
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
    showPaymentVoucherModal() {
      this.paymentVoucherModal = true;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader
      v-if="currentTab === 'summary'"
      title="Attendance Summary"
      subTitle="Search Attendance"
    />
    <PageHeader
      v-if="currentTab === 'details'"
      title="Attendance Details"
      subTitle="Search Attendance"
    />
    <PageHeader
      v-if="currentTab === 'payment'"
      title="Payment"
      subTitle="Search Attendance"
    />

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
    </ul>

    <!-- Page title & Reports-->
    <div class="d-flex justify-content-between align-items-center">
      <!-- Page Title -->
      <div class="col-7">
        <div class="d-flex align-items-center justify-content-start flex-wrap">
          <h4>General Worker - Jan 2024 Period 1</h4>
          <span class="badge bg-warning-subtle text-warning mb-2">pending</span>
        </div>
      </div>

      <!-- Reports -->
      <div class="col-5 text-end">
        <button
          v-if="currentTab === 'summary'"
          type="button"
          class="btn btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i class="ri-money-dollar-circle-line label-icon align-middle fs-16 me-2"></i>Expenses
          Report
        </button>

        <button
          v-if="currentTab === 'summary'"
          type="button"
          class="btn btn-sm btn-outline-primary waves-effect waves-light me-2"
        >
          <i class="ri-time-line label-icon align-middle fs-16 me-2"></i>Hours
          Report
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
          v-if="currentTab === 'payment'"
          type="button"
          class="btn mt-2 btn-sm btn-outline-primary waves-effect waves-light me-2"
          @click="showPaymentVoucherModal"
        >
          <i class="ri-ticket-line label-icon align-middle fs-16 me-2"></i>
          Payment Voucher
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

    <!-- Payment -->
    <div v-if="currentTab === 'payment'">
      <Payment />
    </div>

    <!-- Payment Voucher -->
    <BModal
      v-model="paymentVoucherModal"
      modal-class="zoomIn"
      :title="paymentVoucherTitle"
      title-class="exampleModalLabel"
      header-class="p-3 bg-primary-subtle"
      content-class="border-0"
      hide-footer
      class="v-modal-custom"
      centered
      no-fade
      size="lg"
    >
      <div class="d-flex align-items-center mb-3">
        <h5 class="fw-bold me-auto">Cash -- Total: RM 3,055.69</h5>
        <button
          type="button"
          class="btn btn-outline-primary waves-effect waves-light me-3"
        >
          Print Incharge
        </button>
        <button
          type="button"
          class="btn btn-outline-primary waves-effect waves-light"
        >
          Print Individual
        </button>
      </div>
      <div class="d-flex align-items-center mb-3">
        <h5 class="fw-bold me-auto">Instapay -- Total: RM 42,934.00</h5>
        <button
          type="button"
          class="btn btn-outline-primary waves-effect waves-light me-3"
        >
          Print Incharge
        </button>
        <button
          type="button"
          class="btn btn-outline-primary waves-effect waves-light"
        >
          Print Individual
        </button>
      </div>
    </BModal>
  </Layout>
</template>
