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
            <li><router-link class="topnavlink" to="/project/index"><span>Project</span></router-link></li>
            <li class="submenu-container">
              <router-link class="topnavlink" to="/system-user/index">
                <span>System User</span>
              </router-link>
              <ul class="submenu">
                <li><router-link to="/system-user/user-management">User Management</router-link></li>
                <li><router-link to="/system-user/access-control">Access Control</router-link></li>
                <li><router-link to="/system-user/poster-portal">Poster Portal</router-link></li>
              </ul>
            </li>
            <li><router-link class="topnavlink" to="/company/index"><span>Company</span></router-link></li>
            <li><router-link class="topnavlink" to="/company-schedule/index"><span>Company Schedule</span></router-link></li>
            <li class="submenu-container">
              <router-link class="topnavlink" to="/employee/index">
                <span>Employee</span>
              </router-link>
              <ul class="submenu">
                <span>Maintenance</span>
                <li><router-link to="/poster-portal">Staff</router-link></li>
                <li><router-link to="/user-management">General Worker</router-link></li>
                <li><router-link to="/access-control">Subcon Worker</router-link></li>
                <li><router-link to="/poster-portal">Operator</router-link></li>
                <span>Scheduler</span>
                <li><router-link to="/poster-portal">Update General Worker Hour Rate</router-link></li>
              </ul>
            </li>
            <li><router-link class="topnavlink" to="/public-holiday/index"><span>Public Holiday</span></router-link></li>
          </ul>
        </div>
      </template>
    </PageHeader>

    <slot name="content"></slot>

  </Layout>
</template>