<template>
    <BBreadcrumb class="breadcrumb">
        <BBreadcrumbItem v-for="(page, index) in pages" :key="index" :router-link="page.link">
        {{ page.name }}
        </BBreadcrumbItem>
    </BBreadcrumb>
</template>
  
<script>
    export default {
    props: {
        pages: {
        type: Array,
        required: true,
        },
    },
    };
</script>

<style scoped>
</style>
  