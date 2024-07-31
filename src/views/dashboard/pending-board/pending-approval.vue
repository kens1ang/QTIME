<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Pending Approval",
            breadcrumbs: [
                { name: 'Dashboard', link: '/' },
                { name: 'Pending Board', link: '/' },
                { name: 'Pending Approval', link: '/' },
            ],
            currentTab: 'attendance', // Initialize the default tab
        }
    },
    components: {
        Layout,
        PageHeader
    },
    methods: {
        setTab(tab) {
            this.currentTab = tab;
        }
    }
};
</script>

<template>
    <Layout>
        <PageHeader title="Pending Approval" subTitle="Dashboard" pageTitle="Pending Board"/>

        <ul class="nav nav-tabs nav-tabs-custom nav-primary mb-3" role="tablist">
            <li class="nav-item">
                <a class="nav-link All py-3" :class="{ active: currentTab === 'attendance' }" @click.prevent="setTab('attendance')" href="#">
                    Attendance
                    <span class="badge bg-danger-subtle text-danger">1</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link py-3" :class="{ active: currentTab === 'workOrder' }" @click.prevent="setTab('workOrder')" href="#">
                    Work Order
                    <span class="badge bg-danger-subtle text-danger">1</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link py-3" :class="{ active: currentTab === 'registration' }" @click.prevent="setTab('registration')" href="#">
                    Registration
                    <span class="badge bg-danger-subtle text-danger">1</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link py-3" :class="{ active: currentTab === 'resignation' }" @click.prevent="setTab('resignation')" href="#">
                    Resignation
                </a>
            </li>
        </ul>

        <!-- Attendance -->
        <div v-if="currentTab === 'attendance'" class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
            <div class="listjs-table" id="customerList">
                <div class="row g-4 mb-3">
                    <div class="col-sm">
                        <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                                <input type="text" class="form-control search" placeholder="Search...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                    <table class="table align-middle table-nowrap" id="customerTable">
                        <thead class="table-light">
                            <tr>
                                <th>Site</th>
                                <th>Period</th>
                                <th class="sort">MM YY</th>
                                <th>Expired</th>
                                <th class="sort">Total</th>
                            </tr>
                        </thead>
                        <tbody class="list form-check-all">
                            <tr>
                                <td>SCPT1A-Parcel2(308U)</td>
                                <td>1 - 15</td>
                                <td>04 2022</td>
                                <td>2020-07-24</td>
                                <td>RM 56,055.35</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="noresult" style="display: none">
                        <div class="text-center">
                            <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <div class="pagination-wrap hstack gap-2">
                        <a class="page-item pagination-prev disabled" href="javascript:void(0);">
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

        <!-- Work Order -->
        <div v-if="currentTab === 'workOrder'" class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
            <div class="listjs-table" id="customerList">
                <div class="row g-4 mb-3">
                    <div class="col-sm">
                        <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                                <input type="text" class="form-control search" placeholder="Search...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                    <table class="table align-middle table-nowrap" id="customerTable">
                        <thead class="table-light">
                            <tr>
                                <th>Project</th>
                                <th>WO No.</th>
                                <th>Subcon</th>
                                <th>Category</th>
                                <th>Element</th>
                                <th>Sub Element</th>
                                <th>Sub Sub Element</th>
                                <th>Trade Name</th>
                                <th>Loc 1</th>
                                <th>Remark</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody class="list form-check-all">
                            <tr>
                                <td>PG OFFICE</td>
                                <td>KSK/PG OFFICE/011</td>
                                <td>test sdhonf sdn bhd</td>
                                <td>LABOUR</td>
                                <td>EXT ARCHI</td>
                                <td>DEFECT WORKS (DLP)</td>
                                <td>ACCESS ROAD</td>
                                <td>ABANDONED WORK</td>
                                <td>Dummy Loc1</td>
                                <td>-</td>
                                <td><span class="badge bg-warning-subtle text-warning">pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="noresult" style="display: none">
                        <div class="text-center">
                            <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <div class="pagination-wrap hstack gap-2">
                        <a class="page-item pagination-prev disabled" href="javascript:void(0);">
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

        <!-- Registration -->
        <div v-if="currentTab === 'registration'" class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
            <div class="listjs-table" id="customerList">
                <div class="row g-4 mb-3">
                    <div class="col-sm">
                        <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                                <input type="text" class="form-control search" placeholder="Search...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                    <table class="table align-middle table-nowrap" id="customerTable">
                        <thead class="table-light">
                            <tr>
                                <th>Date Requested</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Passport No.</th>
                                <th>AA Permit</th>
                                <th>Rate</th>
                                <th>Status</th>
                                <th>Incharge</th>
                                <th>Requested By</th>
                                <th>Approver Status</th>
                            </tr>
                        </thead>
                        <tbody class="list form-check-all">
                            <tr>
                                <td>2024-07-17</td>
                                <td>TESTER</td>
                                <td>PGTEST2</td>
                                <td>A00000000</td>
                                <td>Non AA</td>
                                <td>10</td>
                                <td><span class="badge bg-warning-subtle text-warning">pending</span></td>
                                <td>liwin</td>
                                <td>liwin</td>
                                <td>
                                    <span style="margin-right: 3px" class="badge bg-warning-subtle text-warning">liwin</span>
                                    <span style="margin-right: 1px" class="badge bg-warning-subtle text-warning">demoacc</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="noresult" style="display: none">
                        <div class="text-center">
                            <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <div class="pagination-wrap hstack gap-2">
                        <a class="page-item pagination-prev disabled" href="javascript:void(0);">
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

        <!-- Resignation -->
        <div v-if="currentTab === 'resignation'" class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
            <div class="listjs-table" id="customerList">
                <div class="row g-4 mb-3">
                    <div class="col-sm">
                        <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                                <input type="text" class="form-control search" placeholder="Search...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                    <table class="table align-middle table-nowrap" id="customerTable">
                        <thead class="table-light">
                            <tr>
                                <th>Date Requested</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>AA Permit</th>
                                <th>Status</th>
                                <th>Requested By</th>
                            </tr>
                        </thead>
                        <tbody class="list form-check-all">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="noresult" style="display: none">
                        <div class="text-center">
                            <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon>
                            <h5 class="mt-2">Sorry! No Result Found</h5>
                            <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <div class="pagination-wrap hstack gap-2">
                        <a class="page-item pagination-prev disabled" href="javascript:void(0);">
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

    </Layout>
</template>
