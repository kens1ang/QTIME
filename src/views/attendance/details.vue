<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      title: "Attendance",
      currentTab: "details",
      modaltoAdd: false,
      modalTitle: "",
      RfidModal: false,
      RfidModalTitle: "RFID",
      status: "Checked",
      paymentAdjTitle: "Payment Adjustment",
      paymentAdjModal: false,
    };
  },
  computed: {
    statusClass() {
      return {
        "table-success": this.status === "Checked",
        "table-warning": this.status === "Pending",
        "table-danger": this.status === "Rejected",
      };
    },
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
    changeStatus(newStatus) {
      this.status = newStatus;
    },
    deleteAlert() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
        cancelButtonColor: "#f46a6a",
        customClass: {
          confirmButton: "order-confirm-button",
          cancelButton: "order-cancel-button",
        },
      }).then((result) => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    showModal(isEdit) {
      if (isEdit) {
        this.modalTitle = "Edit Attendance";
      } else {
        this.modalTitle = "Add Attendance";
      }
      this.modaltoAdd = true;
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
            class="btn btn-outline-primary waves-effect waves-light material-shadow-none me-3"
            @click="showPaymentAdjModal"
          >
            <i class="bx bx-slider me-1"></i>Payment Adjustment
          </button>
          <button
            type="button"
            class="btn btn-outline-primary waves-effect waves-light material-shadow-none me-3"
            @click="showModal(false)"
          >
            <i class="bx bx-plus me-1"></i> Add Attendance
          </button>
          <button class="btn btn-outline-danger me-3" @click="deleteAlert">
            <i class="ri-delete-bin-2-line"></i>
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
          <thead :class="statusClass">
            <tr>
              <th colspan="20">
                <div
                  class="d-flex justify-content-start gap-3 align-items-center"
                >
                  <div class="form-check form-check-outline form-check-success">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheck15"
                    />
                    <label class="form-check-label" for="formCheck15"> </label>
                  </div>
                  <span>Name: Asmadi</span>
                  <span>ID: 300822</span>
                  <div class="btn-group">
                    <button
                      class="btn btn-sm btn-light dropdown-toggle"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ status }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                      <li>
                        <a
                          class="dropdown-item"
                          @click="changeStatus('Checked')"
                          >Checked</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          @click="changeStatus('Pending')"
                          >Pending</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          @click="changeStatus('Rejected')"
                          >Rejected</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <thead class="table-light">
            <tr>
              <th></th>
              <th>Date</th>
              <th>Rate</th>
              <th>OT Rate</th>
              <th>In - Out</th>
              <th>Working Hours</th>
              <th>Approved Pre-OT</th>
              <th>Actual OT</th>
              <th>ADJ OT</th>
              <th>ADJ Hours</th>
              <th>ADJ (RM)</th>
              <th>Total Payable Hours</th>
              <th>Total Pay (RM)</th>
              <th>Sub Element</th>
              <th>Task/ Sub Sub Element</th>
              <th>Backcharge/WO</th>
              <th>BC (hr)</th>
              <th>Remark</th>
              <th>Loc</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>
                <div class="form-check form-check-outline form-check-success">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck15"
                  />
                  <label class="form-check-label" for="formCheck15"> </label>
                </div>
              </td>
              <td>01/01/24 Mon</td>
              <td>8.7500</td>
              <td>8.7500</td>
              <td>07:23 - 20:07</td>
              <td>8.00</td>
              <td></td>
              <td>3.00</td>
              <td>3</td>
              <td>0</td>
              <td>0.00</td>
              <td>11.00</td>
              <td>96.2500</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
              <td>KSK Leader</td>
              <td></td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-warning edit-item-btn"
                    @click="RfidModal = !RfidModal"
                  >
                    RFID
                  </button>
                  <div class="edit">
                    <BButton
                      variant="soft-info"
                      size="sm"
                      class="edit-list"
                      @click="showModal(true)"
                    >
                      <i class="ri-pencil-fill align-bottom"></i>
                    </BButton>
                  </div>
                  <div class="remove">
                    <BButton
                      variant="soft-danger"
                      size="sm"
                      class="remove-list"
                      @click="deleteAlert"
                    >
                      <i class="ri-delete-bin-5-fill align-bottom"></i>
                    </BButton>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td colspan="12" class="text-end">Sub Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Addtion:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Deduction:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        class="table-responsive table-card mt-3 mb-1"
        style="max-height: 500px; overflow: auto"
      >
        <table class="table align-middle table-nowrap" id="customerTable">
          <thead class="table-warning">
            <tr>
              <th colspan="20">
                <div
                  class="d-flex justify-content-start gap-3 align-items-center"
                >
                  <div class="form-check form-check-outline form-check-success">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheck15"
                    />
                    <label class="form-check-label" for="formCheck15"> </label>
                  </div>
                  <span>Name: Asmadi</span>
                  <span>ID: 300822</span>
                  <span>Status: Pending</span>
                </div>
              </th>
            </tr>
          </thead>
          <thead class="table-light">
            <tr>
              <th></th>
              <th>Date</th>
              <th>Rate</th>
              <th>OT Rate</th>
              <th>In - Out</th>
              <th>Working Hours</th>
              <th>Approved Pre-OT</th>
              <th>Actual OT</th>
              <th>ADJ OT</th>
              <th>ADJ Hours</th>
              <th>ADJ (RM)</th>
              <th>Total Payable Hours</th>
              <th>Total Pay (RM)</th>
              <th>Sub Element</th>
              <th>Task/ Sub Sub Element</th>
              <th>Backcharge/WO</th>
              <th>BC (hr)</th>
              <th>Remark</th>
              <th>Loc</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>
                <div class="form-check form-check-outline form-check-success">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck15"
                  />
                  <label class="form-check-label" for="formCheck15"> </label>
                </div>
              </td>
              <td>01/01/24 Mon</td>
              <td>8.7500</td>
              <td>8.7500</td>
              <td>07:23 - 20:07</td>
              <td>8.00</td>
              <td></td>
              <td>3.00</td>
              <td>3</td>
              <td>0</td>
              <td>0.00</td>
              <td>11.00</td>
              <td>96.2500</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
              <td>KSK Leader</td>
              <td></td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-warning edit-item-btn"
                    @click="RfidModal = !RfidModal"
                  >
                    RFID
                  </button>
                  <div class="edit">
                    <BButton
                      variant="soft-info"
                      size="sm"
                      class="edit-list"
                      @click="showModal(true)"
                    >
                      <i class="ri-pencil-fill align-bottom"></i>
                    </BButton>
                  </div>
                  <div class="remove">
                    <BButton
                      variant="soft-danger"
                      size="sm"
                      class="remove-list"
                      @click="deleteAlert"
                    >
                      <i class="ri-delete-bin-5-fill align-bottom"></i>
                    </BButton>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td colspan="12" class="text-end">Sub Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Addtion:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Deduction:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        class="table-responsive table-card mt-3 mb-1"
        style="max-height: 500px; overflow: auto"
      >
        <table class="table align-middle table-nowrap" id="customerTable">
          <thead class="table-danger">
            <tr>
              <th colspan="20">
                <div
                  class="d-flex justify-content-start gap-3 align-items-center"
                >
                  <div class="form-check form-check-outline form-check-success">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheck15"
                    />
                    <label class="form-check-label" for="formCheck15"> </label>
                  </div>
                  <span>Name: Asmadi</span>
                  <span>ID: 300822</span>
                  <span>Status: Rejected</span>
                </div>
              </th>
            </tr>
          </thead>
          <thead class="table-light">
            <tr>
              <th></th>
              <th>Date</th>
              <th>Rate</th>
              <th>OT Rate</th>
              <th>In - Out</th>
              <th>Working Hours</th>
              <th>Approved Pre-OT</th>
              <th>Actual OT</th>
              <th>ADJ OT</th>
              <th>ADJ Hours</th>
              <th>ADJ (RM)</th>
              <th>Total Payable Hours</th>
              <th>Total Pay (RM)</th>
              <th>Sub Element</th>
              <th>Task/ Sub Sub Element</th>
              <th>Backcharge/WO</th>
              <th>BC (hr)</th>
              <th>Remark</th>
              <th>Loc</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>
                <div class="form-check form-check-outline form-check-success">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck15"
                  />
                  <label class="form-check-label" for="formCheck15"> </label>
                </div>
              </td>
              <td>01/01/24 Mon</td>
              <td>8.7500</td>
              <td>8.7500</td>
              <td>07:23 - 20:07</td>
              <td>8.00</td>
              <td></td>
              <td>3.00</td>
              <td>3</td>
              <td>0</td>
              <td>0.00</td>
              <td>11.00</td>
              <td>96.2500</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
              <td>KSK Leader</td>
              <td></td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-warning edit-item-btn"
                    @click="RfidModal = !RfidModal"
                  >
                    RFID
                  </button>
                  <div class="edit">
                    <BButton
                      variant="soft-info"
                      size="sm"
                      class="edit-list"
                      @click="showModal(true)"
                    >
                      <i class="ri-pencil-fill align-bottom"></i>
                    </BButton>
                  </div>
                  <div class="remove">
                    <BButton
                      variant="soft-danger"
                      size="sm"
                      class="remove-list"
                      @click="deleteAlert"
                    >
                      <i class="ri-delete-bin-5-fill align-bottom"></i>
                    </BButton>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td colspan="12" class="text-end">Sub Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Addtion:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Deduction:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="12" class="text-end">Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>

  <!-- Modal create & edit -->
  <BModal
    v-model="modaltoAdd"
    modal-class="zoomIn"
    :title="modalTitle"
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
    <div class="row mb-3">
      <div class="col-2 d-flex flex-column">
        <h6 class="text-muted">Name</h6>
        <h5>Asmadi</h5>
      </div>
      <div class="col-5 d-flex flex-column">
        <h6 class="text-muted">Project</h6>
        <h5>SCPT1A-Parcel2(308U)</h5>
      </div>
      <div class="col-5 d-flex flex-column">
        <h6 class="text-muted">Last Updated By</h6>
        <h5>sufi - 2024-01-07 01:16:57</h5>
      </div>
    </div>

    <b-form action="#" class="tablelist-form">
      <BRow class="g-3">
        <BCol lg="6">
          <label for="exampleInputdate" class="form-label">Start Date</label>
          <input
            type="date"
            class="form-control"
            value="2024-01-01"
            id="exampleInputdate"
          />
        </BCol>
        <BCol lg="6">
          <label for="exampleInputdate" class="form-label">End Date</label>
          <input
            type="date"
            class="form-control"
            value="2024-01-01"
            id="exampleInputdate"
          />
        </BCol>
        <BCol lg="6">
          <label for="exampleInputtime" class="form-label">In</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputtime"
            value="07:23"
          />
        </BCol>
        <BCol lg="6">
          <label for="exampleInputtime" class="form-label">Out</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputtime"
            value="20:07"
          />
        </BCol>
        <BCol lg="6">
          <label for="name" class="form-label">OT</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            value="0"
            placeholder=""
          />
        </BCol>
        <BCol lg="6">
          <label for="username" class="form-label">ADJ Hours</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            value="0"
            placeholder=""
          />
        </BCol>
        <BCol lg="6">
          <label for="paswword" class="form-label">ADJ (RM)</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            value="0.00"
            placeholder=""
          />
        </BCol>
        <BCol lg="6">
          <label for="email" class="form-label">Subelement</label>
          <select class="form-select">
            <option value=""></option>
            <option value="">WORK ORDER</option>
            <option value="">WORK ON BEHALF</option>
          </select>
        </BCol>
        <BCol lg="6">
          <label for="staffcode" class="form-label">Task</label>
          <select class="form-select">
            <option value=""></option>
          </select>
        </BCol>
        <BCol lg="6">
          <label for="accesslevel" class="form-label">BC/WO</label>
          <select class="form-select">
            <option value=""></option>
          </select>
        </BCol>
        <BCol lg="6">
          <label for="mobileaccess">BC/WO Hours</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputtime"
            value="0"
          />
        </BCol>
        <BCol lg="6">
          <label for="qawardaccess">Remark</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            placeholder=""
            value="KSK Leader"
          />
        </BCol>
        <BCol lg="6">
          <label for="accesslevel" class="form-label">Location</label>
          <select class="form-select">
            <option value=""></option>
          </select>
        </BCol>
        <div class="modal-footer v-modal-footer">
          <div class="hstack gap-2 justify-content-end">
            <BButton type="button" variant="light" @click="modaltoAdd = false"
              >Cancel</BButton
            >
            <BButton type="submit" variant="success" id="addNewBoard"
              >Save</BButton
            >
          </div>
        </div>
      </BRow>
    </b-form>
  </BModal>

  <!--RFID-->
  <BModal
    v-model="RfidModal"
    modal-class="zoomIn"
    :title="RfidModalTitle"
    title-class="exampleModalLabel"
    header-class="p-3 bg-primary-subtle"
    content-class="border-0"
    hide-footer
    class="v-modal-custom"
    centered
    no-fade
    size="md"
  >
    <BRow>
      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0"
          >RFID Tag Code:</label
        >
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="E2806995000050130DD59263"
          readonly
        />
      </BCol>

      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0"
          >Reader Name:</label
        >
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="Reader_2A"
          readonly
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0"
          >Face Scan In:</label
        >
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="14:21:19"
          readonly
        />
      </BCol>
      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0"
          >Face Scan Out:</label
        >
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="14:49:37"
          readonly
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0">RFID In:</label>
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="14:21:19"
          readonly
        />
      </BCol>

      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0">RFID Out:</label>
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="14:49:37"
          readonly
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <label for="readonlyPlaintext" class="form-label mb-0"
          >Total Hours:</label
        >
        <input
          type="text"
          class="form-control-plaintext"
          id="readonlyPlaintext"
          value="0.47"
          readonly
        />
      </BCol>
    </BRow>

    <!--Movement Tracking-->
    <div class="text-muted">
      <h6 class="mt-3">Movement Tracking</h6>
    </div>
    <table class="table table-nowrap">
      <tbody>
        <tr>
          <td>14:49 PM</td>
          <td>SITE OFFICE > OFFICE > N/A > N/A</td>
        </tr>
        <tr>
          <td>14:21 PM</td>
          <td>SITE OFFICE > OFFICE > N/A > N/A</td>
        </tr>
      </tbody>
    </table>
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
    size="xl"
  >
    <div class="d-flex justify-content-between align-items-center mb-2">
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

    <div class="table-responsive scrollable-table-container">
      <table class="table table-nowrap">
        <thead>
          <tr>
            <th>Staffcode</th>
            <th>Name</th>
            <th>Sub total (RM)</th>
            <th>Adjustment</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>300822</td>
            <td>Asmadi</td>
            <td>96.25</td>
            <td>
              <div class="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">+</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Addition"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">-</span>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  placeholder="Deduction"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </td>
            <td>
              <textarea
                class="form-control mb-1"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Addition"
              ></textarea>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
                placeholder="Remark for Deduction"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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

<style>
.scrollable-table-container {
  max-height: 400px; /* Set the maximum height for the container */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Hide horizontal scrolling */
}
</style>
