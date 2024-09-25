<script>
import Swal from "sweetalert2";
import axios from 'axios';
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/widgets/dropZone";
import Choices from 'choices.js';

export default {
  data() {
    return {
      advancedSearch: false,
      date1: null,
      date: null,
      addCustomerModal: false,
      createModal: false,
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
        id: 2880052,
        customer_name: "mazror",
        email: "R6A6B-191",
        phone: "Yohanes Laga Kia",
        type: "",
        rfid: "AA",
        plate: "KS7",
        createby: "apps",
        payment: "Cash",
        date: "2024-08-27 09:57:17"
        },
        {
        id: 1880016,
        customer_name: "csang",
        email: "CU1C",
        phone: "Ririn	",
        type: "	O&L Machinery",
        rfid: "AA",
        plate:"KS7",
        createby: "csang",
        payment: "Cash",
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
    initializeChoices() {
      new Choices(this.$refs.selectElement, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Project',
      });
      new Choices(this.$refs.selectElement1, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Project',
      });
      new Choices(this.$refs.selectElement2, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Project',
      });
      new Choices(this.$refs.selectElement3, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Company',
      });
      new Choices(this.$refs.selectElement4, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Company',
      });
      new Choices(this.$refs.selectElement5, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Company',
      });
      new Choices(this.$refs.selectElement6, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Machinery',
      });
      new Choices(this.$refs.selectElement7, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Machinery',
      });
      new Choices(this.$refs.selectElement8, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Plate No',
      });
      new Choices(this.$refs.selectElement9, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Plate No',
      });
      new Choices(this.$refs.selectElement10, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Plate No',
      });
      new Choices(this.$refs.selectElement11, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Plate No',
      });
      
      new Choices(this.$refs.selectElement12, {
        searchEnabled: true,
        itemSelectText: '',
        placeholder: true,
        placeholderValue: 'Search Person Incharge',
      });
    },
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
    createModaltoggle() {
      this.createModal = true;
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
    this.initializeChoices();
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
                    <BCardBody >
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
                                            <i class="ri-qr-code-line me-2 align-bottom"></i>Bulk Transfer
                                        </BButton>
                                    </BLink>
                                </div>
                                </BCol>
                                <BCol sm="1">
                                <div>
                                    <BLink href="" class="w-100">
                                        <BButton type="button" variant="light" class="w-100" style="font-size: 12px;">
                                            <i class="ri-download-2-line"></i>
                                        </BButton>
                                    </BLink>
                                </div>
                                </BCol>
                            </BRow>
                            </BCol>

                            <BCol xl="12"><BBadge variant="light-subtle" class="badge rounded-pill bg-light text-body" style="line-height: 1.95 !important;width: 8%;" ><i class=" ri-close-line"></i>
              AA Permit: AA </BBadge></BCol>
                        </BRow>
                        </b-form>
                    </BCardBody><br><br>
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
                                <th class="sort" data-sort="customer_name" @click="onSort('customer')">Staff Code</th>
                                <th class="sort" data-sort="date" @click="onSort('date')">Name</th>
                                <th class="sort" data-sort="phone" @click="onSort('phone')">Person Incharge</th>
                                <th>Location</th>
                                <th class="sort" data-sort="date" @click="onSort('date')">AA Permit</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Payment Method</th>
                                <th class="sort" data-sort="status" @click="onSort('status')">Updated</th>
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
                                <td class="phone">{{ item.phone }}</td>
                                <td class="customer_name">{{ item.customer_name }}</td>
                                <td class="email">{{ item.email }}</td>
                                <td class="date">{{ item.rfid }}</td>
                                <td class="date">{{ item.payment }}</td>
                                <td class="date">{{ item.createby }}<br>{{ item.date }}</td>
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
                   
   

      <BModal v-model="createModal" hide-footer title="Create Operator" dialog-class="modal-fullscreen-xl-down" class="v-modal-custom">
  <BRow>
    <BCol md="12" class="mb-3">

      <BFormGroup label="Project:" label-for="project">
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Project"
        ref="selectElement"
      >
        <option value="Choice 1">AR496</option>
        <option value="Choice 2">FORUM 2</option>
        <option value="Choice 3">	i8B-49</option>
      </select>
      </BFormGroup>

      <BFormGroup label="Name:" label-for="name">
        <BFormInput id="name" readonly />
      </BFormGroup>


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
                            <BButton clas  s="btn btn-soft-danger" size="sm" @click="deleteRecord(index)">
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

     
    

      
      <BFormGroup label="Company:" label-for="company">
                  <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Company"
        ref="selectElement3"
      >
      <option value="Choice 2">EWE CRANE</option>
        <option value="Manufacturing">Faruk</option>
        <option value="Partnership">OLGAD SDN BHD</option>
        <option value="Corporation">QIE (M)</option>
      </select>
      </BFormGroup>

      <BFormGroup label="Machinery:" label-for="machinery">
                  <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Machinery"
        ref="selectElement6"
      >
      <option value="Merchandising">CRANE - 20TON</option>
      </select>
      </BFormGroup>

 
      <BFormGroup label="Plate No:" label-for="poNo">
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Machinery"
        ref="selectElement9"
      >
      </select>
      </BFormGroup>

      <BFormGroup label="Skill Set:" label-for="machinery">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Skill Set</option>
          <option value="Merchandising">Skilled</option>
          <option value="Manufacturing">Semi-Skilled</option>
          <option value="Partnership">Unskilled</option>
          </select>
      </BFormGroup>


      
    </BCol>
  </BRow>

  <!-- Other content can remain unchanged -->

  <!-- Modal Footer -->
  <div class="modal-footer v-modal-footer">
    <button type="button" class="btn w-sm btn-light" @click="createModal = false">Close</button>
    <button type="button" class="btn w-sm btn-primary" id="delete-record" @click="deleteData">Submit</button>
  </div>
      </BModal>



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

    <BModal v-model="deleteModal" hide-footer title="Edit Operator" dialog-class="modal-fullscreen-xl-down" class="v-modal-custom">
  <BRow>
    <BCol md="12" class="mb-3">

      
      <BFormGroup label="Project:" label-for="project">
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Project"
        ref="selectElement1"
      >
        <option value="Choice 1">AR496</option>
        <option value="Choice 2">FORUM 2</option>
        <option value="Choice 3">	i8B-49</option>
      </select>
      </BFormGroup>


      <BFormGroup label="Name:" label-for="name">
        <BFormInput id="name" placeholder="Yohanes Laga Kia" readonly />
      </BFormGroup>


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

    
      <BFormGroup label="Company:" label-for="company">
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Company"
        ref="selectElement4"
      >
      <option value="Choice 2">EWE CRANE</option>
        <option value="Manufacturing">Faruk</option>
        <option value="Partnership">OLGAD SDN BHD</option>
        <option value="Corporation">QIE (M)</option>
      </select>
      </BFormGroup>

      <BFormGroup label="Machinery:" label-for="machinery">
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Machinery"
        ref="selectElement7"
      >
      <option value="Merchandising">CRANE - 20TON</option>
      </select>
      </BFormGroup>
      
      <BFormGroup label="Plate No:" label-for="poNo">
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Plate No"
        ref="selectElement10"
      >
      </select>
      </BFormGroup>

      <BFormGroup label="Skill Set:" label-for="machinery">
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Skill Set</option>
          <option value="Merchandising">Skilled</option>
          <option value="Manufacturing">Semi-Skilled</option>
          <option value="Partnership">Unskilled</option>
          </select>
      </BFormGroup>

    </BCol>
  </BRow>

  <!-- Other content can remain unchanged -->

  <!-- Modal Footer -->
  <div class="modal-footer v-modal-footer">
    <button type="button" class="btn w-sm btn-light" @click="createModal = false">Close</button>
    <button type="button" class="btn w-sm btn-primary" id="delete-record" @click="deleteData">Submit</button>
  </div>
      </BModal>

      <BModal v-model="advancedSearch" hide-footer title="Advanced Search" class="v-modal-custom" size="lg">
        <br>
  <BRow class="g-3">
      <BCol sm="6">
        <label for="search-incharge" class="form-label">Filter by Project</label>
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Project"
        ref="selectElement2"
      >
        <option value="Choice 1">AR496</option>
        <option value="Choice 2">FORUM 2</option>
        <option value="Choice 3">	i8B-49</option>
      </select>
      </BCol>
      <BCol sm="6">
        <label for="search-incharge" class="form-label">Filter by Company</label>
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Company"
        ref="selectElement5"
      >
        <option value="Choice 2">EWE CRANE</option>
        <option value="Manufacturing">Faruk</option>
        <option value="Partnership">OLGAD SDN BHD</option>
        <option value="Corporation">QIE (M)</option>
      </select>
    </BCol>
    <BCol sm="6">
      <label for="search-incharge" class="form-label">Filter by AA Permit</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default" style="font-size: 12px;">
        <option value="" selected>Select AA Permit</option>
        <option value="Merchandising">All</option>
        <option value="Manufacturing">AA</option>
        <option value="Partnership">NON AA</option>
        </select>
  
    </BCol>
      <BCol sm="6">
        <label for="search-incharge" class="form-label">Filter by Payment Method</label>
        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
          <option value="" selected>Select Payment Method</option>
          <option value="Merchandising">Cash</option>
          </select>
      </BCol>
      <BCol sm="6">
        <label for="search-payment" class="form-label">Filter by Person Incharge</label>
        <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Person Incharge"
        ref="selectElement12"
      >
        <option value="Choice 1">ksk_myform</option>
        <option value="Choice 2">aadam</option>
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

<style>
.form-label {
  font-size: 12px;
}
</style>