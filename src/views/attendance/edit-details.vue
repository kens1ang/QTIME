<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  data() {
    return {
      title: "Attendance",
      currentTab: "summary",
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>
<template>
  <Layout>
    <PageHeader title="Edit Attendance Details" subTitle="Attendance Details" />

    <BRow>
      <!--Attendance Details-->
      <BCol lg="8">
        <BCard no-body>
          <BCardBody>
            <div class="row">
              <div class="col-4 d-flex flex-column">
                <h6 class="text-muted">Name</h6>
                <h5>Asmadi</h5>
              </div>
              <div class="col-4 d-flex flex-column">
                <h6 class="text-muted">Project</h6>
                <h5>SCPT1A-Parcel2(308U)</h5>
              </div>
              <div class="col-4 d-flex flex-column">
                <h6 class="text-muted">Last Updated By</h6>
                <h5>sufi - 2024-01-07 01:16:57</h5>
              </div>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardHeader>
            <h5 class="card-title mb-0">Attendance Details</h5>
          </BCardHeader>
          <BCardBody>
            <b-form action="#" class="tablelist-form">
              <BRow class="g-3">
                <BCol lg="6">
                  <label for="exampleInputdate" class="form-label"
                    >Start Date</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    value="2024-01-01"
                    id="exampleInputdate"
                  />
                </BCol>
                <BCol lg="6">
                  <label for="exampleInputdate" class="form-label"
                    >End Date</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    value="2024-01-01"
                    id="exampleInputdate"
                  />
                </BCol>
                <BCol lg="6">
                  <label for="exampleInputtime" class="form-label">In</label>
                  <input
                    type="time"
                    class="form-control"
                    id="exampleInputtime"
                    value="07:23"
                  />
                </BCol>
                <BCol lg="6">
                  <label for="exampleInputtime" class="form-label">Out</label>
                  <input
                    type="time"
                    class="form-control"
                    id="exampleInputtime"
                    value="20:07"
                  />
                </BCol>
                <BCol lg="6">
                  <label for="name" class="form-label">OT</label>
                  <input
                    type="text"
                    class="form-control"
                    id="boardName"
                    value="0"
                    placeholder=""
                  />
                </BCol>
                <BCol lg="6">
                  <label for="username" class="form-label">Special ADJ</label>
                  <input
                    type="text"
                    class="form-control"
                    id="boardName"
                    value="0"
                    placeholder=""
                  />
                </BCol>
                <BCol lg="6">
                  <label for="paswword" class="form-label">ADJ (RM)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="boardName"
                    value="0.00"
                    placeholder=""
                  />
                </BCol>
                <BCol lg="6">
                  <label for="email" class="form-label">Subelement</label>
                  <select class="form-select">
                    <option value=""></option>
                    <option value="">WORK ORDER</option>
                    <option value="">WORK ON BEHALF</option>
                  </select>
                </BCol>
                <BCol lg="6">
                  <label for="staffcode" class="form-label">Task</label>
                  <select class="form-select">
                    <option value=""></option>
                  </select>
                </BCol>
                <BCol lg="6">
                  <label for="accesslevel" class="form-label">BC/WO</label>
                  <select class="form-select">
                    <option value=""></option>
                  </select>
                </BCol>
                <BCol lg="6">
                  <label for="mobileaccess">BC/WO Hours</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputtime"
                    value="0"
                  />
                </BCol>
                <BCol lg="6">
                  <label for="qawardaccess">Remark</label>
                  <input
                    type="text"
                    class="form-control"
                    id="boardName"
                    placeholder=""
                    value="KSK Leader"
                  />
                </BCol>
                <BCol lg="6">
                  <label for="accesslevel" class="form-label">Loc 1</label>
                  <select class="form-select">
                    <option value=""></option>
                  </select>
                </BCol>
                <BCol lg="6">
                  <label for="accesslevel" class="form-label">Loc 2</label>
                  <select class="form-select">
                    <option value=""></option>
                  </select>
                </BCol>
                <div class="modal-footer v-modal-footer">
                  <div class="hstack gap-2 justify-content-end">
                    <BButton
                      type="button"
                      variant="light"
                      @click="modaltoAdd = false"
                      >Cancel</BButton
                    >
                    <BButton type="submit" variant="success" id="addNewBoard"
                      >Save</BButton
                    >
                  </div>
                </div>
              </BRow>
            </b-form>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="4">
        <!-- Reminder -->
        <BCard no-body>
          <BCardHeader><h5 class="card-title mb-0">Reminder</h5> </BCardHeader>
          <BCardBody>
            <div>
              <label for="disabledInput" class="form-label">OT Starts At</label>
              <input
                type="text"
                class="form-control mb-3"
                id="disabledInput"
                value="05:00 PM"
                disabled
              />
            </div>
            <div>
              <label for="disabledInput" class="form-label">Suggested OT</label>
              <input
                type="text"
                class="form-control mb-3"
                id="disabledInput"
                value="0"
                disabled
              />
            </div>
            <div>
              <label for="disabledInput" class="form-label"
                >Max Special ADJ</label
              >
              <input
                type="text"
                class="form-control mb-3"
                id="disabledInput"
                value="1"
                disabled
              />
            </div>
          </BCardBody>
        </BCard>

        <!-- RFID -->
        <BCard no-body>
          <BCardHeader><h5 class="card-title mb-0">RFID</h5> </BCardHeader>
          <BCardBody>
            <BRow>
              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >RFID Tag Code:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="E2806995000050130DD59263"
                  readonly
                />
              </BCol>

              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >Reader Name:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="Reader_2A"
                  readonly
                />
              </BCol>
            </BRow>
            <BRow>
              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >Face Scan In:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="14:21:19"
                  readonly
                />
              </BCol>
              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >Face Scan Out:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="14:49:37"
                  readonly
                />
              </BCol>
            </BRow>
            <BRow>
              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >RFID In:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="14:21:19"
                  readonly
                />
              </BCol>

              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >RFID Out:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="14:49:37"
                  readonly
                />
              </BCol>
            </BRow>
            <BRow>
              <BCol>
                <label for="readonlyPlaintext" class="form-label mb-0"
                  >Total Hours:</label
                >
                <input
                  type="text"
                  class="form-control-plaintext"
                  id="readonlyPlaintext"
                  value="0.47"
                  readonly
                />
              </BCol>
            </BRow>

            <!--Movement Tracking-->
            <div class="text-muted">
              <h6 class="mt-3">Movement Tracking</h6>
            </div>
            <table class="table table-nowrap">
              <tbody>
                <tr>
                  <td>14:49 PM</td>
                  <td>SITE OFFICE > OFFICE > N/A > N/A</td>
                </tr>
                <tr>
                  <td>14:21 PM</td>
                  <td>SITE OFFICE > OFFICE > N/A > N/A</td>
                </tr>
              </tbody>
            </table>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
