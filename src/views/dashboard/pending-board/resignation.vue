<template>
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
            <th>Date Requested</th>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>AA Permit</th>
            <th>Status</th>
            <th>Requested By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button type="button" class="btn btn-light btn-icon waves-effect">
                <i class="bx bx-list-ul"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="noresult" style="display: none">
        <div class="text-center">
          <lord-icon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            style="width: 75px; height: 75px"
          ></lord-icon>
          <h5 class="mt-2">Sorry! No Result Found</h5>
          <p class="text-muted mb-0">
            We've searched more than 150+ Orders We did not find any orders for
            you search.
          </p>
        </div>
      </div>
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
</template>
