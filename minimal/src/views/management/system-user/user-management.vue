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

            <h1 style="font-size: 20px;">{{ title }}</h1>

            <BBreadcrumb class="breadcrumb">
                <BBreadcrumbItem router-link to="/project/index"> Management </BBreadcrumbItem>
                <BBreadcrumbItem router-link to="/system-user/user-management"> System User </BBreadcrumbItem>
                <BBreadcrumbItem router-link to="/system-user/user-management"> {{ title }} </BBreadcrumbItem>
            </BBreadcrumb>

            <!-- Filter -->
            <BRow class="mt-3">
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

            </BRow>

            <!-- Table -->
            <div class="card-body" style="margin-bottom: 30px;">
                <div class="listjs-table" id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <div>
                                <button type="button" class="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal" style="margin-right: 10px;">
                                    <i class="ri-add-line align-bottom me-1"></i> Add
                                </button>
                                <button class="btn btn-soft-danger" onClick="deleteMultiple()">
                                    <i class="ri-delete-bin-2-line"></i>
                                </button>
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
                                    <th class="sort" data-sort="password">Password</th>
                                    <th class="sort" data-sort="email">Email</th>
                                    <th class="sort" data-sort="accesslevel">Access</th>
                                    <th class="sort" data-sort="mobileaccess">Mobile</th>
                                    <th class="sort" data-sort="staffcode">Staff Code</th>
                                    <th>Actions</th>
                                    <!-- <th><i style="font-size: 20px;" class='bx bxs-cog' ></i></th> -->
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
                                    <td class="staffcode">000117</td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <!-- <div class="edit">
                                                <button class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                            </div>
                                            <div class="remove">
                                                <button class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                            </div> -->
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm  dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i style="font-size: 20px;" class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item">Edit</a>
                                                    <a class="dropdown-item">Remove</a>
                                                    <a class="dropdown-item">Details</a>
                                                </div>
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
                                    <td class="name">ABDUL RAHMAN BIN SAFARUDIN</td>
                                    <td class="username">abdulrahman</td>
                                    <td class="password">***********</td>
                                    <td class="email">abdulrahman@metrio.com.my</td>
                                    <td class="accesslevel">Site</td>
                                    <td class="mobileaccess">Yes</td>
                                    <td class="staffcode">000117</td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <!-- <div class="edit">
                                                <button class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                            </div>
                                            <div class="remove">
                                                <button class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                            </div> -->
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm  dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i style="font-size: 20px;" class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Remove</a>
                                                    <a class="dropdown-item" href="#">Details</a>
                                                </div>
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
                                    <td class="name">ABDUL RAHMAN BIN SAFARUDIN</td>
                                    <td class="username">abdulrahman</td>
                                    <td class="password">***********</td>
                                    <td class="email">abdulrahman@metrio.com.my</td>
                                    <td class="accesslevel">Site</td>
                                    <td class="mobileaccess">Yes</td>
                                    <td class="staffcode">000117</td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <!-- <div class="edit">
                                                <button class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                            </div>
                                            <div class="remove">
                                                <button class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                            </div> -->
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm  dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i style="font-size: 20px;" class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Remove</a>
                                                    <a class="dropdown-item" href="#">Details</a>
                                                </div>
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
                                    <td class="name">ABDUL RAHMAN BIN SAFARUDIN</td>
                                    <td class="username">abdulrahman</td>
                                    <td class="password">***********</td>
                                    <td class="email">abdulrahman@metrio.com.my</td>
                                    <td class="accesslevel">Site</td>
                                    <td class="mobileaccess">Yes</td>
                                    <td class="staffcode">000117</td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <!-- <div class="edit">
                                                <button class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                            </div>
                                            <div class="remove">
                                                <button class="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                            </div> -->
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm  dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i style="font-size: 20px;" class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Remove</a>
                                                    <a class="dropdown-item" href="#">Details</a>
                                                </div>
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