<script>
export default {
  data() {
    return {
      currentTab: "assignment",
    };
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<template>
  <!-- Nav Tabs-->
  <ul class="nav nav-tabs nav-tabs-custom nav-primary" role="tablist">
    <li class="nav-item">
      <a
        class="nav-link All py-3"
        :class="{ active: currentTab === 'assignment' }"
        @click.prevent="setTab('assignment')"
        href="#"
      >
        Assignment
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link py-3"
        :class="{ active: currentTab === 'unassignedGroup' }"
        @click.prevent="setTab('unassignedGroup')"
        href="#"
      >
        Unassigned Group
        <span class="badge bg-danger-subtle text-danger">1</span>
      </a>
    </li>
  </ul>

  <!-- Assignment -->
  <div v-if="currentTab === 'assignment'">
    <BAccordion flush id="accordionFlushExample">
      <BAccordionItem title="HOUSEKEEPING">
        <div
          class="table-responsive table-card overflow-auto"
          style="max-height: 250px"
        >
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th class="col-12">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BAccordionItem>
      <BAccordionItem title="OPERATOR">
        <div
          class="table-responsive table-card overflow-auto"
          style="max-height: 250px"
        >
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th class="col-12">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BAccordionItem>
      <BAccordionItem title="SITE FACILITY">
        <div
          class="table-responsive table-card overflow-auto"
          style="max-height: 250px"
        >
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th class="col-12">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BAccordionItem>
      <BAccordionItem title="DEFECT WORKS (CONST)">
        <div
          class="table-responsive table-card overflow-auto"
          style="max-height: 250px"
        >
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th class="col-12">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BAccordionItem>
      <BAccordionItem title="DEFECT WORKS (PDI)">
        <div
          class="table-responsive table-card overflow-auto"
          style="max-height: 250px"
        >
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th class="col-12">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BAccordionItem>
    </BAccordion>
  </div>

  <!-- Unassigned Group -->
  <div v-if="currentTab === 'unassignedGroup'">
    <BAccordion flush id="accordionFlushExample">
      <BAccordionItem title="Group Md Syahir_1 (6 pax)">
        <div
          class="table-responsive table-card overflow-auto"
          style="max-height: 250px"
        >
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th class="col-12">Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
              <tr>
                <td>MD BOZLU OHOMAN LIHA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BAccordionItem>
    </BAccordion>
  </div>
</template>
