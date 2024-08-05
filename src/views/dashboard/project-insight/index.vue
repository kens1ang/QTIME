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
import widget from "./widget.vue";
// import headcountSubelement from "./headcount-subelement.vue";

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
        widget
        // headcountSubelement
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
            <widget/>
        </BRow>

        <!--Headcount-->
        <BRow>
            <BCol xxl="5">
                <headcountOverview />
            </BCol>
            <BCol xxl="7" md="4">
                <headcountLocation />
            </BCol>
            <!-- <BCol xxl="3" md="4">
                <headcountSubelement />
            </BCol> -->
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