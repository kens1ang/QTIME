<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import breadcrumbs from "@/components/breadcrumbs.vue";
import projectStatus from "./project-status.vue";
import budgetOverview from "./budget-overview.vue";
import costBreakdown from "./cost-breakdown.vue";

export default {
    data() {
        return {
            title: "Overall Project Progress & Expenses",
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
        costBreakdown,
        projectStatus,
    },
};

</script>

<template>
    <Index>
        <template v-slot:content>

            <div class="d-sm-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <h1 style="font-size: 25px; margin-top: 5px">{{ title }} AR496</h1>
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
                            <h6>Planned Finish Date:</h6>
                        </BCardBody>
                    </BCard>                                                                                                                                                                                                                                            
                </BCol>

                <BCol xl="4">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardBody>
                            <h6>Project Duration:</h6>
                            <h6>Project Completion Rate:</h6>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

            <!--Budget & Expenses-->
            <BRow>
                <BCol xxl="3" md="6">
                    <projectStatus />
                </BCol>

                <BCol xxl="6">
                    <BCard no-body class="border card-border-light card-height-20">
                        <BCardBody>
                            <h6>Estimate at Completion:</h6>
                            <h6>Estimate at Completion:</h6>
                            <h6>Estimate at Completion:</h6>
                        </BCardBody>
                    </BCard>
                    <budgetOverview />
                </BCol>

                <BCol xxl="3" md="6">
                    <costBreakdown />
                </BCol>
            </BRow>

        </template>
    </Index>
</template>