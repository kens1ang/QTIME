<script>
import { ref, watch } from "vue";
import Index from '../sharedIndex.vue';
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/widgets/dropZone";
import breadcrumbs from "@/components/breadcrumbs.vue";
import Swal from "sweetalert2";

export default {
  components: {
    Index,
    DropZone,
    breadcrumbs,
  },
  data() {
    return {
      title: 'Poster Portal',
      breadcrumbs: [
        { name: "Management", link: "/project/index" },
        { name: "System User", link: "/system-user/index" },
        { name: "Poster Portal", link: "/system-user/poster-portal" },
      ],
    };
  },
  methods: {
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
    <Index>
        <template v-slot:content>

        <div class="d-sm-flex align-items-center justify-content-between">
          <h1 style="font-size: 25px; margin-top: 5px">{{ title }}</h1>
          <breadcrumbs :pages="breadcrumbs" />
        </div>

        <BRow class="justify-content-center mt-5">
            <BCol lg="6">
            <BCard no-body>
                <BCardHeader>
                <BCardTitle class="mb-0">Dropzone</BCardTitle>
                </BCardHeader>

                <BCardBody>

                  <template v-if="!files.length">
                      <DropZone @drop.prevent="drop" @change="selectedFile" />
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

                </BCardBody>
            </BCard>
            </BCol>
        </BRow>

        <BRow class="justify-content-center">
          <BCol lg="6" class="hstack gap-2 justify-content-end">
            <button type="button" class="btn btn-soft-primary waves-effect waves-light material-shadow-none" @click="customBackground">Preview</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" @click="successmsg">Save</button>
          </BCol>
        </BRow>

        </template>
    </Index>
</template>
  