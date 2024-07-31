<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import headcountOverview from "./headcount-overview.vue";
import taskPlanning from "./headcount-location.vue";
import upcomingPlan from "./upcoming-plan.vue";
import gwTaskplanning from "./gw-taskplanning.vue";

export default {
    data() {
        return {
            title: "Project Insight",
        }
    },
    components: {
        Index,
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
              
            </div>

            <BRow>
                <BCol xl="2">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0">Headcount</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="2">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0"> Pending Payment</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="2">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0"> Pending Attendance</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="2">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0"> Pending Work Order</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="2">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0"> Pending Registration</h5>
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <h2>36</h2>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol xl="2">
                    <BCard no-body class="border card-border-light mt-3">
                        <BCardHeader>
                            <BRow class="d-flex justify-content-between align-items-center">
                                <BCol class="d-flex align-items-center">    
                                    <h5 class="mb-0"> Pending Resignation</h5>
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