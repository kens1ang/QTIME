<script>

import Index from "@/views/dashboard/sharedIndex.vue";
import breadcrumbs from "@/components/breadcrumbs.vue";

export default {
    data() {
        return {
            title: "Reminder Action",
            breadcrumbs: [
                { name: 'Dashboard', link: '/' },
                { name: 'Pending Board', link: '/' },
                { name: 'Reminder Action', link: '/' },
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
                </div>
                <breadcrumbs :pages="breadcrumbs" />
            </div>

        </template>
    </Index>
</template>