<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import resignationList from "@/views/system/maintenance/employee/resign-list.vue";
import requestResign from "@/views/system/maintenance/employee/request-resign-ksk.vue";
export default {

  components: {
    Layout,
    PageHeader,
    resignationList,
    requestResign,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="General Worker Resignation" pageTitle="System" subTitle="Employee" />
    <BCardBody>
        <BTabs nav-class="nav-border-top nav-border-top-primary mb-3" content-class="text-muted">
            <BTab title="Resignation List" active>
                <div class="d-flex">
                    <div class="flex-grow-1 ms-2">
                      <br>
                      <resignationList />
                    </div>
                </div>
            </BTab>
            <BTab title="Request Resignation">
                <div class="d-flex">
                    <div class="flex-grow-1 ms-2">
                      <br>
                      <requestResign />
                    
                    </div>
                </div>
            </BTab>
        </BTabs>
    </BCardBody>
  </Layout>
</template>
