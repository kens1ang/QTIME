<script>
import "@vueform/multiselect/themes/default.css";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";

import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";

export default {
  components: {
    Layout,
    PageHeader,
    lottie: Lottie,
  },
  data() {
    return {
      addCompanyModal: false,
      value: null,
      page: 1,
      perPage: 8,
      pages: [],
      searchQuery: null,
      companies: [
      { _id: '1', name: 'ALUNAN ASAS', owner: 'ALUNAN ASAS SDN BHD', industry_type: '257699-V', location: 'Penang', project: 'AR496, BG17-R1, BKT22F, BJO-B3B4' },
      { _id: '2', name: 'SETAR QUAY', owner: 'SETAR QUAY SDN BHD', industry_type: '1111106-A', location: 'Penang', project: 'BKT2SQ' },
      { _id: '3', name: 'SUNSURIA ASAS', owner: 'SUNSURIA ASAS SDN BHD', industry_type: '1177709-T', location: 'Kuala Lumpur', project: 'CHAPTER' },
      { _id: '4', name: 'QASIS GLORY', owner: 'OASIS GLORY SDN BHD', industry_type: '1111106-A', location: 'Kuala Lumpur', project: 'KL OFFICE' },
      ],
      defaultOptions: {
        animationData: animationData
      },
      defaultOptions1: {
        animationData: animationData1
      },

      //
      submitted: false,

      dataEdit: false,
      deleteModal: false,
      event: {
        _id: "",
        image_src: "",
        name: "",
        owner: "",
        industry_type: "",
        star_value: "",
        location: "",
        employee: "",
        website: "",
        contact_email: "",
        since: "",
      },
      //

    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.companies);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.contact_email.toLowerCase().includes(search) ||
            data.employee.toLowerCase().includes(search) ||
            data.owner.toLowerCase().includes(search) ||
            data.industry_type.toLowerCase().includes(search) ||
            data.website.toLowerCase().includes(search) ||
            data.star_value.toString().toLowerCase().includes(search) ||
            data.name.toLowerCase().includes(search) ||
            data.location.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    companies() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    editDetails(data) {
      this.dataEdit = true;
      this.addCompanyModal = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.addCompanyModal = true;
      this.dataEdit = false;
      this.event = {};

      this.submitted = false;
    },

    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event._id = data._id;
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
          var cusList = this.companies;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders._id != id;
            });
          });
          this.companies = cusList;
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

    showdetail(data) {
      document.getElementById('cname').innerHTML = data.name;
      document.getElementById('oname').innerHTML = data.owner;
      document.getElementById('iname').innerHTML = data.industry_type;
      document.getElementById('loc').innerHTML = data.location;
      document.getElementById('project').innerHTML = data.project;
    },

    setPages() {
      let numberOfPages = Math.ceil(this.companies.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(companies) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return companies.slice(from, to);
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

    var checkboxes = document.querySelectorAll('#companyList .form-check-input');
    Array.from(checkboxes).forEach(function (element) {
      element.addEventListener('change', function (event) {
        var checkedCount = document.querySelectorAll('#companyList .form-check-input:checked').length;

        if (event.target.closest("tr").classList.contains("table-active")) {
          (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        } else {
          (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        }
      });
    });
  },
};
</script>

<template>
    <Layout>
        <PageHeader title="Company Overview" subTitle="Maintenance List" pageTitle="System" />
        <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="flex-grow-1">
                <BButton variant="primary" class="add-btn me-1" @click="toggleModal">
                  <i class="ri-add-fill me-1 align-bottom"></i> Add Company
                </BButton>

              </div>
              <div class="flex-shrink-0">
                <div class="hstack text-nowrap gap-2">
                  <BButton class="btn btn-soft-danger" @click="deleteAlert">
                    <i class="ri-delete-bin-2-line"></i>
                  </BButton>
                </div>
              </div>
            </div>
          </BCardHeader>
        </BCard>
      </BCol>
      <BCol xxl="8">
        <BCard no-body id="companyList">
          <BCardHeader>
            <BRow class="g-2">
              <BCol md="3">
                <div class="search-box">
                  <input type="text" class="form-control search" placeholder="Search for company..."
                    v-model="searchQuery" />
                  <i class="ri-search-line search-icon"></i>
                </div>
              </BCol>
            </BRow>
          </BCardHeader>
          <BCardBody>
            <div>
              <div class="table-responsive table-card mb-3">
                <table class="table align-middle table-nowrap mb-0" id="customerTable">
                  <thead class="table-light">
                    <tr>
                      <th scope="col" style="width: 50px">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="checkAll" value="option" />
                        </div>
                      </th>
                      <th class="sort" data-sort="name" scope="col" @click="onSort('name')">
                        Company
                      </th>
                      <th class="sort" data-sort="owner" scope="col" @click="onSort('owner')">Name</th>
                      <th class="sort" data-sort="industry_type" scope="col" @click="onSort('industry_type')">
                        Registration Number
                      </th>
                      <th class="sort" data-sort="star_value" scope="col" @click="onSort('star_value')">
<<<<<<< Updated upstream
                        Address
                      </th>
                      <th class="sort" data-sort="location" scope="col" @click="onSort('location               ')">
                        Prefix
                      </th>
                      <th scope="col">Action</th>
=======
                        Subscription Due
                      </th>
                      <th class="sort" data-sort="location" scope="col" @click="onSort('location')">
                        State
                      </th>
                      <th class="sort" data-sort="location" scope="col" @click="onSort('location')">
                        Joined Since
                      </th>
                      <th class="sort" data-sort="star_value" scope="col" @click="onSort('star_value')">
                        Status
                      </th>
>>>>>>> Stashed changes
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(data, index) of resultQuery" :key="index">
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="chk_child" value="option1" />
                        </div>
                      </th>
                      <td class="id" style="display: none">
                        <BLink href="javascript:void(0);" class="fw-medium link-primary">{{ data._id }}</BLink>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1 ms-2 name">
                            {{ data.name }}
                          </div>
                        </div>
                      </td>
                      <td class="owner">{{ data.owner }}</td>
                      <td class="industry_type">{{ data.industry_type }}</td>
                      <td class="location">{{ data.location }}</td>
                      <td>
                      </td>
                      <td>
                        <ul class="list-inline hstack gap-2 mb-0">
                          <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View"
                            @click="showdetail(data)">
                            <BLink href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i>
                            </BLink>
                          </li>
                          <li class="list-inline-item" data-bs-trigger="hover" title="Edit" @click="editDetails(data)">
                            <BLink class="edit-item-btn"><i class="ri-pencil-fill align-bottom text-muted"></i>
                            </BLink>
                          </li>
                          <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Delete"
                            @click="deleteModalToggle(data)">
                            <BLink class="remove-item-btn">
                              <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                            </BLink>
                          </li>
                        </ul>
                      </td>
<<<<<<< Updated upstream
=======
                      
                      <td  class="industry_type"><span class="badge bg-success-subtle text-success mb-2">{{ data.status }}</span></td>
>>>>>>> Stashed changes
                    </tr>
                  </tbody>
                </table>
                <div class="noresult" v-if="resultQuery.length < 1">
                  <div class="text-center">
                    <lottie class="avatar-xl" colors="primary:#25a0e2,secondary:#00bd9d" :options="defaultOptions"
                      :height="75" :width="75" />
                    <h5 class="mt-2">Sorry! No Result Found</h5>
                    <p class="text-muted mb-0">
                      We've searched more than 150+ Orders We did not find any
                      orders for you search.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-3" v-if="resultQuery.length >= 1">
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
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="4">
        <BCard no-body>
          <BCardBody class="text-center">
            <div class="position-relative d-inline-block">
              <div class="avatar-md">
                <div class="avatar-title bg-light rounded-circle">
                  <img src="@/assets/images/brands/multi-user.png" alt=""
                    class="avatar-sm rounded-circle object-fit-cover" id="imageid" />
                </div>
              </div>
            </div>
            <h5 class="mt-3 mb-1" id="cname">ALUNAN ASAS</h5>
            <p class="text-muted" id="oname">ALUNAN ASAS SDN BHD</p>

            <ul class="list-inline mb-0">
              <li class="list-inline-item avatar-xs">
                <BLink href="javascript:void(0);" class="avatar-title bg-success-subtle text-success fs-15 rounded">
                  <i class="ri-global-line"></i>
                </BLink>
              </li>
              <li class="list-inline-item avatar-xs">
                <BLink href="javascript:void(0);" class="avatar-title bg-danger-subtle text-danger fs-15 rounded">
                  <i class="ri-mail-line"></i>
                </BLink>
              </li>
            </ul>
          </BCardBody>
          <BCardBody>
            <h6 class="text-muted text-uppercase fw-semibold mb-3">
              Remark
            </h6>
            <p class="text-muted mb-4">
                Alunan Asas' success stems from its skilled engineering team, extensive machinery, 
                and solid financial backing, positioning it as a leading player in 
                the regional construction and property industry.
            </p>
            <div class="table-responsive table-card">
              <table class="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td class="fw-medium" scope="row">Registeration Number</td>
                    <td id="iname">257699-V</td>
                  </tr>
                  <tr>
                    <td class="fw-medium" scope="row">Location</td>
                    <td id="loc">12 Lorong Limau , Tamn limau 13800 Bukit Jali Kuala Lumpur</td>
                  </tr>
                  <tr>
                    <td class="fw-medium" scope="row">Contact Email</td>
                    <td id="eml">info@syntycesolution.com</td>
                  </tr>
                  <tr>
                    <td class="fw-medium" scope="row">Contact Person</td>
                    <td id="eml">+601234567</td>
                  </tr>
                  <tr>
                    <td class="fw-medium" scope="row">Join Date</td>
                    <td id="sic">09-Jan-2024</td>
                  </tr>
                  <tr>
                    <td class="fw-medium" scope="row">Staff</td>
                    <td id="sic">200</td>
                  </tr>
                  <tr>
                    <td class="fw-medium" scope="row">Project</td>
                    <td id="project">
                      <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                        <a href="/system/project-detail" class="btn btn-outline-primary btn-border" style="--vz-btn-padding-x: 6px; --vz-btn-padding-y: 3px; font-size: 10px;">AR496</a>
                        <a href="/system/project-detail" class="btn btn-soft-warning btn-border" style="--vz-btn-padding-x: 6px; --vz-btn-padding-y: 3px; font-size: 10px;">BG17-R1</a>
                        <a href="/system/project-detail" class="btn btn-soft-dark btn-border" style="--vz-btn-padding-x: 6px; --vz-btn-padding-y: 3px; font-size: 10px;">BKT22F</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> <router-link to="/system/company-detail">
                        <BButton type="button" variant="success">
                            View Company Detail
                        </BButton>
                    </router-link></td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </BCardBody>
<<<<<<< Updated upstream
=======
          <BCardBody class="p-4 border-top border-top-dashed">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h6 class="text-muted fw-semibold mb-4">
                Project
              </h6>
              <a href="/system/project-list" style="text-decoration: underline double !important;font-size: 13px;margin-top: -24px">
                +10 More Projects
              </a>
            </div>

            <swiper class="vertical-swiper" :direction="'vertical'" :modules="[Autoplay, Mousewheel]" :slidesPerView="3"
              :spaceBetween="10" :mousewheel="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false }"
              style="height: 260px">
             
              <swiper-slide>
                <div class="swiper-slide">
                  <BCard no-body class="border border-dashed shadow-none">
                    <BCardBody>
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/companies/img-3.png" alt="" class="avatar-sm rounded" />
                        </div>
                        <div class="flex-grow-1 ms-3">
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <b>BKT2PS</b><br>
      <small>Petrol Station</small>
    </div>
    <span class="badge bg-warning-subtle text-warning mb-2">On Going</span>
  </div>
</div>

                      </div>
                    </BCardBody>
                  </BCard>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-slide">
                  <BCard no-body class="border border-dashed shadow-none">
                    <BCardBody>
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm">
                          <div class="avatar-title bg-light rounded">
                            <img src="@/assets/images/companies/img-8.png" alt="" height="30" />
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <b>SA10-202</b><br>
      <small>Serenia Anisa</small>
    </div>
    <span class="badge bg-warning-subtle text-warning mb-2">On Going</span>
  </div>
</div>
                      </div>
                    </BCardBody>
                  </BCard>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-slide">
                  <BCard no-body class="border border-dashed shadow-none">
                    <BCardBody>
                      <div class="d-flex">
                        <div class="flex-shrink-0 avatar-sm">
                          <div class="avatar-title bg-light rounded">
                            <img src="@/assets/images/companies/img-1.png" alt="" height="30" />
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <b>AR496</b><br>
      <small>Aunggun Residence</small>
    </div>
    <span class="badge bg-success-subtle text-success mb-2">Completed</span>
  </div>
</div>
                      
                      </div>
                    </BCardBody>
                  </BCard>
                </div>
              </swiper-slide>
            
            </swiper>

            <div class="text-center mt-3 d-flex justify-content-center">
           
              <BLink href="/system/company-detail"  class="badge bg-success-subtle text-success" style="line-height: 3;font-size:13px;border-radius:10px;margin-left: 10px;">
                View Company Detail
                <i class="ri-arrow-right-line align-bottom ms-1"></i>
              </BLink>
            </div>

          </BCardBody>
>>>>>>> Stashed changes
        </BCard>
      </BCol>
    </BRow>

    <BModal v-model="addCompanyModal" id="showmodal" hide-footer title-class="exampleModalLabel"
      header-class="bg-primary-subtle p-3" class="v-modal-custom" centered size="lg"
      :title="dataEdit ? 'Edit Company' : 'Add Company'">
      <b-form id="addform" class="tablelist-form" autocomplete="off">
        <input type="hidden" id="id">
        <BRow class="g-3">
          <BCol lg="4">
            <div>
              <label for="companyname" class="form-label">Name</label>
              <input type="text" id="companyname" class="form-control" placeholder="Enter company name"
                v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }">
              <div class="invalid-feedback">Please enter a company name.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="ownername" class="form-label">Code</label>
              <input type="text" id="ownername" class="form-control" placeholder="Enter code" v-model="event.owner"
                :class="{ 'is-invalid': submitted && !event.owner }">
              <div class="invalid-feedback">Please enter a code.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="" class="form-label">Registeration Number</label>
              <input type="text" id="" class="form-control" placeholder="Enter registeration number"
             >
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="starvalue" class="form-label">Address 1</label>
              <input type="text" id="starvalue" class="form-control" placeholder="Enter address 1" v-model="event.star_value"
                :class="{ 'is-invalid': submitted && !event.star_value }">
              <div class="invalid-feedback">Please enter a address 1.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="location" class="form-label">Address 2</label>
              <input type="text" id="location" class="form-control" placeholder="Enter address 2" v-model="event.address"
                :class="{ 'is-invalid': submitted && !event.address }">
              <div class="invalid-feedback">Please enter a address 2.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">Address 3</label>
              <input type="text" id="employee" class="form-control" placeholder="Enter address 3" v-model="event.employee"
                :class="{ 'is-invalid': submitted && !event.employee }">
              <div class="invalid-feedback">Please enter a address 3.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="starvalue" class="form-label">Postcode</label>
              <input type="text" id="starvalue" class="form-control" placeholder="Enter postcode" v-model="event.star_value"
                :class="{ 'is-invalid': submitted && !event.star_value }">
              <div class="invalid-feedback">Please enter a postcode.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="location" class="form-label">City</label>
              <input type="text" id="location" class="form-control" placeholder="Enter city" v-model="event.address"
                :class="{ 'is-invalid': submitted && !event.address }">
              <div class="invalid-feedback">Please enter a city.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">State</label>
              <input type="text" id="employee" class="form-control" placeholder="Enter State" v-model="event.employee"
                :class="{ 'is-invalid': submitted && !event.employee }">
              <div class="invalid-feedback">Please enter a State.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">Country</label>
              <input type="text" id="employee" class="form-control" placeholder="Enter Country" v-model="event.employee"
                :class="{ 'is-invalid': submitted && !event.employee }">
              <div class="invalid-feedback">Please enter a Country.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="website" class="form-label">Prefix</label>
              <input type="text" id="website" class="form-control" placeholder="Enter Prefix" v-model="event.website"
                :class="{ 'is-invalid': submitted && !event.website }">
              <div class="invalid-feedback">Please enter a Prefix.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="contactemail" class="form-label">Contact Email</label>
              <input type="text" id="contactemail" class="form-control" placeholder="Enter contact email"
                v-model="event.contact_email" :class="{ 'is-invalid': submitted && !event.contact_email }">
              <div class="invalid-feedback">Please enter a email.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">Contact Person</label>
              <input type="text" id="employee" class="form-control" placeholder="Enter Contact Person" v-model="event.employee"
                :class="{ 'is-invalid': submitted && !event.employee }">
              <div class="invalid-feedback">Please enter a Contact Person.</div>
            </div>
          </BCol>
          <BCol lg="8">
            <div>
              <label for="since" class="form-label">Note</label>
              <input type="text" id="since" class="form-control" placeholder="Enter note" v-model="event.since"
                :class="{ 'is-invalid': submitted && !event.since }">
              <div class="invalid-feedback">Please enter a note.</div>
            </div>
          </BCol>
        </BRow>
        <div class="hstack gap-2 justify-content-end mt-3">
          <BButton type="button" variant="light" id="closemodal" @click="addCompanyModal = false">Close</BButton>
          <BButton type="button" variant="success" id="add-btn" @click="handleSubmit">
            {{ dataEdit ? 'Update' : 'Add Company' }}
          </BButton>
        </div>
      </b-form>
    </BModal>

    <!-- delete modal -->
    <BModal v-model="deleteModal" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
      <div class="mt-2 text-center">
        <lottie class="avatar-xl" colors="primary:#00bd9d,secondary:#25a0e2" :options="defaultOptions1" :height="100"
          :width="100" />
        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
          <h4>You are about to delete a contact ?</h4>
          <p class="text-muted mx-4 mb-0">ADeleting your contact will remove all of your information from our database.</p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <button type="button" class="btn w-sm btn-light" @click="deleteModal = false">Close</button>
        <button type="button" class="btn w-sm btn-primary" id="delete-record" @click="deleteData">Yes, Delete It!</button>
      </div>
    </BModal>
    </Layout>
</template>