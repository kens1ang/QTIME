<script>

import Index from '../sharedIndex.vue';

export default {
    components: {
        Index,
    },
    data () {
        return {
            title: 'Access Control',
        }
    }
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

        </template>
    </Index>
</template>