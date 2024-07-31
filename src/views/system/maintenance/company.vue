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
                this.modalTitle = 'Edit Company';
            } else {
                this.modalTitle = 'Add Company';
            }
            this.modaltoAdd = true;
        }
    },
    
};
</script>


<template>
    <Layout>
        <PageHeader title="Company Management" subTitle="Maintenance List" pageTitle="System" />
        <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
            <div class="listjs-table" id="customerList">
                <div class="row g-4 mb-3">
                    <div class="col-sm-auto">
                        <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="showModal(false)" style="margin-right: 10px;">
                            <i class="ri-add-line align-bottom me-1"></i> Add Company
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
                                <th class="sort" data-sort="regNo">Reg. No.</th>
                                <th>Address</th>
                                <th>Prefix</th>
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
                                <td class="code"></td>
                                <td class="name">KL GEOTECHNICS SDN BHD</td>
                                <td>941771-P</td>
                                <td class="password">ZP-03-08, ZEST POINT, LEBUHRAYA BUKIT JALIL, BK9,
                                    <br> BANDAR KINRARA, 47180 PUCHONG, SELANGOR DARUL EHSAN</td>
                                <td class="mobileaccess">Yes</td>
                                <td>
                                    <div class="d-flex gap-2">
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
                        <label for="paswword" class="form-label">Registration No</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter reg no">
                    </BCol>
                    <BCol lg="6">     
                        <label for="email" class="form-label">Address 1</label>
                        <input type="email" class="form-control" id="boardName" placeholder="Enter address 1">
                    </BCol>
                    <BCol lg="6">     
                        <label for="staffcode" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter address 2">
                    </BCol>
                    <BCol lg="6">     
                        <label for="accesslevel" class="form-label">Address 3</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter address 3">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="mobileaccess">Postcode</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter postcode">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="qawardaccess">City</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter city">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="qawardaccess">State</label>
                        <input type="text" class="form-control" id="boardName" placeholder="Enter state">
                    </BCol>
                    <BCol lg="6"> 
                        <label for="qawardaccess">Country</label>
                        <select class="form-select">
                            <option value="Yes">Malaysia</option>
                            <option value="No">Cina</option>
                        </select>
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