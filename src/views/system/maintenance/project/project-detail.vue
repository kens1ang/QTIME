<script>
import Layout from "@/layouts/main.vue";
import Multiselect from 'vue-multiselect';
import "@vueform/multiselect/themes/default.css";
import { reactive } from 'vue';

export default {
    data() {
        return {
            value: null,
            inviteUser: false,
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
            selectedProjectManager: '',
            selectedProjectMembers: [],
            selectedMembers: [],
            member: [],
        };
    },
    computed: {
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
                                                <h4 class="fw-bold">Project : AR496</h4>
                                                <div class="hstack gap-3 flex-wrap">
                                                    <div><i class="ri-building-line align-bottom me-1"></i> ALUNAS ASAS SDN BHD
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div>Contract End Date : <span class="fw-medium">29 Dec, 2024</span></div>
                                                    <div class="vr"></div>
                                                    <BBadge pill class="bg-primary fs-12">Progress</BBadge>
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
                                            <h6 class="mb-3 fw-semibold text-uppercase">Description</h6>
                                            <p>It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>

                                            <ul class="ps-4 vstack gap-2">
                                                <li>Project Name :</li>
                                                <li>Contract Value : </li>
                                                <li>Prefix : </li>
                                            </ul>

                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                <BRow gy-3>
                                                    <BCol lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Contract Start Date :</p>
                                                            <h5 class="fs-15 mb-0">15 Sep, 2021</h5>
                                                        </div>
                                                    </BCol>
                                                    <BCol lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Contract End Date :</p>
                                                            <h5 class="fs-15 mb-0">29 Dec, 2024</h5>
                                                        </div>
                                                    </BCol>
                                                    <BCol lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Status :</p>
                                                            <BBadge tag="div" class="bg-primary fs-12">Inprogress</BBadge>
                                                        </div>
                                                    </BCol>
                                                </BRow>
                                            </div>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol xl="12" lg="12">
    <BCard no-body>
        <BCardHeader class="card-header bg-dark-subtle">
            <BCardTitle class="mb-0">Organization Chat (Member)</BCardTitle>
        </BCardHeader>
        <BCardBody>
            <div class="hori-sitemap">
                <!-- Organization Chart -->
                <ul class="list-unstyled mb-0">
                    <li class="p-0 parent-title">
                        <BLink href="javascript: void(0);" class="fw-semibold">Project Director <br>(Loh Beng Ping)</BLink>
                    </li>
                </ul>
                <!-- Project Manager and Contract Manager Row -->
                <ul class="list-unstyled row g-0 mb-0" >
                    <!-- Project Manager Column -->
                    <li class="col-sm-6">
                        <BLink href="javascript: void(0);" class="fw-semibold">Project Manager <br>(Ang Li Win)</BLink>
                        <ul class="list-unstyled second-list pt-0">
                            <li>
                                <div>
                                    <BLink href="javascript: void(0);">Assistant Project Manager</BLink>
                                </div>
                                <ul class="list-unstyled row g-0 mb-0 justify-content-center" style="width: 120%">
                    <li class="col-sm-2 text-center">
                        <BLink href="javascript: void(0);" class="fw-semibold">Construction <br>Supervisor</BLink>
                    </li>
                    <li class="col-sm-2 text-center">
                        <BLink href="javascript: void(0);" class="fw-semibold">Site Person <br> Incharge</BLink>
                    </li>
                    <li class="col-sm-2 text-center">
                        <BLink href="javascript: void(0);" class="fw-semibold">Safety</BLink>
                    </li>
                    <li class="col-sm-2 text-center">
                        <BLink href="javascript: void(0);" class="fw-semibold">QA/QC <br> Person Incharge</BLink>
                    </li>
                    <li class="col-sm-2 text-center">
                        <BLink href="javascript: void(0);" class="fw-semibold">Land</BLink>
                    </li>
                    <li class="col-sm-2 text-center">
                        <BLink href="javascript: void(0);" class="fw-semibold">M&E</BLink>
                    </li>
                </ul>
                            </li>
                        </ul>
                    </li>
                    <!-- Contract Manager Column -->
                    <li class="col-sm-6">
                        <BLink href="javascript: void(0);" class="fw-semibold">Contract Manager <br>(CHIN KHOI HOE)</BLink>
                        <ul class="list-unstyled second-list pt-0">
                            <li>
                                <div>
                                    <BLink href="javascript: void(0);">QS Manager <br>(Ng Pooi Hock)</BLink>
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
                                    <option value="Merchandising">Project Manager</option>
                                    <option value="Manufacturing">Project Director</option>
                                    <option value="Partnership">Contract Manager</option>
                                    <option value="Corporation">Member</option>
                                    </select>
                                </div>
                            </BCol>
                            <BCol lg="auto">
                                <div class="hstack gap-2">
                                <BButton type="button" variant="primary" @click="toggleModal"><i class="ri-share-line me-1 align-bottom"></i>
                                    Add Member</BButton>
                                </div>
                            </BCol>
                        </BRow>

                        <div class="team-list list-view-filter">
                            <BCard no-body class="team-box">
                                <BCardBody class="px-4" style="position: relative;">
                                    <BRow class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <BRow class="align-items-center">
                                                <BCol class="d-flex justify-content-start">
                                                <BButton class="btn btn-soft-info me-2" @click="editAction">
                                                    <i class="ri-edit-2-line"></i> Edit
                                                </BButton>
                                                <BButton class="btn btn-soft-danger" @click="deleteAlert">
                                                    <i class="ri-delete-bin-2-line"></i> Delete
                                                </BButton>
                                                </BCol>
                                            </BRow>
                                        </div>
                                        <BCol lg="4" sm="4" cols>
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        YZ
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <BLink href="#" class="d-block">
                                                        <h5 class="fs-16 mb-1">Teoh Yin Zheng</h5>
                                                    </BLink>
                                                    <p class="text-muted mb-0">Project Manager</p>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="team-box">
                                <BCardBody class="px-4">
                                    <BRow class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <BRow class="align-items-center">
                                                <BCol class="d-flex justify-content-start">
                                                <BButton class="btn btn-soft-info me-2" @click="editAction">
                                                    <i class="ri-edit-2-line"></i> Edit
                                                </BButton>
                                                <BButton class="btn btn-soft-danger" @click="deleteAlert">
                                                    <i class="ri-delete-bin-2-line"></i> Delete
                                                </BButton>
                                                </BCol>
                                            </BRow>
                                        </div>
                                        <BCol lg="4" sm="4" cols>
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        LW
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <BLink href="#" class="d-block">
                                                        <h5 class="fs-16 mb-1">Ang Li Win</h5>
                                                    </BLink>
                                                    <p class="text-muted mb-0">Project Manager</p>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="team-box">
                                <BCardBody class="px-4">
                                    <BRow class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <BRow class="align-items-center">
                                                <BCol class="d-flex justify-content-start">
                                                <BButton class="btn btn-soft-info me-2" @click="editAction">
                                                    <i class="ri-edit-2-line"></i> Edit
                                                </BButton>
                                                <BButton class="btn btn-soft-danger" @click="deleteAlert">
                                                    <i class="ri-delete-bin-2-line"></i> Delete
                                                </BButton>
                                                </BCol>
                                            </BRow>
                                        </div>
                                        <BCol lg="4" sm="4" cols>
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        OL
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <BLink href="#" class="d-block">
                                                        <h5 class="fs-16 mb-1">Olivia lim</h5>
                                                    </BLink>
                                                    <p class="text-muted mb-0">Member</p>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="team-box">
                                <BCardBody class="px-4">
                                    <BRow class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <BRow class="align-items-center">
                                                <BCol class="d-flex justify-content-start">
                                                <BButton class="btn btn-soft-info me-2" @click="editAction">
                                                    <i class="ri-edit-2-line"></i> Edit
                                                </BButton>
                                                <BButton class="btn btn-soft-danger" @click="deleteAlert">
                                                    <i class="ri-delete-bin-2-line"></i> Delete
                                                </BButton>
                                                </BCol>
                                            </BRow>
                                        </div>
                                        <BCol lg="4" sm="4" cols>
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        BP
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <BLink href="#" class="d-block">
                                                        <h5 class="fs-16 mb-1">Loh Beng Ping</h5>
                                                    </BLink>
                                                    <p class="text-muted mb-0">Project Director</p>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="team-box">
                                <BCardBody class="px-4">
                                    <BRow class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <BRow class="align-items-center">
                                                <BCol class="d-flex justify-content-start">
                                                <BButton class="btn btn-soft-info me-2" @click="editAction">
                                                    <i class="ri-edit-2-line"></i> Edit
                                                </BButton>
                                                <BButton class="btn btn-soft-danger" @click="deleteAlert">
                                                    <i class="ri-delete-bin-2-line"></i> Delete
                                                </BButton>
                                                </BCol>
                                            </BRow>
                                        </div>
                                        <BCol lg="4" sm="4" cols>
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        KX
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <BLink href="#" class="d-block">
                                                        <h5 class="fs-16 mb-1">Keng Xiang</h5>
                                                    </BLink>
                                                    <p class="text-muted mb-0">Member</p>
                                                </div>
                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                            </BCard>
                        </div>

                        <BRow class="g-0 text-center text-sm-start align-items-center mb-3">
                            <BCol sm="6">
                                <div>
                                    <p class="mb-sm-0">Showing 1 to 5 of 10 entries</p>
                                </div>
                            </BCol>
                            <BCol sm="6">
                                <ul
                                    class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                    <li class="page-item disabled">
                                        <BLink href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></BLink>
                                    </li>
                                    <li class="page-item">
                                        <BLink href="#" class="page-link">1</BLink>
                                    </li>
                                    <li class="page-item active">
                                        <BLink href="#" class="page-link">2</BLink>
                                    </li>
                                    <li class="page-item">
                                        <BLink href="#" class="page-link">3</BLink>
                                    </li>
                                    <li class="page-item">
                                        <BLink href="#" class="page-link">4</BLink>
                                    </li>
                                    <li class="page-item">
                                        <BLink href="#" class="page-link">5</BLink>
                                    </li>
                                    <li class="page-item">
                                        <BLink href="#" class="page-link"><i class="mdi mdi-chevron-right"></i>
                                        </BLink>
                                    </li>
                                </ul>
                            </BCol>
                        </BRow>
                    </BTab>

                    <BTab title="Attendance Approval" class="fw-semibold pt-2">
                        <br>
                        <BRow class="g-3">
                            <BCol md="auto" class="ms-auto">
                                <div class="d-flex hastck gap-2 flex-wrap">
                                    <BButton variant="primary" @click="modalShow = !modalShow">
                                        <i class="ri-add-fill align-bottom me-1"></i>
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
                                        <h5 class="card-title text-uppercase fw-semibold mb-0 fs-15">KSK Attendance Approval Email List</h5>
                                        <BButton class="btn btn-soft-danger" @click="editAction">
                                            <i class="ri-edit-2-line"></i>
                                        </BButton>
                                        <BButton :class="['btn btn-soft-danger', { 'collapsed': kskcollapsedRows['row1'] }]" @click="ksktoggleRow('row1')">
                                            <i style="font-size: 20px;" :class="kskcollapsedRows['row1'] ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
                                        </BButton>
                                        </div>
                                    </BLink>
                                    <BCard no-body  v-show="kskcollapsedRows['row1']" class="collapseRow">
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.leadDiscovered1>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        TK
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">David Ong Tai Kheng</h6>
                                                    <p class="text-muted mb-0">( Member )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                                    <h6 class="fs-14 mb-1">TAN MAN TING</h6>
                                                    <p class="text-muted mb-0">( Member )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                                    <h6 class="fs-14 mb-1">CHIN KHOI HOE</h6>
                                                    <p class="text-muted mb-0">( Contract Manager )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                                    <h6 class="fs-14 mb-1">Loh Beng Ping</h6>
                                                    <p class="text-muted mb-0">( Project Director )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                        <h5 class="card-title text-uppercase fw-semibold mb-0 fs-14">Subcon as KSK Attendance Approval Email List</h5>
                                        <BButton class="btn btn-soft-success" @click="editAction">
                                            <i class="ri-edit-2-line"></i>
                                        </BButton>
                                        <BButton :class="['btn btn-soft-success', { 'collapsed': collapsedRows['row1'] }]" @click="toggleRow('row1')">
                                            <i style="font-size: 20px;" :class="collapsedRows['row1'] ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
                                        </BButton>
                                        </div>
                                    </BLink>
                                    <BCard no-body v-show="collapsedRows['row1']" class="collapseRow">
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.leadDiscovered1>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        TK
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">David Ong Tai Kheng</h6>
                                                    <p class="text-muted mb-0">( Project Manager )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
                                                </div>
                                            </BLink>
                                        </BCardBody>
                                        <BCardBody>
                                            <BLink class="d-flex align-items-center" role="button" v-b-toggle.contactInitiated3>
                                                <div class="avatar-sm img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        BP
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="fs-14 mb-1">Loh Beng Ping</h6>
                                                    <p class="text-muted mb-0">( Project Director )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                                    <h6 class="fs-14 mb-1">Loh Jooi Kheng</h6>
                                                    <p class="text-muted mb-0">( Member )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                                    <h6 class="fs-14 mb-1">TAN LAY MIN</h6>
                                                    <p class="text-muted mb-0">( QS Manager )</p>
                                                    <BBadge tag="small" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        1 Days</BBadge>
                                                    <BBadge tag="small" style="margin-left: 10px;" variant="danger-subtle" class="bg-danger-subtle text-danger">
                                                        <i class="ri-delete-bin-2-line"></i> Delete</BBadge>
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
                                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Staff Attendance Approval Email List</h5>
                                        <BButton class="btn btn-soft-warning" @click="editAction">
                                            <i class="ri-edit-2-line"></i>
                                        </BButton>
                                        <BButton :class="['btn btn-soft-warning', { 'collapsed': kskcollapsedRows['row2'] }]" @click="ksktoggleRow('row2')">
                                            <i style="font-size: 20px;" :class="kskcollapsedRows['row2'] ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
                                        </BButton>
                                        </div>
                                    </BLink>
                                </BCard>
                            </BCol>

                            <BCol>
                                <BCard no-body>
                                    <BLink class="card-header bg-info-subtle" role="button" v-b-toggle.meetingArranged>
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">KSK Registration Approval Email List</h5>
                                        <BButton class="btn btn-soft-info" @click="editAction">
                                            <i class="ri-edit-2-line"></i>
                                        </BButton>
                                        <BButton :class="['btn btn-soft-info', { 'collapsed': kskcollapsedRows['row2'] }]" @click="ksktoggleRow('row2')">
                                            <i style="font-size: 20px;" :class="kskcollapsedRows['row2'] ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
                                        </BButton>
                                        </div>
                                    </BLink>
                                </BCard>
                            </BCol>
                        </BRow>
                    </BTab>
                </BTabs>
            </BCol>
        </BRow>

        <BModal v-model="modalShow" body-class="" header-class="bg-light p-3" hide-footer title="Add Attendance Approval Email List" class="v-modal-custom" centered>
            <b-form class="needs-validation" novalidate id="deals-form" onsubmit="return false">
                <div class="mb-3">
                    <label for="deatType" class="form-label">Approval Email Type</label>
                    <select class="form-select" id="deatType" data-choices aria-label="Default select example" required>
                        <option value="" data-custom-properties="[object Object]">Select deals type</option>
                        <option value="Lead Disovered">KSK ATTENDANCE APPROVAL EMAIL LIST</option>
                        <option value="Contact Initiated">SUBCON AS KSK ATTENDANCE APPROVAL EMAIL LIST</option>
                        <option value="Need Identified">STAFF ATTENDANCE APPROVAL EMAIL LIST</option>
                        <option value="Offer Accepted">KSK REGISTRATION APPROVAL EMAIL LIST</option>
                    </select>
                </div><br><br>
                <div class="mb-3">
                    <label for="selected-members" class="form-label">Selected:</label>
                <div class="selected-members">
                    <span v-for="(member, index) in member" :key="index" class="badge bg-primary me-1">
                    {{ member.text }}
                    </span>
                </div>
                </div>
                <div class="mb-3">
                <label for="additional-members" class="form-label">Search and Select Members</label>
                <multiselect style="display: block !important;min-height: 30px !important"
                    v-model="member"
                    :options="filteredmember"
                    :multiple="true"
                    label="text"
                >
                    </multiselect>
                </div>
                <div class="modal-footer v-modal-footer">
                    <BButton type="button" variant="light" id="close-modal" @click="modalShow = false"> Close </BButton>
                    <BButton type="submit" variant="success"><i class="ri-save-line align-bottom me-1"></i> Save </BButton>
                </div>
            </b-form>
        </BModal>

        <BModal v-model="inviteUser" id="showmodal" hide-footer title-class="exampleModalLabel"
            header-class="bg-primary-subtle p-3" class="v-modal-custom" centered size="lg" title="Add Member">
      
            <b-form id="addform" class="tablelist-form" autocomplete="off">
                <BRow class="g-3">
                <BCol lg="12">
                    <div>
                    <label for="project-manager" class="form-label">Roles</label>
                    <BFormSelect v-model="selectedProjectManager" :options="projectRoles" :multiple="false" class="mb-3">
                    </BFormSelect>
                    </div>
                </BCol>
            
                <BCol lg="12" class="mb-3">
                <!-- Display selected members -->
                <label for="selected-members" class="form-label">Selected:</label>
                <div class="selected-members">
                    <span v-for="(member, index) in selectedMembers" :key="index" class="badge bg-primary me-1">
                    {{ member.text }}
                    </span>
                </div>
                </BCol>

                <BCol lg="12">
                <label for="additional-members" class="form-label">Search and Select Members</label>
                <multiselect style="display: block !important;min-height: 30px !important"
                    v-model="selectedMembers"
                    :options="filteredUsers"
                    :multiple="true"
                    label="text"
                >
                    </multiselect>
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


</style>