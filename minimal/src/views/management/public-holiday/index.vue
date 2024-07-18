<script>
    import Layout from "@/layouts/main.vue";
    import PageHeader from "@/components/page-header";
    
    export default {
      components: {
        Layout,
        PageHeader,
      },
    };
    </script>
    
    <template>
      <Layout>
          <PageHeader>
            <template v-slot:navigation>
              <div class="navdiv">
                <ul>
                  <router-link class="topnavlink" to="/project/index">
                    <span>Project</span>
                  </router-link>
                  <router-link class="topnavlink" to="/system-user/index">
                    <span>System User</span>
                  </router-link>
                  <router-link class="topnavlink" to="/company/index">
                    <span>Company</span>
                  </router-link>
                  <router-link class="topnavlink" to="/company-schedule/index">
                    <span>Company Schedule</span>
                  </router-link>
                  <router-link class="topnavlink" to="/employee/index">
                    <span>Employee</span>
                  </router-link>
                  <router-link class="topnavlink" to="/public-holiday/index">
                    <span>Public Holiday</span>
                  </router-link>
                </ul>
              </div>
            </template>
          </PageHeader>
      </Layout>
    </template>