<script>
import Layout from "@/layouts/main.vue";
import SettingTab from "@/views/pages/profile/setting.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

export default {
  data() {
    return {
      Autoplay, Navigation
    };
  },
  components: {
    Layout,
    Swiper,
    SwiperSlide,
    SettingTab
  },
};
</script>

<template>
  <Layout>
    <div class="profile-foreground position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg">
        <img src="@/assets/images/profile-bg.jpg" alt="" class="profile-wid-img" />
      </div>
    </div>
    <div class="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
      <BRow class="g-4">
        <BCol cols="auto">
          <div class="avatar-lg">
            <img src="@/assets/images/users/avatar-1.jpg" alt="user-img" class="img-thumbnail rounded-circle" />
          </div>
        </BCol>
        <BCol>
          <div class="p-2">
            <h3 class="text-white mb-1">Anna Adame</h3>
            <p class="text-white text-opacity-75">Owner & Founder</p>
            <div class="hstack text-white-50 gap-1">
              <div class="me-2">
                <i class="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>California, United
                States
              </div>
              <div>
                <i class="ri-building-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>Themesbrand
              </div>
            </div>
          </div>
        </BCol>
        <BCol cols="12" lg="auto" order-lg="0" class="order-last">
          <BRow class="text text-white-50 text-center">
            <BCol lg="6" cols="4">
              <div class="p-2">
                <h4 class="text-white mb-1">24.3K</h4>
                <p class="fs-14 mb-0">Followers</p>
              </div>
            </BCol>
            <BCol lg="6" cols="4">
              <div class="p-2">
                <h4 class="text-white mb-1">1.3K</h4>
                <p class="fs-14 mb-0">Following</p>
              </div>
            </BCol>
          </BRow>
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol lg="12">
        <div>
          <BTabs nav-class=" animation-nav profile-nav gap-2 gap-lg-3  pt-4 text-muted" pills>
            <BTab title="Overview" class="nav-item pt-4">
              <template #title>
                <i class="ri-airplay-fill d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Overview</span>
              </template>
              <BRow >
                <BCol xxl="3">
                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-5">Complete Your Profile</h5>
                      <BProgress class="animated-progress custom-progress progress-label">
                        <BProgressBar :value="30" variant="primary">
                          <div class="label">30%</div>
                        </BProgressBar>
                      </BProgress>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">Info</h5>
                      <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th class="ps-0" scope="row">Name :</th>
                              <td class="text-muted">LIM ZI YU</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Username :</th>
                              <td class="text-muted">zylim</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Staff Code :</th>
                              <td class="text-muted">101101</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Phone :</th>
                              <td class="text-muted">+(1) 987 6543</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">E-mail :</th>
                              <td class="text-muted">daveadame@velzon.com</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Location :</th>
                              <td class="text-muted">
                                California, United States
                              </td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Joining Date</th>
                              <td class="text-muted">24 Nov 2021</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BCardBody>
                  </BCard>

         
                  <BCard no-body>
                    <BCardBody>
                      <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                          <h5 class="card-title mb-0">Subcon Worker as General Worker</h5>
                        </div>
                        <div class="flex-shrink-0">
                          <BDropdown variant="link" right toggle-class="arrow-none p-0" no-caret>
                            <template #button-content><i class="ri-more-2-fill fs-14"></i>
                            </template>
                            <BDropdownItem href="#">
                              View
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center py-3">
                          <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle" />
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">Esther James</h5>
                              <p class="fs-13 text-muted mb-0">
                                QS Member
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center py-3">
                          <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle" />
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">Jacqueline Steve</h5>
                              <p class="fs-13 text-muted mb-0">
                                QS Member
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center py-3">
                          <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-5.jpg" alt="" class="img-fluid rounded-circle" />
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">George Whalen</h5>
                              <p class="fs-13 text-muted mb-0">
                                QS Member
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCardBody>
                  </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <div class="d-flex align-items-center mb-4">
                        <div class="flex-grow-1">
                          <h5 class="card-title mb-0">System Access</h5>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex align-items-center py-3">
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">1. Mobile Access</h5>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <BButton type="button" variant="outline-secondary" size="sm">
                             Yes
                            </BButton>
                          </div>
                        </div>
                        <div class="d-flex align-items-center py-3">
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="fs-14 mb-1">2. QAward Access</h5>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <BButton type="button" variant="outline-secondary" size="sm">
                              Yes
                            </BButton>
                          </div>
                        </div>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol xxl="9">
                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">Remark</h5>
                      <p>
                        Hi I'm Anna Adame, It will be as simple as Occidental;
                        in fact, it will be Occidental. To an English person, it
                        will seem like simplified English, as a skeptical
                        Cambridge friend of mine told me what Occidental is
                        European languages are members of the same family.
                      </p>
                      <BRow>
                        <BCol cols="6" md="4">
                          <div class="d-flex mt-4">
                            <div class="flex-shrink-0 avatar-xs align-self-center me-3">
                              <div class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                <i class="ri-user-2-fill"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="mb-1">Access Level :</p>
                              <h6 class="text-truncate mb-0">
                                Member
                              </h6>
                            </div>
                          </div>
                        </BCol>
                        <BCol cols="6" md="4">
                          <div class="d-flex mt-4">
                            <div class="flex-shrink-0 avatar-xs align-self-center me-3">
                              <div class="avatar-title bg-light rounded-circle fs-16 text-primary">
                                <i class="ri-global-line"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="mb-1">Company :</p>
                              <BLink href="#" class="fw-semibold">Alunan Asas Sdn Bhd</BLink>
                            </div>
                          </div>
                        </BCol>
                      </BRow>
                    </BCardBody>
                  </BCard>

                  <BRow>
                    <BCol lg="12">
                      <BCard no-body >
                        <BCardHeader class="align-items-center d-flex">
                          <BCardTitle class="mb-0 me-2">Recent Notification</BCardTitle>
                          <div class="flex-shrink-0 ms-auto">
                          </div>
                        </BCardHeader>
                        <BCardBody>
                          <BTabs nav-class="text-muted nav-tabs-custom rounded card-header-tabs border-bottom-0 tamp">
                            <BTab title="Today">
                              <!-- <div class="profile-timeline">
                                <div class="accordion accordion-flush" id="todayExample">
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingOne">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseOne>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Jacqueline Steve
                                            </h6>
                                            <small class="text-muted">We has changed 2 attributes on
                                              05:16PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapseOne" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        In an awareness campaign, it is vital
                                        for people to begin put 2 and 2 together
                                        and begin to recognize your cause. Too
                                        much or too little spacing, as in the
                                        example below, can make things
                                        unpleasant for the reader. The goal is
                                        to make your text as comfortable to read
                                        as possible. A wonderful serenity has
                                        taken possession of my entire soul, like
                                        these sweet mornings of spring which I
                                        enjoy with my whole heart.
                                      </div>
                                    </BCollapse>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingTwo">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseTwo>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-success rounded-circle">
                                              M
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Megan Elmore
                                            </h6>
                                            <small class="text-muted">Adding a new event with
                                              attachments - 04:45PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapseTwo" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <BRow class="g-2">
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-image-2-line fs-17 text-secondary"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6 class="mb-0">
                                                  <BLink href="javascript:void(0);" class="stretched-link">Business
                                                    Template
                                                    - UI/UX
                                                    design</BLink>
                                                </h6>
                                                <small>685 KB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                          <BCol cols="auto">
                                            <div class="d-flex border border-dashed p-2 rounded position-relative">
                                              <div class="flex-shrink-0">
                                                <i class="ri-file-zip-line fs-17 text-secondary"></i>
                                              </div>
                                              <div class="flex-grow-1 ms-2">
                                                <h6>
                                                  <BLink href="javascript:void(0);" class="stretched-link">Bank
                                                    Management
                                                    System -
                                                    PSD</BLink>
                                                </h6>
                                                <small>8.78 MB</small>
                                              </div>
                                            </div>
                                          </BCol>
                                        </BRow>
                                      </div>
                                    </BCollapse>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingThree">
                                      <BLink class="accordion-button p-2 shadow-none" data-bs-toggle="collapse"
                                        href="#collapsethree" aria-expanded="false">
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              New ticket received
                                            </h6>
                                            <small class="text-muted mb-2">User
                                              <span class="text-secondary">Erica245</span>
                                              submitted a ticket -
                                              02:33PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingFour">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseFour>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-muted rounded-circle">
                                              <i class="ri-user-3-fill"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Nancy Martino
                                            </h6>
                                            <small class="text-muted">Commented on 12:57PM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapseFour" visible>
                                      <div class="accordion-body ms-2 ps-5 fst-italic">
                                        " A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings of spring which I enjoy
                                        with my whole heart. Each design is a
                                        new, unique piece of art birthed into
                                        this world, and while you have the
                                        opportunity to be creative and make your
                                        own style choices. "
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="headingFive">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapseFive>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Lewis Arnold
                                            </h6>
                                            <small class="text-muted">Create new project Building
                                              product - 10:05AM</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapseFive" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <p class="text-muted mb-2">
                                          Every team project can have a velzon.
                                          Use the velzon to share information
                                          with your team to understand and
                                          contribute to your project.
                                        </p>
                                        <div class="avatar-group">
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Christi">
                                            <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                              class="rounded-circle avatar-xs" />
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Frank Hook">
                                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                              class="rounded-circle avatar-xs" />
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="Ruby">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle bg-light text-primary">
                                                R
                                              </div>
                                            </div>
                                          </BLink>
                                          <BLink href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                            title="more">
                                            <div class="avatar-xs">
                                              <div class="avatar-title rounded-circle">
                                                2+
                                              </div>
                                            </div>
                                          </BLink>
                                        </div>
                                      </div>
                                    </BCollapse>
                                  </div>
                                </div>
                              </div> -->
                            </BTab>
                            <BTab title="Weekly">
                              <!-- <div class="profile-timeline">
                                <div class="accordion accordion-flush" id="weeklyExample">
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading6">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse6>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Joseph Parker
                                            </h6>
                                            <small class="text-muted">New people joined with our
                                              company - Yesterday</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapse6" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        It makes a statement, it’s impressive
                                        graphic design. Increase or decrease the
                                        letter spacing depending on the
                                        situation and try, try again until it
                                        looks right, and each letter has the
                                        perfect spot of its own.
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading7">
                                      <BLink class="accordion-button p-2 shadow-none" data-bs-toggle="collapse"
                                        href="#collapse7" aria-expanded="false">
                                        <div class="d-flex">
                                          <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-light text-danger">
                                              <i class="ri-shopping-bag-line"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Your order is placed
                                              <BBadge variant="success-subtle"
                                                class="bg-success-subtle text-success align-middle">Completed</BBadge>
                                            </h6>
                                            <small class="text-muted">These customers can rest assured
                                              their order has been placed - 1
                                              week Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading8">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse8>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0 avatar-xs">
                                            <div class="avatar-title bg-light text-success rounded-circle">
                                              <i class="ri-home-3-line"></i>
                                            </div>
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Velzon admin dashboard templates
                                              layout upload
                                            </h6>
                                            <small class="text-muted">We talked about a project on
                                              linkedin - 1 week Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>

                                    <BCollapse id="collapse8" visible>
                                      <div class="accordion-body ms-2 ps-5 fst-italic">
                                        Powerful, clean & modern responsive
                                        bootstrap 5 admin template. The maximum
                                        file size for uploads in this demo :
                                        <BRow class="mt-2">
                                          <BCol xxl="6">
                                            <BRow class="border border-dashed gx-2 p-2">
                                              <BCol cols="3">
                                                <img src="@/assets/images/small/img-3.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                              <BCol cols="3">
                                                <img src="@/assets/images/small/img-5.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                              <BCol cols="3">
                                                <img src="@/assets/images/small/img-7.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                              <BCol cols="3">
                                                <img src="@/assets/images/small/img-9.jpg" alt=""
                                                  class="img-fluid rounded" />
                                              </BCol>
                                            </BRow>
                                          </BCol>
                                        </BRow>
                                      </div>
                                    </BCollapse>

                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading9">
                                      <BLink class="accordion-button p-2 shadow-none">
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              New ticket created
                                              <BBadge class="bg-info-subtle text-info align-middle">Inprogress</BBadge>
                                            </h6>
                                            <small class="text-muted mb-2">User
                                              <span class="text-secondary">Jack365</span>
                                              submitted a ticket - 2 week
                                              Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                  </div>
                                  <div class="accordion-item border-0">
                                    <div class="accordion-header" id="heading10">
                                      <BLink class="accordion-button p-2 shadow-none" v-b-toggle.collapse10>
                                        <div class="d-flex">
                                          <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                              class="avatar-xs rounded-circle" />
                                          </div>
                                          <div class="flex-grow-1 ms-3">
                                            <h6 class="fs-14 mb-1">
                                              Jennifer Carter
                                            </h6>
                                            <small class="text-muted">Commented - 4 week Ago</small>
                                          </div>
                                        </div>
                                      </BLink>
                                    </div>
                                    <BCollapse id="collapse10" visible>
                                      <div class="accordion-body ms-2 ps-5">
                                        <p class="text-muted fst-italic mb-2">
                                          " This is an awesome admin dashboard
                                          template. It is extremely well
                                          structured and uses state of the art
                                          components (e.g. one of the only
                                          templates using bootstrap 5.1.3 so
                                          far). I integrated it into a Rails 6
                                          project. Needs manual integration work
                                          of course but the template structure
                                          made it easy. "
                                        </p>
                                      </div>
                                    </BCollapse>
                                  </div>
                                </div>
                              </div> -->
                            </BTab>
                          </BTabs>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">Projects</h5>
                      <div class="swiper project-swiper">
                        <swiper :slides-per-view="3" :space-between="50">
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-primary mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">AR496</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Progress :
                                        <span class="fw-semibold text-body">100%</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                        Completed
                                      </BBadge>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-success mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">BG17-R1</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Progress :
                                        <span class="fw-semibold text-body">50%</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                        On Going
                                      </BBadge>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>
                          <swiper-slide>
                            <div class="swiper-slide">
                              <BCard no-body class="profile-project-card shadow-none profile-project-info mb-0">
                                <BCardBody class="p-4">
                                  <div class="d-flex">
                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                      <h5 class="fs-14 text-truncate mb-1">
                                        <BLink href="#" class="text-body">BKT22F</BLink>
                                      </h5>
                                      <p class="text-muted text-truncate mb-0">
                                        Progress :
                                        <span class="fw-semibold text-body">0%</span>
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <BBadge variant="dark-subtle" class="bg-dark-subtle text-dark fs-10">
                                        Future
                                      </BBadge>
                                    </div>
                                  </div>
                                </BCardBody>
                              </BCard>
                            </div>
                          </swiper-slide>

                        </swiper>

                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
              </BRow>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-list-unordered d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Setting</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <SettingTab />
                </BCardBody>
              </BCard>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-price-tag-line d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Projects</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <BRow>
                    <BCol xxl="3" sm="6">
                      <router-link  :to="{ name: 'project-detail' }"
                      class="MenuText">
                      <BCard no-body class="profile-project-card shadow-none profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">AR496</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Progress :
                                <span class="fw-semibold text-body">100%</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        J
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                      </router-link>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <router-link  :to="{ name: 'project-detail' }"
                      class="MenuText">
                      <BCard no-body class="profile-project-card shadow-none profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">	BG17-R1</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Progress :
                                <span class="fw-semibold text-body">50%</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                On Going
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard></router-link>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <router-link  :to="{ name: 'project-detail' }"
                      class="MenuText">
                      <BCard no-body class="profile-project-card shadow-none profile-project-info">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">BKT22F</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Progress :
                                <span class="fw-semibold text-body">0%</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="dark-subtle" class="bg-dark-subtle text-dark fs-10">Future</BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        M
                                      </div>
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard></router-link>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <router-link  :to="{ name: 'project-detail' }"
                      class="MenuText">
                      <BCard no-body class="profile-project-card shadow-none profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">BJO-B3B4</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Progress :
                                <span class="fw-semibold text-body">25%</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                On Going
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </router-link>
                    </BCol>
                    <BCol lg="12">
                      <div class="mt-4">
                        <ul class="pagination pagination-separated justify-content-center mb-0">
                          <li class="page-item disabled">
                            <BLink href="javascript:void(0);" class="page-link"><i class="mdi mdi-chevron-left"></i>
                            </BLink>
                          </li>
                          <li class="page-item active">
                            <BLink href="javascript:void(0);" class="page-link">1</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">2</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">3</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link"><i class="mdi mdi-chevron-right"></i>
                            </BLink>
                          </li>
                        </ul>
                      </div>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BTab>
          </BTabs>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

<style>
.tamp{
  position: absolute;
  top: 17px;
  right: 16px;
}
</style>
