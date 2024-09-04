<script>
import { CountTo } from "vue3-count-to";

export default {
  components: {
    CountTo,
  },
};
</script>

<template>
  <BRow>
    <BCol lg="4">
      <BCard no-body class="card-height-100 mt-3">
        <BCardBody>
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span
                class="avatar-title bg-warning-subtle text-warning rounded-2 fs-2"
              >
                <i class="bx bx-hard-hat"></i>
              </span>
            </div>
            <div class="flex-grow-1 ms-3">
              <p class="text-uppercase fw-medium text-muted mb-3">
                Total Headcount
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal="20"
                  :duration="1000"
                ></count-to>
              </h4>
              <p class="text-muted mb-0">From 17 last period</p>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="warning-subtle"
                class="bg-warning-subtle text-warning fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>17.66
                %<span> </span>
              </BBadge>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol lg="4">
      <BCard no-body class="card-height-100 mt-3">
        <BCardBody>
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span
                class="avatar-title bg-primary-subtle text-primary rounded-2 fs-2"
              >
                <i class="bx bx-money-withdraw"></i>
              </span>
            </div>
            <div class="flex-grow-1 ms-3">
              <p class="text-uppercase fw-medium text-muted mb-3">
                Total Backcharge
              </p>
              <h4 class="fs-4 mb-3">
                RM
                <count-to
                  :startVal="0"
                  :endVal="17532"
                  :duration="1000"
                ></count-to>
              </h4>
              <p class="text-muted mb-0">From RM 14,253.66 last period</p>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="success-subtle"
                class="bg-success-subtle text-success fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>22.96
                %<span> </span>
              </BBadge>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol lg="4">
      <BCard no-body class="card-height-100 mt-3">
        <BCardBody>
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span
                class="avatar-title bg-danger-subtle text-danger rounded-2 fs-2"
              >
                <i class="bx bx-money"></i>
              </span>
            </div>
            <div class="flex-grow-1 ms-3">
              <p class="text-uppercase fw-medium text-muted mb-3">
                Total Payment
              </p>
              <h4 class="fs-4 mb-3">
                RM
                <count-to
                  :startVal="0"
                  :endVal="28468"
                  :duration="1000"
                ></count-to>
              </h4>
              <p class="text-muted mb-0">From RM 23,144.71 last period</p>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="danger-subtle"
                class="bg-danger-subtle text-danger fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>22.96
                %<span> </span>
              </BBadge>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

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
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td>
                <span class="badge bg-warning-subtle text-warning"
                  >Pending</span
                >
              </td>
              <td></td>
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
