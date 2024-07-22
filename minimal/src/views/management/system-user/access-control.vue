<script>

import Index from '../sharedIndex.vue';

export default {
    components: {
        Index,
    },
    data () {
        return {
            title: 'Access Control',
        }
    }
};

document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-bs-target'));
        target.classList.toggle('show');
    });
});
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

            <!-- Table -->
            <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
                <div class="listjs-table" id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <div>
                                <button type="button" class="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal" style="margin-right: 10px;">
                                    <i class="ri-add-line align-bottom me-1"></i> Add
                                </button>
                                <button class="btn btn-light waves-effect">
                                    <i class='bx bx-filter'></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                        <table class="table align-middle table-nowrap" id="customerTable">
                            <thead class="table-light">
                                <tr>
                                    <th></th>
                                    <th>Permissions</th>
                                    <th>AC</th>
                                    <th>ADMIN</th>
                                    <th>APM</th>
                                    <th>CM</th>
                                    <th>PD</th>
                                    <th>PM</th>
                                    <th>PURC</th>
                                    <th>QC</th>
                                    <th>QS</th>
                                    <th>SA</th>
                                    <th>SITE</th>
                                    <th>SSA</th>
                                    <th>VIEW</th>
                                </tr>
                            </thead>
                            <tbody class="list form-check-all">
                                <tr data-toggle="collapse" data-target="#row1">
                                    <td>
                                        <button type="button" class="btn btn-sm" data-bs-toggle="collapse" data-bs-target="#collapseRow1" aria-expanded="false" aria-controls="collapseRow1">
                                            <i style="font-size: 20px;" class='bx bx-chevron-down' ></i>
                                        </button>
                                    </td>
                                    <td>
                                        Attendance
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success mb-3">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="collapseRow1" class="collapse">
                                    <td></td>
                                    <td colspan="1">Edit Attendance</td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck1" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck2" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck3" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck4" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck5" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck6" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck7" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck8" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck9" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck10" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck11" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck12" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success mb-3"><input class="form-check-input" type="checkbox" id="formCheck13" checked></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </template>
    </Index>
</template>