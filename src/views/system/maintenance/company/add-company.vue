<script>

import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/widgets/dropZone";
import Swal from "sweetalert2";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  components: {
    Layout,
    PageHeader,
    DropZone,
  },
  data() {
    return {
      addCompanyModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.addCompanyModal = true;
    },
    deleteRecord(index) {
      this.files.splice(index, 1);
      this.filePreviews.splice(index, 1);
    },
    resetFileInput() {
      // Reset the file input element if using one
      const input = document.querySelector(".dropzoneFile");
      if (input) input.value = "";
    },
    successmsg() {
      Swal.fire("Upload Successful!", "Your poster has been successfully uploaded ", "success");
    },
    customBackground() {
      if (this.files.length) {
        const filePreview = this.filePreviews[0]; 
        Swal.fire({
          width: '50%',
          padding: 0,
          showConfirmButton: false,
          customClass: {
            popup: 'swal-custom-popup',
          },
          html: filePreview.includes('image')
            ? `<img src="${filePreview}" />`
            : `<video src="${filePreview}" controls></video>`,
        });
      } else {
        Swal.fire({
          title: 'No File Uploaded',
          text: 'Please upload a file to preview.',
          icon: 'warning',
        });
      }
    },
  },
  setup() {
    let files = ref([]);
    let filePreviews = ref([]);
    let dropzoneFile = ref("");

    const createPreview = (file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        filePreviews.value.push(event.target.result);
      };
      reader.readAsDataURL(file);
    };

    const drop = (e) => {
      e.preventDefault(); // Prevent default behavior
      const file = e.dataTransfer.files[0];
      files.value.push(file);
      createPreview(file);
      // Prevent further events if necessary
    };

    const selectedFile = () => {
      const input = document.querySelector(".dropzoneFile");
      if (input.files.length) {
        const file = input.files[0];
        files.value.push(file);
        createPreview(file);
        // Reset the file input
        input.value = "";
      }
    };

    watch(
      () => [...files.value],
      (currentValue) => {
        return currentValue;
      }
    );

    return { dropzoneFile, files, filePreviews, drop, selectedFile, v$: useVuelidate() };
  },
};
</script>
<template>
  <Layout>
    <PageHeader title="" pageTitle="" />

    <BRow>
      <BCol lg="8">
        <form>
          <BCard no-body>
            <BCardHeader class="bg-dark-subtle">
            <h5 class="card-title mb-0">Add New Company</h5>
          </BCardHeader>
            <BCardBody>
  <!-- Flex container for left and right sections -->
  <div class="d-flex justify-content-between align-items-start">
    <!-- Company Image Section (Left) -->
    <div class="w-50 me-3">
      <h5 class="fs-13 mb-1 text-muted">Company Image 
        <span class="text-danger" style="font-size: 11px;">(full size)</span>
      </h5>
      <template v-if="!files.length">
        <DropZone @drop.prevent="drop" @change="selectedFile" style="height: 100%; row-gap: 1px; min-height: 97px !important;width: 326px;margin-top: 12px;" />
      </template>
      <template v-else>
                      <ul class="list-unstyled mb-0" id="dropzone-preview">
                          <div class="border rounded" v-for="(file, index) of files" :key="index">
                              <div class="d-flex p-2">
                                  <div class="flex-grow-1">
                                      <div class="pt-1">
                                          <h5 class="fs-14 mb-1">
                                              {{ file.name }}
                                          </h5>
                                          <p class="fs-13 text-muted mb-0">
                                              <strong>{{ (file.size / 1024).toFixed(2) }}</strong> KB
                                          </p>
                                      </div>
                                  </div>
                                  <div class="flex-shrink-0 ms-3">
                                      <BButton class="btn btn-soft-danger" size="sm" @click="deleteRecord(index)">
                                          Remove
                                      </BButton>
                                  </div>
                              </div>
                              <div v-if="filePreviews[index]">
                                  <img v-if="file.type.startsWith('image/')" :src="filePreviews[index]" class="img-fluid mt-2" style="max-width: 100%; height: auto;" />
                                  <video v-if="file.type.startsWith('video/')" :src="filePreviews[index]" class="img-fluid mt-2" controls style="max-width: 100%; height: auto;" />
                              </div>
                          </div>
                      </ul>
                  </template>
    </div>

    <!-- Company Logo Section (Right) -->
    <div class="w-50">
      <h5 class="fs-13 mb-1 text-muted">Company Logo 
        <span class="text-danger" style="font-size: 11px;">(200px * 200px)</span>
      </h5>
      <template v-if="!files.length">
        <DropZone @drop.prevent="drop" @change="selectedFile" style="height: 100%; row-gap: 1px; min-height: 97px !important;width: 326px;margin-top: 12px;" />
      </template>
      <template v-else>
                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                      <div class="border rounded mb-2" v-for="(file, index) of files" :key="index">
                        <div class="d-flex align-items-center p-2">
                          <div class="flex-shrink-0">
                            <!-- Profile picture styling -->
                            <img 
                              v-if="file.type.startsWith('image/')" 
                              :src="filePreviews[index]" 
                              class="img-fluid rounded-circle" 
                              style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;" 
                            />
                            <video 
                              v-if="file.type.startsWith('video/')" 
                              :src="filePreviews[index]" 
                              class="img-fluid mt-2" 
                              controls 
                              style="max-width: 100%; height: auto;" 
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <div class="pt-1">
                              <h5 class="fs-14 mb-1">
                                {{ file.name }}
                              </h5>
                              <p class="fs-13 text-muted mb-0">
                                <strong>{{ (file.size / 1024).toFixed(2) }}</strong> KB
                              </p>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-3">
                            <BButton class="btn btn-soft-danger" size="sm" @click="deleteRecord(index)">
                              Remove
                            </BButton>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </template>
    </div>
  </div>
</BCardBody>


 
            <BCardBody>
              <br>
              <label style="font-size: 14px;text-decoration: underline;"><b>Company Information</b></label><br><br>

              <div class="row mb-2">
  <div class="col">
    <label class="form-label text-muted" for="company-name-input">Company Name</label>
    <input type="text" class="form-control" id="company-name-input" placeholder="Alunan Asas Sdn Bhd" />
  </div>
  <div class="col">
    <label class="form-label text-muted" for="registration-no-input">Registration No</label>
    <input type="text" class="form-control" id="registration-no-input" placeholder="AL1283722" />
  </div>
</div>
<div class="row mb-2">
  <div class="col">
    <label class="form-label text-muted" for="prefix-input">Website</label>
    <input type="link" class="form-control" id="prefix-input" placeholder="https://alunan.asas.com" />
  </div>
  <div class="col">
    <label class="form-label text-muted" for="company-name-input">Contact Person</label>
    <input type="text" class="form-control" id="company-name-input" placeholder="Mr Hui Yong" />
  </div>
</div>
<div class="row mb-2">
  <div class="col">
    <label class="form-label text-muted" for="registration-no-input">Phone</label>
    <input type="text" class="form-control" id="registration-no-input" placeholder="+60123456789" />
  </div>
  <div class="col">
    <label class="form-label text-muted" for="prefix-input">Email</label>
    <input type="text" class="form-control" id="prefix-input" placeholder="alunanasas@gmail.com.my" />
  </div>
</div>

              <br>
              <label style="font-size: 14px;text-decoration: underline;"><b>Address Information</b></label><br><br>

            <div class="row mb-2">
  <div class="col">
    <label class="form-label text-muted" for="company-name-input">Address 1</label>
    <input type="text" class="form-control" id="company-name-input" placeholder="15 Jalan Seri" />
  </div>
<div class="col">
    <label class="form-label text-muted" for="registration-no-input">Address 2</label>
    <input type="text" class="form-control" id="registration-no-input" placeholder="Taman Seri 14" />
  </div>
</div>
<div class="row mb-2">
  <div class="col">
    <label class="form-label text-muted" for="company-name-input">Postcode </label>
    <input type="text" class="form-control" id="company-name-input" placeholder="13100" />
  </div>
 
  <div class="col">
    <label class="form-label text-muted" for="registration-no-input">City</label>
    <input type="text" class="form-control" id="registration-no-input" placeholder="Bukit Mertajam" />
  </div>
</div>

<div class="row mb-2">
  <div class="col">
    <label class="form-label text-muted" for="company-name-input">State </label>
    <input type="text" class="form-control" id="company-name-input" placeholder="Pulau Pinang" />
  </div>

  <div class="col">
    <label class="form-label text-muted" for="registration-no-input">Country</label>
    <input type="text" class="form-control" id="registration-no-input" placeholder="Malaysia" />
  </div>
  </div>
<br>
  <div class="row mb-1">
              <div>
                <label class="text-muted" style="font-size: 13px;">Remark (only visible to SSA)</label>
                <input type="text" class="form-control" id="prefix-input" placeholder="Enter remark" />
              </div></div>

            </BCardBody>
          </BCard>
        </form>
      </BCol>


      <BCol lg="4">
        <BCard no-body>
          <BCardHeader class="bg-dark-subtle">
            <h5 class="card-title mb-0">Subscription</h5>
          </BCardHeader>
          <BCardBody >
              <BRow class="g-0">
            <BCol lg="6">
              <BCardBody class="h-100">
                <div class="d-flex align-items-center">
  <!-- Checkbox button on the left -->
  <input 
    type="checkbox" 
    class="form-check-input me-2" 
    style="width: 20px; height: 20px; cursor: pointer;" 
  />
  <!-- Heading -->
  <h5 class="mb-1" style="margin-top:10px;margin-bottom: 5px;">Basic Plans</h5>
</div>
<p class="text-muted">Your basic plan expires on<br> <b>13-Sep-2025</b></p>


                <div class="py-3">
                  <h2>
                    <sup><small>$</small></sup>22 <span class="fs-13 text-muted"> /Per month</span>
                  </h2>
                </div>
              </BCardBody>
            </BCol>
            <BCol lg="6">
              <BCardBody class="border-start mt-4 mt-lg-0">
                <BCardHeader class="bg-light">
                  <h5 class="fs-15 mb-0">Plan Features:</h5>
                </BCardHeader>
                <BCardBody class="pb-0">
                  <ul class="list-unstyled vstack gap-3 mb-0">
                    <li>
                      Company: <span class="text-success fw-semibold">10</span>
                    </li>
                    <li>
                      Storage:
                      <span class="text-success fw-semibold">01 GB</span>
                    </li>
                  </ul>
                </BCardBody>
              </BCardBody>
            </BCol>
          </BRow>
          <hr  style="margin: -24px 0px 16px 0px;opacity: 0.10;" />

              <BRow class="g-0">
            <BCol lg="6">
              <BCardBody class="h-100">
                <div class="d-flex align-items-center">
  <!-- Checkbox button on the left -->
  <input 
    type="checkbox" 
    class="form-check-input me-2" 
    style="width: 20px; height: 20px; cursor: pointer;" 
  />
  <!-- Heading -->
  <h5 class="mb-1" style="margin-top:10px">Business Plans</h5>
</div>
 <p class="text-muted">Your business plan expires on <b>13-Sep-2026</b></p>


                <div class="py-2">
                  <h2>
                    <sup><small>$</small></sup>33 <span class="fs-13 text-muted"> /Per month</span>
                  </h2>
                </div>
              </BCardBody>
            </BCol>
            <BCol lg="6">
              <BCardBody class="border-start mt-4 mt-lg-0">
                <BCardHeader class="bg-light">
                  <h5 class="fs-15 mb-0">Plan Features:</h5>
                </BCardHeader>
                <BCardBody class="pb-0">
                  <ul class="list-unstyled vstack gap-3 mb-0">
                    <li>
                      Company: <span class="text-success fw-semibold">20</span>
                    </li>
                    <li>
                      Storage:
                      <span class="text-success fw-semibold">05 GB</span>
                    </li>
                  </ul>
                </BCardBody>
              </BCardBody>
            </BCol>
          </BRow>
           <hr  style="margin: -9px 0px 16px 0px;opacity: 0.10;" />
          
              <BRow class="g-0">
            <BCol lg="6">
              <BCardBody class="h-100">
                <div class="d-flex align-items-center">
  <!-- Checkbox button on the left -->
  <input 
    type="checkbox" 
    class="form-check-input me-2" 
    style="width: 20px; height: 20px; cursor: pointer;" 
  checked />
  <!-- Heading -->
  <h5 class="mb-1" style="margin-top:10px">Enterprise Plans</h5>
</div>
<p class="text-muted">Your enterprise plan expires on <b>13-Sep-2029</b></p>


                <div class="py-3">
                  <h2>
                    <sup><small>$</small></sup>55 <span class="fs-13 text-muted"> /Per month</span>
                  </h2>
                </div>
              </BCardBody>
            </BCol>
            <BCol lg="6">
              <BCardBody class="border-start mt-4 mt-lg-0">
                <BCardHeader class="bg-light">
                  <h5 class="fs-15 mb-0">Plan Features:</h5>
                </BCardHeader>
                <BCardBody class="pb-0">
                  <ul class="list-unstyled vstack gap-3 mb-0">
                    <li>
                      Company: <span class="text-success fw-semibold">Unlimited</span>
                    </li>
                    <li>
                      Storage:
                      <span class="text-success fw-semibold">10 GB</span>
                    </li>
                  </ul>
                </BCardBody>
              </BCardBody>
            </BCol>
          </BRow>
</BCardBody>
</BCard>


<div class="card shadow-sm">
    <!-- Card Header -->
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <b-form-checkbox v-model="sendEmail" size="xl" class="custom-checkbox" checked>
        </b-form-checkbox>
        <p class="mb-0 ms-2">
          Send Email Invitation <i class="ri-mail-send-line"></i>
        </p>
      </div>
      <BButton type="button" variant="primary" class="w-sm" href="/system/company-detail">
        Submit
      </BButton>
    </div>
  </div>

     
    
      </BCol>
    </BRow>

  </Layout>
</template>

<style scoped>
/* Profile Picture Preview Style */
.profile-preview {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
}

.form-label text-muted {
  font-size: 12px;
}
</style>