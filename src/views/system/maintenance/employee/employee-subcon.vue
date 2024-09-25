<script>
import Swal from "sweetalert2";
import axios from 'axios';
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/widgets/dropZone";

export default {
  data() {
    return {
      advancedSearch: false,
      date1: null,
      date: null,
      createModal: false,
      addCustomerModal: false,
      editCustomerModal: false,
      rangeDateconfig: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
        mode: "range",
      },
      config: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      searchQuery: null,
      defaultOptions: {
        animationData: animationData
      },
      defaultOptions2: {
        animationData: animationData1
      },
      page: 1,
      perPage: 8,
      value: 'All',
      value1: null,
      pages: [],
      customerList: [{
          id: 1790219,
          customer_name: "csang",
          email: "CHAPTER/LA001",
          phone: "Rahmad Ramadoni Nasti",
          type: "Subcon Worker",
          rfid: "E2806995000050199ED789EC	",
          createby: "KELVIN",
          payment: "ALUNAN ASAS SDN BHD_ACMV-" ,
          trade: "CONCRETE",
          location: "",
          Skill:"Semi-Skilled",
          date: "2024-08-27 09:57:17"
        },
        {
          id: 1790218,
          customer_name: "csang",
          email: "FORURM/LA001",
          phone: "Samawi",
          type: "Subcon Worker",
          rfid: "E2806995000040199ED78DF1	",
          createby: "KELVIN",
          payment: "ALUNAN ASAS SDN BHD_ACMV-",
          trade: "CONCRETE",
          location:"",
          Skill:"Semi-Skilled",
          date: "2024-08-27 09:57:17"
        },
        
        ],
      submitted: false,
      dataEdit: false,
      deleteModal: false,
      event: {
        _id: "",
        customer: "",
        customerId: "",
        date: "",
        email: "",
        phone: "",
        status: ""
      },

      //

    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.customerList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.customer.toLowerCase().includes(search) ||
            data.email.toLowerCase().includes(search) ||
            data.phone.includes(search) ||
            data.date.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search)
          );
        });
      } else if (this.date !== null) {
        if (this.date !== null) {
          var date1 = this.date.split(" to ")[0];
          var date2 = this.date.split(" to ")[1];
        }
        return this.displayedPosts.filter((data) => {
          if (
            new Date(data.date.slice(0, 12)) >= new Date(date1) &&
            new Date(data.date.slice(0, 12)) <= new Date(date2)
          ) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.value !== null) {
        return this.displayedPosts.filter((data) => {
          if (data.status === this.value || this.value == 'All') {
            return data;
          } else {
            return null;
          }
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  created() {
    this.setPages();
  },
  watch: {
    customerList() {
      this.setPages();
    },
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  
  methods: {
    openAdvancedSearch(){
      this.advancedSearch = true;
    },
    deleteRecord(index) {
      this.files.splice(index, 1);
      this.filePreviews.splice(index, 1);
    },
    resetFileInput() {
      // Reset the file input element if using one
      const input = document.querySelector(".dropzoneFile");
      if (input) input.value = "";
    },
    successmsg() {
      Swal.fire("Upload Successful!", "Your poster has been successfully uploaded ", "success");
    },
    customBackground() {
      if (this.files.length) {
        const filePreview = this.filePreviews[0]; 
        Swal.fire({
          width: '50%',
          padding: 0,
          showConfirmButton: false,
          customClass: {
            popup: 'swal-custom-popup',
          },
          html: filePreview.includes('image')
            ? `<img src="${filePreview}" />`
            : `<video src="${filePreview}" controls></video>`,
        });
      } else {
        Swal.fire({
          title: 'No File Uploaded',
          text: 'Please upload a file to preview.',
          icon: 'warning',
        });
      }
    },
    createModaltoggle() {
      this.createModal = true;
    },
    onSort(column) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...this.customerList];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === 'asc' ? res : -res;
      });
      this.customerList = sortedArray;
    },


    editDetails(data) {
      this.dataEdit = true;
      this.addCustomerModal = true;
      this.event = { ...data };

      this.submitted = false;
    },


    toggleModal() {
      this.addCustomerModal = true;
      this.dataEdit = false;
      this.event = {};

      this.submitted = false;
    },

    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event._id = data._id;
    },

    deleteData() {
      if (this.event._id) {
        axios.delete(`https://api-node.themesbrand.website/apps/customer/${this.event._id}`)
          .then((response) => {
            if (response.data.status === 'success') {
              this.customerList = this.customerList.filter((item) => item._id != this.event._id);
            }
          }).catch((er) => {
            console.log(er);
          });

        this.deleteModal = false;
      }
    },
    //

    setPages() {
      let numberOfPages = Math.ceil(this.customerList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(customerList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return customerList.slice(from, to);
    },

    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
          var cusList = this.customerList;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (customer) {
              return customer.customerId != id;
            });
          });
          this.customerList = cusList;
          document.getElementById("checkAll").checked = false;
          var itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked == true) {
              ele.checked = false;
              ele.closest("tr").classList.remove("table-active");
            }
          });
        } else {
          return false;
        }
      } else {
        Swal.fire({
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },
    SearchData() {
      this.value = this.value1;
    },
  },
  setup() {
    let files = ref([]);
    let filePreviews = ref([]);
    let dropzoneFile = ref("");

    const createPreview = (file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        filePreviews.value.push(event.target.result);
      };
      reader.readAsDataURL(file);
    };

    const drop = (e) => {
      e.preventDefault(); // Prevent default behavior
      const file = e.dataTransfer.files[0];
      files.value.push(file);
      createPreview(file);
      // Prevent further events if necessary
    };

    const selectedFile = () => {
      const input = document.querySelector(".dropzoneFile");
      if (input.files.length) {
        const file = input.files[0];
        files.value.push(file);
        createPreview(file);
        // Reset the file input
        input.value = "";
      }
    };

    watch(
      () => [...files.value],
      (currentValue) => {
        return currentValue;
      }
    );

    return { dropzoneFile, files, filePreviews, drop, selectedFile, v$: useVuelidate() };
  },
  mounted() {
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );

        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
            document.getElementById('remove-actions').style.display = 'block';
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
            document.getElementById('remove-actions').style.display = 'none';
          });
        }
      };
    }

    var checkboxes = document.querySelectorAll('#customerTable .form-check-input');
    Array.from(checkboxes).forEach(function (element) {
      element.addEventListener('change', function (event) {
        var checkedCount = document.querySelectorAll('#customerTable .form-check-input:checked').length;

        if (event.target.closest("tr").classList.contains("table-active")) {
          (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        } else {
          (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        }
      });
    });
  },
  components: {
    lottie: Lottie,
    DropZone
  },
};
</script>


<template>
  <BCard no-body id="customerList">
                    <BCardBody class="border-bottom-dashed border-bottom">
                        <b-form>
                        <BRow class="g-3">
                            <BCol xl="2">
                              <div class="search-box d-flex align-items-center">
            <input
              type="text"
              class="form-control search"
              style="font-size: 12px;"
              placeholder="Search keywords..."
              v-model="searchQuery"
            />
            <i class="ri-search-line search-icon ms-2"></i>
            <!-- Settings icon for advanced search -->
            <i
              class="ri-settings-2-line ms-2"
              style="cursor: pointer; font-size: 20px;"
              @click="openAdvancedSearch"
            ></i>
          </div>
                            </BCol>
                            <BCol xl="2"></BCol>
                            <BCol xl="8">
                            <BRow class="g-3">
                                <BCol sm="8"></BCol>
                              

              
                               
                                <BCol sm="3">
                                <div>
                                    <BLink href="/system/employee-qr" class="w-100">
                                        <BButton type="button" variant="warning" class="w-100" style="font-size: 12px;">
                                            <i class="ri-qr-code-line me-2 align-bottom"></i>Bulk Print QR
                                        </BButton>
                                    </BLink>
                                </div>
                                </BCol>

                                <BCol sm="1">
                                <div>
                                    <BLink href="" class="w-100">
                                        <BButton type="button" variant="success" class="w-100" @click="createModaltoggle" style="font-size: 12px;">
                                          <i class="ri-user-add-line"></i>
                                        </BButton>
                                    </BLink>
                                </div>
                                </BCol>
                            </BRow>
                            </BCol>
                        </BRow>
                        </b-form>
                    </BCardBody>
                    <BCardBody>
                        <div>
                        <div class="table-responsive table-card mb-1">
                            <table class="table align-middle" id="customerTable">
                            <thead class="table-light text-muted">
                                <tr>
                                <th scope="col" style="width: 50px">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="checkAll" value="option" />
                                    </div>
                                </th>
                                <th></th>
<<<<<<< Updated upstream
                                <th class="sort" data-sort="customer_name" @click="onSort('customer')">ID</th>
=======
                                <th class="sort" data-sort="customer_name" @click="onSort('customer')">Staff Code</th>
                                
                                <th class="sort" data-sort="status" @click="onSort('status')">Name</th>
>>>>>>> Stashed changes
                                <th class="sort" data-sort="email" @click="onSort('email')">RFID</th>
                                
                                <th class="sort" data-sort="phone" @click="onSort('phone')">Incharge</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Location 1</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Staff Name</th>
                                <th class="sort" data-sort="date" @click="onSort('date')">LA</th>
                                <th>Subcon</th>
                                <th>Trade</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Skill Set</th>
                                <th class="sort" data-sort="action">Action</th>
                                </tr>
                            </thead>
                            <tbody class="list form-check-all">
                                <tr v-for="(item, index) of customerList" :key="index">
                                <td scope="row">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                    </div>
                                </td>
                                <td><img src="@/assets/images/brands/multi-user.jpg" alt=""
                                  class="avatar-xs rounded-circle object-fit-cover" id="imageid" /></td>
                                <td>{{ item.id }}</td>
                                <td>{{ item.rfid }}</td>
                                
                                
                                <td class="customer_name">{{ item.customer_name }}</td>
                                <td class="date">{{ item.location }}</td>
                                <td class="phone">{{ item.phone }}</td>
                                <td class="email">{{ item.email }}</td>
                                <td class="date">{{ item.payment }}</td>
                                <td class="date">{{ item.trade }}</td>
                               
                                <td class="date">{{ item.Skill }}</td>
                                <td>
                                    <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        data-bs-placement="top" title="Edit">
                                        <BLink variant="text-primary" class="d-inline-block edit-item-btn"
                                        @click="deleteModalToggle(item)">
                                        <i class="ri-pencil-fill fs-16"></i>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        data-bs-placement="top" title="Remove">
                                        <BLink class="text-warning d-inline-block remove-item-btn" @click="editDetails(item)">
                                        <i class="ri-qr-code-line fs-16"></i>
                                        </BLink>
                                    </li>
                                    </ul>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <div class="noresult" v-if="resultQuery.length < 1">
                            <div class="text-center">
                                <lottie class="avatar-xl" colors="primary:#25a0e2,secondary:#00bd9d" :options="defaultOptions"
                                :height="75" :width="75" />
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">
                                We've searched more than 150+ customer We did not find any
                                customer for you search.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end" v-if="resultQuery.length >= 1">
                            <div class="pagination-wrap hstack gap-2">
                            <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                Previous
                            </BLink>
                            <ul class="pagination listjs-pagination mb-0">
                                <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                <BLink class="page" href="#">{{ pageNumber }}</BLink>
                                </li>
                            </ul>
                            <BLink class="page-item pagination-next" href="#" @click="page++" :disabled="page >= pages.length">
                                Next
                            </BLink>
                            </div>
                        </div>
                        </div>
                    </BCardBody>
                    </BCard>
    <BModal v-model="addCustomerModal" id="showModal" hide-footer :title="dataEdit ? 'QR Code' : 'Add Customer'"
      header-class="p-3 bg-light" class="v-modal-custom" centered>
      <b-form action="#" id="addform" class="tablelist-form" autocomplete="off">
        <BCardHeader class="border-bottom-dashed p-4">
            <div class="d-sm-flex">
                <div class="flex-grow-1" style="text-align: center;">
                    <img src="@/assets/images/qr-code.png" class="card-logo card-qr-code"
                        alt="logo dark" height="120">
                    <h6 class="text-muted text-uppercase fw-bold" style="margin-top: 12px;">ID : 2880052</h6>
                    <p class="text-muted mb-1" id="address-details">Name : Yohanes Laga Kia</p>
                    <p class="text-muted mb-1" id="address-details">Staff Code : 711024</p>
                </div>
            </div>
        </BCardHeader>
        <div class="hstack gap-2 justify-content-end" style="margin-top: 10px;">
                <BButton type="button" id="closemodal" variant="success" @click="addCustomerModal = false">
                Print
            </BButton>
            <BButton type="button" id="closemodal" variant="light" @click="addCustomerModal = false">
                Close
            </BButton>
        </div>
      </b-form>
    </BModal>

    <BModal v-model="deleteModal" hide-footer title="Edit Subcon Worker"  dialog-class="modal-fullscreen-xl-down" class="v-modal-custom">
      <BRow>
        <BCol md="12" class="mb-3">
          <BFormGroup label="RFID:" label-for="rfid">
            <BFormInput id="rfid" placeholder="E2806995000050199ED789EC" readonly />
          </BFormGroup>

          <BFormGroup label="Photo:" label-for="name">
        <template v-if="!files.length">
            <DropZone @drop.prevent="drop" @change="selectedFile" style="height: 180px !important;" />
        </template>

        <template v-else>
            <ul class="list-unstyled mb-0" id="dropzone-preview">
                <div class="border rounded" v-for="(file, index) of files" :key="index">
                    <div class="d-flex p-2">
                        <div class="flex-grow-1">
                            <div class="pt-1">
                                <h5 class="fs-14 mb-1">
                                    {{ file.name }}
                                </h5>
                                <p class="fs-13 text-muted mb-0">
                                    <strong>{{ (file.size / 1024).toFixed(2) }}</strong> KB
                                </p>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ms-3">
                            <BButton class="btn btn-soft-danger" size="sm" @click="deleteRecord(index)">
                                Remove
                            </BButton>
                        </div>
                    </div>
                    <div v-if="filePreviews[index]">
                        <img v-if="file.type.startsWith('image/')" :src="filePreviews[index]" class="img-fluid mt-2" style="max-width: 100%; height: auto;" />
                        <video v-if="file.type.startsWith('video/')" :src="filePreviews[index]" class="img-fluid mt-2" controls style="max-width: 100%; height: auto;" />
                    </div>
                </div>
            </ul>
        </template>

      </BFormGroup>

          <BFormGroup label="Name:" label-for="name">
            <BFormInput id="name" placeholder="Rahmad Ramadoni Nasti" readonly />
          </BFormGroup>

          <BFormGroup label="Project:" label-for="project">
            <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Project</option>
                  <option value="Merchandising">AR496</option>
                  </select>
          </BFormGroup>

          <BFormGroup label="Skill Set:" label-for="skillSet">
            <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Skill Set</option>
                  <option value="Merchandising">Semi-Skilled</option>
                  <option value="Manufacturing">Skilled</option>
                  <option value="Manufacturing">Unskilled</option>
                  </select>
          </BFormGroup>

          <BFormGroup label="Subcon:" label-for="subcon">
            <div>
                  <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Subcon</option>
                  <option value="Merchandising">BABUL_FENCE-</option>
                  <option value="Manufacturing">BABUL_MASONRY-</option>
                  </select>
                </div>
          </BFormGroup>
          <BFormGroup label="Remark:" label-for="remark">
            <BFormTextarea id="remark" rows="1" />
          </BFormGroup>
        </BCol>
      </BRow>

 
  <!-- Modal Footer -->
  <div class="modal-footer v-modal-footer">
    <button type="button" class="btn w-sm btn-light" @click="deleteModal = false">Close</button>
    <button type="button" class="btn w-sm btn-primary" id="delete-record" @click="deleteData">Submit</button>
  </div>
    </BModal>

    <BModal v-model="createModal" hide-footer title="Request Subcon Worker ID" dialog-class="modal-fullscreen-xl-down" class="v-modal-custom">
      <BRow>
        <BCol md="12" class="mb-3">
          <BFormGroup label="RFID:" label-for="rfid">
            <BFormInput id="rfid" readonly />
          </BFormGroup>

          <BFormGroup label="Photo:" label-for="name">
        <template v-if="!files.length">
            <DropZone @drop.prevent="drop" @change="selectedFile" style="height: 180px !important;" />
        </template>

        <template v-else>
            <ul class="list-unstyled mb-0" id="dropzone-preview">
                <div class="border rounded" v-for="(file, index) of files" :key="index">
                    <div class="d-flex p-2">
                        <div class="flex-grow-1">
                            <div class="pt-1">
                                <h5 class="fs-14 mb-1">
                                    {{ file.name }}
                                </h5>
                                <p class="fs-13 text-muted mb-0">
                                    <strong>{{ (file.size / 1024).toFixed(2) }}</strong> KB
                                </p>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ms-3">
                            <BButton class="btn btn-soft-danger" size="sm" @click="deleteRecord(index)">
                                Remove
                            </BButton>
                        </div>
                    </div>
                    <div v-if="filePreviews[index]">
                        <img v-if="file.type.startsWith('image/')" :src="filePreviews[index]" class="img-fluid mt-2" style="max-width: 100%; height: auto;" />
                        <video v-if="file.type.startsWith('video/')" :src="filePreviews[index]" class="img-fluid mt-2" controls style="max-width: 100%; height: auto;" />
                    </div>
                </div>
            </ul>
        </template>

      </BFormGroup>

          <BFormGroup label="Name:" label-for="name">
            <BFormInput id="name" readonly />
          </BFormGroup>

          <BFormGroup label="Project:" label-for="project">
            <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Project</option>
                  <option value="Merchandising">AR496</option>
                  </select>
          </BFormGroup>

          <BFormGroup label="Skill Set:" label-for="skillSet">
            <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Skill Set</option>
                  <option value="Merchandising">Semi-Skilled</option>
                  <option value="Manufacturing">Skilled</option>
                  <option value="Manufacturing">Unskilled</option>
                  </select>
          </BFormGroup>

          <BFormGroup label="Subcon:" label-for="subcon">
            <div>
                  <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Subcon</option>
                  <option value="Merchandising">BABUL_FENCE-</option>
                  <option value="Manufacturing">BABUL_MASONRY-</option>
                  </select>
                </div>
          </BFormGroup>
          <BFormGroup label="Remark:" label-for="remark">
            <BFormTextarea id="remark" rows="1" />
          </BFormGroup>
        </BCol>
      </BRow>

      <div class="modal-footer v-modal-footer">
        <button type="button" class="btn w-sm btn-light" @click="createModal = false">Close</button>
        <button type="button" class="btn w-sm btn-primary" @click="deleteData">Submit</button>
      </div>
    </BModal>

    <BModal v-model="advancedSearch" hide-footer title="Advanced Search" class="v-modal-custom" size="lg">
  <BRow class="g-3">
      <BCol sm="6">
        <label for="search-incharge" class="form-label">Filter by Project</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Project</option>
          <option value="Merchandising">AR496</option>
          <option value="Manufacturing">FORUM2</option>
          <option value="Partnership">i8B-49</option>
          </select>
      </BCol>
      <BCol sm="6">
        <label for="search-incharge" class="form-label">Filter by Skill Set</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Skill Set</option>
          <option value="Merchandising">Skilled</option>
          <option value="Manufacturing">Semi-Skilled</option>
          <option value="Partnership">Unskilled</option>
          </select>
      </BCol>
      <BCol sm="6">
        <label for="search-payment" class="form-label">Filter by Subcon</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Subcon</option>
                  <option value="Merchandising">BABUL_FENCE-</option>
                  <option value="Manufacturing">BABUL_MASONRY-</option>
                  </select>
      </BCol>
      <BCol sm="6">
        <label for="search-date" class="form-label">Searcg by Trade</label>
        <BFormInput
          id="search-location"
          placeholder="Enter Trade"
        />
      </BCol>
      <BCol sm="6">
        <label for="search-payment" class="form-label">Search by LA</label>
        <BFormInput
          id="search-location"
          placeholder="Enter LA"
        />
      </BCol>
      <BCol sm="6">
        <label for="search-payment" class="form-label">Search by Location 1</label>
        <BFormInput
          id="search-location"
          placeholder="Enter Location 1"
        />
      </BCol>
    
    </BRow>

  <!-- Modal Footer -->
  <div class="modal-footer v-modal-footer">
    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium" @click="deleteModal = false">
      <i class="ri-close-line me-1 align-middle"></i> Close
    </BLink>
    <BButton type="button" variant="primary">Search</BButton>
  </div>
</BModal>
</template>