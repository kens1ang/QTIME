<script>

import Index from '../sharedIndex.vue';
import breadcrumbs from '../../../components/breadcrumbs.vue';

export default {
    components: {
        Index,
        breadcrumbs
    },
    data () {
        return {
            title: 'Backup Database',
            breadcrumbs: [
                { name: 'Management', link: '/project/index' },
                { name: 'System User', link: '/system-user/user-management' },
                { name: 'Backup Database', link: '/system-user/backup-database' }
            ]
        }
    }
};

</script>

<template>
    <Index>
        <template v-slot:content>
            <div class="d-sm-flex align-items-center justify-content-between">
                <h1 style="font-size: 25px;">{{ title }}</h1>
                <breadcrumbs :pages="breadcrumbs" />
            </div>
        </template>
    </Index>
</template>