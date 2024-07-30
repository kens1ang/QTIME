<script>
export default {

};
</script>

<template>
    <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">General Worker Task Plannig Overview</BCardTitle>
            <div class="flex-shrink-0">
                <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
                    menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -140, crossAxis: 0, mainAxis: 0 }">
                    <template #button-content> <span class="text-muted fs-16"><i
                                class="mdi mdi-dots-vertical align-middle"></i></span> </template>
                    <BDropdownItem>Today</BDropdownItem>
                    <BDropdownItem>Last Week</BDropdownItem>
                    <BDropdownItem>Last Month</BDropdownItem>
                    <BDropdownItem>Current Year</BDropdownItem>
                </BDropdown>
            </div>
        </BCardHeader>
        <BCardBody>
            <div class="table-responsive table-card">
                <table class="table align-middle table-borderless table-centered table-nowrap mb-0">
                    <thead class="text-muted table-light">
                        <tr>
                            <th scope="col" style="width: 62;">PIC</th>
                            <th scope="col">Total Group</th>
                            <th scope="col">OnGoing Task</th>
                            <th scope="col">Unused Group</th>
                            <th scope="col">Overdue</th>
                            <th scope="col">Behind Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">PIC</BLink>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr class="text-muted table-light">
                            <td>
                                <BLink href="javascript:void(0);" class="link-secondary">Total</BLink>
                            </td>
                            <td>14</td>
                            <td>14</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </BCardBody>
    </BCard>
</template>