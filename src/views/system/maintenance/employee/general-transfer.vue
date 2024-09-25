<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import kskList from "@/views/system/maintenance/employee/transfer-ksk-list.vue";
import requestTransfer from "@/views/system/maintenance/employee/request-transfer-ksk.vue";
export default {

  components: {
    Layout,
    PageHeader,
    kskList,
    requestTransfer,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="General Worker Transfer" pageTitle="System" subTitle="Employee" />
    <BCardBody>
        <BTabs nav-class="nav-border-top nav-border-top-primary mb-3" content-class="text-muted">
            <BTab title="General Worker List" active>
                <div class="d-flex">
                    <div class="flex-grow-1 ms-2">
                      <br>
                      <kskList />
                    </div>
                </div>
            </BTab>
            <BTab title="Transferred List">
                <div class="d-flex">
                    <div class="flex-grow-1 ms-2">
                      <br>
                      <requestTransfer />
                    
                    </div>
                </div>
            </BTab>
        </BTabs>
    </BCardBody>
  </Layout>
</template>
