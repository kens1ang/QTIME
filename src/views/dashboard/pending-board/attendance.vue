<template>
  <BCard no-body>
    <BCardBody class="border-start border-5 border-danger">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex justify-content-start align-items-center gap-5">
            <div>
              <div class="d-flex justify-content-start align-items-center">
                <h5 class="fw-bold">Pending Payment Approval</h5>
              </div>
              <div
                class="d-flex justify-content-start align-items-center gap-2 text-muted"
              >
                <i class="bx bx-time-five text-center mb-2"></i>
                <h6 class="text-muted fw-normal">January 2024 - Period 1</h6>
                <span class="mb-2">&#x2022;</span>
                <i class="bx bx-user text-center mb-2"></i>
                <h6 class="text-muted fw-normal">27</h6>
                <span class="mb-2">&#x2022;</span>
                <h6 class="text-muted fw-normal">General Worker</h6>
              </div>
            </div>
            <div>
              <h5>Due</h5>
              <span class="text-danger ms-3">6 days ago</span>
            </div>
            <div>
              <h5>Total</h5>
              <span class="ms-3">RM 28,468.00</span>
            </div>
            <div>
              <h5>Remark</h5>
              <span class="ms-3">backcharge and total payment incorrect</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-ghost-success waves-effect waves-light"
        >
          <router-link :to="{ name: 'attendance-index' }" class="MenuText"
            ><i class="ri-search-line align-bottom me-1"></i> Review
          </router-link>
        </button>
      </div>
    </BCardBody>
  </BCard>

  <BCard no-body>
    <BCardBody class="border-start border-5 border-warning">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex justify-content-start align-items-center gap-5">
            <div>
              <div class="d-flex justify-content-start align-items-center">
                <h5 class="fw-bold">Pending Attendance Approval</h5>
              </div>
              <div
                class="d-flex justify-content-start align-items-center gap-2 text-muted"
              >
                <i class="bx bx-time-five text-center mb-2"></i>
                <h6 class="text-muted fw-normal">January 2024 - Period 2</h6>
                <span class="mb-2">&#x2022;</span>
                <i class="bx bx-user text-center mb-2"></i>
                <h6 class="text-muted fw-normal">27</h6>
                <span class="mb-2">&#x2022;</span>
                <h6 class="text-muted fw-normal">General Worker</h6>
              </div>
            </div>
            <div>
              <h5>Due</h5>
              <span class="text-warning ms-3">10 days left</span>
            </div>
            <div>
              <h5>Remark</h5>
              <span class="ms-3"></span>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-ghost-success waves-effect waves-light"
        >
          <router-link :to="{ name: 'attendance-index' }" class="MenuText"
            ><i class="ri-search-line align-bottom me-1"></i> Review
          </router-link>
        </button>
      </div>
    </BCardBody>
  </BCard>
</template>
