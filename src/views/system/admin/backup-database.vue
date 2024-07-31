<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    components: {
        Layout,
        PageHeader,  
    },
};

</script>

<template>
    <Layout>
        <PageHeader title="Backup Database" pageTitle="System" subTitle="Admin" />
            <BCard no-body class="border card-border-light mt-3">
                <BCardBody>
                    <BRow>
                        <BCol xl="9">
                            <h5>Schedule a backup</h5>
                            <p>Set a schedule to automate your database backup</p>
                        </BCol>
                        <BCol xl="3" class="d-flex justify-content-end align-items-center">
                            <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none">
                                <i class="ri-add-line align-bottom me-1"></i> Schedule
                            </button>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>

            <BCard no-body class="border card-border-light mt-3">
                <BCardBody>
                    <BRow>
                        <BCol xl="9">
                            <h5>Create a backup</h5>
                            <p>Create a download backup now if you would like to download a backup of your site.</p>
                        </BCol>
                        <BCol xl="3" class="d-flex justify-content-end align-items-center">
                            <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none">
                                <i class="ri-add-line align-bottom me-1"></i> Download
                            </button>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>

            <div>
                <h5>Backup Activity</h5>
            </div>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Backup</th>
                        <th scope="col">Storage</th>
                        <th scope="col">Date</th>
                        <th scope="col">Backup by</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>MySQL</td>
                        <td>99.3 MB</td>
                        <td>Wed, Nov 24, 2021 1:00 PM</td>
                        <td>User</td>
                        <td><span class="badge bg-success">Successful</span></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>MySQL</td>
                        <td>79.05 MB</td>
                        <td>Wed, Nov 24, 2021 1:00 PM</td>
                        <td>User</td>
                        <td><span class="badge bg-warning">Pending</span></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>MySQL</td>
                        <td>100.13 MB</td>
                        <td>Wed, Nov 24, 2021 1:00 PM</td>
                        <td>User</td>
                        <td><span class="badge bg-success">Successful</span></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>MySQL</td>
                        <td>0 KB</td>
                        <td>Wed, Nov 24, 2021 1:00 PM</td>
                        <td>User</td>
                        <td><span class="badge bg-danger">Cancelled</span></td>
                    </tr>
                </tbody>
            </table>

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
    </Layout>
</template>