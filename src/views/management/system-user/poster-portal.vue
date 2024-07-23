<script>

import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import DropZone from "@/components/widgets/dropZone";

import Index from '../sharedIndex.vue';

export default {
    components: {
        Index,
        DropZone,
    },
    data () {
        return {
            title: 'Poster Portal',
        }
    },
    methods: {
        deleteRecord(ele) {
        ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
    setup() {
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
        dropzoneFile.value = e.dataTransfer.files[0];
        files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
        dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
        files.value.push(dropzoneFile.value);
        };
        watch(
        () => [...files.value],
        (currentValue) => {
            return currentValue;
        }
        );

        return { dropzoneFile, files, drop, selectedFile, v$: useVuelidate() };
    },
};
</script>

<template>
    <Index>
        <template v-slot:content>
            
            <h1 style="font-size: 25px;">{{ title }}</h1>

            <BBreadcrumb class="breadcrumb">
                <BBreadcrumbItem router-link to="/project/index"> Management </BBreadcrumbItem>
                <BBreadcrumbItem router-link to="/system-user/user-management"> System User </BBreadcrumbItem>
                <BBreadcrumbItem router-link to="/system-user/user-management"> {{ title }} </BBreadcrumbItem>
            </BBreadcrumb>

            <BRow class="mt-3">
                <BCol lg="12">
                    <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dropzone</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                        Upload the files by dragging & dropping. You can also click to open file dialog
                        </p>

                        <DropZone @drop.prevent="drop" @change="selectedFile" />
                        <ul class="list-unstyled mb-0" id="dropzone-preview">
                        <div class="border rounded" v-for="(file, index) of files" :key="index">
                            <div class="d-flex p-2">
                            <div class="flex-grow-1">
                                <div class="pt-1">
                                <h5 class="fs-14 mb-1" data-dz-name="">
                                    {{ file.name }}
                                </h5>
                                <p class="fs-13 text-muted mb-0" data-dz-size="">
                                    <strong>{{ file.size / 1024 }}</strong> KB
                                </p>
                                <strong class="error text-danger" data-dz-errormessage=""></strong>
                                </div>
                            </div>
                            <div class="flex-shrink-0 ms-3">
                                <BButton variant="primary" size="sm" data-dz-remove="" @click="deleteRecord">
                                Delete
                                </BButton>
                            </div>
                            </div>
                        </div>
                        </ul>
                    </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

        </template>
    </Index>
</template>