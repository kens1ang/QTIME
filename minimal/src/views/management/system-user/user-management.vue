<script>

import Index from '../sharedIndex.vue';

export default {
    components: {
        Index,
    },
    data () {
        return {
            title: 'User Management',
        }
    }
};
</script>

<template>
    <Index>
        <template v-slot:content>

            <h1 style="font-size: 25px;">{{ title }}</h1>

            <BBreadcrumb class="breadcrumb">
                <BBreadcrumbItem router-link to="/project/index"> Management </BBreadcrumbItem>
                <BBreadcrumbItem router-link to="/system-user/user-management"> System User </BBreadcrumbItem>
                <BBreadcrumbItem router-link to="/system-user/user-management"> {{ title }} </BBreadcrumbItem>
            </BBreadcrumb>

            <!-- Filter -->
            <BRow class="mt-5">
                <BCol xl="2" md="6">
                    <div>
                        <label for="placeholderInput" class="form-label">Name</label>
                        <input type="text" class="form-control" id="placeholderInput"
                            placeholder="Type name">
                    </div>
                </BCol>

                <BCol xl="2" md="6">
                    <div>
                        <label for="placeholderInput" class="form-label">Username</label>
                        <input type="text" class="form-control" id="placeholderInput"
                            placeholder="Type username">
                    </div>
                </BCol>

                <BCol xl="2" md="6">
                    <div>
                        <label for="iconrightInput" class="form-label">Email</label>
                        <div class="form-icon right">
                            <input type="email" class="form-control form-control-icon"
                                id="iconrightInput" placeholder="example@gmail.com">
                            <i class="ri-mail-unread-line"></i>
                        </div>
                    </div>
                </BCol>

                <BCol xl="2" md="6">
                    <div>
                        <label for="placeholderInput" class="form-label">Staffcode</label>
                        <input type="text" class="form-control" id="placeholderInput"
                            placeholder="Type code">
                    </div>
                </BCol>

                <BCol xl="2" lg="2">
                <label for="placeholderInput" class="form-label">Access Level</label>
                  <BFormSelect v-model="exManualSelected" class="mb-3" aria-label="Default select example">
                    <BFormSelectOption value="1">Declined Payment</BFormSelectOption>
                    <BFormSelectOption value="2">Delivery Error</BFormSelectOption>
                    <BFormSelectOption value="3">Wrong Amount</BFormSelectOption>
                  </BFormSelect> 
                </BCol>

                <BCol xl="1" lg="1">
                    <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" style="margin-top: 27%; margin-left: 30px;">Search</button>
                </BCol>

                <BCol xl="1" lg="1">
                    <button type="button" class="btn btn-outline-success waves-effect waves-light material-shadow-none" style="margin-top: 27%;">Reset</button>
                </BCol> 

            </BRow>

            <!-- Table -->
            <div class="card-body">
                <div class="listjs-table" id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <div>
                                <button type="button" class="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal" style="margin-right: 10px;"><i class="ri-add-line align-bottom me-1"></i> Add</button>
                                <button class="btn btn-soft-danger" onClick="deleteMultiple()"><i class="ri-delete-bin-2-line" style=""></i></button>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive table-card mt-3 mb-1">
                        <table class="table align-middle table-nowrap" id="customerTable">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col" style="width: 50px;">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="checkAll" value="option">
                                        </div>
                                    </th>
                                    <th class="sort" data-sort="customer_name">Name</th>
                                    <th class="sort" data-sort="email">Username</th>
                                    <th class="sort" data-sort="phone">Password</th>
                                    <th class="sort" data-sort="date">Email</th>
                                    <th class="sort" data-sort="status">Access Level</th>
                                    <th class="sort" data-sort="action">Staff Code</th>
                                    <th class="sort" data-sort="action">Account Code</th>
                                    <th class="sort" data-sort="action">Mob. Checkin</th>
                                    <th class="sort" data-sort="action">Action</th>
                                </tr>
                            </thead>
                            <tbody class="list form-check-all">
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                        </div>
                                    </th>
                                    <td class="id" style="display:none;"><a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a></td>
                                    <td class="customer_name">Mary Cousar</td>
                                    <td class="email">marycousar@velzon.com</td>
                                    <td class="phone">580-464-4694</td>
                                    <td class="date">06 Apr, 2021</td>
                                    <td class="status"><span class="badge bg-success-subtle text-success text-uppercase">Active</span></td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <div class="edit">
                                                <button class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                            </div>
                                            <div class="remove">
                                                <button class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
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
                            
        </template>
    </Index>
</template>