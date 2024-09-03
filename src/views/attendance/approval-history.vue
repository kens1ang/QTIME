<template>
  <div class="card-body" style="margin-bottom: 30px; margin-top: 30px">
    <div class="listjs-table" id="customerList">
      <div class="row g-4 mb-3">
        <div class="col-sm">
          <div class="d-flex justify-content-sm-end">
            <div class="search-box ms-2">
              <input
                type="text"
                class="form-control search"
                placeholder="Search..."
              />
              <i class="ri-search-line search-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        class="table-responsive table-card mt-3 mb-1"
        style="max-height: 500px; overflow: auto"
      >
        <table class="table align-middle table-nowrap" id="customerTable">
          <thead class="table-light">
            <tr>
              <th>Name</th>
              <th class="sort">Expired</th>
              <th class="sort">Date</th>
              <th>Remark</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="list form-check-all">
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td></td>
              <td>
                <span class="badge bg-danger-subtle text-danger">Rejected</span>
              </td>
            </tr>
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td></td>
              <td>
                <span class="badge bg-warning-subtle text-warning">Pending</span>
              </td>
            </tr>
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td></td>
              <td>
                <span class="badge bg-primary-subtle text-primary"
                  >Approved</span
                >
              </td>
            </tr>
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td></td>
              <td>
                <span class="badge bg-primary-subtle text-primary"
                  >Approved</span
                >
              </td>
            </tr>
            <tr>
              <td>TEOH YIN ZHENG</td>
              <td>2024-01-10</td>
              <td>2024-01-09 16:34:21</td>
              <td></td>
              <td>
                <span class="badge bg-primary-subtle text-primary"
                  >Approved</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-end">
        <div class="pagination-wrap hstack gap-2">
          <a
            class="page-item pagination-prev disabled"
            href="javascript:void(0);"
          >
            Previous
          </a>
          <ul class="pagination listjs-pagination mb-0"></ul>
          <a class="page-item pagination-next" href="javascript:void(0);">
            Next
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
