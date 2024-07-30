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
            <li><router-link class="topnavlink" to="/"><span>Project Insight</span></router-link></li>
            <li class="submenu-container">
              <router-link class="topnavlink" to="/">
                <span>Pending Board</span>
              </router-link>
              <ul class="submenu">
                <li><router-link to="/">Pending Payment</router-link></li>
                <li><router-link to="/">Pending Approval</router-link></li>
                <li><router-link to="/">Reminder Action</router-link></li>
              </ul>
            </li>
            <li><router-link class="topnavlink" to="/dashboard/project-progress-budget"><span>Overall Project Progress & Expenses</span></router-link></li>
          </ul>
        </div>
      </template>
    </PageHeader>

    <slot name="content"></slot>

  </Layout>
</template>