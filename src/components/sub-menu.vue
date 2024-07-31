<template>
  <BRow id="sub-menu" style="margin-bottom: 20px;margin-top: -12px;">
        <div class="navdiv">
          <ul>
            <li v-for="(subItem, index) in subMenuItems" :key="index" class="submenu-container">
              <router-link class="topnavlink" :to="subItem.path">
                <span>{{ subItem.name }}</span>
              </router-link>
              <ul v-if="subItem.children" class="submenu">
                <li v-for="(child, cIndex) in subItem.children" :key="cIndex">
                  <router-link :to="child.path">{{ child.name }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
      </div>
  
  </BRow>
</template>






<script>
export default {
  computed: {
    subMenuTitle() {
      const path = this.$route.path;
      return this.getSubMenuTitle(path);
    },
    subMenuItems() {
      const path = this.$route.path;
      return this.getSubMenuItems(path);
    }
  },
  methods: {
    getSubMenuTitle(path) {
      if (path.startsWith('/dashboard/')) {
        return 'Dashboard';
      }else if (path.startsWith('/apps/')) {
        return 'App';
      }else if (path.startsWith('/invoices/')) {
        return 'Invoice';
      }else if (path.startsWith('/jobs/')) {
        return 'Jobs';
      }else if (path.startsWith('/ecommerce/')) {
        return 'Ecommerce';
      }else if (path.startWith('/crypto/')){
        return 'Crypto';
      }else if (path.startWith('/tables/')){
        return 'Table';
      }
      return 'No Title'; 
    },
    getSubMenuItems(path) {
      if (path.startsWith('/dashboard/')) {
        return [
          { name: 'Project Insight', path: '' },
          { name: 'Pending Board',
            children: [
                { name: 'Pending Payment', path: '' },
                { name: 'Pending Approval', path: '' },
                { name: 'Reminder Action', path: '' }
            ]
           },
          { name: 'Overall Project Progress & Expenses', path: '' }
        ];
      }else if (path.startsWith('/apps/')) {
        return [
          { name: 'Attendance Details', path: '' },
          { name: 'Dashboard',
            children: [
                { name: 'Status', path: '' },
            ]
           },
          { name: 'OT Management',
            children: [
                { name: 'Pre-OT Request', path: '' },
                { name: 'Pre-OT Approval', path: '' },
            ]
           },
          { name: 'BC Management',
            children: [
                { name: 'BC Insight', path: '' },
                { name: 'BC Reminder', path: '' },
            ]
           },
          { name: 'Work Order',
            children: [
                { name: 'Work Order List', path: '' },
                { name: 'Library Maintenance', path: '' },
            ]
          },
        ];
      }else if (path.startsWith('/invoices/')) {
        return [
          { name: 'Personal Task Dashboard',
            children: [
                { name: 'Active Task Listing', path: '' },
            ]
           },
          { name: 'KSK Planning',
            children: [
                { name: 'Group Management', path: '' },
                { name: 'Create New Task', path: '' },
                { name: 'Completed Task', path: '' },
            ]
           },
          { name: 'KSK In-depth Insight', path: '' },
        ];
      }else if (path.startsWith('/jobs/')) {
        return [
          { name: 'Reporting',
            children: [
                { name: 'Data Entry', path: '' },
                { name: 'Overview', path: '' },
                { name: 'Reported Usage', path: '' },
            ]
           },
        ];
      }else if (path.startsWith('/ecommerce/')) {
        return [
          { name: 'Single Clock In',
            children: [
                { name: 'Overview', path: '' },
                { name: 'Details', path: '' },
            ]
           },
          { name: 'OT Management',
            children: [
                { name: 'Pre-OT Request', path: '' },
                { name: 'Pre-OT Approval', path: '' },
            ]
           },
          { name: 'Subcon',
            children: [
                { name: 'Daily Attendance', path: '' },
                { name: 'Worker Attendance', path: '' },
                { name: 'Headcount', path: '' },
                { name: 'Manhour', path: '' },
            ]
           },
          { name: 'Budgeting & Costing',
            children: [
                { name: 'Expenses', path: '' },
                { name: 'Work Order', path: '' },
                { name: 'Backcharge', path: '' },
            ]
           },
          { name: 'Pre-OT',
            children: [
                { name: 'Summary', path: '' },
            ]
           },
          { name: 'Operator',
            children: [
                { name: 'Group Labour', path: '' },
                { name: 'Summary', path: '' },
            ]
           },
        ];
      }
      else if (path.startsWith('/form/')) {
        return [
          { name: 'Accounting',
            children: [
                { name: 'Revised Attendance Report', path: ' ' },
            ]
           },
          { name: 'HR',
            children: [
                { name: 'Attendance Detail', path: '' },
                { name: 'Attendance Summary', path: '' },
                { name: 'OT Details', path: '' },
                { name: 'Lateness', path: '' },
                { name: 'Absent Details', path: '' },
                { name: 'Sync E-Office Leave', path: '' },
                { name: 'Upload E-Office Leave', path: '' },
            ]
           },
        ]
      }
      else if (path.startsWith('/system/')) {
        return [
        { name: 'Employee',
            children: [
                { name: 'General Worker (KSK)', path: '' },
                { name: 'Staff', path: '' },
                { name: 'Subcon Worker', path: '' },
                { name: 'Operator', path: '' },
                { name: 'Update KSK Hour Rate', path: '' },
            ]
           },
          { name: 'Admin', path: '/system/user-management' ,
            children: [
                  { name: 'System User', path: '/system/user-management' },
                  { name: 'Access Permission', path: '/system/access-control' },
                  { name: 'Poster Portal', path: '/system/poster-portal' },
                  { name: 'Backup Database', path: '/system/backup-database' },
                  
              ]
           },
           { name: 'Maintenance List',
            children: [
                { name: 'Company', path: '/system/company' },
                { name: 'Project', path: '/system/project' },
                { name: 'Sub Deparment', path: '' },
                { name: 'Site', path: '' },
                { name: 'Progress Group', path: '' },
                { name: 'Mobile Clock-In', path: '' },
                { name: 'Schedule', path: '/system/schedule' },
                { name: 'Public Holiday', path: '' },
            ]
           },
           { name: 'Operation Menual', path:'' },
         
        ]
      }
      return []; 
    }
  }
};
</script>
<style scoped>
.nav {
  display: flex;
  gap: 1rem; 
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>