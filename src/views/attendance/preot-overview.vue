<script>

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { CountTo } from "vue3-count-to";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";

export default {
  data() {
    return {
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
      perPage: 8,
      value: 'All',
      value1: null,
      pages: [],
      customerList: [
      {
          id:1,
          code: 302476,
          name: "Md Jamir Pramanik",
          task: "-",
          pic: "aidafaziha",
          subE: "WORK ORDER",
          preOt: "64.0",
          date: "2024-09-18",
          weekday: "Wednesday",
          picDate: "2024-09-19",
          actualOT: "6/6",
          actualOTstatus: "done",
          remark: "No OT",
        },{
          id:2,
          code: 301595,
          name: "MOFIJUL ISLAM",
          task: "Other (specified in Remark)",
          pic: "agnesthu",
          subE: "SECURITY",
          preOt: "6.5",
          date: "2024-09-14",
          weekday: "Saturday",
          status: "Active",
          preOtStatus: "4 hrs + 2.5 hrs = 6.5 hrs ",
          picDate: "2024-09-19",
          actualOT: "7/6",
          actualOTstatus: "over"
        },
      ],

      //
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
    // 
 

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
    Layout,
    PageHeader,
    lottie: Lottie,

    flatPickr,
    CountTo,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Pre-OT Overview" pageTitle="Attendance" subTitle="OT Management" />
    <BTabs nav-class="nav-success mb-3" pills>
                            <BTab title="Pending" active>
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
                Total PRE-OT 
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal=" 3566"
                  :duration="1000"
                ></count-to> Hours
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="warning-subtle"
                class="bg-warning-subtle text-warning fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>55.55
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
                Avg Pre-OT Per Day
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal=" 238"
                  :duration="1000"
                ></count-to> Hours
              </h4>
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
                Est. Costing (normal rate x 1.5)
              </p>
              <h4 class="fs-4 mb-3">
                RM
                <count-to
                  :startVal="0"
                  :endVal="42688.64"
                  :duration="1000"
                  :decimals="2"
                  :formatter="formatNumber"
                ></count-to>
              </h4>
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
  </BRow>
  <br>

                              <BRow>
      <BCol lg="12">
        <BCard no-body id="customerList">
          <BCardBody class="border-bottom-dashed border-bottom">
            <b-form>
              <BRow class="g-3">
                <BCol xl="4">
                  <div class="search-box d-flex align-items-center">
            <input
              type="text"
              class="form-control search"
              placeholder="Search keywords..."
              v-model="searchQuery"
            />
            <i class="ri-search-line search-icon ms-2"></i>
            <!-- Settings icon for advanced search -->
            <i
              class="ri-settings-2-line ms-2"
              style="cursor: pointer; font-size: 20px;"
              @click="editDetails"
            ></i>
          </div>
                </BCol>
                <BCol xl="2"></BCol>
                <BCol xl="6">
                  <BRow class="g-3">
                    <BCol sm="5"></BCol>
                    <BCol sm="4">
                      <div class="">
                        <flat-pickr v-model="date" placeholder="Select date" :config="rangeDateconfig"
                          class="form-control"></flat-pickr>
                      </div>
                    </BCol>
                    <BCol sm="3">
                      <div>
                        <BButton type="button" variant="success" class="w-100" >
                          Bulk Approve
                        </BButton>
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
                      <th class="sort" data-sort="customer_name" @click="onSort('customer')">Date</th>
                      <th class="sort" data-sort="email" @click="onSort('email')">Staff Code</th>
                      <th class="sort" data-sort="phone" @click="onSort('phone')">Name</th>
                      <th class="sort" data-sort="date" @click="onSort('date')">Task</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Sub Element</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Pre Ot (Hrs)</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">PIC</th>
                      <th class="sort" data-sort="action">Action</th>
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(item, index) of resultQuery" :key="index">
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="chk_child" value="option1" />
                        </div>
                      </th>
                      <td class="id" style="display: none">
                        <BLink href="javascript:void(0);" class="fw-medium link-primary">{{ item.customerId }}</BLink>
                      </td>
                      <td class="customer_name">{{ item.date }}</td>
                      <td class="email">{{ item.code }}</td>
                      <td class="phone">{{ item.name }}</td>
                      <td class="date">{{ item.task }}</td>
                      <td class="date">{{ item.subE }}</td>
                      <td class="date">{{ item.preOt }}<br>
                        <span class="badge"
                          :class="{ 'bg-danger-subtle text-danger': item.status == 'Active' }">
                          {{ item.preOtStatus }}
                        </span>
                      </td>
                      <td class="date">{{ item.pic }}</td>

                      <td>
                        <button
                          class="btn btn-sm btn-outline-success edit-item-btn"
                        >
                          Approve
                        </button>
                        <button
                          class="btn btn-sm btn-outline-danger edit-item-btn" style="margin-left: 10px;"
                        >
                          
                          Reject
                        </button>
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
      </BCol>
    </BRow>
                            </BTab>
                            <BTab title="Approve">
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
                Total PRE-OT 
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal=" 5566"
                  :duration="1000"
                ></count-to> Hours
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="warning-subtle"
                class="bg-warning-subtle text-warning fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>65.55
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
                Avg Pre-OT Per Day
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal=" 457"
                  :duration="1000"
                ></count-to> Hours
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="danger-subtle"
                class="bg-danger-subtle text-danger fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>30.96
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
                Est. Costing (normal rate x 1.5)
              </p>
              <h4 class="fs-4 mb-3">
                RM
                <count-to
                  :startVal="0"
                  :endVal="65388.32"
                  :duration="1000"
                  :decimals="2"
                  :formatter="formatNumber"
                ></count-to>
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="success-subtle"
                class="bg-success-subtle text-success fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>29.96
                %<span> </span>
              </BBadge>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
  <br>

                              <BRow>
      <BCol lg="12">
        <BCard no-body id="customerList">
          <BCardBody class="border-bottom-dashed border-bottom">
            <b-form>
              <BRow class="g-3">
                <BCol xl="4">
                  <div class="search-box d-flex align-items-center">
            <input
              type="text"
              class="form-control search"
              placeholder="Search keywords..."
              v-model="searchQuery"
            />
            <i class="ri-search-line search-icon ms-2"></i>
            <!-- Settings icon for advanced search -->
            <i
              class="ri-settings-2-line ms-2"
              style="cursor: pointer; font-size: 20px;"
              @click="editDetails"
            ></i>
          </div>
                </BCol>
                <BCol xl="2"></BCol>
                <BCol xl="6">
                  <BRow class="g-3">
                    <BCol sm="7"></BCol>
                    <BCol sm="4">
                      <div class="">
                        <flat-pickr v-model="date" placeholder="Select date" :config="rangeDateconfig"
                          class="form-control"></flat-pickr>
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
                      <th class="sort" data-sort="customer_name" @click="onSort('customer')">Date</th>
                      <th class="sort" data-sort="email" @click="onSort('email')">Staff Code</th>
                      <th class="sort" data-sort="phone" @click="onSort('phone')">Name</th>
                      <th class="sort" data-sort="date" @click="onSort('date')">Task</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Sub Element</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Pre Ot (Hrs)</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">PIC</th>
                      <th class="sort" data-sort="action">Remark</th>
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(item, index) of resultQuery" :key="index">
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="chk_child" value="option1" />
                        </div>
                      </th>
                      <td class="id" style="display: none">
                        <BLink href="javascript:void(0);" class="fw-medium link-primary">{{ item.customerId }}</BLink>
                      </td>
                      <td class="customer_name">{{ item.date }}</td>
                      <td class="email">{{ item.code }}</td>
                      <td class="phone">{{ item.name }}</td>
                      <td class="date">{{ item.task }}</td>
                      <td class="date">{{ item.subE }}</td>
                      <td class="date">{{ item.preOt }}<br>
                      </td>
                      <td class="date">{{ item.pic }} <br> {{ item.picDate }}</td>

                      <td>
                        {{ item.remarkApprove }}
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
      </BCol>
    </BRow>
                            </BTab>
                            <BTab title="Reject">
                              <BRow>
      <BCol lg="12">
        <BCard no-body id="customerList">
          <BCardBody class="border-bottom-dashed border-bottom">
            <b-form>
              <BRow class="g-3">
                <BCol xl="4">
                  <div class="search-box d-flex align-items-center">
            <input
              type="text"
              class="form-control search"
              placeholder="Search keywords..."
              v-model="searchQuery"
            />
            <i class="ri-search-line search-icon ms-2"></i>
            <!-- Settings icon for advanced search -->
            <i
              class="ri-settings-2-line ms-2"
              style="cursor: pointer; font-size: 20px;"
              @click="editDetails"
            ></i>
          </div>
                </BCol>
                <BCol xl="2"></BCol>
                <BCol xl="6">
                  <BRow class="g-3">
                    <BCol sm="7"></BCol>
                    <BCol sm="4">
                      <div class="">
                        <flat-pickr v-model="date" placeholder="Select date" :config="rangeDateconfig"
                          class="form-control"></flat-pickr>
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
              </BRow>
            </b-form>
          </BCardBody>
          <BCardBody>
            <div>
              <div class="table-responsive table-card mb-1">
                <table class="table align-middle" id="customerTable">
                  <thead class="table-light text-muted">
                    <tr>
                      <th>No</th>
                      <th class="sort" data-sort="customer_name" @click="onSort('customer')">Date</th>
                      <th class="sort" data-sort="email" @click="onSort('email')">Staff Code</th>
                      <th class="sort" data-sort="phone" @click="onSort('phone')">Name</th>
                      <th class="sort" data-sort="date" @click="onSort('date')">Task</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Sub Element</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Pre Ot (Hrs)</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">PIC</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Remark</th>
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(item, index) of resultQuery" :key="index">
                      <td>{{ index+1 }}</td>
                      <td class="id" style="display: none">
                        <BLink href="javascript:void(0);" class="fw-medium link-primary">{{ item.customerId }}</BLink>
                      </td>
                      <td class="customer_name">{{ item.date }}</td>
                      <td class="email">{{ item.code }}</td>
                      <td class="phone">{{ item.name }}</td>
                      <td class="date">{{ item.task }}</td>
                      <td class="date">{{ item.subE }}</td>
                      <td class="date">{{ item.preOt }}<br>
                      </td>
                      <td class="date">{{ item.pic }} <br> {{ item.picDate }}</td>
                      <td class="date">{{ item.remark }}</td>

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
      </BCol>
    </BRow>
                            </BTab>
                            <BTab title="Done">
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
                Total PRE-OT 
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal=" 6677"
                  :duration="1000"
                ></count-to> Hours
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="warning-subtle"
                class="bg-warning-subtle text-warning fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>67.55
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
                Avg Pre-OT Per Day
              </p>
              <h4 class="fs-4 mb-3">
                <count-to
                  :startVal="0"
                  :endVal=" 508"
                  :duration="1000"
                ></count-to> Hours
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="danger-subtle"
                class="bg-danger-subtle text-danger fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>32.96
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
                Est. Costing (normal rate x 1.5)
              </p>
              <h4 class="fs-4 mb-3">
                RM
                <count-to
                  :startVal="0"
                  :endVal="67388.32"
                  :duration="1000"
                  :decimals="2"
                  :formatter="formatNumber"
                ></count-to>
              </h4>
            </div>
            <div class="flex-shrink-0 align-self-center">
              <BBadge
                variant="success-subtle"
                class="bg-success-subtle text-success fs-12"
                ><i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>30 .96
                %<span> </span>
              </BBadge>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
                              <br>
                              <BRow>
      <BCol lg="12">
        <BCard no-body id="customerList">
          <BCardBody class="border-bottom-dashed border-bottom">
            <b-form>
              <BRow class="g-3">
                <BCol xl="4">
                  <div class="search-box d-flex align-items-center">
            <input
              type="text"
              class="form-control search"
              placeholder="Search keywords..."
              v-model="searchQuery"
            />
            <i class="ri-search-line search-icon ms-2"></i>
            <!-- Settings icon for advanced search -->
            <i
              class="ri-settings-2-line ms-2"
              style="cursor: pointer; font-size: 20px;"
              @click="editDetails"
            ></i>
          </div>
                </BCol>
                <BCol xl="2"></BCol>
                <BCol xl="6">
                  <BRow class="g-3">
                    <BCol sm="4"></BCol>
                    <BCol sm="4">
                      <div class="">
                        <flat-pickr v-model="date" placeholder="Select date" :config="rangeDateconfig"
                          class="form-control"></flat-pickr>
                      </div>
                    </BCol>
                    <BCol sm="3">
                      <div>
                        <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                        <option value="" >Select Status</option>
                                        <option value="Manufacturing">Done</option>
                                        <option value="Merchandising">Update</option>
                                        </select>
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
              </BRow>
            </b-form>
          </BCardBody>
          <BCardBody>
            <div>
              <div class="table-responsive table-card mb-1">
                <table class="table align-middle" id="customerTable">
                  <thead class="table-light text-muted">
                    <tr>
                      <th>No</th>
                      <th class="sort" data-sort="customer_name" @click="onSort('customer')">Date</th>
                      <th class="sort" data-sort="email" @click="onSort('email')">Staff Code</th>
                      <th class="sort" data-sort="phone" @click="onSort('phone')">Name</th>
                      <th class="sort" data-sort="date" @click="onSort('date')">Task</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Sub Element</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">Actual Ot (Hrs)</th>
                      <th class="sort" data-sort="status" @click="onSort('status')">PIC</th>
                      <th class="sort" data-sort="action">Action</th>
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(item, index) of resultQuery" :key="index">
                      <td>{{ index+1 }}</td>
                      <td class="id" style="display: none">
                        <BLink href="javascript:void(0);" class="fw-medium link-primary">{{ item.customerId }}</BLink>
                      </td>
                      <td class="customer_name">{{ item.date }}</td>
                      <td class="email">{{ item.code }}</td>
                      <td class="phone">{{ item.name }}</td>
                      <td class="date">{{ item.task }}</td>
                      <td class="date">{{ item.subE }}</td>
                      <td class="date">
                        <span class="badge text-uppercase" style="font-size: 13px;"
                          :class="{ 'bg-danger-subtle text-danger': item.actualOTstatus == 'over',  'bg-success-subtle text-success': item.actualOTstatus == 'done' }">
                          {{ item.actualOT }}</span>

                      </td>
                      <td class="date">{{ item.pic }} <br> {{ item.picDate }}</td>

                      <td v-if="item.actualOTstatus == 'over'">
                        <button
                          class="btn btn-sm btn-outline-danger edit-item-btn"
                        >
                          Update
                        </button>
                      </td>
                      <td v-else>
                        <span
                         class="badge bg-success-subtle text-success mb-2"
                        >
                          Done
                        </span>
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
      </BCol>
    </BRow>
                            </BTab>
                        </BTabs>
  

    <!-- customer modal  -->
    <BModal v-model="addCustomerModal" id="showModal" hide-footer title="Advanced Filter"
      header-class="p-3 bg-light" class="v-modal-custom" centered>
  <BRow class="g-3">
    <!-- Normal Filter Section -->

    <BCol sm="12">
      <BFormGroup label="Filter by PIC:" label-for="choices-single-default">
      <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search PIC"
        ref="selectElement"
      >
      <option value="AA Permit">aidafaziha</option>
      <option value="Non AA">agnesthu</option>
      </select>

      </BFormGroup>
    </BCol>

    <BCol sm="12">
      <BFormGroup label="Filter by Sub Element:" label-for="choices-single-default">
      <select
        class="form-control"
        name="choices-single-default"
        id="choices-single-default"
        placeholder="Search Sub Element"
        ref="selectElement"
      >
      <option value="AA Permit">WORK ORDER</option>
      <option value="Non AA">SECURITY</option>
      </select>

      </BFormGroup>
    </BCol>

  </BRow>
  <div class="modal-footer v-modal-footer">
    <BLink href="javascript:void(0);" class="btn btn-link link-success fw-medium" @click="advancedSearch = false">
      <i class="ri-close-line me-1 align-middle"></i> Close
    </BLink>
    <BButton type="button" variant="primary" @click="applyFilters">Search</BButton>
  </div>
</BModal>

  </Layout>
</template>