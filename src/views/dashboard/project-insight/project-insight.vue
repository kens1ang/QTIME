<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import breadcrumbs from "@/components/breadcrumbs.vue";
import budgetOverview from "./budget-overview.vue";
import headcountBar from "./headcount-bar.vue";
import headcountPie from "./headcount-pie.vue";

export default {
    data() {
        return {
            title: "Project Insight",
            breadcrumbs: [
                { name: 'Dashboard', link: '/' },
                { name: 'Project Insight', link: '/' },
            ],
        }
    },
    components: {
        Index,
        breadcrumbs,
        budgetOverview,
        headcountBar,
        headcountPie,
    },
};

</script>

<template>
    <Index>
        <template v-slot:content>

            <div class="d-sm-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <h1 style="font-size: 25px; margin-top: 5px">{{ title }}</h1>
                    <BButtonGroup class="ms-3">
                    <BDropdown text="AR496" variant="light">
                        <BDropdownItem href="#">Menu item</BDropdownItem>
                        <BDropdownItem href="#">Menu item</BDropdownItem>
                        <BDropdownItem href="#">Menu item</BDropdownItem>
                    </BDropdown>
                    </BButtonGroup>
                </div>
                <breadcrumbs :pages="breadcrumbs" />
            </div>

            <BRow>
                <BCol xl="4">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0">Project Status</h5>
                                </BCol>
                                <BCol class="d-flex justify-content-end align-items-center">
                                    <span class="badge bg-info">In Progress</span>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h6>Start Date:</h6>
                            <h6>Estimated Finish Date:</h6>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="4">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardBody>
                            <h6>Utilized Budget:</h6>
                            <h6>Amount Spent:</h6>
                            <h6>Estimate Total Budget:</h6>
                            <h6>Estimate at Completion:</h6>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="4">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0">Total Headcount Today</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

            <!--Budget & Expenses-->
            <BRow>
                <BCol xxl="6">
                    <budgetOverview />
                </BCol>

                <BCol xxl="3" md="6">
                    <headcountBar />
                </BCol>

                <BCol xxl="3" md="6">
                    <headcountPie />
                </BCol>
            </BRow>

            <!--Headcount-->
            <BRow>
                <BCol xxl="6">
                    <budgetOverview />
                </BCol>

                <BCol xxl="3" md="6">
                    <headcountBar />
                </BCol>

                <BCol xxl="3" md="6">
                    <headcountPie />
                </BCol>
            </BRow>

        </template>
    </Index>
</template>