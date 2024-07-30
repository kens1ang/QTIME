<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import breadcrumbs from "@/components/breadcrumbs.vue";
import headcountOverview from "./headcount-overview.vue";
import taskPlanning from "./headcount-category.vue";
import upcomingPlan from "./upcoming-plan.vue";
import gwTaskplanning from "./gw-taskplanning.vue";

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
        headcountOverview,
        taskPlanning,
        upcomingPlan,
        gwTaskplanning
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
                                    <h5 class="mb-0">Total Headcount Today</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="4">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0">Total Pending Attendance</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="4">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0">Total Pending Payment</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

            <!--Headcount-->
            <BRow>
                <BCol xxl="6">
                    <headcountOverview />
                </BCol>

                <BCol xxl="6" md="6">
                    <taskPlanning />
                </BCol>
            </BRow>

            <BRow>
                <BCol xl="4">
                    <upcomingPlan />
                </BCol>
                <BCol xl="8">
                    <gwTaskplanning />
                </BCol>
            </BRow>

        </template>
    </Index>
</template>