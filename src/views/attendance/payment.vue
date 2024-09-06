<template>
  <div class="card-body" style="margin-bottom: 30px; margin-top: 30px">
    <div class="listjs-table" id="customerList">
      <div class="row g-4 mb-3">
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
          <thead class="table-success">
            <tr>
              <th colspan="9">
                <div class="d-flex justify-content-start gap-3">
                  <span>Voucher No:  PV-2024-08-0184</span>
                  <span>Bank: AMBB</span>
                </div>
              </th>
            </tr>
          </thead>
          <thead class="table-light">
            <tr>
              <th>Type</th>
              <th>Pay to</th>
              <th>Incharge</th>
              <th>Amount (RM)</th>
              <th>Cheque Date</th>
              <th>Cheque No.</th>
              <th>Cheque Amount (RM)</th>
              <th>Created by</th>
              <th>ACC Remark</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>Cash</td>
              <td>Lee Kean Hoe (Chris)</td>
              <td>Kabil Hossain</td>
              <td>1,396.88</td>
              <td>05/02/2024</td>
              <td>953333-PD TO LEE KEAN HOE</td>
              <td>1,373.88</td>
              <td>jkloh - 2024-02-05 16:15:59</td>
              <td>*POB-VB</td>
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

      <div
        class="table-responsive table-card mt-3 mb-1"
        style="max-height: 500px; overflow: auto"
      >
        <table class="table align-middle table-nowrap" id="customerTable">
          <thead class="table-success">
            <tr>
              <th colspan="9">
                <div class="d-flex justify-content-start gap-3">
                  <span>Voucher No: PV-2024-08-0185</span>
                  <span>Bank: AMBB (E-PAYMENT)</span>
                </div>
              </th>
            </tr>
          </thead>
          <thead class="table-light">
            <tr>
              <th>Type</th>
              <th>Pay to</th>
              <th>Incharge</th>
              <th>Amount (RM)</th>
              <th>Cheque Date</th>
              <th>Cheque No.</th>
              <th>Cheque Amount (RM)</th>
              <th>Created by</th>
              <th>ACC Remark</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>Instapay</td>
              <td>INSTAPAY</td>
              <td>SORI</td>
              <td>1,373.88</td>
              <td>05/02/2024</td>
              <td>PAY TO INSTAPAY</td>
              <td>1,373.88</td>
              <td>jkloh - 2024-02-05 16:15:59</td>
              <td>*POB-VB</td>
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
</template>
