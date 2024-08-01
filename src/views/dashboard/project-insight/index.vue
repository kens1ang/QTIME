<script>

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import headcountOverview from "./headcount-overview.vue";
import headcountLocation from "./headcount-location.vue";
import upcomingPlan from "./upcoming-plan.vue";
import gwTaskplanning from "./gw-taskplanning.vue";
import headcountSubconGeneral from "./headcount-subconGeneral.vue";
import headcountSubcon from "./headcount-subcon.vue";
import headcountOperator from "./headcount-operator.vue";
import headcountSubelement from "./headcount-subelement.vue";

export default {
    data() {
        return {
            title: "Project Insight",
        }
    },
    components: {
        headcountOverview,
        headcountLocation,
        upcomingPlan,
        gwTaskplanning,
        Layout,
        PageHeader,
        headcountSubconGeneral,
        headcountSubcon,
        headcountOperator,
        headcountSubelement
    },
};

</script>

<template>
    <Layout>
        <PageHeader title="Project Insight" subTitle="Dashboard"/>

        <div class="d-sm-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <h1 style="font-size: 25px; margin-top: 5px">FORUM2</h1>
            </div>
        </div>

        <BRow>
            <BCol xl="2">
                <BCard no-body class="border card-border-light mt-3">
                    <BCardHeader>
                        <BRow class="d-flex justify-content-between align-items-center">
                            <BCol class="d-flex align-items-center">    
                                <h5 class="mb-0">Total Headcount</h5>
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
            <BCol xxl="3" md="4">
                <headcountLocation />
            </BCol>
            <BCol xxl="3" md="4">
                <headcountSubelement />
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="12" md="12">
                <headcountSubconGeneral />
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <headcountSubcon />
            </BCol>
            <BCol xxl="6">
                <headcountOperator />
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

    </Layout>
</template>