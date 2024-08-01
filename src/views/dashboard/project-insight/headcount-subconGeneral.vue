<script>
export default {

};
</script>

<template>
    <BCard no-body class="card-height-30">
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Subcon General Worker Headcount</BCardTitle>
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
                            <th scope="col">Sub Element</th>
                            <th scope="col">Subcon</th>
                            <th scope="col">Trade</th>
                            <th scope="col">PIC</th>
                            <th scope="col">Loc1</th>
                            <th scope="col">Loc2</th>
                            <th scope="col">Expected</th>
                            <th scope="col">Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>WORK ORDER</td>
                            <td>FARUK</td>
                            <td>DIRECT LABOUR-Podium</td>
                            <td>lim meng kai</td>
                            <td>Podium</td>
                            <td>LEVEL 1	</td>
                            <td>7</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </BCardBody>
    </BCard>
</template>