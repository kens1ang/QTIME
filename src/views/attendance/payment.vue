<template>
  <div class="card-body" style="margin-bottom: 30px; margin-top: 30px">
    <div class="d-flex justify-content-start align-items-center">
      <h6 class="fw-bold">Cash Payment</h6>
    </div>
    <div
      class="table-responsive table-card mt-3 mb-3"
      style="max-height: 500px; overflow: auto"
    >
      <table class="table align-middle table-nowrap" id="customerTable">
        <thead class="table-light">
          <tr>
            <th>Voucher No</th>
            <th>Pay to</th>
            <th>Cheque Date</th>
            <th>Cheque No.</th>
            <th>Created by</th>
            <th>ACC Remark</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr>
            <td>PV-2024-08-0184</td>
            <td>Lee Kean Hoe (Chris)</td>
            <td>05/02/2024</td>
            <td>953333-PD TO LEE KEAN HOE</td>
            <td>jkloh - 2024-02-05 16:15:59</td>
            <td>*POB-VB</td>
          </tr>
        </tbody>
        <thead class="table-light">
          <tr>
            <th>Staff Code</th>
            <th>Staff Name</th>
            <th colspan="2"></th>
            <th class="text-end">Amount (RM)</th>
            <th class="text-end">Cheque Amount (RM)</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr>
            <td>200161</td>
            <td>Kabil Hossain</td>
            <td colspan="2"></td>
            <td class="text-end">1,373.88</td>
            <td class="text-end">1,373.88</td>
          </tr>
          <tr>
            <td>200161</td>
            <td>Kabil Hossain</td>
            <td colspan="2"></td>
            <td class="text-end">1,373.88</td>
            <td class="text-end">1,373.88</td>
          </tr>
          <tr>
            <td>200161</td>
            <td>Kabil Hossain</td>
            <td colspan="2"></td>
            <td class="text-end">1,373.88</td>
            <td class="text-end">1,373.88</td>
          </tr>
        </tbody>
        <tfoot class="table-light text-end">
          <tr>
            <td colspan="6">
              <div class="d-flex justify-content-end gap-3">
                <span>Total Paid Amount:</span>
                <span>4121.64</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="d-flex justify-content-start align-items-center">
      <h6 class="fw-bold">Instapay</h6>
    </div>
    <div
      class="table-responsive table-card mt-3"
      style="max-height: 500px; overflow: auto"
    >
      <table class="table align-middle table-nowrap" id="customerTable">
        <thead class="table-light">
          <tr>
            <th>Voucher No</th>
            <th>Bank</th>
            <th>Pay to</th>
            <th>Cheque Date</th>
            <th>Cheque No.</th>
            <th>Created by</th>
            <th>ACC Remark</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr>
            <td>PV-2024-08-0184</td>
            <td>AMBB (E-PAYMENT)</td>
            <td>Lee Kean Hoe (Chris)</td>
            <td>05/02/2024</td>
            <td>953333-PD TO LEE KEAN HOE</td>
            <td>jkloh - 2024-02-05 16:15:59</td>
            <td>*POB-VB</td>
          </tr>
        </tbody>
        <thead class="table-light">
          <tr>
            <th>Staff Code</th>
            <th>Staff Name</th>
            <th colspan="3"></th>
            <th class="text-end">Amount (RM)</th>
            <th class="text-end">Cheque Amount (RM)</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr>
            <td>200161</td>
            <td>Kabil Hossain</td>
            <td colspan="3"></td>
            <td class="text-end">1,373.88</td>
            <td class="text-end">1,373.88</td>
          </tr>
          <tr>
            <td>200161</td>
            <td>Kabil Hossain</td>
            <td colspan="3"></td>
            <td class="text-end">1,373.88</td>
            <td class="text-end">1,373.88</td>
          </tr>
          <tr>
            <td>200161</td>
            <td>Kabil Hossain</td>
            <td colspan="3"></td>
            <td class="text-end">1,373.88</td>
            <td class="text-end">1,373.88</td>
          </tr>
        </tbody>
        <tfoot class="table-light text-end">
          <tr>
            <td colspan="7">
              <div class="d-flex justify-content-end gap-3">
                <span>Total Paid Amount:</span>
                <span>4121.64</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
