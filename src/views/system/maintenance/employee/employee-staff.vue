<script>
import Swal from "sweetalert2";
import axios from 'axios';
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import DropZone from "@/components/widgets/dropZone";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";

export default {
  data() {
    return {
      advancedSearch: false,
      date1: null,
      date: null,
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
      createModal: false,
      perPage: 8,
      value: 'All',
      value1: null,
      pages: [],
        customerList: [{
            id: 700153,
            customer_name: "ytlim",
            email: "PG OFFICE",
            phone: "KHOR KHA POO",
            type: "A528",
            createby: "PS LEE",
            date: "2024-08-27 09:57:17"
        },
        {
        id: 710108,
            customer_name: "Lam YW",
            email: "KL OFFICE",
            phone: "	FONG YEE MUN",
            type: "PC184",
            createby: "mttan",
            date: "2024-08-27 09:57:17"
        }
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
    DropZone,
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
                                        <BButton type="button" variant="success" class="w-100" style="font-size: 12px;" @click="createModaltoggle">
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
                                <th class="sort" data-sort="customer_name" @click="onSort('customer')">ID</th>
                                <th class="sort" data-sort="email" @click="onSort('email')">RFID</th>
                                <th class="sort" data-sort="phone" @click="onSort('phone')">Incharge</th>
                                <th class="sort" data-sort="date" @click="onSort('date')">Location</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Staff Name</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Updated</th>
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
                                <td class="email">{{ item.email }}</td>
                                <td class="phone">{{ item.phone }}</td>
                                <td class="date">{{ item.createby }}<br>{{ item.date }}</td>
                                <td>
                                    <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        data-bs-placement="top" title="Edit">
                                        <BLink variant="text-primary" class="d-inline-block edit-item-btn" @click="deleteModalToggle(item)"
                                       >
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
                    <p class="text-muted mb-1" id="address-details">Staff Name : Yohanes Laga Kia</p>
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

    <BModal  v-model="deleteModal"  hide-footer title="Edit Staff" class="v-modal-custom" size="lg">
      <BRow>
    <!-- First Column (Left side) -->
    <BCol md="6" class="mb-3">
      <BFormGroup label="ID:" label-for="dId">
        <BFormInput id="dId" placeholder="700153" readonly />
      </BFormGroup>

      <BFormGroup label="RFID:" label-for="rfid">
        <BFormInput id="rfid" readonly />
      </BFormGroup>

      <BFormGroup label="Photo:" label-for="name">
        <template v-if="!files.length">
            <DropZone @drop.prevent="drop" @change="selectedFile" style="height: 422px !important;" />
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



    </BCol>

    <!-- Second Column (Right side) -->
    <BCol md="6" class="mb-3">

      <BFormGroup label="Name:" label-for="name">
        <BFormInput id="name" placeholder="KHOR KHA POO" readonly />
      </BFormGroup>

      <BFormGroup label="Type:" label-for="type">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" >
          <option value="" selected>Select Type</option>
          <option value="Merchandising">staff</option>
          <option value="Manufacturing">subcon worker</option>
          <option value="Manufacturing">operator</option>
          </select>
      </BFormGroup>


      <BFormGroup label="Person Incharge:" label-for="incharge">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" >
          <option value="" selected>Select Incharge</option>
          <option value="Merchandising">Josephine</option>
          <option value="Manufacturing">aadam</option>
          </select>
      </BFormGroup>

      <BFormGroup label="Schedule:" label-for="schedule">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" >
          <option value="" selected>Select Schedule</option>
          <option value="Merchandising">PG 01</option>
          <option value="Manufacturing">A</option>
          <option value="Manufacturing">KL 01</option>
          </select>
      </BFormGroup>

      <BFormGroup label="Date Of Birth:" label-for="dob">
        <input
    type="date"
    class="form-control"
    id="search-date"
    placeholder="Select Date"
  />
      </BFormGroup>

      <BFormGroup label="E-Leave Code:" label-for="eleaveCode">
        <BFormInput id="eleaveCode" readonly />
      </BFormGroup>

      <BFormGroup label="Payroll ID:" label-for="payrollId">
        <BFormInput id="payrollId" readonly />
      </BFormGroup>

      <BFormGroup label="Remark:" label-for="remark">
        <BFormTextarea id="remark" row="1"  />
      </BFormGroup>

      <BFormGroup label="Active Link System User" label-for="active">
        <BFormRadioGroup id="active" v-model="activeStatus" name="activeStatus">
          <BFormRadio value="Yes">Yes</BFormRadio>
          <BFormRadio value="No">No</BFormRadio>
        </BFormRadioGroup>
      </BFormGroup>

    </BCol>

    <BCol md="12" class="mb-6">
            <BCardBody>
              <div class="live-preview">
                            <div class="table-responsive">
                                <table class="table caption-top table-nowrap mb-0">
                                    <caption>User Details</caption>
                                    <thead class="table-success">
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Access Level</th>
                                            <th>Mobile Checkin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="fw-medium">Kpor</td>
                                            <td>kpor@metrio.com.my</td>
                                            <td>Site</td>
                                            <td>Yes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
            </BCardBody>
 
    </BCol>
  </BRow>
      
      <div class="modal-footer v-modal-footer">
        <button type="button" class="btn w-sm btn-light" @click="deleteModal = false">Close</button>
        <button type="button" class="btn w-sm btn-primary" id="delete-record" @click="deleteData">Submit</button>
      </div>
    </BModal>


    <BModal  v-model="createModal"  hide-footer title="Create Staff" class="v-modal-custom" size="lg">
      <BRow>
    <!-- First Column (Left side) -->
    <BCol md="6" class="mb-3">
      <BFormGroup label="ID:" label-for="dId">
        <BFormInput id="dId" value="700154" readonly />
      </BFormGroup>

      <BFormGroup label="RFID:" label-for="rfid">
        <BFormInput id="rfid" readonly />
      </BFormGroup>

      <BFormGroup label="Photo:" label-for="name">
        <template v-if="!files.length">
            <DropZone @drop.prevent="drop" @change="selectedFile" style="height: 422px !important;" />
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



    </BCol>

    <!-- Second Column (Right side) -->
    <BCol md="6" class="mb-3">

      <BFormGroup label="Name:" label-for="name">
        <BFormInput id="name" value="ANG CHIN MEI" readonly />
      </BFormGroup>

      <BFormGroup label="Type:" label-for="type">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Type</option>
                  <option value="Merchandising">Staff</option>
                  \<option value="Merchandising">General Worker</option>
                  </select>
      </BFormGroup>


      <BFormGroup label="Person Incharge:" label-for="incharge">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" >
          <option value="" selected>Select Incharge</option>
          <option value="Merchandising">Josephine</option>
          <option value="Manufacturing">aadam</option>
          </select>
      </BFormGroup>

      <BFormGroup label="Schedule:" label-for="schedule">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Schedule</option>
          <option value="Merchandising">PG 01</option>
          <option value="Merchandising">KL 01</option>
          </select>
      </BFormGroup>

      <BFormGroup label="Date Of Birth:" label-for="dob">
        <input
          type="date"
          class="form-control"
          id="search-date"
          placeholder="Select Date"
        />
      </BFormGroup>

      <BFormGroup label="E-Leave Code:" label-for="eleaveCode">
        <BFormInput id="eleaveCode" readonly />
      </BFormGroup>

      <BFormGroup label="Payroll ID:" label-for="payrollId">
        <BFormInput id="payrollId" readonly />
      </BFormGroup>

      <BFormGroup label="Remark:" label-for="remark">
        <BFormTextarea id="remark" rows="1" />
      </BFormGroup>

      <BFormGroup label="Active Link System User" label-for="active">
        <BFormRadioGroup id="active" v-model="activeStatus" name="activeStatus">
          <BFormRadio value="Yes" checked>Yes</BFormRadio>
          <BFormRadio value="No">No</BFormRadio>
        </BFormRadioGroup>
      </BFormGroup>

    </BCol>

    <BCol md="12" class="mb-6">
            <BCardBody>
              <div class="live-preview">
                            <div class="table-responsive">
                                <table class="table caption-top table-nowrap mb-0">
                                    <caption>User Details</caption>
                                    <thead class="table-success">
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Access Level</th>
                                            <th>Mobile Checkin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          <td class="fw-medium">
                                            <input type="text" class="form-control" value="Kpor" />
                                          </td>
                                          <td>
                                            <input type="email" class="form-control" value="kpor@metrio.com.my" />
                                          </td>
                                          <td>
                                            <input type="text" class="form-control" value="Site" />
                                          </td>
                                          <td>
                                            <input type="text" class="form-control" value="Yes" />
                                          </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
            </BCardBody>
 
    </BCol>
  </BRow>
      
      <div class="modal-footer v-modal-footer">
        <button type="button" class="btn w-sm btn-light" @click="createModal = false">Close</button>
        <button type="button" class="btn w-sm btn-primary" id="delete-record" @click="deleteData">Submit</button>
      </div>
    </BModal>

    <BModal v-model="advancedSearch" hide-footer title="Advanced Search" class="v-modal-custom" size="lg">
  <BRow class="g-3">
    <BCol sm="6">
        <label for="search-incharge" class="form-label">Filter by Schedule</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Schedule</option>
          <option value="Merchandising">PG 01</option>
          <option value="Manufacturing">KL 01</option>
          <option value="Partnership">A</option>
          </select>
      </BCol>
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
        <label for="search-id" class="form-label">Search by E-Leave Code</label>
        <BFormInput
          id="search-id"
          placeholder="Enter E-Leave Code"
        />
      </BCol>
      <BCol sm="6">
        <label for="search-location" class="form-label">Search by Payroll ID</label>
        <BFormInput
          id="search-location"
          placeholder="Enter Payroll ID"
        />
      </BCol>
      <BCol sm="6">
        <label for="search-payment" class="form-label">Filter by Person Incharge</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" >
          <option value="" selected>Select Person Incharge</option>
          <option value="Merchandising">aadam</option>
          <option value="Manufacturing">Josephine</option>
          </select>
      </BCol>
      <BCol sm="6">
        <label for="search-payment" class="form-label">Filter by Access Level</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" >
          <option value="" selected>Select Access Level</option>
          <option value="Merchandising">Site</option>
          <option value="Manufacturing">HR</option>
          </select>
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