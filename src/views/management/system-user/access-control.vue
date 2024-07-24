<script>

import Index from '../sharedIndex.vue';
import breadcrumbs from '../../../components/breadcrumbs.vue';

export default {
    components: {
        Index,
        breadcrumbs
    },
    data () {
        return {
            title: 'Access Control',
            breadcrumbs: [
                { name: "Management", link: "/project/index" },
                { name: "System User", link: "/system-user/index" },
                { name: "Access Control", link: "/system-user/access-control" },
            ],
            modaltoAdd: false,
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
            
            <div class="d-sm-flex align-items-center justify-content-between">
                <h1 style="font-size: 25px;">{{ title }}</h1>
                <breadcrumbs :pages="breadcrumbs" />
            </div>

            <!-- Table -->
            <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
                <div class="listjs-table" id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="showModal(false)" style="margin-right: 10px;">
                                <i class="ri-add-line align-bottom me-1"></i> Add Permission
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

            <BModal v-model="modaltoAdd" header-class="p-3 bg-info-subtle" content-class="border-0" hide-footer
                title="Add New Permission" class="v-modal-custom" centered no-close-on-backdrop no-fade>
                <b-form action="#">
                    <BRow>
                        <BCol lg="12">
                            <label for="module" class="form-label">Module</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter module">
                            <label for="permission" class="form-label">Permission</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter permission">
                        </BCol>
                        <div class="mt-4">
                            <div class="hstack gap-2 justify-content-end">
                                <BButton type="button" variant="light" @click="modaltoAdd = false">Cancel</BButton>
                                <BButton type="button" variant="success" id="addNewBoard">Add</BButton>
                            </div>
                        </div>
                    </BRow>
                </b-form>
            </BModal>

        </template>
    </Index>
</template>