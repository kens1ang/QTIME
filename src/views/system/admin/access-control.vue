<script>
import { reactive } from 'vue';
import Swal from "sweetalert2";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data () {
        return {
            modaltoAdd: false,
            collapsedRows: reactive({}),
        };
    },
    components: {
        Layout,
        PageHeader,

    },
    methods: {
        toggleRow(rowId) {
            if (this.collapsedRows[rowId]) {
                delete this.collapsedRows[rowId];
            } else {
                this.collapsedRows[rowId] = true;
            }
        },
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
    }
};

</script>

<template>
    <Layout>
        <PageHeader title="Access Control" pageTitle="System" subTitle="Admin" />
            <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
                <div class="listjs-table" id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="modaltoAdd = !modaltoAdd" style="margin-right: 10px;">
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
                        <table class="table align-middle table-nowrap" id="tabularPermission">
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
                                <tr>
                                    <td @click="toggleRow('row1')" :class="{'collapsed': collapsedRows['row1']}">
                                        <button type="button" class="btn btn-sm" aria-expanded="false">
                                            <i style="font-size: 20px;" :class="collapsedRows['row1'] ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
                                        </button>
                                    </td>
                                    <td>
                                        Attendance
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-outline form-check-success">
                                            <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                            <label class="form-check-label" for="formCheck15">
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-show="collapsedRows['row1']" class="collapseRow">
                                    <td></td>
                                    <td colspan="1">Edit Attendance</td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck1" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck2" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck3" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck4" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck5" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck6" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck7" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck8" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck9" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck10" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck11" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck12" checked></div></td>
                                    <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck13" checked></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <BModal v-model="modaltoAdd" modal-class="zoomIn" header-class="p-3 bg-primary-subtle" content-class="border-0" hide-footer
                title="Create Permission" class="v-modal-custom" centered no-close-on-backdrop no-fade>
                <BForm action="#">
                    <BRow class="g-3">
                        <BCol lg="6">
                            <label for="module" class="form-label">Module</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter module">
                        </BCol>
                        <BCol lg="6">
                            <label for="permission" class="form-label">Permission</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter permission">
                        </BCol>
                        <div class="hstack gap-2 justify-content-end">
                            <BButton type="button" variant="ghost-success" @click="modaltoAdd = false"><i class="ri-close-line align-bottom"></i>Cancel</BButton>
                            <BButton type="submit" variant="primary" id="addNewBoard">Create</BButton>
                        </div>
                    </BRow>
                </BForm>        
            </BModal>

    </Layout>
</template>
