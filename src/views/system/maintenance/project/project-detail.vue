<script>
import Layout from "@/layouts/main.vue";
import Multiselect from 'vue-multiselect';
import "@vueform/multiselect/themes/default.css";
import { reactive } from 'vue';

export default {
    data() {
        return {
            searchQuery: 'ang', // Default username
      showDropdown: false,
      options: [
        { value: 'option1', text: 'chin' },
        { value: 'option2', text: 'option2' },
        { value: 'option3', text: 'option3' },
        { value: 'option4', text: 'option4' },
        { value: 'option5', text: 'option5' }
      ],
      selectedOption: null,
      defaultUsername: 'chin',
      defaultName: 'Chin Han',
            value: null,
            inviteUser: false,
            editModalStr: false,
            modalShow: false,
            collapsedRows: reactive({}),
            kskcollapsedRows: reactive({}),
            users: [
                { value: 'user1', text: 'zylim' },
                { value: 'user2', text: 'cijie' },
                { value: 'user3', text: 'kenxiang' },
                // Add more users as needed
            ],
            membersss: [
                { value: 'user1', text: 'zylim' },
                { value: 'user2', text: 'cijie' },
                { value: 'user3', text: 'kenxiang' },
            
            ],
            projectRoles: [
                { value: 'project_manager', text: 'Project Manager' },
                { value: 'project_director', text: 'Project Director' },
                { value: 'qa_qc_person_incharge', text: 'QA/QC Manager' },
                { value: 'contract_manager', text: 'Contract Manager' },
                { value: 'qs_person_incharge', text: 'Person Incharge' },
                { value: 'purchasing ', text: 'Purchasing ' },
                { value: 'site_team_members', text: 'Site Team Members' },
                { value: 'assistant_project_manager', text: 'Assistant Project Manager' },
                { value: 'safety', text: 'Safety' },
                { value: 'construction_supervisor', text: 'Construction Supervisor' },
            ],
            fileModal: false,
            selectedProjectManager: '',
            selectedProjectMembers: [],
            selectedMembers: [],
            member: [],
        };
    },
    computed: {
        filteredOptions() {
      const filter = this.searchQuery.toLowerCase();
      return this.options.filter(option =>
        option.text.toLowerCase().includes(filter)
      );
    },
        filteredUsers() {
        // Optional: add any additional filtering logic here
        return this.users;
        },
        filteredmember() {
        // Optional: add any additional filtering logic here
        return this.membersss;
        },
    },
    components: {
        Layout,
        Multiselect
    },
    methods: {
        toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    filterDropdown() {
      if (this.searchQuery.trim() === '') {
        this.showDropdown = false;
      } else {
        this.showDropdown = true;
      }
    },
    selectOption(option) {
      this.searchQuery = option.text;
      this.selectedOption = option;
      this.showDropdown = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    },
        editModal(){
            this.editModalStr = true;

        },
        openFileModal() {
      this.fileModal = true;
    },

        toggleRow(rowId) {
            if (this.collapsedRows[rowId]) {
                delete this.collapsedRows[rowId];
            } else {
                this.collapsedRows[rowId] = true;
            }
        },
        ksktoggleRow(rowId) {
            if (this.kskcollapsedRows[rowId]) {
                delete this.kskcollapsedRows[rowId];
            } else {
                this.kskcollapsedRows[rowId] = true;
            }
        },
        customLabel(option) {
        return `${option.text}`;
        },
        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        },
        toggleModal() {
        this.inviteUser = true;
        },
        addProjectMembers(selectedValue) {
        if (!this.selectedProjectMembers.includes(selectedValue)) {
            this.selectedProjectMembers.push(selectedValue);
        }
        },
        addMembers(selectedValue) {
        if (!this.selectedMembers.includes(selectedValue)) {
            this.selectedMembers.push(selectedValue);
        }
        },
        memberss(selectedValue) {
        if (!this.member.includes(selectedValue)) {
            this.member.push(selectedValue);
        }
        },
        handleSubmit() {
        // Handle form submission logic here
        console.log('Project Manager:', this.selectedProjectManager);
        console.log('Project Members:', this.selectedProjectMembers);
        console.log('Additional Members:', this.selectedMembers);
        this.inviteUser = false;
        },
    },
    mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {  
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<template>
    <Layout>
        <BRow>
            <BCol lg="12">
                <BCard no-body class="mt-n4 mx-n4 border-0">
                    <div class="bg-primary-subtle">
                        <BCardBody class="pb-0 px-4">
                            <BRow class="mb-3">
                                <BCol md>
                                    <BRow class="align-items-center g-3">
                                        <BCol md="auto">
                                            <div class="avatar-md">
                                                <div class="avatar-title bg-white rounded-circle">
                                                    <img src="@/assets/images/brands/slack.png" alt="" class="avatar-xs">
                                                </div>
                                            </div>
                                        </BCol>
                                        <BCol md>
                                            <div>
                                                <h4 class="fw-bold">Project Code : AR496</h4>
                                                <div class="hstack gap-3 flex-wrap">
                                                    <div><i class="ri-building-line align-bottom me-1"></i> ALUNAS ASAS SDN BHD
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div>Contract End Date : <span class="fw-medium">29 Dec, 2024</span></div>
                                                    <div class="vr"></div>
                                                    <BBadge pill class="bg-sucess fs-12" style="background-color: green !important;">Completed</BBadge>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </div>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BTabs variant="link" nav-class="nav-tabs-custom border-bottom-0" v-model="activeTab">
                    <BTab title="Detail" active class="fw-semibold pt-2">
                        <BRow>
                            <BCol xl="12" lg="12">
                                <BCard no-body>
                                    <BCardBody>
                                        <div class="text-muted">
                                            <div class="d-flex justify-content-between align-items-center mb-3">
  <!-- Description on the Left -->
  <h6 class="mb-0 fw-semibold text-uppercase">Description</h6>

  <!-- Button on the Right -->
  <BButton 
    type="button" 
    variant="success" 
    class="btn btn-light"
    data-bs-toggle="tooltip"
    data-bs-placement="top" 
    @click="openFileModal"
  >
    <i class="ri-pencil-fill align-bottom"></i>
  </BButton>
</div>

                                            <p>Sample Description for Project AR496</p>
                                            <div class="d-flex justify-content-between">
  <!-- Left side list items -->
  <ul class="ps-4 vstack gap-2 me-2">
    <li>Project Name :</li>
    <li>Contract Start Date : 15 Sep 2021</li>
    <li>Progress : 100%</li>
    <li>Completed Day : 100days</li>
  </ul>

  <!-- Right side list items -->
  <ul class="ps-4 vstack gap-2 ms-2">
    <li>Contract Value :</li>
    <li>Prefix :</li>
    <li>DIP Period :</li>
  </ul>
</div>


                                            
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xl="12" lg="12">
    <BCard no-body>
        <BCardHeader class="card-header bg-dark-subtle d-flex justify-content-between align-items-center">
  <BCardTitle class="mb-0">Organization Chart</BCardTitle>
  <div class="hstack gap-2">
    <BButton 
      type="button" 
      variant="primary" 
      @click="toggleModal"
    >
      <i class="ri-share-line me-1 align-bottom"></i>
      Manage Member
    </BButton>
  </div>
</BCardHeader>
        <BCardBody>
            <div class="hori-sitemap">
                <!-- Organization Chart -->
                <ul class="list-unstyled mb-0">
                    <li class="p-0 parent-title">
                        <BLink href="javascript: void(0);" class="fw-semibold">Project Director <br>
                            <span class="small-text">1. Loh Beng Ping</span></BLink>
                    </li>
                </ul>
                <!-- Project Manager and Contract Manager Row -->
                <ul class="list-unstyled row g-0 mb-0" >
                    <!-- Project Manager Column -->
                    <li class="col-sm-6">
                        <BLink href="javascript: void(0);" class="fw-semibold">Project Manager/Senior Project Manager
                             <br><span class="small-text">1. Ang Li Win</span></BLink>
                        <ul class="list-unstyled second-list pt-0">
                            <li>
                                <div>
                                    <BLink href="javascript: void(0);">Assistant Project Manager/Senior Manager</BLink>
                                </div>
                                <ul class="list-unstyled second-list pt-0">
                                    <li>
                                        <div>
                                            <BLink href="javascript: void(0);">Engineer Manager</BLink>
                                        </div>
                                        <ul class="list-unstyled row g-0 mb-0 justify-content-center" style="width: 130%">
                                            <li class="col-sm-2 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">Construction <br>Supervisor</BLink>
                                            </li>
                                            <li class="col-sm-2 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">Architect</BLink>
                                            </li>
                                            <li class="col-sm-2 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">Site <br> Clock</BLink>
                                            </li>
                                            <li class="col-sm-1 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">Safety</BLink>
                                            </li>
                                            <li class="col-sm-2 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">QA/QC <br> Person Incharge</BLink>
                                            </li>
                                            <li class="col-sm-2 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">Land</BLink>
                                            </li>
                                            <li class="col-sm-1 text-center">
                                                <BLink href="javascript: void(0);" class="fw-semibold">M&E</BLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                  
                    </li>
                    <!-- Contract Manager Column -->
                    <li class="col-sm-6">
    <BLink href="javascript: void(0);" class="fw-semibold">Contract Manager <br>
        <span class="small-text">1. CHIN KHOI HOE</span>
        <br><span class="small-text">2. NG POOI HOCK</span>
    </BLink>
    <ul class="list-unstyled second-list pt-0 d-flex flex-wrap" style="margin-left:43%">
        <li class="me-5">
            <div>
                <BLink href="javascript: void(0);">QS</BLink>
            </div>
        </li>
        <li>
            <div>
                <BLink href="javascript: void(0);">QS</BLink>
            </div>
        </li>
    </ul>
</li>

                </ul>
                <!-- Additional Roles Row (Single Line) -->
                
            </div>
        </BCardBody>
    </BCard>
</BCol>

                        </BRow>
                    </BTab>
                    
                    <BTab title="Member" class="fw-semibold pt-2">
                        <BRow class="g-4 mb-3">
                            <BCol sm>
                                <div class="d-flex">
                                    <div class="search-box me-2">
                                        <input type="text" class="form-control" placeholder="Search user...">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                            </BCol>
                            <BCol xxl="3" class="ms-auto">
                                <div>
                                    <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                    <option value="" selected>Select Role</option>
                                    <option value="Manufacturing">Project Director</option>
                                    <option value="Merchandising">Project Manager</option>
                                    <option value="Merchandising">Assistant Project Manager</option>
                                    <option value="Partnership">Contract Manager</option>
                                    <option value="Manufacturing">QA/QC Manager </option>
                                    <option value="Manufacturing">Purchasing</option>
                                    <option value="Manufacturing">Site Team Member</option>
                                    <option value="Corporation">Safety</option>
                                    <option value="Merchandising">Construction Supervisor</option>
                                    <option value="Manufacturing">Person Incharge</option>
                                    </select>
                                </div>
                            </BCol>
                            
                        </BRow>
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
                <th>Roles</th>
                <th class="sort" data-sort="email">Email</th>
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
                <td>Site Team Member</td>
                <td>abdu@metrio.com.my</td>
                <td>
                  <div class="d-flex gap-2">
                    <div class="edit">
                      <button
                        class="btn btn-sm btn-success edit-item-btn"
                        @click="editModal"
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
                <td class="name">Loh Beng Ping</td>
                <td class="username">bploh</td>
                <td>Project Director</td>
                <td>bploh@metrio.com.my</td>
                <td>
                  <div class="d-flex gap-2">
                    <div class="edit">
                      <button
                        class="btn btn-sm btn-success edit-item-btn"
                        @click="editModal"
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
                <td class="name">Ang Li win</td>
                <td class="username">angliwin</td>
                <td>Project Manager</td>
                <td>angliwin@metrio.com.my</td>
                <td>
                  <div class="d-flex gap-2">
                    <div class="edit">
                      <button
                        class="btn btn-sm btn-success edit-item-btn"
                        @click="editModal"
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

                    </BTab>

                    <BTab title="Attendance Approval" class="fw-semibold pt-2">
                        <br>
                        <BRow class="g-4 mb-3">
  <BCol class="d-flex justify-content-end align-items-center">

    <!-- Dropdown -->
    <div class="me-2">
      <select class="form-control" id="choices-single-default">
        <option value="" selected>Select Role</option>
        <option value="Manufacturing">Project Director</option>
        <option value="Merchandising">Project Manager</option>
        <option value="Merchandising">Assistant Project Manager</option>
        <option value="Partnership">Contract Manager</option>
        <option value="Manufacturing">QA/QC Manager</option>
        <option value="Manufacturing">Purchasing</option>
        <option value="Manufacturing">Site Team Member</option>
        <option value="Corporation">Safety</option>
        <option value="Merchandising">Construction Supervisor</option>
        <option value="Manufacturing">Person Incharge</option>
      </select>
    </div>

    <div class="me-2">
      <select class="form-control" id="choices-single-default">
        <option value="" selected>Select Incharge</option>
        <option value="Manufacturing">Staff</option>
        <option value="Merchandising">General Worker</option>
        <option value="Merchandising">Subcon Worker</option>
        <option value="Partnership">Subcon as General Worker</option>
        <option value="Manufacturing">Operator</option>
      </select>
    </div>

        <!-- Button -->
        <div >
      <BButton variant="primary" @click="modalShow = !modalShow">
        <i class="ri-mail-add-line align-bottom me-1"></i> Manage Approval Email List
      </BButton>
    </div>


  </BCol>
</BRow>




                   
                        <br>
                       
                        <BRow class="row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                            <BCol>
                                <BCard no-body class="border-0 overflow-hidden">
                                    <BLink class="card-header bg-danger-subtle" role="button" v-b-toggle.leadDiscovered>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h5 class="card-title text-uppercase fw-semibold mb-0 fs-15">Attendance Approval Email List</h5>
                              
                                        </div>
                                    </BLink>
                                    <BCard no-body >
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.leadDiscovered1>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        TK
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">David Ong Tai Kheng <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : Member</p>
                                                    <p class="text-muted mb-0">Incharge : General Worker</p>
                                                    
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.leadDiscovered2>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        MT
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">TAN MAN TING <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : Site Team Member</p>
                                                    <p class="text-muted mb-0">Incharge : Subcon</p>
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" v-b-toggle.leadDiscovered3>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        KH
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">CHIN KHOI HOE <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : Contract Manager </p>
                                                    <p class="text-muted mb-0">Incharge : Staff</p>
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" v-b-toggle.leadDiscovered4>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        BP
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">Loh Beng Ping <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : Project Director</p>
                                                    <p class="text-muted mb-0">Incharge : Staff</p>
                                                    
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                    </BCard>
                                </BCard>
                                
                            </BCol>

                            <BCol>
                                <BCard no-body>
                                    <BLink class="card-header bg-success-subtle" role="button" v-b-toggle.contactInitiated>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h5 class="card-title text-uppercase fw-semibold mb-0 fs-14">Work Order Approval Email List</h5>
                                    
                                        </div>
                                    </BLink>
                                    <BCard no-body >
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.contactInitiated3>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        BP
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">Loh Beng Ping 
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : Project Director</p>
                                                    <p class="text-muted mb-0">Incharge : Staff</p>
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.contactInitiated4>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        JK
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">Loh Jooi Kheng 
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : Contract Manager</p>
                                                    <p class="text-muted mb-0">Incharge : Staff</p>
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.contactInitiated2>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        LM
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">TAN LAY MIN 
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge></h6>
                                                    <p class="text-muted mb-0">Roles : QS Manager</p>
                                                    <p class="text-muted mb-0">Incharge : Staff</p>
                                                    
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                    </BCard>
                                </BCard>
                            </BCol>

                            <BCol>
                                <BCard no-body>
                                    <BLink class="card-header bg-warning-subtle" role="button" v-b-toggle.needsIdentified>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Registration Approval Email List</h5>
                                  
                                        </div>
                                    </BLink>
                                </BCard>
                            </BCol>

                            <BCol>
                                <BCard no-body>
                                    <BLink class="card-header bg-info-subtle" role="button" v-b-toggle.meetingArranged>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Resignation Approval Email List</h5>
                                
                                        </div>
                                    </BLink>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BTab>
                </BTabs>
            </BCol>
        </BRow>



        <BModal v-model="modalShow" body-class="" 
        hide-footer title="Manage Approval Email List" header-class="bg-primary-subtle p-3" class="v-modal-custom" centered size="lg">
      
            <b-form id="addform" class="tablelist-form" autocomplete="off">
                <BRow class="g-3">
                <BCol lg="12">
                    <div>
                    <label for="project-manager" class="form-label">Type Approval Email List</label>
                    <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                    <option value="" >Select Approval Email List</option>
                                    <option value="Manufacturing" selected>Attendance Approval Email List</option>
                                    <option value="Merchandising">Work Order Approval Email List</option>
                                    <option value="Merchandising">Registration Approval Email List</option>
                                    <option value="Partnership" >Regisnation Approval Email List</option>
                                    </select>
                    </div>
                </BCol>
           

      
                <BCol lg="12" >   <br>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <label for="additional-members" class="form-label mb-0">Members List</label>
    <BButton 
      type="button" 
      variant="success" 
      @click="handleAddClick"
    >
      <i class=" ri-user-add-line"></i>
    </BButton>
  </div>

  <!-- Members list with table -->
  <div class="members-table-container">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
            <th></th>
          <th>Username</th>
          <th>Name</th>
          <th>Roles</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td>
            <label class="form-check-label">david</label>
          </td>
          <td>
            <label class="form-check-label">David Ong Tai Kheng</label>
          </td>
          <td>
            <label class="form-check-label">Member</label>
          </td>
          <td>
            <label class="form-check-label">General worker</label>
          </td>
          <td>
            <b-link class="icon-btn" @click="handleDelete('zylim')">
              <i class="ri-delete-bin-line align-bottom text-danger"></i>
            </b-link>
          </td>
        </tr>
        <tr>
            <td>2</td>
          <td>
            <label class="form-check-label">tmanting</label>
          </td>
          <td>
            <label class="form-check-label">Tan Man Ting</label>
          </td>
          <td>
            <label class="form-check-label">Site Team Member</label>
          </td>
          <td>
            <label class="form-check-label">Subcon</label>
          </td>
          <td>
            <b-link class="icon-btn" @click="handleDelete('abdussalam')">
              <i class="ri-delete-bin-line align-bottom text-danger"></i>
            </b-link>
          </td>
        </tr>
        <tr>
            <td>3</td>
          <td>
            <label class="form-check-label">chinkhoi</label>
          </td>
          <td>
            <label class="form-check-label">Chin Khoi Hoe</label>
          </td>
          <td>
            <label class="form-check-label">Contract Manager</label>
          </td>
          <td>
            <label class="form-check-label">Staff</label>
          </td>
          <td>
            <b-link class="icon-btn" @click="handleDelete('zylim')">
              <i class="ri-delete-bin-line align-bottom text-danger"></i>
            </b-link>
          </td>
        </tr>
        <tr>
            <td>4</td>
          <td>
            <label class="form-check-label">bploh</label>
          </td>
          <td>
            <label class="form-check-label">Loh Bing Ping</label>
          </td>
          <td>
            <label class="form-check-label">Project Director</label>
          </td>
          <td>
            <label class="form-check-label">Staff</label>
          </td>
          <td>
            <b-link class="icon-btn" @click="handleDelete('zylim')">
              <i class="ri-delete-bin-line align-bottom text-danger"></i>
            </b-link>
          </td>
        </tr>
        <tr>
            <td>5</td>
          <td>
            <div class="dropdown-container" @click="toggleDropdown">
              <input
                type="text"
                class="dropdown-input"
                placeholder="Select or search..."
                v-model="searchQuery"
                @input="filterDropdown"
              />
              <div v-if="showDropdown" class="dropdown-menu">
                <div
                  v-for="option in filteredOptions"
                  :key="option.value"
                  class="dropdown-item"
                  @click="selectOption(option)"
                >
                  {{ option.text }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <label class="form-check-label"></label>
          </td>
          <td>
           
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</BCol>


                </BRow>
                <div class="hstack gap-2 justify-content-end mt-3">
                <BButton type="button" variant="light" id="closemodal" @click="inviteUser = false">Close</BButton>
                <BButton type="button" variant="success" id="add-btn" @click="handleSubmit">
            Submit
          </BButton>
        </div>
      </b-form>
    </BModal>


        <BModal v-model="editModalStr" body-class="" header-class="bg-light p-3" hide-footer title="Edit Member Roles" class="v-modal-custom" centered>
            <b-form class="needs-validation" novalidate id="deals-form" onsubmit="return false">
                <div>
                <label for="project-manager" class="form-label">Name</label>
                <input
      type="text"
      class="form-control"
      value="ABDUL RAHMAN BIN SAFARUDIN"
    />
                </div>   
                <div>
                <label for="project-manager" class="form-label">Username</label>
                <input
      type="text"
      class="form-control"
      value="abdulrahman"
    />
                </div>   
                <div>
                <label for="project-manager" class="form-label">Roles</label>
                <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                <option value="" >Select Role</option>
                                <option value="Manufacturing">Project Director</option>
                                <option value="Merchandising">Project Manager</option>
                                <option value="Merchandising">Assistant Project Manager</option>
                                <option value="Partnership">Contract Manager</option>
                                <option value="Manufacturing">QA/QC Manager </option>
                                <option value="Manufacturing">Purchasing</option>
                                <option value="Manufacturing" selected>Site Team Member</option>
                                <option value="Corporation">Safety</option>
                                <option value="Merchandising">Construction Supervisor</option>
                                <option value="Manufacturing">Person Incharge</option>
                                </select>
                </div>


                            
                <div class="modal-footer v-modal-footer">
                    <BButton type="button" variant="light" id="close-modal" @click="modalShow = false"> Close </BButton>
                    <BButton type="submit" variant="success"><i class="ri-save-line align-bottom me-1"></i> Save </BButton>
                </div>
            </b-form>
        </BModal>
        <BModal v-model="inviteUser" id="showmodal" hide-footer title-class="exampleModalLabel"
            header-class="bg-primary-subtle p-3" class="v-modal-custom" centered size="lg" title="Manager Member">
      
            <b-form id="addform" class="tablelist-form" autocomplete="off">
                <BRow class="g-3">
                <BCol lg="12">
                    <div>
                    <label for="project-manager" class="form-label">Roles</label>
                    <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                    <option value="" >Select Role</option>
                                    <option value="Manufacturing">Project Director</option>
                                    <option value="Merchandising">Project Manager</option>
                                    <option value="Merchandising">Assistant Project Manager</option>
                                    <option value="Partnership" selected>Contract Manager</option>
                                    <option value="Manufacturing">QA/QC Manager </option>
                                    <option value="Manufacturing">Purchasing</option>
                                    <option value="Manufacturing">Site Team Member</option>
                                    <option value="Corporation">Safety</option>
                                    <option value="Merchandising">Construction Supervisor</option>
                                    <option value="Manufacturing">Person Incharge</option>
                                    </select>
                    </div>
                </BCol>

      
                <BCol lg="12">
  <div class="d-flex justify-content-between align-items-center mb-3">
    <label for="additional-members" class="form-label mb-0">Members List</label>
    <BButton 
      type="button" 
      variant="success" 
      @click="handleAddClick"
    >
      <i class=" ri-user-add-line"></i>
    </BButton>
  </div>

  <!-- Members list with table -->
  <div class="members-table-container">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
            <th></th>
          <th>Username</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td>
            <label class="form-check-label">chin</label>
          </td>
          <td>
            <label class="form-check-label">Chin Khoi Hoe</label>
          </td>
          <td>
            <b-link class="icon-btn" @click="handleDelete('zylim')">
              <i class="ri-delete-bin-line align-bottom text-danger"></i>
            </b-link>
          </td>
        </tr>
        <tr>
            <td>2</td>
          <td>
            <label class="form-check-label">hock</label>
          </td>
          <td>
            <label class="form-check-label">Ng Pooi Hock</label>
          </td>
          <td>
            <b-link class="icon-btn" @click="handleDelete('abdussalam')">
              <i class="ri-delete-bin-line align-bottom text-danger"></i>
            </b-link>
          </td>
        </tr>
        <tr>
            <td>3</td>
          <td>
            <div class="dropdown-container" @click="toggleDropdown">
              <input
                type="text"
                class="dropdown-input"
                placeholder="Select or search..."
                v-model="searchQuery"
                @input="filterDropdown"
              />
              <div v-if="showDropdown" class="dropdown-menu">
                <div
                  v-for="option in filteredOptions"
                  :key="option.value"
                  class="dropdown-item"
                  @click="selectOption(option)"
                >
                  {{ option.text }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <label class="form-check-label"></label>
          </td>
          <td>
           
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</BCol>


                </BRow>
                <div class="hstack gap-2 justify-content-end mt-3">
                <BButton type="button" variant="light" id="closemodal" @click="inviteUser = false">Close</BButton>
                <BButton type="button" variant="success" id="add-btn" @click="handleSubmit">
            Submit
          </BButton>
        </div>
      </b-form>
    </BModal>

    <BModal v-model="fileModal" hide-footer title="Edit Project"
      header-class="bg-primary-subtle p-3" class="v-modal-custom" centered size="lg"
      >
      <b-form action="#" class="tablelist-form">
                <BRow class="g-3">
                    <BCol lg="6">
                        <label for="name" class="form-label">Code</label>
                        <input type="text" class="form-control" id="boardName" value="AR496" placeholder="Enter code">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="username" class="form-label">Name</label>
                        <input type="text" class="form-control" id="boardName" value="AR496" placeholder="Enter name">
                    </BCol>
                    <BCol lg="12"> 
                        <label for="paswword" class="form-label">Description</label>
                        <input type="text" class="form-control" id="boardName" value="Sample Description for Project AR496" placeholder="Enter description">
                    </BCol>
                    <BCol lg="6">     
                        <label for="email" class="form-label">Contract Value</label>
                        <input type="email" class="form-control" id="boardName" placeholder="Enter contract value">
                    </BCol>
                    <BCol lg="6">     
                        <label for="staffcode" class="form-label">DIP Period</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter dip period">
                    </BCol>
                    <BCol lg="6">     
                        <label for="accesslevel" class="form-label">Actual Start Date</label>
                        <input
    type="date"
    class="form-control"
    id="search-date"
    placeholder="Select Date"
  />
                    </BCol>
                    <BCol lg="6"> 
                        <label for="mobileaccess">Actual End Date</label>
                        <input
    type="date"
    class="form-control"
    id="search-date"
    placeholder="Select Date"
  />
                    </BCol>
                    <div class="modal-footer v-modal-footer">
                        <div class="hstack gap-2 justify-content-end">
                            <BButton type="button" variant="light" @click="modaltoAdd = false">Cancel</BButton>
                            <BButton type="submit" variant="success" id="addNewBoard">Apply</BButton>
                        </div>
                    </div>
                </BRow>
            </b-form>
    </BModal>
    </Layout>
</template>

<style>
.multiselect__tag{
    color: white !important;
    display: none !important;
}

.hori-sitemap {
    overflow-x: auto;
    padding: 15px;
}

.hori-sitemap ul {
    white-space: nowrap;
}

.small-text {
    font-size: 0.8rem; /* Adjust size as needed */
    font-weight: normal; /* Ensure it's not bold */
}



.team-card-header {
  padding: 1rem;
  position: relative;
}
.card-body-scroll {
  max-height: 400px; /* Adjust this value as needed */
  overflow-y: auto;
}
.member-list {
  list-style-type: none;
  padding: 0;
}
.member-list li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.avatar-sm {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}
.member-info {
  flex-grow: 1;
  margin-left: 1rem;
}
.icon-btn {
  font-size: 1rem;
  color: #6c757d;
}
</style>