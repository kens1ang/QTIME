<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    pageTitle: {
      type: String,
      default: "",
    }
  },
};
</script>

<template>
  <BRow>
    <BCol cols="12"> 
      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
        <slot name="navigation"></slot>
      </div>
    </BCol>
  </BRow>
</template>
