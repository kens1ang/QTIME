<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";

export default {
    data () {
        return {
            modaltoAdd: false,
            modalTitle: 'Add Company', 
        }
    },
    components: {
        Layout,
        PageHeader
    },
    methods: {
        deleteAlert() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        showModal(isEdit) {
            if (isEdit) {
                this.modalTitle = 'Edit Project';
            } else {
                this.modalTitle = 'Add Project';
            }
            this.modaltoAdd = true;
        }
    },
    
};
</script>


<template>
    <Layout>
        <PageHeader title="Project Management"  pageTitle="System" />
        <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
            <div class="listjs-table" id="customerList">
                <div class="row g-4 mb-3">
                    <div class="col-sm-auto">
                        <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="showModal(false)" style="margin-right: 10px;">
                            <i class="ri-add-line align-bottom me-1"></i> Add Project
                        </button>
                        <button class="btn btn-soft-danger" @click="deleteAlert">
                            <i class="ri-delete-bin-2-line"></i>
                        </button>
                    </div>
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
                                <th scope="col" style="width: 50px;">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="checkAll" value="option">
                                    </div>
                                </th>
                                <th class="sort" data-sort="code">Code</th>
                                <th class="sort" data-sort="name">Name</th>
                                <th class="sort" data-sort="regNo">Contract Value</th>
                                <th class="sort" data-sort="regNo">Dip Period</th>
                                <th>Actual Start Date</th>
                                <th>Actual End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="list form-check-all">
                            <tr>
                                <th scope="row">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                    </div>
                                </th>
                                <td class="id" style="display:none;">
                                    <a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>
                                </td>
                                <td class="code">AR496</td>
                                <td class="name">AR496</td>
                                <td></td>
                                <td class="">2</td>
                                <td class="mobileaccess">30-7-2024</td>
                                <td>1-8-2024</td>
                                <td>
                                    <div class="d-flex gap-2">
                                        <div class="view">
                                            <router-link to="/system/project-detail">
                                            <button class="btn btn-sm btn-info view-item-btn" >View</button>
                                            </router-link>
                                        </div>
                                        <div class="edit">
                                            <button class="btn btn-sm btn-success edit-item-btn" @click="showModal(true)">Edit</button>
                                        </div>
                                        <div class="remove">
                                            <button class="btn btn-sm btn-danger remove-item-btn" @click="deleteAlert">Remove</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                    </div>
                                </th>
                                <td class="id" style="display:none;">
                                    <a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>
                                </td>
                                <td class="code">BG17-R1</td>
                                <td class="name">BG17-R1</td>
                                <td></td>
                                <td class="">2</td>
                                <td class="mobileaccess">30-7-2024</td>
                                <td>1-8-2024</td>
                                <td>
                                    <div class="d-flex gap-2">
                                        <div class="view">
                                            <router-link to="/system/project-detail">
                                            <button class="btn btn-sm btn-info view-item-btn" >View</button>
                                            </router-link>
                                        </div>
                                        <div class="edit">
                                            <button class="btn btn-sm btn-success edit-item-btn" @click="showModal(true)">Edit</button>
                                        </div>
                                        <div class="remove">
                                            <button class="btn btn-sm btn-danger remove-item-btn" @click="deleteAlert">Remove</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                    </div>
                                </th>
                                <td class="id" style="display:none;">
                                    <a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>
                                </td>
                                <td class="code">BKT22F</td>
                                <td class="name">BKT22F</td>
                                <td></td>
                                <td class="">2</td>
                                <td class="mobileaccess">30-7-2024</td>
                                <td>1-08-2024</td>
                                <td>
                                    <div class="d-flex gap-2">
                                        <div class="view">
                                            <router-link to="/system/project-detail">
                                            <button class="btn btn-sm btn-info view-item-btn" >View</button>
                                            </router-link>
                                        </div>
                                        <div class="edit">
                                            <button class="btn btn-sm btn-success edit-item-btn" @click="showModal(true)">Edit</button>
                                        </div>
                                        <div class="remove">
                                            <button class="btn btn-sm btn-danger remove-item-btn" @click="deleteAlert">Remove</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                    </div>
                                </th>
                                <td class="id" style="display:none;">
                                    <a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>
                                </td>
                                <td class="code">BJO-B3B4</td>
                                <td class="name">BJO-B3B4</td>
                                <td></td>
                                <td class="">2</td>
                                                                <td>1-8-2024</td>
                                                                <td>1-08-2024</td>
                                <td>
                                    <div class="d-flex gap-2">
                                        <div class="view">
                                            <router-link to="/system/project-detail">
                                            <button class="btn btn-sm btn-info view-item-btn" >View</button>
                                            </router-link>
                                        </div>
                                        <div class="edit">
                                            <button class="btn btn-sm btn-success edit-item-btn" @click="showModal(true)">Edit</button>
                                        </div>
                                        <div class="remove">
                                            <button class="btn btn-sm btn-danger remove-item-btn" @click="deleteAlert">Remove</button>
                                        </div>
                                    </div>
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

        <BModal v-model="modaltoAdd" modal-class="zoomIn" :title="modalTitle" title-class="exampleModalLabel" header-class="p-3 bg-primary-subtle" content-class="border-0" hide-footer
            class="v-modal-custom" centered no-close-on-backdrop no-fade size="lg">
            <b-form action="#" class="tablelist-form">
                <BRow class="g-3">
                    <BCol lg="6">
                        <label for="name" class="form-label">Code</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter code">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="username" class="form-label">Name</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter name">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="paswword" class="form-label">Description</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter description">
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
                    <BCol lg="6"> 
                        <label for="qawardaccess">Prefix</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter prefix">
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