<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import budgetOverview from "./budget-overview.vue";
import costBreakdown from "./cost-breakdown.vue";

export default {
  data() {
    return {
      title: "Overall Project Progress & Expenses",
    };
  },
  components: {
    budgetOverview,
    costBreakdown,
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader
      title="Overall Project Progress & Expenses"
      subTitle="Dashboard"
    />

    <div class="d-sm-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <h1 style="font-size: 25px; margin-top: 5px">AR496</h1>
      </div>
    </div>

    <BRow>
      <BCol xl="4">
        <BCard no-body class="border card-border-light mt-3">
          <BCardHeader>
            <BRow class="d-flex justify-content-between align-items-center">
              <BCol class="d-flex align-items-center">
                <h5 class="mb-0">Project Status</h5>
              </BCol>
              <BCol class="d-flex justify-content-end align-items-center">
                <span class="badge bg-info">In Progress</span>
              </BCol>
            </BRow>
          </BCardHeader>
          <BCardBody>
            <BRow>
              <BCol xl="8">
                <h6>Start Date:</h6>
                <h6>Planned Finish Date:</h6>
                <h6>Proximate Duration:</h6>
              </BCol>
              <BCol xl="4" style="text-align: right">
                <h6>01/01/2021</h6>
                <h6>19/07/2021</h6>
                <h6>200 days</h6>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="4">
        <BCard no-body class="border card-border-light mt-3">
          <BCardBody>
            <h6 class="text-muted">Utilized Days:</h6>
            <div class="container">
              <div class="progress" style="--i: 85; --clr: #08bc9c">
                <h3>100<span>days</span></h3>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="4">
        <BCard no-body class="border card-border-light mt-3">
          <BCardBody>
            <h6 class="text-muted">Avg Complete:</h6>
            <div class="container">
              <div class="progress" style="--i: 85; --clr: #08bc9c">
                <h3>50<span>%</span></h3>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body class="border card-border-light mt-3">
          <BCardBody>
            <BRow class="mb-3">
              <div
                class="location d-flex align-items-center justify-content-center gap-1"
              >
                <h6 class="text-muted">General Worker</h6>
              </div>
            </BRow>
            <BRow>
              <BCol xl="7">
                <BRow>
                  <div
                    class="d-flex justify-content-center align-items-center mt-5 border border-3 border-light border-top-0 border-start-0 border-end-0"
                  >
                    <h2 class="text-primary">
                      $1.02M
                      <span
                        class="text-muted d-inline-block fs-15 align-middle ms-2"
                        >Actual</span
                      >
                    </h2>
                  </div>
                </BRow>
                <BRow>
                  <div
                    class="d-flex justify-content-center align-items-center mt-3"
                  >
                    <h2>
                      $1.81M<span
                        class="text-muted d-inline-block fs-15 align-middle ms-2"
                        >Planned</span
                      >
                    </h2>
                  </div>
                </BRow>
              </BCol>
              <BCol xl="5">
                <div class="container">
                  <h6 class="text-muted">Utilized Budget %</h6>
                  <div class="progress" style="--i: 85; --clr: #08bc9c">
                    <h3>56<span>%</span></h3>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="6">
        <BCard no-body class="border card-border-light mt-3">
          <BCardBody>
            <BRow class="mb-3">
              <div
                class="location d-flex align-items-center justify-content-center gap-1"
              >
                <h6 class="text-muted">Subcon as General Worker</h6>
              </div>
            </BRow>
            <BRow>
              <BCol xl="7">
                <BRow>
                  <div
                    class="d-flex justify-content-center align-items-center mt-5 border border-3 border-light border-top-0 border-start-0 border-end-0"
                  >
                    <h2 class="text-primary">
                      $1.02M
                      <span
                        class="text-muted d-inline-block fs-15 align-middle ms-2"
                        >Actual</span
                      >
                    </h2>
                  </div>
                </BRow>
                <BRow>
                  <div
                    class="d-flex justify-content-center align-items-center mt-3"
                  >
                  <h2>
                    $1.81M<span
                      class="text-muted d-inline-block fs-15 align-middle ms-2"
                      >Planned</span
                    >
                  </h2>
                </div>
                </BRow>
              </BCol>
              <BCol xl="5">
                <div class="container">
                  <h6 class="text-muted">Utilized Budget %</h6>
                  <div class="progress" style="--i: 85; --clr: #08bc9c">
                    <h3>56<span>%</span></h3>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!--Budget & Expenses-->
    <BRow>
      <BCol xxl="9">
        <budgetOverview />
      </BCol>

      <BCol xxl="3" md="6">
        <costBreakdown />
      </BCol>
    </BRow>
  </Layout>
</template>

<style>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container .progress {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  color: #fff;
  background: #e0e0e0 linear-gradient(to right, transparent 50%, var(--clr) 0);
}

.container .progress h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  z-index: 1;
  font-weight: 500;
}

.container .progress h3 span {
  font-size: 0.65em;
  font-weight: 400;
  margin-left: 5px;
  color: black;
}

.container .progress::before {
  content: "";
  display: block;
  height: 100%;
  margin-left: 50%;
  transform-origin: left;
  border-radius: 0 100% 100% 0/50%;
}

.container .progress::after {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: #fff;
  /* box-shadow: 10px 0 20px rgba(0, 0, 0, 0.1); */
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px 0px inset; */
}

.container .progress::before {
  background: var(--clr);
  transform: rotate(calc(((var(--i) -50) * 0.01turn)));
}
</style>
