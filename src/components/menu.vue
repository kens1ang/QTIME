<script>
import {
  layoutComputed
} from "@/state/helpers";
import {
  HomeIcon,
  GridIcon,
  FileTextIcon,
  DatabaseIcon,
  PieChartIcon,
  ArchiveIcon,
  LayersIcon
} from "@zhuowenli/vue-feather-icons";

export default {
  components: {
    HomeIcon,
    GridIcon,
    FileTextIcon,
    DatabaseIcon,
    PieChartIcon,
    ArchiveIcon,
    LayersIcon
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },

  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    this.initActiveMenu();
    if (this.rmenu == 'vertical') {
      document.documentElement.setAttribute("data-layout", "vertical");
    }
    document.getElementById('overlay').addEventListener('click', () => {
      document.body.classList.remove('vertical-sidebar-enable');
    });

    
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");

      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
                siblingCollapse.parentElement.firstChild.setAttribute("aria-expanded", "false");
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2) {
                item.firstElementChild.setAttribute("aria-expanded", "false");
                item.firstElementChild.classList.remove("active");
              }
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                item1.classList.remove("show");
                item1.parentElement.firstChild.setAttribute("aria-expanded", "false");
                item1.parentElement.firstChild.classList.remove("active");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.classList.remove("show");
            childCollapseInstance.parentElement.firstChild.setAttribute("aria-expanded", "false");
          });
        });
      });
    }
  },

  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if (this.$refs.isSimplebar)
            this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
      }
    },

    initActiveMenu() {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter((x) => x.classList.contains("active"));
        this.removeActivation(activeItems);
        let matchingMenuItem = items.find((x) => {
          return x.getAttribute("href") === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        } 
      }
    },

    removeActivation(items) {
      items.forEach((item) => {
        if (item.classList.contains("menu-link")) {
          if (!item.classList.contains("active")) {
            item.setAttribute("aria-expanded", false);
          }
          item.nextElementSibling.classList.remove("show");
        }
        if (item.classList.contains("nav-link")) {
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.remove("show");
          }
          item.setAttribute("aria-expanded", false);
        }
        item.classList.remove("active");
      });
    },

    activateParentDropdown(item) {
      // navbar-nav menu add active
      item.classList.add("active");
      let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
      if (parentCollapseDiv) {
        // to set aria expand true remaining
        parentCollapseDiv.classList.add("show");
        parentCollapseDiv.parentElement.children[0].classList.add("active");
        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
        if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
          if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling) {
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown")) {
              const grandparent = parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown");
              this.activateIconSidebarActive("#" + grandparent.getAttribute("id"));
              grandparent.classList.add("show");
            }
          }
          this.activateIconSidebarActive("#" + parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")
            .getAttribute("id"));

          parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
          if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
            parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
          return false;
        }
        this.activateIconSidebarActive("#" + parentCollapseDiv.getAttribute("id"));
        return false;
      }
      return false;
    },

  },
};
</script>

<template>
  <BContainer fluid>
    <div id="two-column-menu"></div>
    <template v-if="layoutType === 'vertical'">
      <ul class="navbar-nav h-100" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link menu-link">
            <HomeIcon width="24" height="24" />
            <span data-key="t-dashboards" class="Menuspan">
              <router-link :to="{ name: 'default' }" class="MenuText">{{ $t('Dashboard') }}</router-link>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link">
            <GridIcon width="24" height="24" />
            <span data-key="t-apps" class="Menuspan">
              <router-link :to="{ name: 'projects-list' }" class="MenuText">{{ $t('Attendance') }}</router-link>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link">
            <FileTextIcon width="24" height="24" />
            <span data-key="t-invoices" class="Menuspan">
              <router-link :to="{ name: 'invoice-list' }" class="MenuText">{{ $t('Task Management') }}</router-link>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link">
            <DatabaseIcon width="24" height="24" />
            <span data-key="t-jobs" class="Menuspan">
              <router-link :to="{ name: 'job-application' }" class="MenuText">{{ $t('Machinery') }}</router-link>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link">
            <PieChartIcon width="24" height="24" />
            <span data-key="t-ecommerce" class="Menuspan">
              <router-link :to="{ name: 'customers' }" class="MenuText">{{ $t('Reporting') }}</router-link>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link">
            <ArchiveIcon width="24" height="24" />
            <span data-key="t-form" class="Menuspan">
              <router-link :to="{ name: 'form-advanced' }" class="MenuText">{{ $t('Customization') }}</router-link>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link">
            <LayersIcon width="24" height="24" />
            <span data-key="t-system" class="Menuspan">
              <router-link :to="{ name: 'basic-system' }" class="MenuText">{{ $t('System') }}</router-link>
            </span>
          </a>
        </li>
      </ul>
    </template>
  </BContainer>
</template>