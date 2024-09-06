<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import KskTab from "@/views/system/maintenance/employee/employee-ksk.vue";
import SubconTab from "@/views/system/maintenance/employee/employee-subcon.vue";
import StaffTab from "@/views/system/maintenance/employee/employee-staff.vue";
import OperatorTab from "@/views/system/maintenance/employee/employee-operator.vue";
export default {

  components: {
    Layout,
    PageHeader,
    KskTab,
    SubconTab,
    StaffTab,
    OperatorTab
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Employee" pageTitle="System" />
    <BRow>
      <BCol class="col-xl-12">
        <BCard no-body>
          <BCardBody class="checkout-tab">
            <BForm action="#">
              <div class="step-arrow-nav mt-n3 mx-n3 mb-3">
                <BTabs nav-class="nav-pills nav-justified custom-nav">
                  <BTab active class="nav-item nav-link p-3">
                    <template #title>
                      <div class="fs-15">
                        <i class="
                      ri-user-2-line
                      fs-16
                      avatar-xs d-inline-flex align-items-center justify-content-center
                      bg-primary-subtle
                      text-primary
                      rounded-circle
                      align-middle
                      me-2
                      "></i>
                        General Worker
                      </div>
                    </template>
                    <KskTab />
                  </BTab>
                  <BTab class="nav-item nav-link fs-15 p-3">
                    <template #title>
                      <div class="fs-15">
                        <i class="
                          ri-file-user-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-primary-subtle
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>
                        Staff
                      </div>
                    </template>
                    <StaffTab />
                  </BTab>

                  <BTab class="nav-item nav-link fs-15 p-3">
                    <template #title>
                      <div class="fs-15">
                        <i class="
                          ri-bank-card-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-primary-subtle
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>
                       Subcon Worker
                      </div>
                    </template>
                   <SubconTab />
                  </BTab>

                  <BTab class="nav-item nav-link fs-15 p-3">
                    <template #title>
                      <div class="fs-15">
                        <i class="
                          ri-settings-3-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-primary-subtle
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>
                        Operator
                      </div>
                    </template>
                    <OperatorTab />
                  </BTab>
                </BTabs>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

 
  </Layout>
</template>
