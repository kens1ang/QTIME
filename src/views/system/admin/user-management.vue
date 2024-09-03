<script>
import Swal from "sweetalert2";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  data() {
    return {
      modaltoAdd: false,
      modalTitle: "",
      approvalModalTitle: "Attendance Approval List",
      siteModalTitle: "Site List",
      approvalModal: false,
      siteModal: false,
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
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
        this.modalTitle = "Edit User";
      } else {
        this.modalTitle = "Add User";
      }
      this.modaltoAdd = true;
    },
    showApprovalModal() {
      this.approvalModal = true;
    },
    showSiteModal() {
      this.siteModal = true;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="User Management" pageTitle="System" subTitle="Admin" />

    <!-- Table -->
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
              <i class="ri-add-line align-bottom me-1"></i> Add User
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
            <thead class="table-light">
              <tr>
                <th scope="col" style="width: 50px">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkAll"
                      value="option"
                    />
                  </div>
                </th>
                <th class="sort" data-sort="name">Name</th>
                <th class="sort" data-sort="username">Username</th>
                <th>Password</th>
                <th class="sort" data-sort="email">Email</th>
                <th>Access</th>
                <th>Mobile</th>
                <th>QAward</th>
                <th>Staff Code</th>
                <th>Approval List</th>
                <th>Site List</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody class="list form-check-all">
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="chk_child"
                      value="option1"
                    />
                  </div>
                </th>
                <td class="id" style="display: none">
                  <a href="javascript:void(0);" class="fw-medium link-primary"
                    >#VZ2101</a
                  >
                </td>
                <td class="name">ABDUL RAHMAN BIN SAFARUDIN</td>
                <td class="username">abdulrahman</td>
                <td class="password">***********</td>
                <td class="email">abdulrahman@metrio.com.my</td>
                <td class="accesslevel">Site</td>
                <td class="mobileaccess">Yes</td>
                <td class="qawardaccess">Yes</td>
                <td class="staffcode">000117</td>
                <td>
                  <button
                    @click="showApprovalModal"
                    type="button"
                    class="btn btn-outline-info btn-icon waves-effect waves-light"
                  >
                    <i class="bx bx-file"></i>
                  </button>
                </td>
                <td>
                  <button
                    @click="showSiteModal"
                    type="button"
                    class="btn btn-outline-info btn-icon waves-effect waves-light"
                  >
                    <i class="bx bxs-file"></i>
                  </button>
                </td>
                <td>
                  <div class="d-flex gap-2">
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
          </table>
          <div class="noresult" style="display: none">
            <div class="text-center">
              <lord-icon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
                style="width: 75px; height: 75px"
              ></lord-icon>
              <h5 class="mt-2">Sorry! No Result Found</h5>
              <p class="text-muted mb-0">
                We've searched more than 150+ Orders We did not find any orders
                for you search.
              </p>
            </div>
          </div>
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
      <b-form action="#" class="tablelist-form">
        <BRow class="g-3">
          <BCol lg="6">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="boardName"
              placeholder="Enter name"
            />
          </BCol>
          <BCol lg="6">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="boardName"
              placeholder="Enter username"
            />
          </BCol>
          <BCol lg="6">
            <label for="paswword" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="boardName"
              placeholder="Enter password"
            />
          </BCol>
          <BCol lg="6">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="boardName"
              placeholder="Enter email"
            />
          </BCol>
          <BCol lg="6">
            <label for="staffcode" class="form-label">Staff Code</label>
            <input
              type="text"
              class="form-control"
              id="boardName"
              placeholder="Enter code"
            />
          </BCol>
          <BCol lg="6">
            <label for="accesslevel" class="form-label">Access Level</label>
            <select class="form-select">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </BCol>
          <BCol lg="6">
            <label for="mobileaccess">Mobile Access</label>
            <select class="form-select">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </BCol>
          <BCol lg="6">
            <label for="qawardaccess">QAward Access</label>
            <select class="form-select">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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

    <!-- Modal Approval List -->
    <BModal
      v-model="approvalModal"
      modal-class="zoomIn"
      :title="approvalModalTitle"
      title-class="exampleModalLabel"
      header-class="p-3 bg-primary-subtle"
      content-class="border-0"
      hide-footer
      class="v-modal-custom"
      centered
      no-fade
      size="lg"
    >
      <div class="row mb-3">
        <div class="col-4 d-flex flex-column">
          <h6 class="text-muted">Site</h6>
          <h5>FORUM2</h5>
        </div>
        <div class="col-4 d-flex flex-column">
          <h6 class="text-muted">Title</h6>
          <h5>FORUM2</h5>
        </div>
        <div class="col-4 d-flex flex-column">
          <h6 class="text-muted">Incharge</h6>
          <h5>aadam</h5>
        </div>
      </div>

      <div
        class="accordion accordion-flush overflow-auto"
        id="accordionPanelsStayOpenExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              General Worker Attendance
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body p-0">
              <ol class="list-group list-group-flush list-group-numbered">
                <li class="list-group-item">LOY LIT BARN</li>
                <li class="list-group-item">TAN MAN TING</li>
                <li class="list-group-item">CHIN KHOI HOE</li>
                <li class="list-group-item">Lee Kean Hoe (Chris)</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Subcon as KSK Attendance
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body p-0">
              <ol class="list-group list-group-flush list-group-numbered">
                <li class="list-group-item">LOY LIT BARN</li>
                <li class="list-group-item">TAN MAN TING</li>
                <li class="list-group-item">CHIN KHOI HOE</li>
                <li class="list-group-item">Lee Kean Hoe (Chris)</li>
                <li class="list-group-item">Loh Jooi Kheng</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Staff Attendance
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body p-0">
              <ol class="list-group list-group-flush">
                <li class="list-group-item">no data</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              General Worker Registration
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div class="accordion-body p-0">
              <ol class="list-group list-group-flush list-group-numbered">
                <li class="list-group-item">LOY LIT BARN</li>
                <li class="list-group-item">TAN MAN TING</li>
                <li class="list-group-item">CHIN KHOI HOE</li>
                <li class="list-group-item">Lee Kean Hoe (Chris)</li>
                <li class="list-group-item">Loh Jooi Kheng</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </BModal>

    <!-- Modal Site List -->
    <BModal
      v-model="siteModal"
      modal-class="zoomIn"
      :title="siteModalTitle"
      title-class="exampleModalLabel"
      header-class="p-3 bg-primary-subtle"
      content-class="border-0"
      hide-footer
      class="v-modal-custom"
      centered
      no-fade
      size="md"
    >
      <div class="row mb-3">
        <div class="col-4 d-flex flex-column">
          <h6 class="text-muted">Site</h6>
          <h5>FORUM2</h5>
        </div>
        <div class="col-4 d-flex flex-column">
          <h6 class="text-muted">Title</h6>
          <h5>FORUM2</h5>
        </div>
        <div class="col-4 d-flex flex-column">
          <h6 class="text-muted">Incharge</h6>
          <h5>aadam</h5>
        </div>
      </div>

      <div
        class="accordion accordion-flush overflow-auto"
        id="accordionPanelsStayOpenExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Site List
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body p-0">
              <ol class="list-group list-group-flush list-group-numbered">
                <li class="list-group-item">FORUM2</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </BModal>
  </Layout>
</template>

<style>
td {
  text-align: center;
}
</style>
