<script>
import Layout from "@/layouts/main.vue";
import Swal from "sweetalert2";
import { folderList, fileList } from "@/common/data";
import simplebar from "simplebar-vue"
import getChartColorsArray from "@/common/getChartColorsArray";
import PageHeader from "@/components/page-header";
import { reactive } from 'vue';

export default {
  data() {
    return {
      fileModal: false,
      folderModal: false,
      filename_input: '',
      value: "File Type",
      folders: folderList,
      filelist: fileList,
      modalShow: false,
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
    simplebar,
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
    <PageHeader title="Company Detal;" pageTitle="System" subTitle="Company" />
    <BRow>
      <BCol lg="12">
        <BCard no-body id="orderList">  
          <BCardHeader class="border-0">
            <div class="mt-xl-0 mt-5">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                        <div class="avatar-container">
                            <div class="avatar-md">
                                <div class="avatar-title bg-light rounded-circle">
                                    <img src="@/assets/images/brands/multi-user.jpg" alt=""
                                        class="avatar-sm rounded-circle object-fit-cover" id="imageid" />
                                </div>
                            </div>
                            <h4 class="avatar-text">Alunan Asas</h4>
                        </div>
                      <div class="hstack gap-3 flex-wrap">
                        <div>
                          <BLink href="#" class="text-primary d-block">Alunan Asas Sdn Bhd</BLink>
                        </div>
                        <div class="vr"></div>
                        <div class="text-muted">
                            Registeration Number :
                          <span class="text-body fw-medium">257699-V</span>
                        </div>
                        <div class="vr"></div>
                        <div class="text-muted">
                          Contract Period End :
                          <span class="text-body fw-medium">26 Mar, 2024</span>
                        </div>
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
                  <div class="mt-4 text-muted">
                    <h5 class="fs-14">Remarks :</h5>
                    <p>
                        Alunan Asas' success stems from its skilled engineering team, extensive machinery, 
                        and solid financial backing, positioning it as a leading player in the regional 
                        construction and property industry.
                    </p>
                  </div>


                  <BRow>
                    <BCol xl="6">
                      <div class="mt-4">
                        <h5 class="fs-14">Project :</h5>
                        <div class="d-flex flex-wrap gap-2">
                          <div v-b-tooltip.hover title="Out of Stock">
                            <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio1"
                              disabled />
                              <span class="badge badge-label bg-info"><i class="mdi mdi-circle-medium"></i>AR496</span>
                     
                          </div>

                          <div v-b-tooltip.hover title="04 Items Available">
                            <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio2" />
                            <span class="badge badge-label bg-info"><i class="mdi mdi-circle-medium"></i>BG17-R1</span>
                          </div>
                          <div v-b-tooltip.hover title="06 Items Available">
                            <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio3" />
                      <span class="badge badge-label bg-info"><i class="mdi mdi-circle-medium"></i>BKT22F</span>
                          </div>

                          <div v-b-tooltip.hover title="Out of Stock">
                            <input type="radio" class="btn-check" name="productsize-radio" id="productsize-radio4"
                              disabled />
                              <span class="badge badge-label bg-info"><i class="mdi mdi-circle-medium"></i>BJO-B3B4</span>
                          </div>
                        </div>
                      </div>
                    </BCol>
                  </BRow>

                
                  <BRow>
                    <BCol sm="6">
                      <div class="mt-3">
                        <h5 class="fs-14">Information :</h5>
                        <ul class="list-unstyled">
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Contact Email : 	info@syntycesolution.com
                          </li>
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Since : 1993
                          </li>
                          <li class="py-1">
                            <i class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                            Subscribe : 
                          </li>
                        </ul>
                      </div>
                    </BCol>
                    <BCol sm="6">
                      <div class="mt-3">
                        <h5 class="fs-14">Location :</h5>
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
                        <div class="file-manager-sidebar border"  >
                            <div class="p-2 d-flex flex-column h-100">
                                <div class="mb-3">
                                    <BButton variant="primary" class="w-100" @click="projectModal = !projectModal" ><i
                                            class="ri-add-line align-bottom" ></i> Add</BButton>
                                </div>
                                <ul class="to-do-menu list-unstyled" id="projectlist-data">
                                    <li>
                                        <Blink v-b-toggle.velzonAdmin class="nav-link fs-13 active" >
                                            A</Blink>
                                    </li>
                                    <li>
                                        <Blink v-b-toggle.projectManagement class="nav-link fs-13" >
                                            KL O1</Blink>
                                    </li>
                                    <li>
                                        <Blink v-b-toggle.projectManagement class="nav-link fs-13">
                                            KL S1</Blink>
                                    </li>
                                    <li>
                                        <Blink v-b-toggle.projectManagement class="nav-link fs-13">
                                            KL S2</Blink>
                                    </li>
                                    <li>
                                        <Blink v-b-toggle.projectManagement class="nav-link fs-13">
                                            PG O1</Blink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--end side content-->
                        <div class="file-manager-content w-100 p-3 py-0 border">
                            <simplebar class="mx-n3 pt-4 px-4 file-manager-content-scroll" data-simplebar>
                            <div id="folder-list" class="mb-2">
                                <BRow class="justify-content-beetwen g-2 mb-3">
                                <BCol>
                                    <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2 d-block d-lg-none">
                                        <BButton variant="soft-success" size="sm" type="button" class="btn-icon fs-16 file-menu-btn">
                                        <i class="ri-menu-2-fill align-bottom"></i>
                                        </BButton>
                                        
                                    </div>
                                    </div>
                                </BCol>
                                </BRow>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Monday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Tuesday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Wednesday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Thursday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Friday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Saturday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                                <BCard no-body class="product">
                                <BCardBody>
                                    <BRow class="gy-3">
                                    <h3>Sunday</h3>
                                    <BCol sm>
                                        <ul class="list-inline text-muted">
                                        <li class="list-inline-item">
                                            Start Working Hours :  <span class="fw-medium">8:00am</span>
                                        </li>
                                        <li class="list-inline-item" style="margin-left: 240px;">
                                            End Working Hours :  <span class="fw-medium">17:30pm</span>
                                        </li>
                                        </ul>
                                    </BCol>
                                    <BCol sm="auto" style="margin-top: -43px;">
                                    <BButton type="button" variant="success" class="btn btn-light" data-bs-toggle="tooltip"
                                    data-bs-placement="top" @click="openEdit">
                                        <i class="ri-pencil-fill align-bottom"></i>
                                    </BButton>
                                    </BCol>
                                    </BRow>
                                    
                                    <BRow class="mt-3">
                                        <BCol sm>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Start Break Time</th>
                                                        <th>End Break Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 PM</td>
                                                        <td>1:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>5:30 PM</td>
                                                        <td>6:30 PM</td>
                                                        <td>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-edit-2-fill text-muted me-2"></i>
                                                            </BLink>
                                                            <BLink href="#" class="text-body p-1 px-2">
                                                                <i class="ri-delete-bin-fill text-muted"></i>
                                                            </BLink>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                                </BCard>

                            </div>
                            </simplebar>
                        </div>
                    </div>
                    </BTab>
                    <BTab title="Access Permission" class="nav-item pt-1" style="position: relative; top: 10px;">
                        <div class="card-body" >
                        <div class="listjs-table" id="customerList">
                            <div class="row g-4 mb-3">
                                <div class="col-sm-auto">
                                    <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="modaltoAdd = !modaltoAdd" style="margin-right: 10px;">
                                        <i class="ri-add-line align-bottom me-1"></i> Add Permission
                                    </button>
                                    <button class="btn btn-soft-danger" @click="deleteAlert">
                                        <i class="ri-delete-bin-2-line"></i>
                                    </button>
                                </div>
                                <div class="col-sm">
                                    <div class="d-flex justify-content-sm-end">
                                        <div class="search-box ms-2">
                                            <input type="text" class="form-control search" placeholder="Search...">
                                            <i class="ri-search-line search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

                    <BTab title="Member Roles" class="nav-item pt-1" style="position: relative; top: 10px;">
                        <div class="card-body" >
                        <div class="listjs-table" id="customerList">
                            <div class="row g-4 mb-3">
                                <div class="col-sm-auto">
                                    <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="modalAdd = !modalAdd" style="margin-right: 10px;">
                                        <i class="ri-add-line align-bottom me-1"></i> Add Role
                                    </button>
                                    <button class="btn btn-soft-danger" @click="deleteAlert">
                                        <i class="ri-delete-bin-2-line"></i>
                                    </button>
                                </div>
                                <div class="col-sm">
                                    <div class="d-flex justify-content-sm-end">
                                        <div class="search-box ms-2">
                                            <input type="text" class="form-control search" placeholder="Search...">
                                            <i class="ri-search-line search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive table-card mt-3 mb-1" style="max-height: 500px; overflow: auto;">
                                <table class="table align-middle table-nowrap" id="tabularPermission">
                                    <thead class="table-light">
                                        <tr>
                                            <th></th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="list form-check-all">
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                </div>
                                            </td>
                                            <td>
                                                Project Director
                                            </td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <div class="edit">
                                                        <button class="btn btn-sm btn-success edit-item-btn" @click="showModal(true)">Edit</button>
                                                    </div>
                                                    <div class="remove">
                                                        <button class="btn btn-sm btn-danger remove-item-btn" @click="deleteAlert">Remove</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                </div>
                                            </td>
                                            <td>
                                                Project Manager
                                            </td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <div class="edit">
                                                        <button class="btn btn-sm btn-success edit-item-btn" @click="showModal(true)">Edit</button>
                                                    </div>
                                                    <div class="remove">
                                                        <button class="btn btn-sm btn-danger remove-item-btn" @click="deleteAlert">Remove</button>
                                                    </div>
                                                </div>
                                            </td>
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

        <BModal v-model="modalShow" hide-footer title="Schedule" body-class="p-4" content-class="border-0" header-class="p-3 ps-4 bg-success-subtle" class="v-modal-custom" centered>
            <BRow>
            <BCol md="12" class="mb-3">
            <BFormGroup label="Start Working Hours :" label-for="rfid">
                <BFormInput id="rfid" readonly />
            </BFormGroup>

            <BFormGroup label="End Working Hours :" label-for="rfid">
                <BFormInput id="rfid" readonly />
            </BFormGroup><br><br>

            <button type="button" class="btn btn-soft-primary" style="margin-left: 89%;">
                <i class="ri-add-line align-bottom me-1"></i>
            </button>

            <BFormGroup label="Start Break Time:" label-for="name">
                <BFormInput id="name" readonly />
            </BFormGroup>

            <BFormGroup label="End Break Time:" label-for="project">
                <BFormInput id="project" readonly />
            </BFormGroup>
            </BCol>
        </BRow>

      
        <div class="modal-footer v-modal-footer">
            <button type="button" class="btn w-sm btn-light" @click="fileModal = false">Close</button>
            <button type="button" class="btn w-sm btn-primary" @click="deleteData">Submit</button>
        </div>
        </BModal>

  
        <BModal v-model="fileModal" hide-footer title="Edit Company" dialog-class="modal-fullscreen-xl-down" class="v-modal-custom">
            <BRow>
                <BCol md="12" class="mb-3">
                <BFormGroup label="Code :" label-for="rfid">
                    <BFormInput id="rfid" readonly />
                </BFormGroup>

                <BFormGroup label="Name :" label-for="rfid">
                    <BFormInput id="rfid" readonly />
                </BFormGroup>


                <BFormGroup label="Email:" label-for="project">
                    <BFormInput id="project" readonly />
                </BFormGroup>

                <BFormGroup label="Address 1:" label-for="skillSet">
                    <BFormInput id="skillSet" readonly />
                </BFormGroup>

                <BFormGroup label="Address 2:" label-for="subcon">
                    <BFormInput id="subcon" readonly />
                </BFormGroup>

                <BFormGroup label="Postcode:" label-for="subcon">
                    <BFormInput id="subcon" readonly />
                </BFormGroup>

                <BFormGroup label="City:" label-for="subcon">
                    <BFormInput id="subcon" readonly />
                </BFormGroup>

                <BFormGroup label="State:" label-for="subcon">
                    <BFormInput id="subcon" readonly />
                </BFormGroup>

                <BFormGroup label="Country:" label-for="subcon">
                    <BFormInput id="subcon" readonly />
                </BFormGroup>
                </BCol>
            </BRow>

        <!-- Row 2: Remark Field -->
        <BRow>
            <BCol md="12" class="mb-3">
            <BFormGroup label="Remark:" label-for="remark">
                <BFormTextarea id="remark" rows="3" />
            </BFormGroup>
            </BCol>
        </BRow>

        <!-- Modal Footer -->
        <div class="modal-footer v-modal-footer">
            <button type="button" class="btn w-sm btn-light" @click="fileModal = false">Close</button>
            <button type="button" class="btn w-sm btn-primary" @click="deleteData">Submit</button>
            </div>
        </BModal>
  </Layout>
</template>

<style>
.avatar-container {
    display: flex;
    align-items: center;
}

.avatar-md {
    margin-right: 10px; /* Space between the image and text */
}

.avatar-text {
    margin: 0; /* Remove default margin */
    font-size: 1.25rem; /* Adjust the font size as needed */
}

</style>