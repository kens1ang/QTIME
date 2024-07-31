<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import breadcrumbs from "@/components/breadcrumbs.vue";

export default {
    data() {
        return {
            title: "Pending Payment",
            breadcrumbs: [
                { name: 'Dashboard', link: '/' },
                { name: 'Pending Board', link: '/' },
                { name: 'Pending Payment', link: '/' },
            ],
        };
    },
    components: {
        Index,
        breadcrumbs,
    },

};

</script>

<template>
    <Index>
        <template v-slot:content>

            <div class="d-sm-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <h1 style="font-size: 25px; margin-top: 5px">{{ title }}</h1>
                </div>
                <breadcrumbs :pages="breadcrumbs" />
            </div>

            <div class="card-body" style="margin-bottom: 30px; margin-top: 30px;">
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
                                    <th>Incharge</th>
                                    <th class="sort">MM YY</th>
                                    <th>Approved</th>
                                    <th>Printed By</th>
                                    <th>ACC Remark</th>
                                    <th class="sort">Total</th>
                                </tr>
                            </thead>
                            <tbody class="list form-check-all">
                                <tr>
                                    <td>SCPT1A-Parcel2(308U)	</td>
                                    <td>1 - 15</td>
                                    <td>General Worker</td>
                                    <td>04 2022</td>
                                    <td>2020-07-24 15:45:20</td>
                                    <td>yktan 2023-09-26 09:52:13</td>
                                    <td></td>
                                    <td>RM 56,055.35	</td>
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