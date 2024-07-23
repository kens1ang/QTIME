<script>
import animationData from "@/components/widgets/hzomhqxz.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
  data() {
    return {
      defaultOptions: {
        animationData: animationData
      },
    };
  },
  components: {
    lottie: Lottie
  },
};
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120">
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
    </div>

    <div class="auth-page-content">
      <BContainer>
       <br><br><br><br>
        <BRow class="justify-content-center">
          <BCol md="8" lg="6" xl="5">
            <BCard no-body class="mt-4">
              <BCardBody class="p-4 text-center">
                <lottie colors="primary:#25a0e2,secondary:#00bd9d" :options="defaultOptions" :height="180"
                  :width="180" />
                <div class="mt-4 pt-2">
                  <h5>You are Logged Out</h5>
                  <p class="text-muted">Thank you for sign in <span class="fw-semibold">QTime</span></p>
                  <div class="mt-4">
                    <router-link to="/auth/signin-basic" class="btn btn-success w-100">Sign In
                    </router-link>
                  </div>
                </div>
              </BCardBody>
            </BCard>

          </BCol>
        </BRow>
      </BContainer>
    </div>

    <footer class="footer">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center">
              <p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i
                  class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </footer>
  </div>
</template>