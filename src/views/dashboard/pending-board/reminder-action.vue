<script>

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Reminder Action",
        }
    },
    components: {
        Layout,
        PageHeader
    },
};

</script>

<template>
    <Layout>
        <PageHeader title="Reminder Action" subTitle="Dashboard" pageTitle="Pending Board"/>


    </Layout>
</template>