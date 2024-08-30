<script>
export default {
  data() {
    return {
      paymentVoucherTitle: "Payment Voucher",
      paymentAdjTitle: "Payment Adjustment",
      paymentVoucherModal: false,
      paymentAdjModal: false,
    };
  },
  methods: {
    showPaymentVoucherModal() {
      this.paymentVoucherModal = true;
    },
    showPaymentAdjModal() {
      this.paymentAdjModal = true;
    },
  },
};
</script>

<template>
  <div class="card-body" style="margin-bottom: 30px; margin-top: 30px">
    <div class="listjs-table" id="customerList">
      <div class="row g-4 mb-3">
        <div class="col-sm-auto">
          <button
            type="button"
            class="btn btn-light waves-effect waves-light me-2"
            @click="showPaymentVoucherModal"
          >
            Print Payment Voucher
          </button>
          <button
            type="button"
            class="btn btn-light waves-effect waves-light"
            @click="showPaymentAdjModal"
          >
            Payment Adjustment
          </button>
        </div>
        <div class="col-sm">
          <div class="d-flex justify-content-sm-end">
            <div class="search-box ms-2">
              <input
                type="text"
                class="form-control search"
                placeholder="Search..."
              />
              <i class="ri-search-line search-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        class="table-responsive table-card mt-3 mb-1"
        style="max-height: 500px; overflow: auto"
      >
        <table class="table align-middle table-nowrap" id="customerTable">
          <thead class="table-light">
            <tr>
              <th>Type</th>
              <th>Voucher No.</th>
              <th>Pay to</th>
              <th>Incharge</th>
              <th>Amount (RM)</th>
              <th>Cheque Date</th>
              <th>Bank</th>
              <th>Cheque No.</th>
              <th>Cheque Amount (RM)</th>
              <th>Created by</th>
              <th>ACC Remark</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>Cash</td>
              <td>PV-2024-02-0042</td>
              <td>TEOH YIN ZHENG</td>
              <td>MOHAMMAD TORIQUL ISLAM</td>
              <td>1,373.88</td>
              <td>05/02/2024</td>
              <td>AMBB (E-PAYMENT)</td>
              <td>PV-2024-02-0042-PM TO TEOH YIN ZHENG</td>
              <td>1,373.88</td>
              <td>jkloh - 2024-02-05 16:15:59</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-end">
        <div class="pagination-wrap hstack gap-2">
          <a
            class="page-item pagination-prev disabled"
            href="javascript:void(0);"
          >
            Previous
          </a>
          <ul class="pagination listjs-pagination mb-0"></ul>
          <a class="page-item pagination-next" href="javascript:void(0);">
            Next
          </a>
        </div>
      </div>
    </div>
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
      <button type="button" class="btn btn-outline-primary waves-effect waves-light me-3">
        Print Incharge
      </button>
      <button type="button" class="btn btn-outline-primary waves-effect waves-light">
        Print Individual
      </button>
    </div>
    <div class="d-flex align-items-center mb-3">
      <h5 class="fw-bold me-auto">Instapay -- Total: RM 42,934.00</h5>
      <button type="button" class="btn btn-outline-primary waves-effect waves-light me-3">
        Print Incharge
      </button>
      <button type="button" class="btn btn-outline-primary waves-effect waves-light">
        Print Individual
      </button>
    </div>
  </BModal>

  <!-- Payment Adj -->
  <BModal
    v-model="paymentAdjModal"
    modal-class="zoomIn"
    :title="paymentAdjTitle"
    title-class="exampleModalLabel"
    header-class="p-3 bg-primary-subtle"
    content-class="border-0"
    hide-footer
    class="v-modal-custom"
    centered
    no-close-on-backdrop
    no-fade
    size="lg"
  >
    <table class="table table-nowrap">
      <thead class="text-center">
        <tr>
          <th>Staffcode</th>
          <th>Name</th>
          <th>Adjustment</th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td>000107</td>
          <td>TEOH YIN ZHENG</td>
          <td>
            <div class="input-step">
              <BButton type="button" class="minus">–</BButton>
              <input
                type="number"
                class="product-quantity"
                value="0"
                min="0"
                max="100000"
                readonly
              />
              <BButton type="button" class="plus">+</BButton>
            </div>
          </td>
          <td>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea5"
              rows="1"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal-footer v-modal-footer">
      <div class="hstack gap-2 justify-content-end">
        <BButton type="button" variant="light" @click="modaltoAdd = false"
          >Cancel</BButton
        >
        <BButton type="submit" variant="success" id="addNewBoard"
          >Apply</BButton
        >
      </div>
    </div>
  </BModal>
</template>
