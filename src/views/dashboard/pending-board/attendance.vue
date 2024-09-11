<template>
  <div class="d-flex justify-content-start align-items-center gap-3 mb-3">
    <h5 class="fw-bold">Payment</h5>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius active"
      data-bs-toggle="button"
    >
      <span class="icon-on">General Worker</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>General Worker</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">Staff</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>Staff</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">Subcon as KSK</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>Subcon as KSK</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">External</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>External</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">Operator</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>Operator</span
      >
    </button>
  </div>

  <BCard no-body>
    <BCardBody class="border-start border-5 border-danger">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex justify-content-start align-items-center gap-5">
            <div>
              <div class="d-flex justify-content-start align-items-center">
                <h5 class="fw-bold">January 2024 - Period 1</h5>
              </div>
              <div
                class="d-flex justify-content-start align-items-center gap-2 text-muted"
              >
                <i class="bx bx-time-five text-center mb-2"></i>
                <h6 class="text-muted fw-normal">Pending Payment Approval</h6>
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
              <h5>Status</h5>
              <span class="ms-3">Waiting approval from YO PEI QI </span>
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
                <h5 class="fw-bold">January 2024 - Period 2</h5>
              </div>
              <div
                class="d-flex justify-content-start align-items-center gap-2 text-muted"
              >
                <i class="bx bx-time-five text-center mb-2"></i>
                <h6 class="text-muted fw-normal">Pending Payment Approval</h6>
                <span class="mb-2">&#x2022;</span>
                <i class="bx bx-user text-center mb-2"></i>
                <h6 class="text-muted fw-normal">27</h6>
                <span class="mb-2">&#x2022;</span>
                <h6 class="text-muted fw-normal">General Worker</h6>
              </div>
            </div>
            <div>
              <h5>Due</h5>
              <span class="text-warning ms-3">15 days left</span>
            </div>
            <div>
              <h5>Total</h5>
              <span class="ms-3">RM 28,468.00</span>
            </div>
            <div>
              <h5>Status</h5>
              <span class="ms-3"
                >Waiting for attendance approval</span
              >
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

  <div class="d-flex justify-content-start align-items-center gap-3 mb-3">
    <h5 class="fw-bold">Attendance</h5>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius active"
      data-bs-toggle="button"
    >
      <span class="icon-on">General Worker</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>General Worker</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius active"
      data-bs-toggle="button"
    >
      <span class="icon-on">Staff</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>Staff</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">Subcon as KSK</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>Subcon as KSK</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">External</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>External</span
      >
    </button>
    <button
      type="button"
      class="btn btn-sm btn-outline-success custom-toggle btn-border-radius"
      data-bs-toggle="button"
    >
      <span class="icon-on">Operator</span>
      <span class="icon-off"
        ><i class="ri-check-line align-bottom me-1"></i>Operator</span
      >
    </button>
  </div>

  <BCard no-body>
    <BCardBody class="border-start border-5 border-warning">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="d-flex justify-content-start align-items-center gap-5">
            <div>
              <div class="d-flex justify-content-start align-items-center">
                <h5 class="fw-bold">January 2024 - Period 2</h5>
              </div>
              <div
                class="d-flex justify-content-start align-items-center gap-2 text-muted"
              >
                <i class="bx bx-time-five text-center mb-2"></i>
                <h6 class="text-muted fw-normal">Pending Attendance Approval</h6>
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
              <h5>Total</h5>
              <span class="ms-3">RM 28,468.00</span>
            </div>
            <div>
              <h5>Status</h5>
              <span class="ms-3">Waiting approval from YO PEI QI </span>
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
                <h5 class="fw-bold">January 2024 - Period 2</h5>
              </div>
              <div
                class="d-flex justify-content-start align-items-center gap-2 text-muted"
              >
                <i class="bx bx-time-five text-center mb-2"></i>
                <h6 class="text-muted fw-normal">Pending Attendance Approval</h6>
                <span class="mb-2">&#x2022;</span>
                <i class="bx bx-user text-center mb-2"></i>
                <h6 class="text-muted fw-normal">27</h6>
                <span class="mb-2">&#x2022;</span>
                <h6 class="text-muted fw-normal">Staff</h6>
              </div>
            </div>
            <div>
              <h5>Due</h5>
              <span class="text-warning ms-3">10 days left</span>
            </div>
            <div>
              <h5>Total</h5>
              <span class="ms-3">RM 28,468.00</span>
            </div>
            <div>
              <h5>Status</h5>
              <span class="ms-3">Waiting approval from YO PEI QI </span>
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

<style>
.btn-border-radius {
  border-radius: 20px;
}
</style>
