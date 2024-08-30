<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Details from "./details.vue";
import ApprovalHistory from "./approval-history.vue";

export default {
  data() {
    return {
      title: "Attendance",
      currentTab: "details",
    };
  },
  components: {
    Layout,
    PageHeader,
    Details,
    ApprovalHistory,
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

    <!-- Page title -->
    <div class="d-flex justify-content-between align-items-center">
      <h4>SCPT1A-Parcel2(308U) - General Worker - 1/01/2024 To 15/01/2024</h4>
      <div>
        <button
          v-if="currentTab === 'details' || currentTab === 'approvalHistory'"
          type="button"
          class="btn btn-outline-primary waves-effect waves-light me-2"
        >
          <i class="bx bxs-file-export label-icon align-middle fs-16 me-2"></i
          >Export Excel
        </button>
        <button
          v-if="currentTab === 'details'"
          type="button"
          class="btn btn-outline-primary waves-effect waves-light"
        >
          <i class="bx bx-line-chart label-icon align-middle fs-16 me-2"></i
          >Export Excel Analytics
        </button>
      </div>
    </div>

    <!-- Attendance -->
    <div v-if="currentTab === 'details'">
      <Details />
    </div>

    <!-- Approval History -->
    <div v-if="currentTab === 'approvalHistory'">
      <ApprovalHistory />
    </div>
  </Layout>
</template>

<style></style>
