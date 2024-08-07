<script>
export default {
    setup() {
        return {
            activities: [
                {
                    id: 1,
                    date: "25",
                    weekDay: "Tue",
                    time: "DEFECT WORKS (CONST)",
                    caption: "Other (specified in Remark)",
                    subItem: [
                        { id: 1, img: require("@/assets/images/users/avatar-1.jpg") },
                        { id: 2, img: require("@/assets/images/users/avatar-2.jpg") },
                        { id: 3, img: require("@/assets/images/users/avatar-3.jpg") }],
                    imgNumber: "5",
                    bgcolor: "bg-info"
                },
                {
                    id: 2,
                    date: "20",
                    weekDay: "Wed",
                    time: "DEFECT WORKS (CONST)",
                    caption: "Other (specified in Remark)",
                    subItem: [
                        { id: 1, img: require("@/assets/images/users/avatar-4.jpg") },
                        { id: 2, img: require("@/assets/images/users/avatar-5.jpg") },
                        { id: 3, img: require("@/assets/images/users/avatar-6.jpg") },
                        { id: 4, img: require("@/assets/images/users/avatar-7.jpg") }],
                    imgNumber: "3",
                    bgcolor: "bg-success"
                },
                {
                    id: 3,
                    date: "17",
                    weekDay: "Wed",
                    time: "DEFECT WORKS (CONST)",
                    caption: "Other (specified in Remark)",
                    subItem: [
                        { id: 1, img: require("@/assets/images/users/avatar-8.jpg") },
                        { id: 2, img: require("@/assets/images/users/avatar-1.jpg") },
                        { id: 3, img: require("@/assets/images/users/avatar-2.jpg") }],
                    imgNumber: "4",
                    bgcolor: "bg-primary"
                },
                {
                    id: 4,
                    date: "12",
                    weekDay: "Tue",
                    time: "DEFECT WORKS (CONST)",
                    caption: "Other (specified in Remark)",
                    subItem: [
                        { id: 1, img: require("@/assets/images/users/avatar-1.jpg") },
                        { id: 2, img: require("@/assets/images/users/avatar-5.jpg") },
                        { id: 3, img: require("@/assets/images/users/avatar-2.jpg") }],
                    imgNumber: "9",
                    bgcolor: "bg-warning"
                },
            ]
        };
    }
};
</script>

<template>
    <BCard no-body>
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Event Logs</BCardTitle>
            <div class="flex-shrink-0">
                <BDropdown
                variant="link"
                class="card-header-dropdown"
                toggle-class="text-reset dropdown-btn arrow-none"
                menu-class="dropdown-menu-end"
                aria-haspopup="true"
                :offset="{ alignmentAxis: -3, crossAxis: 0, mainAxis: 0 }"
                >
                <template #button-content>
                    <span class="fw-semibold text-uppercase fs-12">Sort by: </span
                    ><span class="text-muted"
                    >Most Recent<i class="mdi mdi-chevron-down ms-1"></i
                    ></span>
                </template>
                <BDropdownItem>Least Recent</BDropdownItem>
                </BDropdown>
            </div>
        </BCardHeader>
        <BCardBody class="pt-0">
            <ul class="list-group list-group-flush border-dashed">
                <li class="list-group-item ps-0" v-for="(item, index) of activities" :key="index">
                    <BRow class="align-items-center g-3">
                        <div class="col-auto">
                            <div class="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                <div class="text-center">
                                    <h5 class="mb-0">{{ item.date }}</h5>
                                    <div class="text-muted">{{ item.weekDay }}</div>
                                </div>
                            </div>
                        </div>
                        <BCol>
                            <h5 class="text-muted mt-0 mb-1 fs-13">{{ item.time }}</h5>
                            <BLink href="#" class="text-reset fs-14 mb-0">{{ item.caption }}</BLink>
                        </BCol>
                        <BCol sm="auto">
                            <div class="avatar-group">
                                <div class="avatar-group-item" v-for="(subitem, index) of item.subItem" :key="index">
                                    <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="" data-bs-original-title="Stine Nielsen">
                                        <img :src="`${subitem.img}`" alt="" class="rounded-circle avatar-xxs">
                                    </BLink>
                                </div>

                                <div class="avatar-group-item">
                                    <BLink href="javascript: void(0);">
                                        <div class="avatar-xxs">
                                            <span :class="`avatar-title rounded-circle ${item.bgcolor} text-white`">
                                                {{ item.imgNumber }}
                                            </span>
                                        </div>
                                    </BLink>
                                </div>
                            </div>
                        </BCol>
                    </BRow>
                </li>

            </ul>
            <BRow class="align-items-center mt-2 g-3 text-center text-sm-start">
                <BCol sm>
                    <div class="text-muted">Showing<span class="fw-semibold">4</span> of <span
                            class="fw-semibold">125</span> Results
                    </div>
                </BCol>
                <BCol sm="auto">
                    <ul
                        class="pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
                        <li class="page-item disabled">
                            <BLink href="#" class="page-link">←</BLink>
                        </li>
                        <li class="page-item active">
                            <BLink href="#" class="page-link">1</BLink>
                        </li>
                        <li class="page-item">
                            <BLink href="#" class="page-link">2</BLink>
                        </li>
                        <li class="page-item">
                            <BLink href="#" class="page-link">3</BLink>
                        </li>
                        <li class="page-item">
                            <BLink href="#" class="page-link">→</BLink>
                        </li>
                    </ul>
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</template>