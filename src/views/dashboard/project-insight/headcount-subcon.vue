<script>
export default {

};
</script>

<template>
    <BCard no-body class="card-height-30">
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Subcon Headcount</BCardTitle>
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
                            <th scope="col">Subcon</th>
                            <th scope="col">Headcount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ZAINI (PASSPORT:C8159529)-DIRECT LABOUR-SOHO</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Select a Subcon Subwork</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>SUNBEAM BUILDERS ENTERPRISE -SITE EXPENSES-SOHO</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>MEGA M & E-Electrical Works</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>FARUK -DIRECT LABOUR-Podium</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>SING LEE AIRCOND-Air-Conditioning Works</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>SUNBEAM BUILDERS ENTERPRISE -DEFECT WORK-SOHO</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </BCardBody>
    </BCard>
</template>