<script>
import Layout from "@/layouts/main.vue";
import Swal from "sweetalert2";
import { folderList, fileList } from "@/common/data";
// import simplebar from "simplebar-vue"
import getChartColorsArray from "@/common/getChartColorsArray";
import PageHeader from "@/components/page-header";
import { reactive } from 'vue';

export default {
  data() {
    return {
      weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'],
      activeIndex: 2,
      fileModal: false,
      folderModal: false,
      filename_input: '',
      value: "File Type",
      folders: folderList,
      filelist: fileList,
      modalShow: false,
      editModalSchedule: false,
      data12: null,
    projectModal: false,
    collapsedRows: reactive({}),
    modaltoAdd: false,
    modalAdd: false,
      series: [27.01, 20.87, 33.54, 37.58],
      chartOptions: {
        chart: {
          height: 330,
          type: "donut",
        },
        legend: {
          position: "bottom",
        },
        dataLabels: {
          dropShadow: {
            enabled: false,
          },
        },
        colors: getChartColorsArray(
          '["--vz-info", "--vz-warning", "--vz-primary", "--vz-success"]'
        ),
      },
    };
  },
  components: {
    Layout,
    // simplebar,
    PageHeader
  },
  watch: {
    folders() { },
    filelist() { },
  },
  mounted() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);

    document.querySelectorAll(".favourite-btn").forEach((item) => {

      item.addEventListener('click', function () {
        if (item.classList.contains("active")) {
          item.classList.remove("active")
        } else {
          item.classList.add("active")
        }
      });
    })
  },
  methods: {
        toggleRow(rowId) {
            if (this.collapsedRows[rowId]) {
                delete this.collapsedRows[rowId];
            } else {
                this.collapsedRows[rowId] = true;
            }
        },
        deleteAlert() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                confirmButtonText: "Yes, delete it!",
                cancelButtonColor: "#f46a6a",
                customClass: {
                    confirmButton: 'order-confirm-button',
                    cancelButton: 'order-cancel-button'
                }
            }).then((result) => {
                if (result.data12) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
    windowResize() {
      var windowSize = document.documentElement.clientWidth;
      if (windowSize < 1400) {
        document.body.classList.remove("file-detail-show");
      } else {
        document.body.classList.add("file-detail-show");
      }
    },

    fileDetailShow() {
      var bodyElement = document.getElementsByTagName("body")[0];
      Array.from(document.querySelectorAll(".close-btn-overview")).forEach(
        function (item) {
          item.addEventListener("click", function () {
            bodyElement.classList.remove("file-detail-show");
          });
        }
      );

      Array.from(document.querySelectorAll("#file-list tr")).forEach(function (
        item
      ) {
        item
          .querySelector(".viewfile-list")
          .addEventListener("click", function () {
            bodyElement.classList.add("file-detail-show");
            document.getElementById("file-overview").style.display = "block";
            document.getElementById("folder-overview").style.display = "none";

            var filelistId = item.querySelector(".filelist-id").value;
            var filelistIcon = item.querySelector(".filelist-icon i").className;
            var filelistName = item.querySelector(".filelist-name").innerHTML;
            var filelistSize = item.querySelector(".filelist-size").innerHTML;
            var filelistCreate =
              item.querySelector(".filelist-create").innerHTML;
            var filelistType = item.querySelector(".filelist-type").innerHTML;

            document.querySelector("#file-overview .file-icon i").className =
              filelistIcon;
            Array.from(
              document.querySelectorAll("#file-overview .file-name")
            ).forEach(function (elm) {
              elm.innerHTML = filelistName;
            });
            Array.from(
              document.querySelectorAll("#file-overview .file-size")
            ).forEach(function (elm) {
              elm.innerHTML = filelistSize;
            });
            Array.from(
              document.querySelectorAll("#file-overview .create-date")
            ).forEach(function (elm) {
              elm.innerHTML = filelistCreate;
            });
            document.querySelector("#file-overview .file-type").innerHTML =
              filelistType;

            document
              .querySelector("#file-overview .remove-file-overview")
              .setAttribute("data-remove-id", filelistId);
            if (
              item.querySelector(".favourite-btn").classList.contains("active")
            ) {
              document
                .querySelector("#file-overview .favourite-btn")
                .classList.add("active");
            } else {
              document
                .querySelector("#file-overview .favourite-btn")
                .classList.remove("active");
            }
          });
      });
      var isShowMenu = false;
      var emailMenuSidebar = document.getElementsByClassName(
        "file-manager-sidebar"
      );
      Array.from(document.querySelectorAll(".file-menu-btn")).forEach(function (
        item
      ) {
        item.addEventListener("click", function () {
          Array.from(emailMenuSidebar).forEach(function (elm) {
            elm.classList.add("menubar-show");
            isShowMenu = true;
          });
        });
      });

      window.addEventListener("click", function () {
        if (
          document
            .querySelector(".file-manager-sidebar")
            .classList.contains("menubar-show")
        ) {
          if (!isShowMenu) {
            document
              .querySelector(".file-manager-sidebar")
              .classList.remove("menubar-show");
          }
          isShowMenu = false;
        }
      });
    },

    changefolder(title) {
      document.getElementById("folder-list").style.display = "block";
      document.getElementById("filetype-title").innerHTML = title;
    },
    changerecent(title) {
      document.getElementById("folder-list").style.display = "none";
      document.getElementById("filetype-title").innerHTML = title;
    },
    changetitle(title) {
      document.getElementById("filetype-title").innerHTML = title;
    },
    createfolder() {
      var uniqueid = Math.floor(Math.random() * 100);
      var data = {
        name: document.getElementById("foldername-input").value,
        id: uniqueid,
        files: "0",
        storage: "0",
        ischecked: false,
      };
      document.getElementById("addFolderBtn-close").click();
      this.folders.unshift(data);
      document.getElementById("createfolder-form").reset();
    },

    openFileModal() {
      this.fileModal = true;
    },

    openEdit() {
      this.modalShow = true;
    },

    openEditSchedule() {
      this.editModalSchedule = true;
    },

    openFolderModal() {
      this.folderModal = true;
      document.getElementById('createfolder-btn').style.display = 'block';
      document.getElementById('updatefolder-btn').style.display = 'none';
    },

    createNewfile() {
      var fileName = document.getElementById("filename-input").value;
      var uniqueid = Math.floor(Math.random() * 100);

      if (fileName !== "") {
        var data = {
          id: uniqueid,
          fileName: fileName + ".txt",
          filetype: "Documents",
          fileItem: "01",
          fileSize: "0 KB",
          date: new Date().toUTCString().slice(5, 16),
          starred: false,
        };
        document.getElementById("addFileBtn-close").click();
        this.filelist.unshift(data);
        document.getElementById("createfile-form").reset();
      } else {
        console.log('empty');
      }
    },

    fileDataEdit(fileData) {
      this.fileModal = true;
      document.getElementById("modal-id").style.display = "block";
      document.querySelector('.exampleModalLabel').innerHTML = "Update file";
      document.getElementById('updatefile-btn').style.display = 'block';
      document.getElementById('createfile-btn').style.display = 'none';
      document.getElementById('filename-input').value = fileData.fileName;
      document.getElementById('fileId').value = fileData.id;
    },

    updatefile() {
      let result = this.filelist.findIndex(o => o.id == document.getElementById('fileId').value);
      this.filelist[result].fileName = document.getElementById('filename-input').value;
      this.fileModal = false;
    },

    editfolder(folder) {
      this.folderModal = true;
      document.getElementById("modal-id").style.display = "block";
      document.querySelector('.exampleModalLabelFolder').innerHTML = "Update Folder";
      document.getElementById('updatefolder-btn').style.display = 'block';
      document.getElementById('createfolder-btn').style.display = 'none';
      document.getElementById('foldername-input').value = folder.name;
      document.getElementById('folderId').value = folder.id;
    },

    updateFolder() {
      let result = this.folders.findIndex(o => o.id == document.getElementById('folderId').value);
      this.folders[result].name = document.getElementById('foldername-input').value;
      document.getElementById('addFolderBtn-close').click();
    },

    deletefolder(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.folders.splice(this.folders.indexOf(event), 1);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deletefile(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.filelist.splice(this.filelist.indexOf(event), 1);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    toggleFavourite(ele) {
      ele.target.closest(".favourite-btn").classList.toggle("active");
    },
  },
};
</script>



<template>
  <Layout>
    <PageHeader title="Company Detail" pageTitle="System" subTitle="Company" />
    <BRow>
      <BCol lg="12">
        <BCard no-body id="orderList">  
          <BCardHeader class="border-0">
            <div class="mt-xl-0 mt-5">
                  <div class="d-flex">
                    <div class="flex-container">
    <!-- First column: Image -->
    <div class="avatar-container">
      <div class="avatar-md">
        <div class="avatar-title bg-light rounded-circle">
          <img src="@/assets/images/brands/multi-user.png" alt="" class="avatar-sm rounded-circle object-fit-cover" id="imageid" />
        </div>
      </div>
    </div>

    <!-- Second column: Code, Name, Register -->
    <div class="details-container">
      <h4 class="text-primary d-block avatar-text">Alunan Asas</h4>
      <div class="text-muted">
        Full Name : <span class="text-body fw-medium">Alunan Asas Sdn Bhd</span>
      </div>
      <div class="text-muted">
        Registration Number : <span class="text-body fw-medium">257699-V</span>
      </div>
    </div>

    <!-- Third column: Remarks -->
    <div class="remarks-container">
      <p>
        Remarks : <b>Alunan Asas' success stems from its skilled engineering team, extensive machinery, and solid financial backing, positioning it as a leading player in the regional construction and property industry.
        </b></p>
    </div>
  </div>
                    <div class="flex-shrink-0">
                      <div>
                        <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                        data-bs-placement="top" @click="openFileModal">
                            <i class="ri-pencil-fill align-bottom"></i>
                        </BButton>
                      </div>
                    </div>
                  </div>
                    <BCol xl="12" style="margin-top: -10px;">
                      <div class="mt-4">
                        <h5 class="fs-14">Project :</h5>
                        <div class="d-flex flex-wrap gap-2">
                            <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                        <a href="/system/project-detail" class="btn btn-outline-primary btn-border" style="--vz-btn-padding-x: 6px; --vz-btn-padding-y: 3px; font-size: 10px;">AR496</a>
                        <a href="/system/project-detail" class="btn btn-soft-warning btn-border" style="--vz-btn-padding-x: 6px; --vz-btn-padding-y: 3px; font-size: 10px;">BG17-R1</a>
                        <a href="/system/project-detail" class="btn btn-soft-dark btn-border" style="--vz-btn-padding-x: 6px; --vz-btn-padding-y: 3px; font-size: 10px;">BKT22F</a>
                      </div>
                        </div>
                      </div>
                    </BCol><br>

                
                  <BRow>
                    <BCol sm="4">
                      <div class="mt-3">
                        <h5 class="fs-14">Information :</h5>
                        <ul class="list-unstyled">
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Contact Email : 	info@syntycesolution.com
                          </li>
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Contact Person : +601234567
                          </li>
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Join Date : 	09-Jan-2024
                          </li>
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Staff : 	200
                          </li>
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Subscribe : 
                          </li>
                        </ul>
                      </div>
                    </BCol>
                    
                    <BCol sm="8">
                      <div class="mt-3" >
                        <h5 class="fs-14" style="margin-top:15px !important">Location :</h5>
                        <ul class="list-unstyled product-desc-list">
                          <li class="py-1">12 Lorong Limau</li>
                          <li class="py-1">Tamn limau, 13800</li>
                          <li class="py-1">Bukit Jali</li>
                          <li class="py-1">Kuala Lumpur, Malaysia</li>
                        </ul>
                      </div>
                    </BCol>
                  </BRow>
                </div>
          </BCardHeader>
          <BCardBody>
                <BTabs nav-class="nav-tabs-custom card-header-tabs border-bottom-0">
                  <BTab active title="Schedule" class="nav-item pt-4" style="position: relative; top: 10px;">
      <div class="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-3">
        <!-- Sidebar -->
        <div class="file-manager-sidebar border" style="min-width: 160px !important">
          <div class="p-2 d-flex flex-column h-100">
            <div class="mb-3">
              <BButton variant="primary" class="w-100" @click="projectModal = !projectModal" style="padding: 4px !important;">
                <i class="ri-add-line align-bottom"></i> Add
              </BButton>
            </div>
            <ul class="to-do-menu list-unstyled" id="projectlist-data">
              <li><Blink v-b-toggle.velzonAdmin class="nav-link fs-13 active">A</Blink></li>
              <li><Blink v-b-toggle.projectManagement class="nav-link fs-13">KL O1</Blink></li>
              <li><Blink v-b-toggle.projectManagement class="nav-link fs-13">KL S1</Blink></li>
              <li><Blink v-b-toggle.projectManagement class="nav-link fs-13">KL S2</Blink></li>
              <li><Blink v-b-toggle.projectManagement class="nav-link fs-13">PG O1</Blink></li>
            </ul>
          </div>
        </div>
        <!-- Gantt Chart Section -->
        <div class="file-manager-content w-100 p-3 py-0 border" style="min-width: 87%;">

          <div class="d-flex justify-content-between align-items-center mb-3" style="margin-top: 10px;">
  <div class="d-flex align-items-center">
    <span class="me-4" style="width:61px">Code :</span>
    <input type="text" placeholder="A" class="form-control" style="max-width: 300px;padding: 4px;">
  </div>
  <div>
    <BButton type="button" variant="success" @click="submitAction" class="me-2" style="padding: 4px !important;width:35px">
      <i class=" ri-save-line align-bottom"></i>
    </BButton>
    <BButton type="button" variant="danger" @click="deleteAction" style="padding: 4px !important;width:35px">
      <i class="ri-delete-bin-line align-bottom"></i>
    </BButton>
  </div>
</div>



          <!-- Gantt Chart -->
          <div class="gantt-chart-container">
            <div class="gantt-chart-wrapper">
              <table class="gantt-chart" style="font-size: 13px;">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>6:00am</th>
                    <th>7:00am</th>
                    <th>8:00am</th>
                    <th>9:00am</th>
                    <th>10:00am</th>
                    <th>11:00am</th>
                    <th>12:00pm</th>
                    <th>1:00pm</th>
                    <th>2:00pm</th>
                    <th>3:00pm</th>
                    <th>4:00pm</th>
                    <th>5:00pm</th>
                    <th>6:00pm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td  class="bg-success-subtle">Second Start Break Time</td>
                    <td  class="bg-success-subtle">Second End Break Time</td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tuesday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Wednesday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td  class="bg-success-subtle">Second Start Break Time</td>
                    <td  class="bg-success-subtle">Second End Break Time</td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Thursday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td></td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td  class="bg-success-subtle">Second Start Break Time</td>
                    <td  class="bg-success-subtle">Second End Break Time</td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Friday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Saturday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td></td>
                    <td></td>
                    <td  class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td  class="bg-success-subtle">Second Start Break Time</td>
                    <td  class="bg-success-subtle">Second End Break Time</td>
                    <td></td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                  </tr>
                  <tr>
                    <td>Sunday
                      <button style="    border: none;background-color: transparent;" type="button" variant="grey" @click="openEditSchedule">
                        <i class="ri-pencil-fill"></i>
                      </button></td>
                    <td></td>
                    <td></td>
                    <td  class="task bg-info-subtle">Start Working</td>
                    <td></td>
                    <td  class="bg-success-subtle">First Start Break Time</td>
                    <td  class="bg-success-subtle">First End Break Time</td>
                    <td></td>
                    <td  class="bg-success-subtle">Second Start Break Time</td>
                    <td  class="bg-success-subtle">Second End Break Time</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td  class="task bg-info-subtle">End Working</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </BTab>
                    <BTab title="Access Permission" class="nav-item pt-1" style="position: relative; top: 10px;">
                        <div class="card-body" >
                        <div class="listjs-table" id="customerList">
                            
                            <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                                <table class="table align-middle table-nowrap" id="tabularPermission">
                                    <thead class="table-light">
                                        <tr>
                                            <th></th>
                                            <th>Permissions</th>
                                            <th>AC</th>
                                            <th>ADMIN</th>
                                            <th>APM</th>
                                            <th>CM</th>
                                            <th>PD</th>
                                            <th>PM</th>
                                            <th>PURC</th>
                                            <th>QC</th>
                                            <th>QS</th>
                                            <th>SA</th>
                                            <th>SITE</th>
                                            <th>SSA</th>
                                            <th>VIEW</th>
                                        </tr>
                                    </thead>
                                    <tbody class="list form-check-all">
                                        <tr>
                                            <td @click="toggleRow('row1')" :class="{'collapsed': collapsedRows['row1']}">
                                                <button type="button" class="btn btn-sm" aria-expanded="false">
                                                    <i style="font-size: 20px;" :class="collapsedRows['row1'] ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i>
                                                </button>
                                            </td>
                                            <td>
                                                Attendance
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-check form-check-outline form-check-success">
                                                    <input class="form-check-input" type="checkbox" id="formCheck15" checked>
                                                    <label class="form-check-label" for="formCheck15">
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-show="collapsedRows['row1']" class="collapseRow">
                                            <td></td>
                                            <td colspan="1">Edit Attendance</td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck1" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck2" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck3" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck4" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck5" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck6" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck7" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck8" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck9" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck10" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck11" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck12" checked></div></td>
                                            <td><div class="form-check form-check-outline form-check-success"><input class="form-check-input" type="checkbox" id="formCheck13" checked></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </BTab> 

              
                </BTabs>
            </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BModal v-model="modaltoAdd" modal-class="zoomIn" header-class="p-3 bg-primary-subtle" content-class="border-0" hide-footer
                title="Create Permission" class="v-modal-custom" centered no-close-on-backdrop no-fade>
                <BForm action="#">
                    <BRow class="g-3">
                        <BCol lg="6">
                            <label for="module" class="form-label">Module</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter module">
                        </BCol>
                        <BCol lg="6">
                            <label for="permission" class="form-label">Permission</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter permission">
                        </BCol>
                        <div class="hstack gap-2 justify-content-end">
                            <BButton type="button" variant="ghost-success" @click="modaltoAdd = false"><i class="ri-close-line align-bottom"></i>Cancel</BButton>
                            <BButton type="submit" variant="primary" id="addNewBoard">Create</BButton>
                        </div>
                    </BRow>
                </BForm>        
            </BModal>

            <BModal v-model="modalAdd" modal-class="zoomIn" header-class="p-3 bg-primary-subtle" content-class="border-0" hide-footer
                title="Create Role" class="v-modal-custom" centered no-close-on-backdrop no-fade>
                <BForm action="#">
                    <BRow class="g-3">
                        <BCol lg="12">
                            <label for="module" class="form-label">Role</label>
                            <input type="text" class="form-control" id="boardName" placeholder="Enter role">
                        </BCol>
                        <div class="hstack gap-2 justify-content-end">
                            <BButton type="button" variant="ghost-success" @click="modalAdd = false"><i class="ri-close-line align-bottom"></i>Cancel</BButton>
                            <BButton type="submit" variant="primary" id="addNewBoard">Create</BButton>
                        </div>
                    </BRow>
                </BForm>        
            </BModal>

        <BModal v-model="projectModal" hide-footer title="Create Code" class="v-modal-custom" modal-class="zoomIn"
            centered header-class="p-3 bg-success-subtle">
            <BForm id="projectForm" autocomplete="off" class="needs-validation createProject-form" novalidate>
                <div class="mb-4">
                    <label for="projectname-input" class="form-label">Code</label>
                    <input type="text" class="form-control" id="projectname-input" autocomplete="off"
                        placeholder="Enter Code" required>
                    <div class="invalid-feedback">Please enter a Code</div>
                    <input type="hidden" class="form-control" id="projectid-input" data12=""
                        placeholder="Enter Code">
                </div>
                <div class="hstack gap-2 justify-content-end">
                    <BButton type="button" variant="ghost-success" id="addProjectBtn-close"
                        @click="projectModal = false"><i class="ri-close-line align-bottom"></i> Close</BButton>
                    <BButton type="submit" variant="primary" id="addNewProject">Add Code
                    </BButton>
                </div>
            </BForm>
        </BModal>

        <BModal v-model="modalShow" hide-footer title="Schedule" body-class="p-4" content-class="border-0" header-class="p-3 ps-4 bg-success-subtle" class="v-modal-custom" 
        centered size="lg">
            <BRow >
            <BCol md="12" class="mb-3">
            <BFormGroup label="Code Name :" label-for="rfid">
                <BFormInput id="rfid" readonly placeholder="A" />
            </BFormGroup>

            </BCol>
        </BRow>

        
        

      
        <div class="modal-footer v-modal-footer">
            <button type="button" class="btn w-sm btn-danger" >Delete</button>
            <button type="button" class="btn w-sm btn-primary" @click="deleteData">Submit</button>
        </div>
        </BModal>


        <BModal v-model="editModalSchedule" hide-footer title="Schedule : Monday" body-class="p-4" content-class="border-0" header-class="p-3 ps-4 bg-success-subtle" class="v-modal-custom" 
    centered size="lg">
    
    <!-- Start Working and End Working Inputs -->
    <BRow class="mb-3">
        <BCol md="6">
            Start Working:
            <BFormInput type="time" class="form-control" />
        </BCol>
        <BCol md="6">
            End Working:
            <BFormInput type="time" class="form-control" />
        </BCol>
    </BRow>

    <!-- Add Button as Icon in Top Right -->
    <div class="d-flex justify-content-end mb-3">
        <BButton type="button" variant="success" @click="addBreakTime" class="p-0" style="width: 35px;height: 38px;font-size: 22px;">
            <i class="ri-add-line icon-size"></i>
        </BButton>
    </div>

    <!-- Break Times Table -->
    <div class="mb-3">
        <table class="table">
            <thead>
                <tr>
                    <th>Break Time</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Repeat for each break time entry -->
                <tr>
                    <td>1. Break Time</td>
                    <td>
                        <BFormInput type="time" class="form-control" value="12:30" />
                    </td>
                    <td>
                        <BFormInput type="time" class="form-control" value="13:00" />
                    </td>
                    <td>
                        <BButton type="button" variant="danger" @click="deleteBreakTime" class="ms-2 p-0" style="width: 35px;height: 38px;font-size: 22px;">
                            <i class="ri-delete-bin-2-line icon-size"></i>
                        </BButton>
                    </td>
                </tr>
                <tr>
                    <td>2. Break Time</td>
                    <td>
                        <BFormInput type="time" class="form-control" value="13:30" />
                    </td>
                    <td>
                        <BFormInput type="time" class="form-control" value="14:00" />
                    </td>
                    <td>
                        <BButton type="button" variant="danger" @click="deleteBreakTime" class="ms-2 p-0" style="width: 35px;height: 38px;font-size: 22px;">
                            <i class="ri-delete-bin-2-line icon-size"></i>
                        </BButton>
                    </td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>

    <div class="modal-footer v-modal-footer">
        <button type="button" class="btn w-sm btn-grey">Close</button>
        <button type="button" class="btn w-sm btn-primary" @click="deleteData">Submit</button>
    </div>
</BModal>

      
        <BModal v-model="fileModal" hide-footer title="Edit Company"
      header-class="bg-primary-subtle p-3" class="v-modal-custom" centered size="lg"
      >
      <b-form id="addform" class="tablelist-form" autocomplete="off">
        <input type="hidden" id="id">
        <BRow class="g-3">
          <BCol lg="4">
            <div>
              <label for="companyname" class="form-label">Name</label>
              <input type="text" id="companyname" class="form-control" placeholder="Enter company name"
               >
              <div class="invalid-feedback">Please enter a company name.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="ownername" class="form-label">Code</label>
              <input type="text" id="ownername" class="form-control" placeholder="Enter code" >
              <div class="invalid-feedback">Please enter a code.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="" class="form-label">Registeration Number</label>
              <input type="text" id="" class="form-control" placeholder="Enter registeration number"
             >
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="starvalue" class="form-label">Address 1</label>
              <input type="text" id="starvalue" class="form-control" placeholder="Enter address 1" >
              <div class="invalid-feedback">Please enter a address 1.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="location" class="form-label">Address 2</label>
              <input type="text" id="location" class="form-control" placeholder="Enter address 2">
              <div class="invalid-feedback">Please enter a address 2.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">Address 3</label>
              <input type="text" id="employee" class="form-control" placeholder="Enter address 3" >
              <div class="invalid-feedback">Please enter a address 3.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="starvalue" class="form-label">Postcode</label>
              <input type="text" id="starvalue" class="form-control" placeholder="Enter postcode" >
              <div class="invalid-feedback">Please enter a postcode.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="location" class="form-label">City</label>
              <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select City</option>
                  <option value="Merchandising">Bukit Mertajam</option>
                  </select>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">State</label>
              <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select State</option>
                  <option value="Merchandising">Pulau Pinang</option>
                  </select>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">Country</label>
              <select class="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                  <option value="" selected>Select Country</option>
                  <option value="Merchandising">Malaysia</option>
                  </select>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="website" class="form-label">Prefix</label>
              <input type="text" id="website" class="form-control" placeholder="Enter Prefix" >
              <div class="invalid-feedback">Please enter a Prefix.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="contactemail" class="form-label">Contact Email</label>
              <input type="text" id="contactemail" class="form-control" placeholder="Enter contact email"
             >
              <div class="invalid-feedback">Please enter a email.</div>
            </div>
          </BCol>
          <BCol lg="4">
            <div>
              <label for="employee" class="form-label">Contact Person</label>
              <input type="text" id="employee" class="form-control" placeholder="Enter Contact Person" >
              <div class="invalid-feedback">Please enter a Contact Person.</div>
            </div>
          </BCol>
          <BCol lg="8">
            <div>
              <label for="since" class="form-label">Note</label>
              <input type="text" id="since" class="form-control" placeholder="Enter note" >
              <div class="invalid-feedback">Please enter a note.</div>
            </div>
          </BCol>
        </BRow>
        <div class="hstack gap-2 justify-content-end mt-3">
          <BButton type="button" variant="light" id="closemodal" @click="addCompanyModal = false">Close</BButton>
          <BButton type="button" variant="success" id="add-btn" @click="handleSubmit">
            Update
          </BButton>
        </div>
      </b-form>
    </BModal>
  
  </Layout>
</template>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adjust the gap between columns as needed */
}

.avatar-container {
  flex: 0 0 auto; /* Fix the image size */
}

.details-container {
  width: 25%
}

.remarks-container {
  flex: 1; /* This will ensure the remarks take up available space */
  margin-top: 30px;
}

.avatar-md {
  width: 80px; /* Adjust the size of the avatar image */
  height: 80px;
}

.avatar-title img {
  width: 100%;
  height: 100%;
}

.fs-14 {
  font-size: 14px;
}

.gantt-chart {
  width: 100%;
  border-collapse: collapse;
}

.gantt-chart th,
.gantt-chart td {
  border: 1px solid #ddd;
  padding: 6px;
  text-align: center;
}

.gantt-chart thead {
  background-color: #f4f4f4;
}

</style>