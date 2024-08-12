<script>
export default {
  data() {
    return {
      currentTab: "attendance",
    };
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<template>
  <!-- Nav Tabs-->
  <ul class="nav nav-tabs nav-tabs-custom nav-primary" role="tablist">
    <li class="nav-item">
      <a
        class="nav-link All py-3"
        :class="{ active: currentTab === 'attendance' }"
        @click.prevent="setTab('attendance')"
        href="#"
      >
        Attendance
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link py-3"
        :class="{ active: currentTab === 'rfid' }"
        @click.prevent="setTab('rfid')"
        href="#"
      >
        RFID
      </a>
    </li>
  </ul>

  <!-- Attendance -->
  <div v-if="currentTab === 'attendance'">
    <div class="pin carpark">
      <span>Car Park: 9</span>
    </div>
    <div class="pin podium">
      <span>Podium: 7</span>
    </div>
    <div class="pin building">
      <span>Building: 9</span>
    </div>
    <div class="pin office">
      <span>Office: 10</span>
    </div>
  </div>

  <!-- RFID -->
  <div v-if="currentTab === 'rfid'">
    <div class="pin rfid1">
      <span>RFID 1</span>
    </div>
    <div class="pin rfid2">
      <span>RFID 2</span>
    </div>
    <div class="pin rfid3">
      <span>RFID 3</span>
    </div>
    <div class="pin rfid4">
      <span>RFID 4</span>
    </div>
    <div class="pin rfid5">
      <span>RFID 5</span>
    </div>
    <div class="pin rfid6">
      <span>RFID 6</span>
    </div>
    <div class="pin rfid7">
      <span>RFID 7</span>
    </div>
    <div class="pin rfid8">
      <span>RFID 8</span>
    </div>
    <div class="pin rfid9">
      <span>RFID 9</span>
    </div>
  </div>

  <!-- Site img & table -->
  <BRow>
    <BCol xl="9" class="pe-0">
      <img
        src="../../../../assets/images/site.jpg"
        alt="Responsive image"
        class="img-fluid site-img"
      />
    </BCol>
    <BCol xl="3" class="ps-0">
      <BCardBody>
        <div class="table-responsive table-card">
          <table
            class="table align-middle table-borderless table-centered table-nowrap mb-0"
          >
            <thead class="text-muted table-light">
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Headcount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Car Park</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Podium</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Building</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Office</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BCardBody>
    </BCol>
  </BRow>
</template>

<style>
.site-img {
  width: 100%;
  height: auto;
  position: relative;
  object-fit: contain;
}

.pin {
  position: absolute;
  background: #f44336;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  z-index: 100;
}

.pin:hover {
  cursor: pointer;
}

.pin::before {
  content: "";
  background: #f44336;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1.3s ease-in-out infinite;
}

.pin span {
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  left: 2.5em;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 3em;
  padding: 0.3em 0.6em;
  font-size: 0.9em;
}

.carpark {
  top: 35%;
  left: 15%;
}

.building {
  top: 80%;
  left: 60%;
}

.podium {
  top: 45%;
  left: 50%;
}

.office {
  top: 80%;
  left: 10%;
}

.rfid1 {
  top: 35%;
  left: 15%;
}

.rfid2 {
  top: 80%;
  left: 60%;
}

.rfid3 {
  top: 45%;
  left: 50%;
}

.rfid4 {
  top: 80%;
  left: 10%;
}

.rfid5 {
  top: 60%;
  left: 50%;
}

.rfid6 {
  top: 60%;
  left: 20%;
}

.rfid7 {
  top: 45%;
  left: 30%;
}

.rfid8 {
  top: 75%;
  left: 30%;
}

.rfid9 {
  top: 45%;
  left: 70%;
}

@keyframes pulse {
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.5);
  }
}
</style>
