<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from 'axios';
export default {
    data() {
        return {
            amount: 875,
            billing_address: "305 S San Gabriel Blvd, California, United States - 91776",
            billing_name: "David Nichols",
            billing_phone: "+(123) 456-7890",
            billing_taxno: "12-3456789",
            card_holder_name: "David Nichols",
            card_number: "xxx xxxx xxxx 1234",
            company_address: "403 H Fan Faranh Blvd, London, United States",
            contact: 8987894122,
            country: "Brazil",
            date: "2021-04-06T16:28:00.000Z",
            discount: "53.99",
            email: "velzon@themesbrand.com",
            estimated_tax: "44.99",
            img: "assets/images/users/avatar-2.jpg",
            invoiceId: "#VL25000351",
            name: "Diana Kohler",
            notes: "All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.",
            payment_method: "Mastercard",
            postalcode: 91798,
            product_detail: [{
                name: 'Urban Ladder Pashe Chair',
                category: 'Furniture',
                price: '160',
                stock: '2'
            }, {
                name: '350 ml Glass Grocery Container',
                category: 'Kitchen Storage & Containers',
                price: '39.96',
                stock: '1'
            }],
            registration_no: "6561",
            shipping_address: "345 Elm Ave, Solvang California, United States - 91776",
            shipping_charge: "65.00",
            shipping_name: "Donald Palmer",
            shipping_phone: "+(234) 987-01234",
            shipping_taxno: "12-3456789",
            status: "Paid",
            sub_total: 359.96,
            total_amount: 415.96,
            website: "www.themesbrand.com",
        };
    },
    mounted() {
        if (this.$route.params.id) {
            axios.get(`https://api-node.themesbrand.website/apps/invoice/${this.$route.params.id}`)
                .then((data) => {
                    data = data.data.data;
                    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
                        "Nov", "Dec"
                    ];
                    var dd = new Date(data.date);
                    data.date = dd.getDate() + " " + monthNames[dd.getMonth()] + ", " + dd.getFullYear();
                    var hours = dd.getHours();
                    var minutes = dd.getMinutes();
                    var ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    hours = hours < 10 ? '0' + hours : hours;
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    var strTime = hours + ':' + minutes + ' ' + ampm;
                    data.time = strTime;

                    this.company_address = data.company_address;
                    this.postalcode = data.postalcode;
                    this.registration_no = data.registration_no;
                    this.email = data.email;
                    this.website = data.website;
                    this.contact = data.contact;
                    this.invoiceId = data.invoiceId;
                    this.product_detail = data.product_detail;
                    this.date = data.date;
                    this.time = data.time;
                    this.status = data.status;

                    var itemclass = data.status == 'Paid' ? 'bg-success-subtle text-success' : data.status == 'Cancel' ?
                        'bg-danger-subtle text-danger' : data.status == 'Unpaid' ? 'bg-warning-subtle text-warning' : data.status ==
                            'Refund' ? 'bg-primary-subtle text-primary' : '';
                    document.getElementById('payment-status').classList.add(itemclass);

                    this.total_amount = data.total_amount;

                    this.billing_name = data.billing_name;
                    this.billing_address = data.billing_address;
                    this.billing_phone = data.billing_phone;
                    this.billing_taxno = data.billing_taxno;

                    this.shipping_name = data.shipping_name;
                    this.shipping_address = data.shipping_address;
                    this.shipping_phone = data.shipping_phone;
                    this.shipping_taxno = data.shipping_taxno;

                    this.payment_method = data.payment_method;
                    this.card_holder_name = data.card_holder_name;
                    this.card_number = data.card_number;
                    this.total_amount = data.total_amount;
                    this.notes = data.notes;

                }).catch((er) => {
                    console.log(er);
                });
        }
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
    <Layout>
        <PageHeader title="QR Code" pageTitle="System" subTitle="Employee" />
        <BRow class="justify-content-center">
            <BCol xxl="3">
                <BCard no-body id="demo">
                    <BCardHeader class="border-bottom-dashed p-4">
                        <div class="d-sm-flex">
                            <div class="flex-grow-1" style="text-align: center;">
                                <img src="@/assets/images/qr-code.png" class="card-logo card-qr-code"
                                    alt="logo dark" height="120">
                                <h6 class="text-muted text-uppercase fw-bold" style="margin-top: 12px;">2880052</h6>
                                <p class="text-muted mb-1" id="address-details">Yohanes Laga Kia</p>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardHeader class="border-bottom-dashed p-4">
                        <div class="d-sm-flex">
                            <div class="flex-grow-1" style="text-align: center;">
                                <img src="@/assets/images/qr-code.png" class="card-logo card-qr-code"
                                    alt="logo dark" height="120">
                                <h6 class="text-muted text-uppercase fw-bold" style="margin-top: 12px;">2880050</h6>
                                <p class="text-muted mb-1" id="address-details">Ang Chin San</p>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardHeader class="border-bottom-dashed p-4">
                        <div class="d-sm-flex">
                            <div class="flex-grow-1" style="text-align: center;">
                                <img src="@/assets/images/qr-code.png" class="card-logo card-qr-code"
                                    alt="logo dark" height="120">
                                <h6 class="text-muted text-uppercase fw-bold" style="margin-top: 12px;">800130</h6>
                                <p class="text-muted mb-1" id="address-details">Muhammad Tolaq</p>
                            </div>
                        </div>
                    </BCardHeader>
                    <BCardBody class="p-4">
                        <div class="hstack gap-2 justify-content-end d-print-none mt-4">
                            <BLink href="javascript:window.print()" class="btn btn-soft-primary"><i
                                    class="ri-printer-line align-bottom me-1"></i> Print</BLink>
                            <BLink href="javascript:void(0);" class="btn btn-primary"><i
                                    class="ri-download-2-line align-bottom me-1"></i>
                                Download</BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>