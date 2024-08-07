<script>
</script>

<template>
    <BCard no-body class="border card-border-light mt-3">
        <BCardBody>
            <div class="container d-flex">
                <BRow>
                    <BCol>
                        <i class='bx bxs-cloud icon text-muted'></i>
                    </BCol>
                    <BCol>
                        <span class="text-muted">Cloudy Sky</span>
                        <div class="temp">25&#176;c</div>
                    </BCol>
                    <BCol>
                        <BRow>
                            <BCol>
                                <i class='bx bx-water icon-small text-muted'></i>
                            </BCol>
                            <BCol>
                                <i class='bx bx-wind icon-small text-muted'></i>
                            </BCol>
                        </BRow>
                        <BRow>
                            <BCol>
                                <i class='bx bxs-droplet icon-small text-muted'></i>
                            </BCol>
                            <BCol>
                                <i class='bx bx-radar icon-small text-muted'></i>                            
                            </BCol>
                        </BRow>
                    </BCol>
                </BRow>
            </div>
        </BCardBody>
    </BCard>
</template>

<style>

.icon {
    font-size: 100px;
}

.icon-small {
    font-size: 30px;
}

.container span {
    font-size: 20px;
    font-weight: 600;
}

.temp {
    font-size: 80px;
    font-weight: 600;
}

</style>