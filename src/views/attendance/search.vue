<script>
import Swal from "sweetalert2";
import Layout from "@/layouts/main.vue";
import "@vueform/multiselect/themes/default.css";
import PageHeader from "@/components/page-header";
import axios from "axios";
import animationData from "@/components/widgets/msoeawqm.json";

import "flatpickr/dist/flatpickr.css";
import "@simonwep/pickr/dist/themes/classic.min.css"; 
import "@simonwep/pickr/dist/themes/monolith.min.css"; 
import "@simonwep/pickr/dist/themes/nano.min.css";

export default {
  data() {
    return {
      searchQuery: null,
      defaultOptions: {
        animationData: animationData,
      },
      sliderCustomzie: [1000, 3000],
      productsData: [],
      pages: [],
      date3: null,
      page: 1,
      perPage: 10,
      value: ["April"],
      minmaxdateConfig: {
        dateFormat: "d M, Y",
        minDate: "25 12, 2021",
        maxDate: "29 12,2021",
      },
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.productsData);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.name.toLowerCase().includes(search) ||
            data.category.toLowerCase().includes(search) ||
            data.stock.toString().toLowerCase().includes(search) ||
            data.price.toString().toLowerCase().includes(search) ||
            data.orders.toString().toLowerCase().includes(search) ||
            data.rating.toString().toLowerCase().includes(search) ||
            data.publishedDate[0].toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    productsData(newValue) {
      this.setPages(newValue);
    },
    resultQuery() {
      if (this.searchQuery) this.setPages(this.displayedPosts);
      else this.setPages(this.productsData);
    },
  },
  created() {
    this.setPages(this.productsData);
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  beforeMount() {
    axios
      .get("https://api-node.themesbrand.website/apps/product")
      .then((data) => {
        this.productsData = [];
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        data.data.data.forEach((row) => {
          var dd = new Date(row.publishedDate);
          row.publishedDate =
            dd.getDate() +
            " " +
            monthNames[dd.getMonth()] +
            ", " +
            dd.getFullYear();
          var hours = dd.getHours();
          var minutes = dd.getMinutes();
          var ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          hours = hours < 10 ? "0" + hours : hours;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          var strTime = hours + ":" + minutes + " " + ampm;
          row.publishedtime = strTime;
          row.image_src =
            "https://api-node.themesbrand.website/images/products/" + row.image;
          // row.image_src = `@/assets/images/products/img-8.png`;
          this.productsData.push(row);
        });
      })
      .catch((er) => {
        console.log(er);
      });
  },

  methods: {
    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
          var cusList = this.productsData;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders._id != id;
            });
          });
          this.productsData = cusList;
          document.getElementById("checkAll").checked = false;
          var itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked == true) {
              ele.checked = false;
              ele.closest("tr").classList.remove("table-active");
              document.getElementById("selection-element").style.display =
                "none";
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
    onSort(column) {
      this.direction = this.direction === "asc" ? "desc" : "asc";
      const sortedArray = [...this.productsData];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === "asc" ? res : -res;
      });
      this.productsData = sortedArray;
    },
    setPages(data) {
      let numberOfPages = Math.ceil(data.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    deletedata(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.productsData.splice(this.productsData.indexOf(event), 1);
          axios
            .delete(
              `https://api-node.themesbrand.website/apps/product/${event._id}`
            )
            .then(() => {})
            .catch((er) => {
              console.log(er);
            });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    paginate(productsData) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return productsData.slice(from, to);
    },
  },
  mounted() {
    var total = 0;
    var checkchild = document.querySelectorAll(
      '.form-check-all input[type="checkbox"]'
    );
    checkchild.forEach(function (checkbox) {
      checkbox.onclick = function () {
        total = 0;
        checkchild.forEach(function (box) {
          if (box.checked == true) {
            total++;
          }
        });
        if (checkbox.checked == true) {
          checkbox.closest("tr").classList.add("table-active");
          document.getElementById("selection-element").style.display = "block";
          document.getElementById("select-content").innerHTML = total;
        } else {
          if (total <= 0) {
            document.getElementById("selection-element").style.display = "none";
          }
          checkbox.closest("tr").classList.remove("table-active");
          document.getElementById("select-content").innerHTML = total;
        }
      };
    });
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );
        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            document.getElementById("selection-element").style.display =
              "block";
            document.getElementById("select-content").innerHTML =
              checkboxes.length;
            checkbox.closest("tr").classList.add("table-active");
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            document.getElementById("selection-element").style.display = "none";
            checkbox.closest("tr").classList.remove("table-active");
          });
        }
      };
    }
  },

  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Search Attendance" pageTitle="Attendance"/>
    <BRow>
     
      <BCol xl="12" lg="12">
        <br /><br />
        <div>
          <BCard no-body>
            <BCardBody class="checkout-tab">
              <BForm action="#">
                <div class="step-arrow-nav mt-n3 mx-n3 mb-3">
                  <BTabs nav-class="nav-pills nav-justified custom-nav">
                    <BTab active class="nav-item nav-link p-3">
                      <template #title>
                        <div class="fs-15">
                          <i
                            class="ri-user-2-line fs-16 avatar-xs d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle align-middle me-2"
                          ></i>
                          Search Amend Attendance
                        </div>
                      </template>
                      <br>
                      <div>
  <!-- Container for Site and Date on the Left, Filters on the Right -->
  <BRow class="align-items-center justify-content-between">
    
    <!-- Left Side: Site and Date -->
    <BCol sm="4">
      <h5 class="mb-1">Site: AR496</h5>
      <h6 class="mb-1">Date: 1-Sep-2024 to 15-Sep-2024</h6>
    </BCol>
    
    <!-- Right Side: Filters -->
<<<<<<< Updated upstream
    <BCol sm="6">
      <BRow class="g-3 justify-content-end">
        
        <BCol sm="3">
          <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
            <option value="" selected>Select Period</option>
            <option value="Merchandising">1</option>
            <option value="Manufacturing">2</option>
          </select>
        </BCol>
=======
    <BCol sm="8">
    <BRow class="g-3 justify-content-end align-items-center">
      <BCol sm="3"></BCol>
      <BCol sm="2">
  <div class="form-group">
    <div class="btn-group" role="group" aria-label="Period Switch" style="margin-left: -60px;height:30px">
      <button 
        type="button" 
        style="width:88px;font-size: 12px;"
        class="btn btn-outline-primary" 
        :class="{ active: isPeriod1 }" 
        @click="isPeriod1 = true"
      >
        Period 1
      </button>
      <button 
        type="button" 
        style="width:88px;font-size: 12px;"
        class="btn btn-outline-primary" 
        :class="{ active: !isPeriod1 }" 
        @click="isPeriod1 = false"
      >
        Period 2
      </button>
    </div>
  </div>
</BCol>
>>>>>>> Stashed changes

        <BCol sm="4">
          <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
            <option value="" selected>Select Month</option>
            <option value="Merchandising">January</option>
            <option value="Manufacturing">February</option>
            <!-- Other months here -->
          </select>
        </BCol>

        <BCol sm="3">
          <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
            <option value="" selected>Select Year</option>
            <option value="Merchandising">2024</option>
            <option value="Manufacturing">2023</option>
            <!-- Other years here -->
          </select>
        </BCol>

      </BRow>
    </BCol>
    
  </BRow>
</div><br>

                      <div>
                        <table
                          class="table align-middle table-nowrap"
                          id="customerTable"
                        >
                          <thead class="table-light">
                            <tr>
                              <th class="sort" data-sort="name">Incharge</th>
                              <th class="sort" data-sort="username">Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody class="list form-check-all">
                            <tr>
                              <td class="name">Staff</td>
                              <td class="username">Processing</td>
                              <td>
                                <div class="d-flex gap-2">
                                  <div class="edit">
                                    <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'attendance-index' }"
                                        class="MenuText"
                                      >
                                        Detail
                                      </router-link>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="name">General Woker</td>
                              <td class="username">Printed</td>
                              <td>
                                <div class="d-flex gap-2">
                                  <div class="edit">
                                    <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'attendance-index' }"
                                        class="MenuText"
                                      >
                                        Detail
                                      </router-link>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="name">Operator</td>
                              <td class="username">Printed</td>
                              <td>
                                <div class="d-flex gap-2">
                                  <div class="edit">
                                    <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'attendance-index' }"
                                        class="MenuText"
                                      >
                                        Detail
                                      </router-link>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="name">Subcon Worker</td>
                              <td class="username">Printed</td>
                              <td>
                                <div class="d-flex gap-2">
                                  <div class="edit">
                                    <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'attendance-index' }"
                                        class="MenuText"
                                      >
                                        Detail
                                      </router-link>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="name">Subcon as General Worker</td>
                              <td class="username">Printed</td>
                              <td>
                                <div class="d-flex gap-2">
                                  <div class="edit">
                                    <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'attendance-index' }"
                                        class="MenuText"
                                      >
                                        Detail
                                      </router-link>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BTab>
                    <BTab class="nav-item nav-link fs-15 p-4">
                      <template #title>
                        <div class="fs-15">
                          <i
                            class="ri-truck-line fs-16 avatar-xs d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle align-middle me-2"
                          ></i>
                          Personal dashboard
                        </div>
                      </template>
                      <div>
                        <h5 class="mb-1">Site : AR496</h5>
                        <h6 class="mb-1">Date : 15-Sep-2024</h6>
                        <br />
                      </div>

                      <BCardBody>
                        
                        <div class="live-preview">
                          <div class="table-responsive">
                            <h6>My Attendance</h6>
                            <table class="table align-middle table-nowrap mb-0">
                              <thead class="table-light">
                                <tr>
                                  <th style="font-size: 13px" scope="col">Name</th>
                                  <th style="font-size: 13px" scope="col">In</th>
                                  <th style="font-size: 13px" scope="col">Out</th>
                                  <th style="font-size: 13px" scope="col">Applied</th>
                                  <th style="font-size: 13px" scope="col">Remark</th>
                                  <th style="font-size: 13px" scope="col">Late In</th>
                                  <th style="font-size: 13px" scope="col">OT</th>
                                  <th style="font-size: 13px" scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style="font-size: 13px">
                                    <img
                                      src="@/assets/images/users/avatar-3.jpg"
                                      alt=""
                                      class="avatar-xs rounded-circle"
                                    />
                                    Olivia Lim
                                  </td>
                                  <td style="font-size: 13px">14:25AM</td>
                                  <td style="font-size: 13px">17:39PM</td>
                                  <td style="font-size: 13px" class="text-success">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter value"
                                    />
                                  </td>
                                  <td style="font-size: 13px">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter value"
                                    />
                                  </td>
                                  <td style="font-size: 13px">
                                    <span
                                      class="badge bg-danger-subtle text-danger"
                                      style="font-size: 13px !important"
                                      >6:14:11</span
                                    >
                                  </td>
                                  <td style="font-size: 13px">0:09:02</td>
                                  <td style="font-size: 13px">
                                    <div class="d-flex gap-2">
                                      <div class="edit">
                                        <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'preot-overview' }"
                                        class="MenuText"
                                      >
                                        View OT
                                      </router-link>
                                    </button>
                                      </div>
                                      <div class="remove">
                                        <button
                                          class="btn btn-sm btn-info remove-item-btn"
                                          
                                        >
                                          View Backcharge
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div><br><br><br>

                        <div class="live-preview">
                          <div class="table-responsive">
                            <h6>Team Member Attendance</h6>
                            <table class="table align-middle table-nowrap mb-0">
                              <thead class="table-light">
                                <tr>
                                  <th  style="font-size: 13px" scope="col">Name</th>
                                  <th  style="font-size: 13px" scope="col">In</th>
                                  <th  style="font-size: 13px" scope="col">Out</th>
                                  <th  style="font-size: 13px" scope="col">Applied</th>
                                  <th  style="font-size: 13px" scope="col">Remark</th>
                                  <th  style="font-size: 13px" scope="col">Late In</th>
                                  <th  style="font-size: 13px" scope="col">OT</th>
                                  <th  style="font-size: 13px" scope="col">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style="font-size: 13px">
                                    <img
                                      src="@/assets/images/users/avatar-3.jpg"
                                      alt=""
                                      class="avatar-xs rounded-circle"
                                    />
                                    ANG CHIN MEI
                                  </td>
                                  <td style="font-size: 13px">8:55AM</td>
                                  <td style="font-size: 13px">17:39PM</td>
                                  <td style="font-size: 13px" class="text-success">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter value"
                                    />
                                  </td>
                                  <td style="font-size: 13px">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter value"
                                    />
                                  </td>
                                  <td style="font-size: 13px">
                                    <span
                                      class="badge bg-danger-subtle text-danger"
                                      style="font-size: 13px !important"
                                      >0:25:11</span
                                    >
                                  </td>
                                  <td>0:09:02</td>
                                  <td style="font-size: 13px">
                                    <div class="d-flex gap-2">
                                      <div class="edit">
                                        <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'preot-overview' }"
                                        class="MenuText"
                                      >
                                        View OT
                                      </router-link>
                                    </button>
                                      </div>
                                      <div class="remove">
                                        <button
                                          class="btn btn-sm btn-info remove-item-btn"
                                          
                                        >
                                          View Backcharge
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size: 13px">
                                    <img
                                      src="@/assets/images/users/avatar-3.jpg"
                                      alt=""
                                      class="avatar-xs rounded-circle"
                                    />
                                    YONG CHUEN
                                  </td>
                                  <td style="font-size: 13px">07:55AM</td>
                                  <td style="font-size: 13px">18:30PM</td>
                                  <td style="font-size: 13px" class="text-success">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter value"
                                    />
                                  </td>
                                  <td style="font-size: 13px">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Enter value"
                                    />
                                  </td>
                                  <td style="font-size: 13px">-</td>
                                  <td style="font-size: 13px">
                                    <span
                                      class="badge bg-danger-subtle text-danger"
                                      style="font-size: 13px !important"
                                      >1:10:10</span
                                    >
                                  </td>
                                  <td style="font-size: 13px">
                                    <div class="d-flex gap-2">
                                      <div class="edit">
                                        <button
                                      class="btn btn-sm btn-outline-success edit-item-btn"
                                    >
                                      <router-link
                                        :to="{ name: 'preot-overview' }"
                                        class="MenuText"
                                      >
                                        View OT
                                      </router-link>
                                    </button>
                                      </div>
                                      <div class="remove">
                                        <button
                                          class="btn btn-sm btn-info remove-item-btn"
                                          
                                        >
                                          View Backcharge
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </BCardBody>

                      <div class="d-flex align-items-start gap-3 mt-4">
                        <BButton
                          type="button"
                          variant="primary"
                          class="btn-label right ms-auto nexttab"
                          data-nexttab="pills-payment-tab"
                        >
                          <i
                            class="ri-bank-card-line label-icon align-middle fs-16 ms-2"
                          ></i
                          >Submit
                        </BButton>
                      </div>
                    </BTab>
                  </BTabs>
                </div>
              </BForm>
            </BCardBody>
          </BCard>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>
