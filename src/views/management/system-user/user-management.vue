<script>
import Index from '../sharedIndex.vue';
import breadcrumbs from '@/components/breadcrumbs.vue';
import Swal from "sweetalert2";

export default {
    data () {
        return {
            title: 'User Management',
            breadcrumbs: [
                { name: 'Management', link: '/project/index' },
                { name: 'System User', link: '/system-user/user-management' },
                { name: 'User Management', link: '/system-user/user-management' }
            ],
            modaltoAdd: false,
            modalTitle: 'Add User', 
        }
    },
    components: {
        Index,
        breadcrumbs,
    },
    methods: {
        deleteAlert() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                confirmButtonText: "Yes, delete it!",
                cancelButtonColor: "#f46a6a",
                customClass: {
                    confirmButton: 'order-confirm-button',
                    cancelButton: 'order-cancel-button'
                }
            }).then((result) => {
                if (result.value) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        showModal(isEdit) {
            if (isEdit) {
                this.modalTitle = 'Edit User';
            } else {
                this.modalTitle = 'Add User';
            }
            this.modaltoAdd = true;
        }
    }
};
</script>

<template>
    <Index>
        <template v-slot:content>

            <div class="d-sm-flex align-items-center justify-content-between">
                <h1 style="font-size: 25px; margin-top: 5px">{{ title }}</h1>
                <breadcrumbs :pages="breadcrumbs" />
            </div>

            <!-- Filter -->
            <!-- <BRow class="mt-3">
                <BCol xl="2" lg="2" md="2">
                    <div>
                        <label for="placeholderInput" class="form-label">Name</label>
                        <input type="text" class="form-control" id="placeholderInput"
                            placeholder="Type name">
                    </div>
                </BCol>

                <BCol xl="2" lg="2" md="2">
                    <div>
                        <label for="placeholderInput" class="form-label">Username</label>
                        <input type="text" class="form-control" id="placeholderInput"
                            placeholder="Type username">
                    </div>
                </BCol>

                <BCol xl="2" lg="2" md="2">
                    <div>
                        <label for="iconrightInput" class="form-label">Email</label>
                        <div class="form-icon right">
                            <input type="email" class="form-control form-control-icon"
                                id="iconrightInput" placeholder="example@gmail.com">
                            <i class="ri-mail-unread-line"></i>
                        </div>
                    </div>
                </BCol>

                <BCol xl="2" lg="2" md="2">
                    <div>
                        <label for="placeholderInput" class="form-label">Staffcode</label>
                        <input type="text" class="form-control" id="placeholderInput"
                            placeholder="Type code">
                    </div>
                </BCol>

                <BCol xl="2" lg="2" md="2">
                <label for="placeholderInput" class="form-label">Access Level</label>
                  <BFormSelect v-model="exManualSelected" class="mb-3" aria-label="Default select example">
                    <BFormSelectOption value="1">Site</BFormSelectOption>
                    <BFormSelectOption value="2">PM</BFormSelectOption>
                    <BFormSelectOption value="3">PD</BFormSelectOption>
                    <BFormSelectOption value="3">Admin</BFormSelectOption>
                    <BFormSelectOption value="3">AC</BFormSelectOption>
                    <BFormSelectOption value="3">QS</BFormSelectOption>
                    <BFormSelectOption value="3">SSA</BFormSelectOption>
                    <BFormSelectOption value="3">SA</BFormSelectOption>
                    <BFormSelectOption value="3">CM</BFormSelectOption>
                    <BFormSelectOption value="3">PURC</BFormSelectOption>
                    <BFormSelectOption value="3">VIEW</BFormSelectOption>
                    <BFormSelectOption value="3">APM</BFormSelectOption>
                    <BFormSelectOption value="3">QC</BFormSelectOption>
                  </BFormSelect> 
                </BCol>

                <BCol xl="1" lg="1" md="1">
                    <label class="btnlabel">Search</label>
                    <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" style="margin-left: 10px;">Search</button>
                </BCol>

                <BCol xl="1" lg="1" md="1">
                    <label class="btnlabel">Reset</label>
                    <button type="button" class="btn btn-outline-success waves-effect waves-light material-shadow-none" style="margin-left: 10px;">Reset</button>
                </BCol> 

            </BRow> -->

            <!-- Table -->
            <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
                <div class="listjs-table" id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="showModal(false)" style="margin-right: 10px;">
                                <i class="ri-add-line align-bottom me-1"></i> Add User
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
                                    <th class="sort" data-sort="name">Name</th>
                                    <th class="sort" data-sort="username">Username</th>
                                    <th>Password</th>
                                    <th class="sort" data-sort="email">Email</th>
                                    <th>Access</th>
                                    <th>Mobile</th>
                                    <th>QAward</th>
                                    <th>Staff Code</th>
                                    <th>Actions</th>
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
                                    <td class="name">ABDUL RAHMAN BIN SAFARUDIN</td>
                                    <td class="username">abdulrahman</td>
                                    <td class="password">***********</td>
                                    <td class="email">abdulrahman@metrio.com.my</td>
                                    <td class="accesslevel">Site</td>
                                    <td class="mobileaccess">Yes</td>
                                    <td class="qawardaccess">Yes</td>
                                    <td class="staffcode">000117</td>
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
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter name">
                        </BCol>
                        <BCol lg="6"> 
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter username">
                        </BCol>
                        <BCol lg="6"> 
                            <label for="paswword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="boardName" placeholder="Enter password">
                        </BCol>
                        <BCol lg="6">     
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="boardName" placeholder="Enter email">
                        </BCol>
                        <BCol lg="6">     
                            <label for="staffcode" class="form-label">Staff Code</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter code">
                        </BCol>
                        <BCol lg="6">     
                            <label for="accesslevel" class="form-label">Access Level</label>
                            <select class="form-select">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </BCol>
                        <BCol lg="6"> 
                            <label for="mobileaccess">Mobile Access</label>
                            <select class="form-select">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </BCol>
                        <BCol lg="6"> 
                            <label for="qawardaccess">QAward Access</label>
                            <select class="form-select">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
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

        </template>
    </Index>
</template>
