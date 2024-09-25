<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from 'axios';

export default {

  data() {
    return {
      value: ['javascript'],
      date: null,
    };
  },
  components: {
    flatPickr
  },
  methods: {
    changepass() {
      var data = {
        password: document.getElementById('oldpasswordInput').value,
        new_password: document.getElementById('newpasswordInput').value,
        confirm_password: document.getElementById('confirmpasswordInput').value
      };
      axios.patch('https://api-node.themesbrand.website/updatepassword', data).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log(e);
      });
    },
    updatedata() {
      var userid = localStorage.getItem('userid');
      var data = {
        first_name: document.getElementById('firstnameInput').value,
        last_name: document.getElementById('lastnameInput').value,
        phone: document.getElementById('phonenumberInput').value,
        email: document.getElementById('emailInput').value,
        joining_date: document.getElementById('dateinput').value,
        skills: document.getElementById('skillsinput').value,
        designation: document.getElementById('designationInput').value,
        website: document.getElementById('websiteInput1').value,
        city: document.getElementById('cityInput').value,
        country: document.getElementById('countryInput').value,
        zipcode: document.getElementById('zipcodeInput').value,
        Description: document.getElementById('exampleFormControlTextarea').value,
      };
      axios.patch('https://api-node.themesbrand.website/user/' + userid, data).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log(e);
      });
    }
  },
};
</script>

<template>

        <BTabs nav-class="nav-tabs-custom rounded border-bottom-0" >
          <BTab class="nav-item" title="Personal Details" active>
            <form action="javascript:void(0);">
              <BRow class="pt-4">
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="firstnameInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="firstnameInput" placeholder="Enter your name"
                      value="LIM ZI YU" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="lastnameInput" class="form-label">Username</label>
                    <input type="text" class="form-control" id="lastnameInput" placeholder="Enter your username"
                      value="zylim" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="phonenumberInput" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phonenumberInput"
                      placeholder="Enter your phone number" value="+(1) 987 6543" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="emailInput" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter your email"
                      value="daveadame@velzon.com" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="phonenumberInput" class="form-label">Password</label>
                    <input type="text" class="form-control" id="phonenumberInput"
                      placeholder="Enter your phone number" value="******" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="emailInput" class="form-label">Staff Code</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter your staff code"
                      value="100129" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="JoiningdatInput" class="form-label">Joining Date</label>

                    <flat-pickr v-model="date" id="dateinput" class="form-control"></flat-pickr>

                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="designationInput" class="form-label">Access Level</label>
                    <input type="text" class="form-control" id="designationInput" placeholder="Designation"
                      value="Member" />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div class="mb-3">
                    <label for="cityInput" class="form-label">City</label>
                    <input type="text" class="form-control" id="cityInput" placeholder="City" value="California" />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div class="mb-3">
                    <label for="countryInput" class="form-label">Country</label>
                    <input type="text" class="form-control" id="countryInput" placeholder="Country"
                      value="United States" />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div class="mb-3">
                    <label for="zipcodeInput" class="form-label">Post Code</label>
                    <input type="text" class="form-control" minlength="5" maxlength="6" id="zipcodeInput"
                      placeholder="Enter zipcode" value="90011" />
                  </div>
                </BCol>
                <BCol lg="12">
                  <div class="mb-3 pb-2">
                    <label for="exampleFormControlTextarea" class="form-label">Remark</label>
                    <textarea class="form-control" id="exampleFormControlTextarea"
                      placeholder="Enter your description" rows="3">
Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
                  </div>
                </BCol>
                <BCol lg="12">
                  <div class="hstack gap-2 justify-content-end">
                    <BButton type="submit" variant="primary" @click="updatedata">
                      Updates
                    </BButton>
                    <BButton type="button" variant="soft-secondary">
                      Cancel
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </form>
          </BTab>
          <BTab title="Change Password">
            <form action="javascript:void(0);">
              <BRow class="g-2 pt-4">
                <BCol lg="4">
                  <div>
                    <label for="oldpasswordInput" class="form-label">Old Password*</label>
                    <input type="password" class="form-control" id="oldpasswordInput"
                      placeholder="Enter current password" />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div>
                    <label for="newpasswordInput" class="form-label">New Password*</label>
                    <input type="password" class="form-control" id="newpasswordInput"
                      placeholder="Enter new password" />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div>
                    <label for="confirmpasswordInput" class="form-label">Confirm Password*</label>
                    <input type="password" class="form-control" id="confirmpasswordInput"
                      placeholder="Confirm password" />
                  </div>
                </BCol>
                <BCol lg="12">
                  <div class="text-end">
                    <BButton type="submit" variant="primary" @click="changepass">
                      Change Password
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </form>
            <div class="mt-4 mb-3 border-bottom pb-2">
              <div class="float-end">
                <BLink href="javascript:void(0);" class="link-secondary">All Logout</BLink>
              </div>
              <h5 class="card-title">Login History</h5>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0 avatar-sm">
                <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                  <i class="ri-smartphone-line"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6>iPhone 12 Pro</h6>
                <p class="text-muted mb-0">
                  Los Angeles, United States - March 16 at 2:47PM
                </p>
              </div>
              <div>
                <BLink href="javascript:void(0);" class="link-secondary">Logout</BLink>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0 avatar-sm">
                <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                  <i class="ri-tablet-line"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6>Apple iPad Pro</h6>
                <p class="text-muted mb-0">
                  Washington, United States - November 06 at 10:43AM
                </p>
              </div>
              <div>
                <BLink href="javascript:void(0);" class="link-secondary">Logout</BLink>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3">
              <div class="flex-shrink-0 avatar-sm">
                <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                  <i class="ri-smartphone-line"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6>Galaxy S21 Ultra 5G</h6>
                <p class="text-muted mb-0">
                  Conneticut, United States - June 12 at 3:24PM
                </p>
              </div>
              <div>
                <BLink href="javascript:void(0);" class="link-secondary">Logout</BLink>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 avatar-sm">
                <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                  <i class="ri-macbook-line"></i>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6>Dell Inspiron 14</h6>
                <p class="text-muted mb-0">
                  Phoenix, United States - July 26 at 8:10AM
                </p>
              </div>
              <div>
                <BLink href="javascript:void(0);" class="link-secondary">Logout</BLink>
              </div>
            </div>
          </BTab>
          <BTab title="Privacy Policy">
            <div class="mb-4 pb-2 pt-4">
              <h5 class="card-title text-decoration-underline mb-3">
                Security:
              </h5>
              <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                <div class="flex-grow-1">
                  <h6 class="fs-14 mb-1">Two-factor Authentication</h6>
                  <p class="text-muted">
                    Two-factor authentication is an enhanced security
                    meansur. Once enabled, you'll be required to give two
                    types of identification when you log into Google
                    Authentication and SMS are Supported.
                  </p>
                </div>
                <div class="flex-shrink-0 ms-sm-3">
                  <BLink href="javascript:void(0);" class="btn btn-sm btn-primary">Enable Two-facor Authentication
                  </BLink>
                </div>
              </div>
              <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                <div class="flex-grow-1">
                  <h6 class="fs-14 mb-1">Secondary Verification</h6>
                  <p class="text-muted">
                    The first factor is a password and the second commonly
                    includes a text with a code sent to your smartphone, or
                    biometrics using your fingerprint, face, or retina.
                  </p>
                </div>
                <div class="flex-shrink-0 ms-sm-3">
                  <BLink href="javascript:void(0);" class="btn btn-sm btn-primary">Set up secondary method</BLink>
                </div>
              </div>
              <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                <div class="flex-grow-1">
                  <h6 class="fs-14 mb-1">Backup Codes</h6>
                  <p class="text-muted mb-sm-0">
                    A backup code is automatically generated for you when
                    you turn on two-factor authentication through your iOS
                    or Android Twitter app. You can also generate a backup
                    code on twitter.com.
                  </p>
                </div>
                <div class="flex-shrink-0 ms-sm-3">
                  <BLink href="javascript:void(0);" class="btn btn-sm btn-primary">Generate backup codes</BLink>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h5 class="card-title text-decoration-underline mb-3">
                Application Notifications:
              </h5>
              <ul class="list-unstyled mb-0">
                <li class="d-flex">
                  <div class="flex-grow-1">
                    <label for="directMessage" class="form-check-label fs-14">Direct messages</label>
                    <p class="text-muted">
                      Messages from people you follow
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="directMessage" checked />
                    </div>
                  </div>
                </li>
                <li class="d-flex mt-2">
                  <div class="flex-grow-1">
                    <label class="form-check-label fs-14" for="desktopNotification">
                      Show desktop notifications
                    </label>
                    <p class="text-muted">
                      Choose the option you want as your default setting.
                      Block a site: Next to "Not allowed to send
                      notifications," click Add.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="desktopNotification"
                        checked />
                    </div>
                  </div>
                </li>
                <li class="d-flex mt-2">
                  <div class="flex-grow-1">
                    <label class="form-check-label fs-14" for="emailNotification">
                      Show email notifications
                    </label>
                    <p class="text-muted">
                      Under Settings, choose Notifications. Under Select an
                      account, choose the account to enable notifications
                      for.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="emailNotification" />
                    </div>
                  </div>
                </li>
                <li class="d-flex mt-2">
                  <div class="flex-grow-1">
                    <label class="form-check-label fs-14" for="chatNotification">
                      Show chat notifications
                    </label>
                    <p class="text-muted">
                      To prevent duplicate mobile notifications from the
                      Gmail and Chat apps, in settings, turn off Chat
                      notifications.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="chatNotification" />
                    </div>
                  </div>
                </li>
                <li class="d-flex mt-2">
                  <div class="flex-grow-1">
                    <label class="form-check-label fs-14" for="purchaesNotification">
                      Show purchase notifications
                    </label>
                    <p class="text-muted">
                      Get real-time purchase alerts to protect yourself from
                      fraudulent charges.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="purchaesNotification" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h5 class="card-title text-decoration-underline mb-3">
                Delete This Account:
              </h5>
              <p class="text-muted">
                Go to the Data & Privacy section of your profile Account.
                Scroll to "Your data & privacy options." Delete your Profile
                Account. Follow the instructions to delete your account :
              </p>
              <div>
                <input type="password" class="form-control" id="passwordInput" placeholder="Enter your password"
                  value="make@321654987" style="max-width: 265px" />
              </div>
              <div class="hstack gap-2 mt-3">
                <BLink href="javascript:void(0);" class="btn btn-soft-primary">Close & Delete This Account</BLink>
                <BLink href="javascript:void(0);" class="btn btn-light">Cancel</BLink>
              </div>
            </div>
          </BTab>
        </BTabs>

</template>