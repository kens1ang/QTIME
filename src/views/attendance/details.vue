<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      title: "Attendance",
      currentTab: "details",
      modaltoAdd: false,
      modalTitle: "",
    };
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
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
            class="btn btn-soft-primary waves-effect waves-light material-shadow-none"
            @click="showModal(false)"
            style="margin-right: 10px"
          >
            <i class="ri-add-line align-bottom me-1"></i> Add Attendance
          </button>
          <button class="btn btn-soft-danger" @click="deleteAlert">
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
          <thead class="table-success">
            <tr>
              <th>Name: Asmadi</th>
              <th>ID: 300822</th>
              <th colspan="20"></th>
            </tr>
          </thead>
          <thead class="table-light custom-th">
            <tr>
              <th>Date</th>
              <th>Rate</th>
              <th>OT Rate</th>
              <th>In</th>
              <th>Out</th>
              <th>Hours at Site</th>
              <th>Working Hours</th>
              <th>Approved Pre-OT</th>
              <th>Actual OT</th>
              <th>ADJ OT</th>
              <th>Special ADJ</th>
              <th>ADJ (RM)</th>
              <th>Total Payable</th>
              <th>Total Pay (RM)</th>
              <th>Sub Element</th>
              <th>Task/ Sub Sub Element</th>
              <th>Backcharge/WO</th>
              <th>BC (hr)</th>
              <th>Remark</th>
              <th>Loc 1</th>
              <th>Loc 2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>01/01/24 Mon</td>
              <td>8.7500</td>
              <td>8.7500</td>
              <td>01-Jan 07:23</td>
              <td>01-Jan 20:07</td>
              <td>12.73</td>
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
              <td></td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-light edit-item-btn"
                  >
                    RFID
                  </button>
                  <div class="edit">
                    <button
                      class="btn btn-sm btn-success edit-item-btn"
                      @click="showModal(true)"
                    >
                      Edit
                    </button>
                  </div>
                  <div class="remove">
                    <button
                      class="btn btn-sm btn-danger remove-item-btn"
                      @click="deleteAlert"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td colspan="13" class="text-end">Sub Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
            <tr>
              <td colspan="13" class="text-end">Addtion:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="13" class="text-end">Deduction:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="13" class="text-end">Total:</td>
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
          <thead class="table-success">
            <tr>
              <th>Name: Asmadi</th>
              <th>ID: 300822</th>
              <th colspan="20"></th>
            </tr>
          </thead>
          <thead class="table-light custom-th">
            <tr>
              <th>Date</th>
              <th>Rate</th>
              <th>OT Rate</th>
              <th>In</th>
              <th>Out</th>
              <th>Hours at Site</th>
              <th>Working Hours</th>
              <th>Approved Pre-OT</th>
              <th>Actual OT</th>
              <th>ADJ OT</th>
              <th>Special ADJ</th>
              <th>ADJ (RM)</th>
              <th>Total Payable</th>
              <th>Total Pay (RM)</th>
              <th>Sub Element</th>
              <th>Task/ Sub Sub Element</th>
              <th>Backcharge/WO</th>
              <th>BC (hr)</th>
              <th>Remark</th>
              <th>Loc 1</th>
              <th>Loc 2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>01/01/24 Mon</td>
              <td>8.7500</td>
              <td>8.7500</td>
              <td>01-Jan 07:23</td>
              <td>01-Jan 20:07</td>
              <td>12.73</td>
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
              <td></td>
              <td>
                <div class="d-flex gap-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-light edit-item-btn"
                  >
                    RFID
                  </button>
                  <div class="edit">
                    <button
                      class="btn btn-sm btn-success edit-item-btn"
                      @click="showModal(true)"
                    >
                      Edit
                    </button>
                  </div>
                  <div class="remove">
                    <button
                      class="btn btn-sm btn-danger remove-item-btn"
                      @click="deleteAlert"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td colspan="13" class="text-end">Sub Total:</td>
              <td>RM 96.25</td>
              <td colspan="9"></td>
            </tr>
            <tr>
              <td colspan="13" class="text-end">Addtion:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="13" class="text-end">Deduction:</td>
              <td>RM 0.00</td>
              <td>Remark:</td>
              <td colspan="8"></td>
            </tr>
            <tr>
              <td colspan="13" class="text-end">Total:</td>
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
      <div class="col-2 d-flex flex-column align-items-center">
        <h5 class="text-muted">Name</h5>
        <h4>Asmadi</h4>
      </div>
      <div class="col-5 d-flex flex-column align-items-center">
        <h5 class="text-muted">Project</h5>
        <h4>SCPT1A-Parcel2(308U)</h4>
      </div>
      <div class="col-5 d-flex flex-column align-items-center">
        <h5 class="text-muted">Last Updated By</h5>
        <h4>sufi - 2024-01-07 01:16:57</h4>
      </div>
    </div>

    <b-form action="#" class="tablelist-form">
      <BRow class="g-3">
        <BCol lg="6">
          <label for="exampleInputdate" class="form-label">Start Date</label>
          <input type="date" class="form-control" id="exampleInputdate" />
        </BCol>
        <BCol lg="6">
          <label for="exampleInputdate" class="form-label">End Date</label>
          <input type="date" class="form-control" id="exampleInputdate" />
        </BCol>
        <BCol lg="6">
          <label for="exampleInputtime" class="form-label">In</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputtime"
            value="08:56 AM"
          />
        </BCol>
        <BCol lg="6">
          <label for="exampleInputtime" class="form-label">Out</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputtime"
            value="08:56 AM"
          />
        </BCol>
        <BCol lg="6">
          <label for="name" class="form-label">OT</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            placeholder=""
          />
        </BCol>
        <BCol lg="6">
          <label for="username" class="form-label">Special ADJ</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            placeholder=""
          />
        </BCol>
        <BCol lg="6">
          <label for="paswword" class="form-label">ADJ (RM)</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
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
            type="time"
            class="form-control"
            id="exampleInputtime"
            value="08:56 AM"
          />
        </BCol>
        <BCol lg="6">
          <label for="qawardaccess">Remark</label>
          <input
            type="text"
            class="form-control"
            id="boardName"
            placeholder=""
          />
        </BCol>
        <BCol lg="6">
          <label for="accesslevel" class="form-label">Loc 1</label>
          <select class="form-select">
            <option value=""></option>
          </select>
        </BCol>
        <BCol lg="6">
          <label for="accesslevel" class="form-label">Loc 2</label>
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
              >Apply</BButton
            >
          </div>
        </div>
      </BRow>
    </b-form>
  </BModal>
</template>
