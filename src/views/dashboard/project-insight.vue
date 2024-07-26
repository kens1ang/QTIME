<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import breadcrumbs from "@/components/breadcrumbs.vue";

export default {
    data() {
        return {
            title: "Project Insight",
            breadcrumbs: [
                { name: 'Dashboard', link: '/' },
                { name: 'Project Insight', link: '/' },
            ],
        }
    },
    components: {
        Index,
        breadcrumbs,
    },
};

</script>

<template>
    <Index>
        <template v-slot:content>

            <div class="d-sm-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <h1 style="font-size: 25px; margin-top: 5px">{{ title }}</h1>
                    <BButtonGroup class="ms-3">
                    <BDropdown text="AR496" variant="light">
                        <BDropdownItem href="#">Menu item</BDropdownItem>
                        <BDropdownItem href="#">Menu item</BDropdownItem>
                        <BDropdownItem href="#">Menu item</BDropdownItem>
                    </BDropdown>
                    </BButtonGroup>
                </div>
                <breadcrumbs :pages="breadcrumbs" />
            </div>

        </template>
    </Index>
</template>